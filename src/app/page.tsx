import BlurFade from "@/components/magicui/blur-fade";
import { DATA, SKILL_ICONS } from "@/data/resume";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import JourneySection from "@/components/section/journey-section";
import PersonalSection, {
  hasPersonalContent,
} from "@/components/section/personal-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection, {
  EducationSection,
} from "@/components/section/work-section";
import { FileText, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn, formatDate } from "@/lib/utils";
import { getPostSlug, getSortedPosts } from "@/lib/posts";

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

function SectionHeading({
  kicker,
  children,
}: {
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-xs text-muted-foreground" aria-hidden>
        {kicker}
      </span>
      <h2 className="text-xl font-bold tracking-tight">{children}</h2>
    </div>
  );
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
  telephone: DATA.contact.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Udaipur",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: DATA.work[0].company,
    url: DATA.work[0].href,
  },
  alumniOf: DATA.education.map((edu) => ({
    "@type": edu.schemaType,
    name: edu.school,
    url: edu.href,
  })),
  sameAs: [DATA.contact.social.GitHub.url, DATA.contact.social.LinkedIn.url],
  knowsAbout: DATA.skills,
}).replace(/</g, "\\u003c");

export default function Page() {
  const latestPosts = getSortedPosts().slice(0, 3);
  const showPersonal = hasPersonalContent();

  return (
    <main className="min-h-dvh flex flex-col gap-16 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: personJsonLd }}
      />
      <section id="hero">
        <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
          <div className="gap-4 flex flex-col order-2 md:order-1">
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <p className="inline-flex w-fit items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                <span aria-hidden className="relative flex size-2">
                  <span className="absolute inline-flex size-full rounded-full bg-emerald-400 opacity-75 animate-ping motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                {DATA.availability}
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl">
                {DATA.name}
                <span
                  aria-hidden
                  className="ml-0.5 font-mono font-normal text-muted-foreground animate-blink motion-reduce:animate-none"
                >
                  _
                </span>
              </h1>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <p className="text-muted-foreground max-w-135 md:text-lg leading-relaxed text-pretty">
                {DATA.headline}
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href="#contact"
                  className={cn(buttonVariants(), "gap-2 rounded-full")}
                >
                  <Mail className="size-4" aria-hidden />
                  Get in touch
                </a>
                <a
                  href={DATA.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "gap-2 rounded-full"
                  )}
                >
                  <FileText className="size-4" aria-hidden />
                  Resume
                </a>
              </div>
            </BlurFade>
          </div>
          <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
            <div className="relative size-24 md:size-32 overflow-hidden border rounded-full shadow-lg ring-4 ring-muted bg-muted">
              <Image
                src={DATA.avatarUrl}
                alt={`Photo of ${DATA.name}`}
                fill
                sizes="(min-width: 768px) 128px, 96px"
                priority
                className="object-cover"
              />
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <SectionHeading kicker="~/about">About me</SectionHeading>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="journey">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <SectionHeading kicker="~/journey">From Sidhi to Udaipur</SectionHeading>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
            <JourneySection />
          </BlurFade>
        </div>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <SectionHeading kicker="~/work">Work</SectionHeading>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
            <WorkSection />
          </BlurFade>
        </div>
      </section>

      <section id="projects">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <SectionHeading kicker="~/side-projects">Side projects</SectionHeading>
          </BlurFade>
          <ProjectsSection />
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <SectionHeading kicker="~/education">Education</SectionHeading>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
            <EducationSection />
          </BlurFade>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <SectionHeading kicker="~/stack">Skills</SectionHeading>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
            <ul className="flex flex-wrap gap-1.5">
              {DATA.skills.map((skill) => {
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
          </BlurFade>
        </div>
      </section>

      {showPersonal && (
        <section id="off-the-clock">
          <div className="flex min-h-0 flex-col gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY} inView>
              <SectionHeading kicker="~/off-the-clock">Off the clock</SectionHeading>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
              <PersonalSection />
            </BlurFade>
          </div>
        </section>
      )}

      {latestPosts.length > 0 && (
        <section id="writing">
          <div className="flex min-h-0 flex-col gap-y-6">
            <BlurFade delay={BLUR_FADE_DELAY} inView>
              <div className="flex items-end justify-between gap-4">
                <SectionHeading kicker="~/writing">Writing</SectionHeading>
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
