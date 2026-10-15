/* eslint-disable @next/next/no-img-element */
import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA, SKILL_ICONS } from "@/data/resume";
import Link from "next/link";
import type { Metadata } from "next";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, FileText, Mail, MapPin } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { getPostSlug, getSortedPosts } from "@/lib/posts";

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold">{children}</h2>;
}

const personJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: DATA.name,
  url: DATA.url,
  image: `${DATA.url}${DATA.avatarUrl}`,
  jobTitle: DATA.title,
  description: DATA.description,
  email: `mailto:${DATA.contact.email}`,
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  worksFor: {
    "@type": "Organization",
    name: DATA.work[0].company,
    url: DATA.work[0].href,
  },
  alumniOf: DATA.education.map((edu) => ({
    "@type": "CollegeOrUniversity",
    name: edu.school,
    url: edu.href,
  })),
  sameAs: [DATA.contact.social.GitHub.url, DATA.contact.social.LinkedIn.url],
  knowsAbout: DATA.skills.flatMap((group) => group.items),
}).replace(/</g, "\\u003c");

export default function Page() {
  const latestPosts = getSortedPosts().slice(0, 3);

  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: personJsonLd }}
      />
      <section id="hero">
        <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
          <div className="gap-3 flex flex-col order-2 md:order-1">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl">
                {DATA.name}
              </h1>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <p className="text-lg font-medium md:text-xl">{DATA.title}</p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <p className="text-muted-foreground max-w-135 md:text-lg leading-relaxed text-pretty">
                {DATA.headline}
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="size-3.5" aria-hidden />
                {DATA.location}
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button asChild size="sm" className="gap-2 rounded-xl shadow">
                  <a href={DATA.resumeUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="size-4" />
                    Resume (PDF)
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="gap-2 rounded-xl">
                  <a href={`mailto:${DATA.contact.email}`}>
                    <Mail className="size-4" />
                    Get in touch
                  </a>
                </Button>
              </div>
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
            <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
              <AvatarImage alt={`Photo of ${DATA.name}`} src={DATA.avatarUrl} />
              <AvatarFallback className="font-bold text-xl">{DATA.initials}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </section>

      <section id="highlights" aria-label="Highlights">
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <dl className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {DATA.highlights.map((item) => (
              <div
                key={item.value}
                className="flex flex-col-reverse gap-1 rounded-xl border bg-card p-4"
              >
                <dt className="text-xs text-muted-foreground leading-snug text-pretty">
                  {item.label}
                </dt>
                <dd className="text-2xl font-semibold tracking-tight tabular-nums">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </BlurFade>
      </section>

      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <SectionHeading>About</SectionHeading>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <SectionHeading>Experience</SectionHeading>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>

      <section id="projects">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <SectionHeading>Projects & Recognition</SectionHeading>
          </BlurFade>
          <ProjectsSection />
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <SectionHeading>Skills</SectionHeading>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
            <div className="flex flex-col gap-5">
              {DATA.skills.map((group) => (
                <div
                  key={group.category}
                  className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-4"
                >
                  <h3 className="text-sm font-medium sm:pt-1">{group.category}</h3>
                  <ul className="flex flex-wrap gap-1.5">
                    {group.items.map((skill) => {
                      const Icon = SKILL_ICONS[skill];
                      return (
                        <li
                          key={skill}
                          className="border bg-background border-border rounded-lg h-7 w-fit px-2.5 flex items-center gap-1.5 text-sm"
                        >
                          {Icon && <Icon className="size-3.5" aria-hidden />}
                          {skill}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <SectionHeading>Education</SectionHeading>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education) => (
              <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 2} inView>
                <Link
                  href={education.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-3 justify-between group"
                >
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    <img
                      src={education.logoUrl}
                      alt={`${education.school} logo`}
                      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border overflow-hidden object-contain flex-none bg-background"
                    />
                    <div className="flex-1 min-w-0 flex flex-col gap-1">
                      <h3 className="font-semibold leading-none flex items-center gap-2">
                        {education.school}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                          aria-hidden
                        />
                      </h3>
                      <p className="text-sm text-muted-foreground">{education.degree}</p>
                    </div>
                  </div>
                  <span className="text-xs tabular-nums text-muted-foreground text-right flex-none">
                    {education.start} – {education.end}
                  </span>
                </Link>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {latestPosts.length > 0 && (
        <section id="writing">
          <div className="flex min-h-0 flex-col gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY} inView>
              <div className="flex items-baseline justify-between gap-4">
                <SectionHeading>Writing</SectionHeading>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  All posts →
                </Link>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
              <ul className="flex flex-col gap-4">
                {latestPosts.map((post) => (
                  <li key={getPostSlug(post)}>
                    <Link
                      href={`/blog/${getPostSlug(post)}`}
                      className="group flex flex-col gap-1"
                    >
                      <span className="font-medium tracking-tight group-hover:underline underline-offset-4">
                        {post.title}
                      </span>
                      <span className="text-sm text-muted-foreground text-pretty">
                        {post.summary}
                      </span>
                      <time
                        dateTime={post.publishedAt}
                        className="text-xs text-muted-foreground"
                      >
                        {formatDate(post.publishedAt)}
                      </time>
                    </Link>
                  </li>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>
      )}

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY} inView>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
