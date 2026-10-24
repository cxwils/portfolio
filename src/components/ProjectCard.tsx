import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "@/data/site";

export function ProjectCard({ project }: { project: Project }) {
  const { tint } = project;
  const vars = {
    "--tint-light": tint.light,
    "--tint-dark": tint.dark,
    "--ink-light": tint.ink.light,
    "--ink-dark": tint.ink.dark,
  } as CSSProperties;

  const links = project.links.filter((l) => l.href);

  return (
    <article className="group flex flex-col">
      <div
        style={vars}
        className="preview relative aspect-[16/10] overflow-hidden rounded-xl"
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 768px) 480px, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <p
            aria-hidden="true"
            className="absolute inset-0 flex items-end p-6 text-4xl font-bold leading-[1.02] tracking-tight sm:text-[2.6rem]"
          >
            {project.title}
          </p>
        )}
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight">
        {project.title}
      </h3>
      <p className="text-sm text-muted">
        {project.role}, {project.year}
      </p>
      <p className="mt-2 max-w-prose text-[0.97rem] text-ink/90">
        {project.summary}
      </p>

      <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies">
        {project.tags.map((t) => (
          <li
            key={t}
            className="rounded-full border border-rule px-2.5 py-0.5 text-xs text-muted"
          >
            {t}
          </li>
        ))}
      </ul>

      {links.length > 0 ? (
        <p className="mt-4 flex gap-5 text-sm font-medium">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-garnet underline decoration-transparent underline-offset-4 transition-colors hover:decoration-current"
            >
              {l.label}
            </a>
          ))}
        </p>
      ) : null}
    </article>
  );
}
