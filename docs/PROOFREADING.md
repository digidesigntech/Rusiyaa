# RUSIYAA Website — Proofreading & Copy Review

**Reviewed:** 19 Jun 2026
**Pages:** `index.html`, `faq.html`, `privacy.html`, `terms.html`, `trademark.html`
**Overall:** The copy is clean, well-written and consistent in tone. No grammar errors of substance. The issues below are mostly **consistency** items (email, spelling style, brand/product naming). Fix the 🔴 items before any launch/print.

**Severity:** 🔴 High (fix first) · 🟡 Medium · 🟢 Low / optional

---

## Summary

| # | Issue | Severity | Where |
|---|-------|----------|-------|
| 1 | Support email: likely typo `ruisyaa` + two different addresses used | 🔴 | index, faq |
| 2 | American spellings in otherwise-British copy (`specialty`, `licenses`) | 🟡 | faq, trademark |
| 3 | FAQ product list incomplete / inconsistent naming | 🟡 | faq |
| 4 | Company name casing varies: `Arul's Foods` vs `ARUL'S FOODS` | 🟡 | all pages |
| 5 | Product name varies: `Chicken 65` vs `Chicken 65 Masala` | 🟢 | index |
| 6 | Logo `alt` casing `Rusiyaa` vs brand `RUSIYAA` | 🟢 | index |
| 7 | Hard-coded copyright year `© 2026` | 🟢 | index |

---

## 🔴 1. Support email — typo + inconsistency  *(highest priority)*

Two different support addresses are used across the site, and one looks misspelled.

- `customercare.ruisyaa@arulsfoods.com` — used in **index.html** (Contact card) and **faq.html** (footer line).
- `info@arulsfoods.com` — used in **faq.html** (answer), **privacy.html**, **terms.html**, **trademark.html**.

**Problem A — likely typo:** the brand is **RUS​IYAA** (r‑u‑**s‑i**‑y‑a‑a), but the email reads `ru​isyaa` (r‑u‑**i‑s**‑y‑a‑a) — the `s` and `i` are swapped. Almost certainly should be `customercare.rusiyaa@arulsfoods.com`. **Please confirm the real mailbox** before changing — if the inbox was genuinely created as `ruisyaa`, leave it but be aware it reads as a typo to customers.

**Problem B — inconsistency:** decide on **one** public email (or clearly split "general = `info@`, customer care = `customercare@`") and use it consistently. Right now the homepage shows one address and the legal/FAQ pages show another.

> Recommendation: standardise on a single address, and fix the `ruisyaa → rusiyaa` spelling everywhere it appears.

---

## 🟡 2. Spelling style — British vs American

The site is written in **British English** throughout (`colours`, `flavours`, `centre`, `labelling`, `enquiries`, `authorised`, `analyse`, `fulfil`, `licence`/`licensed`). Two words break that pattern:

| File | Current | Suggested (British) |
|------|---------|---------------------|
| `faq.html` | "…Chicken 65 and other **specialty** blends." | **speciality** |
| `trademark.html` | "…does not grant any ownership rights, **licenses**, or interests…" | **licences** (noun) |

> Either is fine on its own, but for consistency match the rest of the copy.

---

## 🟡 3. FAQ product list — incomplete & inconsistent

`faq.html` → *"What products does RUSIYAA currently offer?"*

> "…including Chilli Powder, Coriander Powder, Turmeric Powder, Garam Masala, **Chicken 65** and other specialty blends."

Issues:
- The actual range is **6 products**, but only 5 are named and **Chicken Curry Masala is omitted**.
- Uses `Chicken 65` while the Products section calls it **Chicken 65 Masala**.

> Suggested: "…Chilli Powder, Coriander Powder, Turmeric Powder, Garam Masala, **Chicken 65 Masala** and **Chicken Curry Masala**." (and update *"Will RUSIYAA introduce more products…"* if you want it to read consistently).

---

## 🟡 4. Company-name casing is inconsistent

The legal entity appears in two styles:

- **`Arul's Foods`** — About story, `terms.html`, hero ribbon.
- **`ARUL'S FOODS`** — footer, `privacy.html`, `trademark.html`.

> Pick one convention. Common choice: title-case **"Arul's Foods"** in body/marketing copy, and reserve all-caps for logo-style usage only — applied consistently across all five pages.

---

## 🟢 5. Product naming — `Chicken 65` vs `Chicken 65 Masala`

- Products grid: **Chicken 65 Masala**
- Hero scrolling ribbon: **Chicken 65**

> Minor — align both to the canonical product name (recommend "Chicken 65 Masala").

---

## 🟢 6. Logo alt text casing

`index.html` logo `alt="Rusiyaa — Best in Taste"` uses title-case "Rusiyaa" while the brand is styled **RUSIYAA** everywhere else. Low impact (screen-reader only), but worth aligning.

---

## 🟢 7. Hard-coded copyright year

Footer: `© 2026 RUSIYAA — A brand of ARUL'S FOODS`. Fine for now, but it will read stale in 2027. Optional: render the year dynamically (e.g. `new Date().getFullYear()`).

---

## ✅ Looks good (no change needed)

- **Phone number** `+91 99414 02534` — consistent on every page.
- **Address** (Subhiksham Building … Chennai – 600024) — consistent; en-dash used correctly.
- **GSTIN** `33FNZPK6605J1ZD` — correct 15-character length/format.
- **Brand voice & messaging** — "sources from FSSAI-licensed partners and repacks under the RUSIYAA brand" is consistent across hero, about, process, quality and FAQ (correctly avoids claiming RUSIYAA manufactures).
- Grammar, punctuation and capitalisation in the legal pages read cleanly.

---

### Quick fix checklist
- [ ] Confirm & correct support email (`ruisyaa` → `rusiyaa`?) and use one address site-wide
- [ ] `specialty` → `speciality` (faq)
- [ ] `licenses` → `licences` (trademark)
- [ ] Add **Chicken Curry Masala** to the FAQ product list; use full product names
- [ ] Unify `Arul's Foods` / `ARUL'S FOODS` casing
- [ ] Align `Chicken 65` ↔ `Chicken 65 Masala`
- [ ] (Optional) logo alt casing; dynamic copyright year
