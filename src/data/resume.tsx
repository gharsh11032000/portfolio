import { Icons } from "@/components/icons";
import {
  HomeIcon,
  NotebookIcon,
  MonitorSmartphone,
  Smartphone,
  Gauge,
  Cloud,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiSass,
  SiTailwindcss,
  SiShadcnui,
  SiMui,
  SiFramer,
  SiGreensock,
  SiExpo,
  SiCapacitor,
  SiStorybook,
  SiNodedotjs,
  SiExpress,
  SiHono,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiRedis,
  SiDrizzle,
  SiStrapi,
  SiWordpress,
  SiWoocommerce,
  SiCloudflare,
  SiVercel,
  SiDocker,
  SiTurborepo,
  SiGithubactions,
  SiReactquery,
  SiRedux,
  SiZod,
  SiGraphql,
  SiSentry,
  SiGrafana,
  SiClaude,
  SiCursor,
  SiV0,
  SiAppstore,
  SiGoogleplay,
  SiWhatsapp,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

// NEXT_PUBLIC_SITE_URL overrides the domain, e.g. for local OG image testing.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://harshgupta.xyz";

const email = "gharsh11032000@gmail.com";
const phone = "+919171960267";
const whatsappUrl = `https://wa.me/${phone.slice(1)}?text=${encodeURIComponent(
  "Hi Harsh, I found your portfolio and would like to talk about a project."
)}`;

export const SKILL_ICONS: Record<string, IconType> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss,
  "Sass/SCSS": SiSass,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "shadcn/ui": SiShadcnui,
  MUI: SiMui,
  Storybook: SiStorybook,
  GSAP: SiGreensock,
  "Framer Motion": SiFramer,
  "React Native": SiReact,
  Expo: SiExpo,
  NativeWind: SiTailwindcss,
  Capacitor: SiCapacitor,
  "TanStack Query": SiReactquery,
  "Redux Toolkit": SiRedux,
  Zod: SiZod,
  GraphQL: SiGraphql,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  Hono: SiHono,
  MySQL: SiMysql,
  "PostgreSQL (Neon)": SiPostgresql,
  Supabase: SiSupabase,
  Redis: SiRedis,
  "Drizzle ORM": SiDrizzle,
  Strapi: SiStrapi,
  WordPress: SiWordpress,
  WooCommerce: SiWoocommerce,
  "AWS (Lambda, S3, EC2, CloudFront)": FaAws,
  Cloudflare: SiCloudflare,
  Vercel: SiVercel,
  "GitHub Actions": SiGithubactions,
  Turborepo: SiTurborepo,
  Docker: SiDocker,
  Sentry: SiSentry,
  Grafana: SiGrafana,
  "Claude Code": SiClaude,
  Cursor: SiCursor,
  v0: SiV0,
};

export const DATA = {
  name: "Harsh Gupta",
  initials: "HG",
  title: "Full-Stack Software Engineer",
  url: siteUrl,
  location: "Udaipur, India",
  locationLink: "https://www.google.com/maps/place/Udaipur",
  availability: "Open to freelance & contract work",
  headline:
    "I lead the web team at Beyoung, a high-traffic e-commerce platform with 5M+ monthly impressions, shipping across Next.js, React Native, Node.js, and AWS.",
  description:
    "Full-stack software engineer leading web, mobile, and AWS at Beyoung (5M+ monthly impressions). React, Next.js, React Native, TypeScript. Top 5 on Uiverse.io.",
  summary:
    "I'm a full-stack engineer who started on the frontend and kept following problems downstream: into APIs, databases, mobile apps, and the AWS bill.\n\nAt **Beyoung** I joined as one of 18–20 engineers and, as the team shrank, ended up owning the platform: web, mobile, backend, and the infrastructure underneath. That's the work I enjoy most: moving legacy code to TypeScript, tracking down the import that bloats every page, or finding the cache rule that halves a bill, then writing up what I learned.\n\nOutside the day job I co-built **Plango**, publish open-source UI on **Uiverse.io**, and take on freelance work for teams in India and abroad.",
  avatarUrl: "/harsh-gupta.jpg",
  resumeUrl: "/harsh_g_resume_latest.pdf",
  highlights: [
    { value: "5M+", label: "monthly impressions on the platform I lead" },
    { value: "~50%", label: "AWS spend cut, ~$3K to ~$1.5–2K a month" },
    { value: "4–5x", label: "faster delivery with spec-driven, AI-assisted dev" },
    { value: "200+", label: "security vulnerabilities resolved" },
    { value: "10K+", label: "downloads on Plango, a side project I co-built" },
    { value: "Top 5", label: "global contributor on Uiverse.io" },
  ],
  skills: [
    {
      category: "Frontend",
      items: [
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui",
        "Framer Motion",
      ],
    },
    {
      category: "Mobile",
      items: ["React Native", "Expo", "NativeWind"],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Hono",
        "PostgreSQL (Neon)",
        "MySQL",
        "Redis",
        "Drizzle ORM",
        "Strapi",
      ],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "AWS (Lambda, S3, EC2, CloudFront)",
        "Cloudflare",
        "Vercel",
        "GitHub Actions",
        "Docker",
        "Sentry",
      ],
    },
    {
      category: "AI-Assisted Dev",
      items: ["Claude Code", "Cursor", "MCP servers", "Spec-driven development"],
    },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email,
    phone,
    phoneDisplay: "+91 91719 60267",
    whatsappUrl,
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/gharsh11032000",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/hrshgupta",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Email",
        url: `mailto:${email}`,
        icon: Icons.email,
        navbar: true,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: whatsappUrl,
        icon: SiWhatsapp,
        navbar: true,
      },
    },
  },

  services: [
    {
      title: "Web apps & storefronts",
      icon: MonitorSmartphone,
      description:
        "Next.js and React apps from Figma to production, with a CMS your team can update without a developer.",
      proof: { label: "Beyoung.in", href: "https://www.beyoung.in" },
    },
    {
      title: "Mobile apps",
      icon: Smartphone,
      description:
        "React Native apps for iOS and Android, through store review, with over-the-air updates for same-day fixes.",
      proof: { label: "Plango", href: "https://www.plango.in" },
    },
    {
      title: "Performance & upgrades",
      icon: Gauge,
      description:
        "Speed up slow or outdated React and Next.js codebases: Core Web Vitals, bundle size, TypeScript migrations, and major version upgrades.",
      proof: {
        label: "Bundle case study",
        href: "/blog/trimming-first-load-js-nextjs-storefront",
      },
    },
    {
      title: "Cloud cost & DevOps",
      icon: Cloud,
      description:
        "CDN caching, AWS cost cuts, CI/CD pipelines, and error monitoring so you hear about bugs before your users do.",
      proof: {
        label: "Caching case study",
        href: "/blog/how-we-cut-aws-spend-by-50-percent",
      },
    },
  ],
  workStyle: [
    {
      label: "Time zone",
      value:
        "IST (UTC+5:30). Overlaps with UK and EU working hours; early or late calls work for US teams.",
    },
    {
      label: "Communication",
      value:
        "Async-first, with regular written updates and preview links you can click through, over Slack, email, or WhatsApp.",
    },
    {
      label: "Engagements",
      value: "Fixed-scope projects, monthly contracts, or a short audit to start.",
    },
  ],

  journey: [
    { city: "Sidhi", region: "Madhya Pradesh", label: "Hometown" },
    {
      city: "Bhopal",
      region: "Madhya Pradesh",
      label: "B.Tech at LNCT",
      years: "2018–22",
    },
    {
      city: "Ahmedabad",
      region: "Gujarat",
      label: "Frontend Developer, Green Apex",
      years: "2024",
    },
    {
      city: "Udaipur",
      region: "Rajasthan",
      label: "Web Lead, Beyoung",
      years: "Now",
      current: true,
    },
  ],

  // Optional personal section; it renders only once something is filled in.
  personal: {
    // A Spotify playlist link, e.g. https://open.spotify.com/playlist/<id>
    spotifyPlaylistUrl: "" as string,
    // Photos placed in /public/photos, e.g. { src: "/photos/udaipur.jpg", alt: "Lake Pichola at dusk" }
    photos: [] as { src: string; alt: string; caption?: string }[],
  },

  work: [
    {
      company: "Beyoung.in",
      href: "https://www.beyoung.in",
      location: "Udaipur, India",
      title: "Software Engineer (Web Lead)",
      summary:
        "Took over the platform as the team shrank; now **lead web, mobile, backend, and AWS** end to end.",
      logoUrl: "/beyoung.png",
      start: "Nov 2024",
      end: "Present",
      groups: [
        {
          title: "Leadership & Platform",
          bullets: [
            "Joined as a frontend engineer in an 18–20 person tech team; through successive downsizing, took over the platform and now **lead the 4-member web team**, mentoring interns, across web, mobile, backend, and AWS for a high-traffic e-commerce site (**5M+ monthly impressions**).",
            "Migrated legacy JavaScript codebases to TypeScript, upgraded the storefront from **Next.js 10 to 16** (Zod, TanStack Query), and rebuilt the OpenCart admin panel in Next.js; reached **90+ PageSpeed scores** and cut bundle size by **~15–25%**.",
            "Resolved **200+ npm security vulnerabilities** across the website, React Native app, and backend.",
            "Consolidated storefront, API, cron jobs, and admin into a **Turborepo monorepo**, introduced Drizzle ORM on MySQL, and replaced manual server deployments with GitHub Actions CI/CD pipelines.",
            "Made **Strapi** the central CMS: powered dynamic homepage content for web and mobile, migrated the WordPress blog to Strapi and Next.js (improving security and cutting bandwidth), and replaced a third-party SEO tool.",
            "Cut monthly AWS spend from **~$3K to ~$1.5–2K** by designing the edge caching strategy: tiered CDN cache policies per page type, a CloudFront cache key that ignores cookies and tracking params, path purges on CMS publish, Redis response caching at the API, and a Lambda image pipeline serving resized WebP/AVIF.",
            "Trimmed First Load JS on every page by deferring the **~290 KB Sentry SDK** to browser idle time and removing **~131 KB of duplicated Zod** from the shared client chunk.",
            "Built observability where only CPU monitoring existed: Sentry for application errors and Node process monitoring, plus Grafana Alloy shipping metrics and logs to Grafana dashboards, bringing **production errors down to near zero**.",
          ],
        },
        {
          title: "Mobile (React Native)",
          bullets: [
            "Led modernization of the React Native app: fixed security vulnerabilities, migrated to TypeScript, TanStack Query, and NativeWind to match the web stack, and added automated tests.",
            "Reduced app size by **10 MB** by moving static assets to an S3-backed CDN, tree shaking, and removing unused libraries; added **over-the-air (OTA) updates** via Cloudflare R2 to ship fixes without app store releases.",
          ],
        },
        {
          title: "Group Companies",
          bullets: [
            "Build and ship features for group brands: ongoing development of **Woggles.in** (D2C eyewear e-commerce) and project work for **Lastcode AI**, the group's custom software and cloud services company.",
          ],
        },
        {
          title: "AI-Assisted Engineering",
          bullets: [
            "Introduced spec-driven development (OpenSpec) and AI-assisted test-driven development using Claude Code, Cursor, Antigravity, MCP servers, and Agent Skills, increasing feature delivery speed **4–5x**; added Vitest and Playwright testing to web, mobile, and backend repositories.",
            "Built **@beyoung/skills**, an internal package of **50+ AI agent skills** with a CLI that syncs profile-based subsets (core, storefront, mobile, ERP) into the company's other repositories.",
          ],
        },
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "React Native",
        "Node.js",
        "MySQL",
        "Redis",
        "Strapi",
        "AWS",
        "Turborepo",
      ],
    },
    {
      company: "Green Apex Infosolutions",
      href: "https://greenapex.com",
      location: "Ahmedabad, India",
      title: "Frontend Developer",
      summary:
        "Shipped **3–4 client projects end to end** in Next.js and Strapi, including a platform for a US-based emergency-services company.",
      logoUrl: "/ga-logo.png",
      start: "Feb 2024",
      end: "Nov 2024",
      groups: [
        {
          title: "",
          bullets: [
            "Delivered **3–4 client projects end to end** with Next.js and Strapi, including a luxury holidays travel platform, a government portal, and a platform for a US-based emergency-services company.",
            "Built reusable, CMS-driven components and page sections in Strapi, letting client teams update content, packages, and pages without developer involvement.",
            "Rebuilt the company's own website and internal projects on a modern stack, migrating UI from MUI to Tailwind CSS and shadcn/ui, with a shared component library documented in Storybook.",
            "Turned complex Figma designs into responsive, accessible interfaces with GSAP and Framer Motion animations, using AI-assisted development (v0 and GitHub Copilot) to ship faster and helping teammates adopt it.",
          ],
        },
      ],
      technologies: [
        "Next.js",
        "Strapi",
        "Tailwind CSS",
        "shadcn/ui",
        "Storybook",
        "GSAP",
        "Framer Motion",
      ],
    },
    {
      company: "Netmagnetic",
      href: "https://netmagnetic.com",
      location: "Remote",
      title: "Frontend Developer",
      summary:
        "Built the React UI for a WooCommerce point-of-sale plugin and cut its CSS from **~50K to ~10–20K lines**.",
      logoUrl: "/nm_logo.png",
      start: "Sep 2022",
      end: "Feb 2024",
      groups: [
        {
          title: "",
          bullets: [
            "Built UI and functional features in React for POS Register, the company's primary client product (a WooCommerce POS plugin), and HTML/CSS/JS frontends for POS Hub (.NET).",
            "Refactored **~50,000 lines of legacy CSS into ~10–20K lines of modular Sass** (60–80% reduction), making the Register UI easier to maintain and keep consistent.",
            "Built HTML, CSS, and JavaScript templates for the POS WordPress plugin, and designed product UI in Figma and marketing banners in Canva.",
            "Redesigned and rebuilt the company's website and built the website for its new venture, in React and Tailwind CSS with Framer Motion animations.",
          ],
        },
      ],
      technologies: ["React", "Sass", "WordPress", "WooCommerce", "Tailwind CSS", "Figma"],
    },
  ],
  education: [
    {
      school: "LNCT Group of Colleges, Bhopal",
      href: "https://lnct.ac.in",
      degree: "Bachelor of Technology (B.Tech)",
      logoUrl: "/lnct.jpg",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Beyoung.in Commerce Platform",
      href: "https://www.beyoung.in",
      dates: "Nov 2024 – Present",
      role: "Web Lead",
      description:
        "High-traffic D2C fashion e-commerce platform. Primary author of the Next.js 16 storefront, admin, and shared UI package in a Turborepo monorepo spanning web, API, cron, CMS, and an image Lambda.",
      technologies: [
        "Next.js 16",
        "TypeScript",
        "TanStack Query",
        "Turborepo",
        "Drizzle ORM",
        "Redis",
        "Strapi",
        "AWS",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.beyoung.in",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Caching case study",
          href: "/blog/how-we-cut-aws-spend-by-50-percent",
          icon: <NotebookIcon className="size-3" />,
        },
        {
          type: "Bundle case study",
          href: "/blog/trimming-first-load-js-nextjs-storefront",
          icon: <NotebookIcon className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "Plango",
      href: "https://www.plango.in",
      appStore: "https://apps.apple.com/app/plango-real-life-activities/id6762561781",
      playStore: "https://play.google.com/store/apps/details?id=com.plango",
      dates: "2024",
      role: "Side project, co-built",
      description:
        "Safety-first social activity app for iOS and Android with KYC verification, escrow payments, in-app chat, and an admin panel. Reached 10K+ downloads.",
      technologies: [
        "React Native",
        "Expo",
        "Hono",
        "Supabase",
        "Neon",
        "Cloudflare",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.plango.in",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "App Store",
          href: "https://apps.apple.com/app/plango-real-life-activities/id6762561781",
          icon: <SiAppstore className="size-3" aria-hidden />,
        },
        {
          type: "Google Play",
          href: "https://play.google.com/store/apps/details?id=com.plango",
          icon: <SiGoogleplay className="size-3" aria-hidden />,
        },
      ],
      image: "",
    },
    {
      title: "Uiverse.io Components",
      // TODO: point href at your Uiverse profile page.
      href: "https://uiverse.io",
      dates: "2023 – Present",
      role: "Top 5 global contributor",
      description:
        "Published 50+ open-source CSS, Tailwind, and React UI components with 600K+ total views, ranking among the top 5 contributors worldwide.",
      technologies: ["CSS", "Tailwind CSS", "React"],
      links: [
        {
          type: "Uiverse",
          href: "https://uiverse.io",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
    },
    {
      title: "Woggles.in",
      href: "https://woggles.in",
      dates: "2024 – Present",
      role: "Group company",
      description:
        "Ongoing feature development and performance work for a D2C eyewear e-commerce brand in the Beyoung group.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      links: [
        {
          type: "Website",
          href: "https://woggles.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
    },
  ],
} as const;
