---
name: Heritage Ivory
colors:
  surface: '#fcf9f5'
  surface-dim: '#dcdad6'
  surface-bright: '#fcf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ef'
  surface-container: '#f0ede9'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e5e2de'
  on-surface: '#1c1c1a'
  on-surface-variant: '#4e4639'
  inverse-surface: '#31302e'
  inverse-on-surface: '#f3f0ec'
  outline: '#7f7667'
  outline-variant: '#d1c5b4'
  surface-tint: '#775a19'
  primary: '#775a19'
  on-primary: '#ffffff'
  primary-container: '#c5a059'
  on-primary-container: '#4e3700'
  inverse-primary: '#e9c176'
  secondary: '#635d5a'
  on-secondary: '#ffffff'
  secondary-container: '#e6ded9'
  on-secondary-container: '#67625e'
  tertiary: '#6c5c3f'
  on-tertiary: '#ffffff'
  tertiary-container: '#b7a381'
  on-tertiary-container: '#47391f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdea5'
  primary-fixed-dim: '#e9c176'
  on-primary-fixed: '#261900'
  on-primary-fixed-variant: '#5d4201'
  secondary-fixed: '#e9e1dc'
  secondary-fixed-dim: '#cdc5c0'
  on-secondary-fixed: '#1e1b18'
  on-secondary-fixed-variant: '#4b4642'
  tertiary-fixed: '#f6e0bb'
  tertiary-fixed-dim: '#d9c4a0'
  on-tertiary-fixed: '#251a04'
  on-tertiary-fixed-variant: '#53452a'
  background: '#fcf9f5'
  on-background: '#1c1c1a'
  surface-variant: '#e5e2de'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.03em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
The design system embodies "Heritage Ivory," a premium visual language tailored for a high-end spice distributor. It bridges the gap between historical weight and modern clarity, evoking an emotional response of purity, quality, and culinary mastery. 

The aesthetic is **Luxury Minimalism**. It relies on high-contrast compositions where rich, colorful product photography of spices (saffron, star anise, cardamom) acts as the primary visual texture against an expansive, airy background. The style is clean and structured, utilizing a "Gallery" approach to UI—where every interface element is treated with the precision of a high-end editorial spread.

**Key Principles:**
- **Luminous Space:** Generous white space is used to signify "premium" status and allow the product to breathe.
- **Architectural Balance:** A strict adherence to grid systems ensures a sense of reliability and heritage.
- **Refined Accents:** Gold and amber tones are used sparingly to highlight quality and "The Gold Standard" of the inventory.

## Colors
The palette is centered on the interplay between **Pure White** and **Cream/Ivory**, creating a layered "white-on-white" effect that adds depth without clutter.

- **Primary (Gold/Amber):** Used exclusively for call-to-actions, price points, and premium badges. It represents the "Legacy" aspect of the brand.
- **Secondary (Charcoal):** Used for primary text to ensure high legibility against the light surfaces.
- **Surface Container (Ivory):** Employed for section backgrounds and card surfaces to subtly distinguish them from the pure white page background.
- **Functional Colors:** Success, Error, and Warning states should be muted and desaturated to avoid breaking the elegant color story.

## Typography
The typographic hierarchy relies on the contrast between the **serif (Playfair Display)** and the **sans-serif (Plus Jakarta Sans)**.

- **Headlines:** Playfair Display should be used for all storytelling, product names, and section titles. Its high contrast and elegant serifs communicate heritage and authority.
- **Body & Functional Text:** Plus Jakarta Sans provides a crisp, modern counterpoint. Its open counters and friendly curves ensure readability during the checkout and browsing experience.
- **Micro-copy:** Use the `label-lg` style (Uppercase with tracking) for category tags and sub-headers to create an editorial feel similar to luxury fashion magazines.

## Layout & Spacing
The layout follows a **Fixed Grid** model on desktop to maintain a controlled, high-end presentation.

- **Grid:** A 12-column grid with generous 24px gutters.
- **Sectioning:** Vertical rhythm is driven by the `section-gap` (120px), creating distinct "chapters" of content that prevent the user from feeling overwhelmed.
- **Mobile Adaptivity:** On mobile, margins shrink to 20px, and the layout collapses to a single column, but internal padding within cards remains generous to maintain the airy feel.
- **Alignment:** Use asymmetrical layouts for hero sections (text on left, image bleeding off the right) to create a dynamic, modern energy.

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layers** and **Minimalist Outlines** rather than heavy shadows.

- **Surface Layering:** The primary background is `#FFFFFF`. Secondary containers (cards, sidebars) use `#F8F5F1`. This subtle shift creates hierarchy without the need for visual "noise."
- **Ghost Borders:** Elements like input fields or subtle separators use a 1px solid stroke in a very light neutral (e.g., `#E5E0D8`).
- **Shadows:** If used for high-level modals, shadows must be "Ambient"—extremely diffused, with a 15% opacity of the primary amber color to provide a warm, glowing lift rather than a cold grey drop.

## Shapes
The shape language is **Soft and Precise**. 

- **Corner Radius:** A consistent 0.25rem (`rounded-sm`) is used for buttons and inputs to maintain a sharp, professional look that isn't clinical.
- **Image Treatment:** Product photography should always be housed in containers with 0px radius (sharp) or very large 1.5rem radius (`rounded-xl`) to contrast against the smaller UI elements.
- **Dividers:** Use thin, horizontal lines to separate content, punctuated occasionally by a small gold diamond or brand mark at the center.

## Components
- **Buttons:** Primary buttons are solid `#C5A059` with white text, no icons, and capitalized `label-lg` typography. Secondary buttons use a "Ghost" style with a gold border.
- **Cards:** Product cards use the Ivory background (`#F8F5F1`) with a full-bleed image at the top. The typography inside is centered to emphasize the "Boutique" feel.
- **Chips/Tags:** Used for "Origin" or "Flavor Profile." These should be simple text with a thin underline in the primary color, rather than enclosed "pills."
- **Inputs:** Underline-only inputs (border-bottom) are preferred for a sleek, minimal look in search and newsletter signups.
- **Lists:** Ingredient or tasting notes lists should use custom bullets—specifically, a small, solid gold dot.