import type { Entry } from "@/data/site";

export function EntryList({
  heading,
  entries,
}: {
  heading: string;
  entries: Entry[];
}) {
  return (
    <section aria-labelledby={heading}>
      <h2 id={heading} className="text-xl font-semibold tracking-tight">
        {heading}
      </h2>
      <ul className="mt-4 divide-y divide-rule border-y border-rule">
        {entries.map((e) => (
          <li
            key={e.title + e.org}
            className="flex flex-col gap-0.5 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <div>
              <p className="font-medium">{e.title}</p>
              {e.detail ? (
                <p className="text-sm text-muted">{e.detail}</p>
              ) : null}
            </div>
            <p className="text-muted sm:text-right">
              {e.href ? (
                <a
                  href={e.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-rule underline-offset-4 hover:decoration-garnet"
                >
                  {e.org}
                </a>
              ) : (
                e.org
              )}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}