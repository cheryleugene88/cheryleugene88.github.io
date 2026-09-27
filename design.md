# Design System — Cheryl's Portfolio

Mood: **clean & readable first, pixel-playful second.** The pixel elements (icons, cursor blips, tiny sprites) are accents that add personality — they should never compete with the actual content (education, experience, skills, projects).

This is synthesized from the 4 mood-board references shared:
- A bold, cream-background pop portfolio with rounded bubble typography, pill-shaped nav badges, hand-drawn scribbles/stars, and a torn-paper "polaroid" photo card.
- A set of hand-drawn character head doodles (soft, cute, sketch-style) — useful as a source of *personality*, not a literal component.
- A pixel-art / retro tamagotchi-style longread: 8-bit sprites, blocky pixel headline font, soft sky gradient background, speech-bubble callouts.
- A Susan Kare–style pixel-icon longread: clean white/light background, scattered classic pixel icons (floppy disk, clock, trash, folder, cursor), and small black pill tags for skills/tools.

The synthesis: **light, clean base layout (from the Susan Kare reference) + warm accent color pops (from the pop-portfolio reference) + small 8-bit pixel icons and pill tags (from both pixel references)** — kept minimal so it stays professional enough for a Data Science portfolio.

## 1. Color palette

| Token | Hex (approx) | Use |
|---|---|---|
| `--bg-base` | `#FBF3E7` | Main background (warm cream, not stark white) |
| `--bg-alt` | `#FFFFFF` | Card / section backgrounds |
| `--text-primary` | `#1E1E1E` | Body text, headings |
| `--text-secondary` | `#6B6B6B` | Captions, meta text |
| `--accent-coral` | `#F4585C` | Primary accent — headline highlights, CTA buttons |
| `--accent-orange` | `#F2994A` | Secondary accent — tags, icons |
| `--accent-green` | `#3CB878` | Tertiary accent — "available for work" badges, success states |
| `--accent-blue` | `#2E5AAC` | Links, pixel-icon accents |
| `--accent-pink` | `#F2A6C1` | Soft highlight backgrounds behind pixel icons |
| `--outline-black` | `#1A1A1A` | Hand-drawn style outlines/borders on cards |

Use at most 2–3 accent colors per section so it doesn't get visually noisy — rotate which accent leads per section (e.g., coral for Hero, blue for Skills, orange for Projects).

## 2. Typography

- **Display / pixel font** (headings, section titles, nav pills only): `"Press Start 2P"` or `"VT323"` (Google Fonts) — blocky, retro, used sparingly and at larger sizes only.
- **Body font**: a clean, highly legible sans-serif — `"Inter"`, `"Poppins"`, or `"Space Grotesk"` — for all paragraph text, bullet points, and dense content (experience descriptions, skills lists).
- **Rule of thumb**: pixel font = short strings only (section labels like "ABOUT", "SKILLS", nav badges, numbers). Never set a full paragraph in the pixel font — it kills readability.

```css
--font-display: "Press Start 2P", monospace;
--font-body: "Inter", sans-serif;
```

## 3. Pixel-art elements

Small, consistent 8-bit style sprites used as accents — not full illustrations:

- **Section markers**: a tiny pixel icon next to each section title (e.g., a pixel floppy disk for "Projects", a pixel graduation cap for "Education", a pixel clock/badge for "Experience").
- **Skill tags**: pill-shaped badges (rounded, colored background) each with a tiny pixel icon + skill name, e.g. `🟦 Python`, `🟧 SQL` — styled like the "ВЕРСТКА НА TILDA" tag pills in the Susan Kare reference, but with an icon added.
- **Cursor/blink accents**: a small blinking pixel cursor (like a terminal `_`) used once near the hero tagline for a subtle retro-tech feel.
- **Hover state**: pixel icons scale up slightly (1.1x) and "bounce" on hover — short, snappy, no more than 150–200ms.
- Keep every pixel sprite roughly the same visual weight (16–24px grid) so they read as one consistent icon set rather than mismatched clipart.

## 4. Layout patterns

- **Hero**: Large bubble/pixel-display headline with name + role ("Data Science Student & Data Engineer"), short one-line tagline, CTA buttons (View Projects / Download CV / Contact), simple background texture (soft dot-grid or brick-pattern like the reference, very low opacity so it doesn't distract).
- **About**: Photo in a "polaroid" style card (white border, slight rotation, small pixel star/sparkle accents) next to a short bio paragraph, similar to the reference's photo-corner treatment.
- **Section nav / table of contents** (optional, if single-page scroll): pill-shaped buttons per section, color-rotated, like the reference's "01. ABOUT ME / 02. SKILLS" badges — can double as an anchor-link nav.
- **Experience & Organization**: vertical timeline or stacked cards, one per role, with a small pixel badge marking the type (💼 work, 🎓 org/volunteer).
- **Projects**: card grid (2–3 columns desktop, 1 column mobile), each card = short project title, 1–2 line description, tag pills for tools used, optional GitHub link icon.
- **Skills**: grouped pill/tag clusters by category (Languages, Data & ML, Databases, Tools, Soft Skills, Languages spoken, Design).
- **Contact**: simple footer/section with pixel icon buttons for email, LinkedIn, GitHub, phone.

## 5. Animation guidance (keep it simple)

- Fade-in + slight upward slide (`opacity 0→1`, `translateY(12px→0)`) on scroll into view, per section — one shared animation, reused everywhere, 300–400ms ease-out.
- Pixel icons: small hover bounce only, no constant looping animation (avoid distracting motion).
- No parallax, no heavy scroll-jacking, no auto-playing carousels — this was explicitly requested to stay simple and clear.
- Optional: a one-time blinking cursor in the hero tagline (CSS `@keyframes blink`) for retro flavor.

## 6. Accessibility notes

- Maintain at least 4.5:1 contrast for body text on the cream background.
- Don't rely on the pixel font for any text longer than a few words.
- Ensure pixel icons have `alt` text / `aria-label`s since they carry meaning (e.g., section identifiers).
