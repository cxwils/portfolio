import { EntryList } from "@/components/EntryList";
import { ProjectCard } from "@/components/ProjectCard";
import { now, previously, profile, projects } from "@/data/site";
import Image from "next/image";
import type { ReactNode } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const icons: Record<string, ReactNode> = {
  GitHub: <FaGithub />,
  LinkedIn: <FaLinkedin />,
  Email: <FaEnvelope />,
};

export default function Home() {
  const links = profile.links.filter((l) => l.href);

  return (
    <main className="mx-auto w-full max-w-5xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
      <header className="mx-auto max-w-2xl">
  <div className="flex items-center gap-5 sm:gap-6">
    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-32">
      <Image
        src={profile.photo}
        alt={`Photo of ${profile.name}`}
        fill
        sizes="128px"
        priority
        className="object-cover object-[50%_70%]"
      />
    </div>
    <div>
      <h1 className="text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-2 text-lg font-medium text-garnet sm:text-xl">
        {profile.role}
      </p>
    </div>
  </div>

  <p className="mt-6 text-muted">{profile.intro}</p>
  <p className="mt-1 text-sm text-muted">{profile.location}</p>

        {links.length > 0 ? (
          <nav aria-label="Profiles" className="mt-6 flex flex-wrap gap-5">
            {links.map((l) => (
              <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={l.label}
              title={l.label}
              className="text-2xl text-muted transition-colors hover:text-garnet"
          >
        {icons[l.label]}
      </a>
    ))}
  </nav>
) : null}
      </header>

      <div className="mx-auto mt-16 grid max-w-2xl gap-10">
        <EntryList heading="Education" entries={now} />
        <EntryList heading="Experience" entries={previously} />
      </div>

      <section aria-labelledby="projects" className="mt-24">
        <h2
          id="projects"
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Things I&apos;ve built
        </h2>
        <div className="mt-10 grid gap-x-10 gap-y-14 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </main>
  );
}