/* ============================================================
   RUSIYAA BATCH CHECKER + ADMIN DASHBOARD — Apps Script backend
   ------------------------------------------------------------
   SHEET LAYOUT (import rusiyaa-register.xlsx to get this):
   - Tab "Batches"          → Table 1, PUBLIC via batch check:
       Batch Number | Product Name | Grams | SKU |
       Manufacturing Details | FSSAI License No
   - Tab "Admin Dashboard"  → Table 2, ADMIN ONLY:
       Date | Vendor Name | Product | Quantity | Purchased Date |
       Invoice Number | Packed On | Grams per Unit | No. of Units |
       Distributed Name | Distributed Date
   Column names can be changed freely — the website adapts.
   First column of "Batches" must stay the batch number.

   INSTALL:
   1. Sheet → Extensions → Apps Script → paste this file
   2. Set ADMIN_KEY below to your own secret
   3. Deploy → New deployment → Web app
        Execute as: Me  ·  Who has access: Anyone
   4. Paste the /exec URL into SCRIPT_URL in the website file
   (Whenever you edit this code later: Deploy → Manage
    deployments → ✏️ → New version, or changes won't go live.)
   ============================================================ */

const ADMIN_KEY = "CHANGE-ME-rusiyaa-2026";   // <-- your admin password
const BATCH_TAB = "Batches";                  // Table 1 (public check)
const ADMIN_TAB = "Admin Dashboard";          // Table 2 (admin only)
const SHEET_ID  = "1QEn0VYbT__MAswGKns3AFe2P-Hm-Pl7DZaVf-XvPmDc";

/* ---------- PUBLIC API ----------
   The ONLY thing the public can do is look up one batch:
   GET ?action=trace&batch=RSY-2605-A12
   → {found:true, data:{...Table 1 row...}} or {found:false}
*/
function doGet(e) {
  try {
    const q = String((e.parameter || {}).batch || "").trim().toUpperCase();
    if (!q) return json({ found: false, error: "No batch number given" });
    const hit = readRows(BATCH_TAB).find(r => String(firstValue(r)).trim().toUpperCase() === q);
    if (!hit) return json({ found: false });
    delete hit._row;                       // internal row index — never sent to the public
    return json({ found: true, data: hit });
  } catch (err) {
    return json({ found: false, error: String(err) });
  }
}

/* ---------- ADMIN API (password required on every call) ----------
   POST body (JSON text):
   { secret, action:"ping" }
   { secret, action:"list",    sheet }
   { secret, action:"headers", sheet }
   { secret, action:"add",     sheet, row:{Header:value,...} }
   { secret, action:"update",  sheet, rowIndex, row:{...} }
   { secret, action:"delete",  sheet, rowIndex }
*/
function doPost(e) {
  try {
    const b = JSON.parse(e.postData.contents || "{}");
    if (b.secret !== ADMIN_KEY) return json({ ok: false, error: "Wrong admin password" });

    if (b.action === "ping") return json({ ok: true });

    const name = (b.sheet === ADMIN_TAB) ? ADMIN_TAB : BATCH_TAB; // only these two tabs are reachable
    const sh = getSheet(name);
    const headers = readHeaders(name);

    if (b.action === "list")    return json({ ok: true, rows: readRows(name), headers: headers });
    if (b.action === "headers") return json({ ok: true, headers: headers });

    if (b.action === "add") {
      const key = String(b.row[headers[0]] || "").trim();
      if (!key) return json({ ok: false, error: headers[0] + " is required" });
      if (name === BATCH_TAB) { // batch numbers must be unique
        const dup = readRows(name).some(r => String(firstValue(r)).trim().toUpperCase() === key.toUpperCase());
        if (dup) return json({ ok: false, error: "That " + headers[0] + " already exists" });
      }
      sh.appendRow(headers.map(h => b.row[h] != null ? b.row[h] : ""));
      return json({ ok: true });
    }

    if (b.action === "update") {
      const r = Number(b.rowIndex);
      if (!r || r < 2 || r > sh.getLastRow()) return json({ ok: false, error: "Row not found" });
      sh.getRange(r, 1, 1, headers.length).setValues([headers.map(h => b.row[h] != null ? b.row[h] : "")]);
      return json({ ok: true });
    }

    if (b.action === "delete") {
      const r = Number(b.rowIndex);
      if (!r || r < 2 || r > sh.getLastRow()) return json({ ok: false, error: "Row not found" });
      sh.deleteRow(r);
      return json({ ok: true });
    }

    return json({ ok: false, error: "Unknown action" });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

/* ---------- helpers ---------- */
function getSheet(name) {
  let ss;
  try { ss = SpreadsheetApp.openById(SHEET_ID); }
  catch (e) { ss = SpreadsheetApp.getActiveSpreadsheet(); }
  const sh = ss.getSheetByName(name);
  if (!sh) throw new Error('Tab "' + name + '" not found — rename a tab at the bottom of the spreadsheet to exactly "' + name + '"');
  return sh;
}
function readHeaders(name) {
  const sh = getSheet(name);
  return sh.getRange(1, 1, 1, sh.getLastColumn()).getDisplayValues()[0].map(h => String(h).trim()).filter(h => h);
}
function readRows(name) {
  const sh = getSheet(name);
  const v = sh.getDataRange().getDisplayValues();
  const head = v.shift().map(h => String(h).trim());
  const out = [];
  v.forEach((r, i) => {
    if (r.join("") === "") return;
    const o = { _row: i + 2 };           // real sheet row, used by admin update/delete
    head.forEach((h, c) => { if (h) o[h] = r[c]; });
    out.push(o);
  }); 
  return out;
}
function firstValue(rowObj) { const k = Object.keys(rowObj).filter(x => x !== "_row")[0]; return rowObj[k]; }
function json(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
