import BlurFade from "@/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA, SKILL_ICONS } from "@/data/resume";
import Link from "next/link";
import type { Metadata } from "next";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import JourneySection from "@/components/section/journey-section";
import PersonalSection, {
  hasPersonalContent,
} from "@/components/section/personal-section";
import ProjectsSection from "@/components/section/projects-section";
import WorkSection from "@/components/section/work-section";
import { LocalTime } from "@/components/local-time";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, FileText, MapPin } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { formatDate } from "@/lib/utils";
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
    "@type": "CollegeOrUniversity",
    name: edu.school,
    url: edu.href,
  })),
  sameAs: [DATA.contact.social.GitHub.url, DATA.contact.social.LinkedIn.url],
  knowsAbout: DATA.skills.flatMap((group) => group.items),
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
          <div className="gap-3 flex flex-col order-2 md:order-1">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <a
                href="#contact"
                className="inline-flex w-fit items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-medium transition-colors hover:bg-muted"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:hidden" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                {DATA.availability}
              </a>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
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
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <p className="text-lg font-medium md:text-xl">{DATA.title}</p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <p className="text-muted-foreground max-w-135 md:text-lg leading-relaxed text-pretty">
                {DATA.headline}
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <p className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-muted-foreground">
                <MapPin className="size-3.5" aria-hidden />
                {DATA.location}
                <span aria-hidden>·</span>
                <LocalTime />
              </p>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 6}>
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <Button asChild size="sm" className="gap-2 rounded-xl shadow">
                  <a href="#contact">
                    Work with me
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="gap-2 rounded-xl">
                  <a
                    href={DATA.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiWhatsapp className="size-4" />
                    WhatsApp
                  </a>
                </Button>
                <Button asChild variant="ghost" size="sm" className="gap-2 rounded-xl">
                  <a href={DATA.resumeUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="size-4" />
                    Resume
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
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
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
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <SectionHeading kicker="~/about">About me</SectionHeading>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="projects">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <SectionHeading kicker="~/work">Selected work</SectionHeading>
          </BlurFade>
          <ProjectsSection />
        </div>
      </section>

      <section id="services">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <SectionHeading kicker="~/services">What I can build for you</SectionHeading>
          </BlurFade>
          <div className="grid gap-3 sm:grid-cols-2">
            {DATA.services.map((service, idx) => (
              <BlurFade
                key={service.title}
                delay={BLUR_FADE_DELAY + idx * 0.05}
                inView
                className="h-full"
              >
                <article className="flex h-full flex-col gap-2 rounded-xl border bg-card p-5">
                  <service.icon className="size-5 text-muted-foreground" aria-hidden />
                  <h3 className="font-semibold leading-tight">{service.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {service.description}
                  </p>
                  <Link
                    href={service.proof.href}
                    {...(service.proof.href.startsWith("http") && {
                      target: "_blank",
                      rel: "noopener noreferrer",
                    })}
                    className="group inline-flex w-fit items-center gap-1 pt-1 text-xs font-medium text-muted-foreground hover:text-foreground"
                  >
                    See it in: {service.proof.label}
                    <ArrowUpRight
                      className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </Link>
                </article>
              </BlurFade>
            ))}
          </div>
          <BlurFade delay={BLUR_FADE_DELAY * 3} inView>
            <dl className="flex flex-col divide-y rounded-xl border">
              {DATA.workStyle.map((item) => (
                <div
                  key={item.label}
                  className="grid gap-1 p-4 sm:grid-cols-[8rem_1fr] sm:gap-4"
                >
                  <dt className="text-sm font-medium">{item.label}</dt>
                  <dd className="text-sm text-muted-foreground text-pretty">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </BlurFade>
        </div>
      </section>

      <section id="experience">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <SectionHeading kicker="~/experience">Experience</SectionHeading>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2} inView>
            <WorkSection />
          </BlurFade>
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY} inView>
            <SectionHeading kicker="~/stack">Toolbox</SectionHeading>
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
