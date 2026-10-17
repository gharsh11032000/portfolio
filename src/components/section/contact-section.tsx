import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Icons } from "@/components/icons";
import { DATA } from "@/data/resume";
import { Mail } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const methods = [
  {
    label: "Email",
    value: DATA.contact.email,
    href: `mailto:${DATA.contact.email}?subject=${encodeURIComponent("Hello from your website")}`,
    icon: Mail,
    wide: true,
  },
  {
    label: "WhatsApp",
    value: DATA.contact.phoneDisplay,
    href: DATA.contact.whatsappUrl,
    icon: SiWhatsapp,
  },
  {
    label: "LinkedIn",
    value: "in/hrshgupta",
    href: DATA.contact.social.LinkedIn.url,
    icon: Icons.linkedin,
  },
];

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-6 pt-10 sm:p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Get in touch
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Building something fun? Count me in, paid or free. Whether it&apos;s
          a project, a job, or a question about something I wrote, email is
          the best way to reach me.
        </p>
        <ul className="grid w-full gap-2 pt-2 text-left sm:grid-cols-2">
          {methods.map((method) => {
            const isExternal = method.href.startsWith("http");
            return (
              <li
                key={method.label}
                className={"wide" in method ? "sm:col-span-2" : undefined}
              >
                <a
                  href={method.href}
                  {...(isExternal && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="flex items-center gap-3 rounded-xl border bg-background/80 p-3 backdrop-blur transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span className="flex size-9 flex-none items-center justify-center rounded-lg border bg-card">
                    <method.icon className="size-4" aria-hidden />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="text-xs text-muted-foreground">
                      {method.label}
                    </span>
                    <span className="truncate text-sm font-medium">
                      {method.value}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href={DATA.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Download my resume (PDF)
        </a>
      </div>
    </div>
  );
}
