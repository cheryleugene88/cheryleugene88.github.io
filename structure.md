# Site Structure

Single scrolling page (confirmed) with anchor navigation, matching the "table of contents → sections" flow from the pop-portfolio reference, but simplified to 8 sections instead of that reference's ordering. No separate routes/pages per project — everything lives as cards on the main page.

## Page flow

```
[Navbar — sticky, pill-shaped anchor links]
   ↓
[1. Hero]
   Name, role, tagline, CTA buttons (View Projects / Download CV / Contact)
   ↓
[2. About]
   Polaroid-style photo card + bio paragraph + "open to roles with a positive work culture" note
   ↓
[3. Education]
   Degree + GPA header, then a scannable list/grid of coursework highlights
   ↓
[4. Experience]
   2 role cards (Data Engineer @ Binus IT, Admin/Sales @ MyClinicalPro), timeline or stacked layout
   ↓
[5. Organization & Volunteering]
   TFISC role card (primary) + smaller list of other volunteer activities + IBUDDY+ role card
   ↓
[6. Projects]
   Card grid, 6 projects, each with title / 1-2 line description / tag pills / GitHub link icon
   ↓
[7. Skills]
   Grouped pill clusters: Programming, Data & ML, Databases, Tools, Soft Skills, Languages, Design
   ↓
[8. Contact]
   Icon buttons: Email, LinkedIn, GitHub, Phone — simple footer treatment
```

## Component checklist

- [ ] `Navbar` — logo/initials + anchor pills to each section, sticky on scroll
- [ ] `Hero` — headline, tagline, 2–3 CTA buttons
- [ ] `PolaroidPhoto` — reusable card for the About photo (rotation + border + sparkle accent)
- [ ] `SectionHeading` — pixel-font label + small pixel icon marker, reused across all sections
- [ ] `TimelineCard` — used for Experience & Organization entries
- [ ] `ProjectCard` — title, description, tag pills, optional link icon
- [ ] `PixelTag` — small pill with pixel icon + label, used for Skills and Project tools
- [ ] `ContactIconButton` — circular button with pixel icon, links out to email/LinkedIn/GitHub/phone
- [ ] `Footer` — small credits line, back-to-top pixel arrow icon

## Responsive behavior

- Desktop: Projects and Skills use multi-column grids; Navbar pills shown in a single row.
- Mobile: single column throughout; Navbar collapses into a simple horizontal scroll of pills or a hamburger menu; polaroid photo stacks above the bio text.

## Open questions (flag for Cheryl)

- [ ] Final CV file to link for "Download CV"
- [ ] Profile photo to use in the About polaroid card
- [ ] Final pixel-icon set per skill/tool
