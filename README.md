# Harsh Gupta – Portfolio

Personal portfolio and engineering blog for Harsh Gupta, Full-Stack Software Engineer.

Built with Next.js 16, Tailwind CSS v4, shadcn/ui, and [Magic UI](https://magicui.design/), based on [dillionverma/portfolio](https://github.com/dillionverma/portfolio).

## Editing content

- **Profile, experience, projects, skills:** [`src/data/resume.tsx`](./src/data/resume.tsx)
- **Blog posts:** MDX files in [`content/`](./content)
- **Resume PDF:** [`public/harsh_g_resume_latest.pdf`](./public/harsh_g_resume_latest.pdf)

Keep `resume.tsx` in sync with the PDF when either changes.

## Site URL

Canonical URLs, the sitemap, Open Graph images, and JSON-LD all use the site URL, which defaults to `https://harshgupta.xyz`. To override it (for example when testing locally), set:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Running locally

```bash
pnpm install
pnpm dev
```

## License

MIT, see [LICENSE](./LICENSE).
