# Placeholder content checklist

Everything below is realistic-looking placeholder copy, not real information.
Nothing here was invented as a "fact" about you — stats, achievements, and
claims stay blank until you provide them (see project instructions) — but
these mechanical values (links, email) need to be swapped before this site
goes anywhere near a sponsor, recruiter, or client.

All of it lives in **`/data/site.config.ts`** unless noted otherwise.

## Personal contact info (real as of Phase 10G)

- [x] `contactEmail` / `socials` → Email, LinkedIn, and Instagram are
      now your real links. Discord (`usman_1.34`) is a username, not a
      URL — it renders as a copy-to-clipboard button instead of a link
      (clicking it copies the handle; no page navigation).
- [ ] `socials` → **GitHub** — no real URL was given, so it still
      renders with the dashed "not yet added" treatment. Send the real
      URL whenever you have one.
- [ ] `seo.url` — currently `https://usmanjunaid.com`, a placeholder
      domain (no real one provided). Update once you have the real
      production domain (this also feeds `sitemap.ts`, `robots.ts`, and
      Open Graph tags).

Everything still marked as a placeholder renders visibly as one on the
site itself (dashed border + "Not yet added"), not just in this file —
obvious to any visitor, not just to you.

## Still to come in later phases (not placeholders — just not built yet)

- [ ] `data/about.data.ts` → `stats` array — two entries are marked
      `isPlaceholder: true` and render with a dashed "add your number"
      treatment on the site: **"Esports Events Organized"** and
      **"Social Reach"**. Once you have real numbers, set `value`
      (and `countTo` if you want it to animate) and flip
      `isPlaceholder` to `false`.

## Cybersecurity (real content added in Phase 10C)

- [ ] `data/cybersecurity.data.ts` → `securityProjects` — intentionally
      empty. The section shows an honest "will appear here once added"
      panel instead of any invented project/lab history. Add real
      entries (typed as `SecurityProject` in `types/content.ts`)
      whenever you have them.
- Everything else in this section is now real: networking fundamentals,
  security concepts you're learning, OS/programming exposure, and tool
  exposure (Wireshark/Nmap/Packet Tracer) — all as you described them,
  with the skill-vs-learning distinction preserved throughout.

## Amazon & E-Commerce (real content added in Phase 10D)

- All 7 workflow stages, the toolkit, and the "Research skills applied"
  row now reflect your real information — product hunting and product
  listing framed as hands-on experience, with market/competitor/keyword/
  listing research framed as the skills applied along the way.
- No clients, revenue, sales figures, or specific results were
  provided, so none are shown — only the honest self-referential counts
  (7 workflow stages, 3 tools) animate as stats.

## Matrix Esports (Instagram added in Phase 10G)

- [x] `data/matrix.data.ts` → `matrixSocials` → Instagram is now real
      (`instagram.com/matrixesports.pk`), and `matrixCta` now points to
      it as a genuine link, not a placeholder.
- [ ] `matrixSocials` → Twitter/X and Discord — no real links given yet,
      still marked as placeholders.
- [ ] `matrixStats` — two entries are marked `isPlaceholder: true`
      ("Tournaments Hosted", "Community Members") and render with the
      same dashed "add your number" treatment as About's stats.
- [ ] `matrixEvents` / `matrixSponsors` — both intentionally empty
      arrays. The section shows an honest "will appear here once added"
      panel instead of any invented history — add real entries (typed
      in `types/content.ts` as `MatrixEvent` / `MatrixSponsor`) whenever
      you have them.

## Projects, Journey & Achievements (built in this phase — needs your real data)

- [ ] `data/projects.data.ts` → `projects` — intentionally empty. The
      showcase (cards, category filtering) is fully built and will
      activate the moment you add a real entry (typed as `Project` in
      `types/content.ts`). Each project supports an optional `image`
      path; without one, the card shows a generated placeholder visual
      instead of stock imagery.
- [x] `data/journey.data.ts` → `journeyStages` — real dates added in
      Phase 10F for the three education stages (Matriculation 2019–2021,
      Intermediate 2021–2023, BSCS 2023–2027). The four stages without
      confirmed specific dates (Amazon/E-Commerce, Esports, Matrix
      Esports, Cybersecurity) are anchored as "Alongside BSCS" rather
      than given invented exact dates — update `period` on any of them
      once you have real dates.
- [ ] `data/achievements.data.ts` → `achievements` — intentionally
      empty. Shows an honest "will appear here once confirmed" panel.
      Add real entries (typed as `Achievement` in `types/content.ts`)
      whenever you have them.

## Final CTA, Contact & Footer (built in this phase)

- [ ] The contact form (`components/sections/contact/ContactForm.tsx`)
      is a working **demo** — validation, loading, and success/error
      states are all real, but nothing is actually sent anywhere yet.
      It says so honestly in its success message. To connect a real
      service, replace the body of `submitContactForm` in
      `lib/contact-form.ts` — the form component itself doesn't need
      to change.
- [ ] `data/site.config.ts` → `finalCta` and `contact` — headline,
      description, and CTA copy for the closing section and the
      contact section. Fully editable, no placeholders here (this is
      original copy, not personal info).
- [ ] `data/site.config.ts` → `contact.purposes` — the six options in
      the optional "what's this about" dropdown. Edit the list to
      change the options.
- Direct contact methods (Email, LinkedIn, Discord, Instagram, Matrix
  Esports) are now real — see "Personal contact info" and "Matrix
  Esports" above. Only GitHub, and Matrix's Twitter/X and Discord,
  remain placeholders.

## Visual assets (mentioned in Phase 10G, none actually uploaded yet)

None of the following were attached to any message so far — nothing
was invented in their place, and no stock imagery was substituted:

- [ ] Profile photo
- [ ] Matrix Esports logo
- [ ] Matrix Esports graphics
- [ ] Tournament posters
- [ ] Project screenshots
- [ ] Certificates
- [ ] Other portfolio images

Once you upload these, they can slot in cleanly: `Project.image` in
`data/projects.data.ts` already expects a local `/public` path and
renders via `next/image` (see the Projects section above); a real
profile photo could replace the generated ring+dot mark used for the
favicon/nav logo; a Matrix logo could similarly replace the generic
Swords icon used for Matrix throughout. None of this is wired up yet
since there's nothing real to wire in.

## Icons

`lucide-react` in this project ships no trademarked brand/logo glyphs, so
GitHub and LinkedIn currently use generic stand-in icons (a terminal glyph
and a briefcase) rather than their official marks. The accessible label
still reads "GitHub" / "LinkedIn" for screen readers. If you'd like the
literal brand marks instead, that needs a small icon set added separately —
flag it and we'll wire it in.
