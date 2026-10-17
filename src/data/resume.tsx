import { Icons } from "@/components/icons";
import { FileText, HomeIcon, NotebookIcon } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiDocker,
  SiClaude,
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
  "Hi Harsh, I found your portfolio and wanted to say hi."
)}`;

export const SKILL_ICONS: Record<string, IconType> = {
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "React Native": SiReact,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Redis: SiRedis,
  AWS: FaAws,
  Docker: SiDocker,
  "Claude Code": SiClaude,
};

export const DATA = {
  name: "Harsh Gupta",
  initials: "HG",
  title: "Full-Stack Software Engineer",
  url: siteUrl,
  location: "Udaipur, India",
  locationLink: "https://www.google.com/maps/place/Udaipur",
  availability: "Up for anything fun, paid or free",
  headline:
    "I build web and mobile apps end to end, from the storefront to the AWS bill.",
  description:
    "Harsh Gupta, full-stack software engineer in Udaipur. Works on web and mobile at Beyoung, designed and architected Plango, and is a top 5 contributor on Uiverse.io.",
  summary:
    "I grew up in **Sidhi**, a small town in Madhya Pradesh, and studied engineering in Bhopal. In college I still didn't know what I wanted to do. I heard about freelancing, tried graphic design, and didn't enjoy it. Then I built my first website by following a tutorial, and that one stuck.\n\nI got serious with the Zero To Mastery web developer course on Udemy, then courses in UI/UX and frontend, and landed my first internship right after college. First I wanted pages to look exactly right, then I wanted them to load fast. Each fix led to the next problem, and before long I was working on APIs, databases, mobile apps, and the cloud bill too. People started to notice the work, and somewhere along the way I fell in love with it. I still learn something new every day, usually after work.\n\nThese days I'm a software engineer at **Beyoung**, an online fashion brand, where I look after the website, mobile app, backend, and AWS. I still build things on the side, and when I figure something out, I [write it up](/blog).",
  avatarUrl: "/harsh-gupta.jpg",
  resumeUrl: "/harsh-gupta-resume.pdf",
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "AWS",
    "Docker",
    "Claude Code",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/harsh-gupta-resume.pdf", icon: FileText, label: "Resume" },
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
        navbar: false,
      },
    },
  },

  journey: [
    { city: "Sidhi", region: "Madhya Pradesh", label: "Grew up and finished school" },
    {
      city: "Bhopal",
      region: "Madhya Pradesh",
      label: "College, my first website, and my first job",
      years: "2018–24",
    },
    {
      city: "Ahmedabad",
      region: "Gujarat",
      label: "First move for work",
      years: "2024",
    },
    {
      city: "Udaipur",
      region: "Rajasthan",
      label: "Joined Beyoung, home for now",
      years: "Now",
      current: true,
    },
  ],

  // Optional personal section; it renders only once something is filled in.
  // Each list shows as its own card, and empty lists are skipped.
  personal: {
    intro:
      "Away from the keyboard, I'm at the gym or in the pool, at the theatre for the next big release, or watching Formula 1 and the IPL.",
    // Each book links to a Goodreads search unless it has its own `href`.
    // The first six books show before "Show all", so lead with the favourites.
    books: {
      reading: { title: "The Daily Stoic", author: "Ryan Holiday" },
      shelves: [
        {
          label: "Mark Manson, the author I keep coming back to",
          books: [
            { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson" },
            { title: "Everything Is F*cked", author: "Mark Manson" },
            { title: "Models", author: "Mark Manson" },
          ],
        },
        {
          label: "Philosophy & fiction",
          books: [
            { title: "Notes from Underground", author: "Fyodor Dostoevsky" },
            { title: "The Stranger", author: "Albert Camus" },
            { title: "The Metamorphosis", author: "Franz Kafka" },
            { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" },
            { title: "Man's Search for Meaning", author: "Viktor E. Frankl" },
            { title: "The Courage to Be Disliked", author: "Ichiro Kishimi & Fumitake Koga" },
          ],
        },
        {
          label: "Building things",
          books: [
            { title: "Zero to One", author: "Peter Thiel" },
            { title: "The Third Door", author: "Alex Banayan" },
            { title: "The Pathless Path", author: "Paul Millerd" },
            { title: "The 4-Hour Work Week", author: "Tim Ferriss" },
            { title: "Steve Jobs", author: "Walter Isaacson" },
            { title: "The Millionaire Fastlane", author: "MJ DeMarco" },
          ],
        },
        {
          label: "How we think",
          books: [
            { title: "Sapiens", author: "Yuval Noah Harari" },
            { title: "Nexus", author: "Yuval Noah Harari" },
            { title: "Thinking, Fast and Slow", author: "Daniel Kahneman" },
            { title: "Four Thousand Weeks", author: "Oliver Burkeman" },
            { title: "The Psychology of Money", author: "Morgan Housel" },
            { title: "Atomic Habits", author: "James Clear" },
            { title: "Digital Minimalism", author: "Cal Newport" },
            { title: "Storyworthy", author: "Matthew Dicks" },
          ],
        },
      ],
    },
    watching: {
      summary: "Horror, sci-fi, and thrillers, plus a few all-time favourites.",
      titles: [
        "Harry Potter",
        "Game of Thrones",
        "Peaky Blinders",
        "Project Hail Mary",
        "The Odyssey",
        "F1: The Movie",
        "Interstellar",
        "Tumbbad",
      ],
    },
    music: {
      summary: "Desi hip hop.",
      artists: ["Naam Sujal", "Seedhe Maut", "KR$NA", "Raftaar", "Karma"],
      // A Spotify playlist link, e.g. https://open.spotify.com/playlist/<id>
      spotifyPlaylistUrl: "" as string,
    },
    // Shown as tags in an "Also into" card; the intro already covers gym, F1, and cricket.
    interests: [] as string[],
    // Photos placed in /public/photos, e.g. { src: "/photos/udaipur.jpg", alt: "Lake Pichola at dusk" }
    photos: [
      {
        src: "/photos/udaipur-lake-pichola-at-night.webp",
        alt: "The City Palace lit up across Lake Pichola at night",
        caption: "Lake Pichola after dark",
      },
      {
        src: "/photos/udaipur-lakeside-marble-pavilion.webp",
        alt: "A carved marble pavilion looking out over a lake and hills",
        caption: "A quiet lakeside afternoon",
      },
      {
        src: "/photos/udaipur-hills-and-lake-view.webp",
        alt: "Green Aravalli hills and a small lake seen from a hilltop",
        caption: "The hills around Udaipur",
      },
    ] as { src: string; alt: string; caption?: string }[],
  },

  // Short on purpose: the full detail lives in the resume PDF.
  work: [
    {
      company: "Beyoung",
      href: "https://www.beyoung.in",
      location: "Udaipur, India",
      title: "Software Engineer",
      logoUrl: "/beyoung-logo.png",
      start: "Nov 2024",
      end: "Present",
      description:
        "I joined as a frontend engineer on a tech team of almost twenty. As the team shrank, more and more of the platform landed with me: the website, mobile app, backend, and AWS setup of a store with around 5,000 visitors a day. Since then I've moved the storefront from Next.js 10 to 16, cut the AWS bill roughly in half, and added error tracking that brought production errors close to zero.",
    },
    {
      company: "Green Apex Infosolutions",
      href: "https://greenapex.com",
      location: "Ahmedabad, India",
      title: "Frontend Engineer",
      logoUrl: "/green-apex-infosolutions-logo.png",
      start: "Feb 2024",
      end: "Nov 2024",
      description:
        "I built client websites from start to finish with Next.js and Strapi, including a luxury travel platform and a site for a US emergency-services company. I set up the CMS so each client's team could update pages on their own, and moved the company's own projects onto a shared component library.",
    },
    {
      company: "Netmagnetic",
      href: "https://netmagnetic.com",
      location: "Bhopal, India",
      title: "Frontend Engineer",
      logoUrl: "/netmagnetic-logo.png",
      start: "Sep 2022",
      end: "Feb 2024",
      description:
        "Where I started out, first remote and then hybrid in Bhopal. I worked on a point-of-sale plugin for WooCommerce stores whose styles had grown to about 50,000 lines of legacy CSS and were hard to change safely. I rewrote them as modular Sass in under 20,000 lines, which made the interface much easier to maintain. I also built React features for the plugin and redesigned the company website.",
    },
  ],
  education: [
    {
      school: "LNCT Group of Colleges, Bhopal",
      href: "https://lnct.ac.in",
      degree: "Bachelor of Technology (B.Tech)",
      logoUrl: "/lnct-group-of-colleges-bhopal-logo.jpg",
      schemaType: "CollegeOrUniversity",
      start: "2018",
      end: "2022",
    },
    {
      school: "Shri Ganesh Senior Secondary School, Sidhi",
      href: "https://www.sgsssidhi.edu.in",
      degree: "Class 1 to 12, CBSE",
      logoUrl: "/shri-ganesh-senior-secondary-school-sidhi-logo.jpg",
      schemaType: "HighSchool",
      start: "2006",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Plango",
      href: "https://www.plango.in",
      appStore: "https://apps.apple.com/app/plango-real-life-activities/id6762561781",
      playStore: "https://play.google.com/store/apps/details?id=com.plango",
      dates: "2024",
      role: "Designed & architected",
      description:
        "An app for meeting new people by doing things together in real life. I designed the product end to end and planned its architecture, including the ID checks and secure payments that help people feel safe showing up. It has passed 10K downloads on iOS and Android.",
      technologies: ["React Native", "Expo", "Hono", "Supabase", "Cloudflare"],
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
      image: "/projects/plango-social-activity-app-website.webp",
      imageAlt: "Plango website homepage: Go out, not alone",
      // Brand colors behind the screenshot frame.
      imageBg: "linear-gradient(135deg, #7b2d6e, #c0659f)",
    },
    {
      title: "Uiverse.io Components",
      href: "https://uiverse.io/profile/gharsh11032000",
      dates: "2023 – Present",
      role: "Top 5 contributor",
      description:
        "Buttons, loaders, and other small UI pieces I build in my spare time and give away. So far that's 70 components in CSS, Tailwind, and React, viewed 675K+ times by developers around the world.",
      technologies: ["CSS", "Tailwind CSS", "React"],
      links: [
        {
          type: "Uiverse profile",
          href: "https://uiverse.io/profile/gharsh11032000",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/harsh-gupta-uiverse-profile.webp",
      imageAlt: "Harsh Gupta's Uiverse.io profile with 70 posts and 675K views",
      imageBg: "linear-gradient(135deg, #6d28d9, #db2777)",
    },
  ],
} as const;
