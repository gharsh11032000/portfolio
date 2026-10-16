import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsSection() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {DATA.projects.map((project, id) => (
        <BlurFade
          key={project.title}
          delay={BLUR_FADE_DELAY + id * 0.05}
          inView
          className="h-full"
        >
          <ProjectCard
            href={project.href}
            title={project.title}
            description={project.description}
            dates={project.dates}
            role={project.role}
            appStore={"appStore" in project ? project.appStore : undefined}
            playStore={"playStore" in project ? project.playStore : undefined}
            tags={project.technologies}
            image={project.image}
            imageAlt={"imageAlt" in project ? project.imageAlt : undefined}
            imageBg={"imageBg" in project ? project.imageBg : undefined}
            links={project.links}
          />
        </BlurFade>
      ))}
    </div>
  );
}
