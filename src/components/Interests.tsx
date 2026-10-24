export function Interests({ items }: { items: string[] }) {
  return (
    <section aria-labelledby="interests">
      <h2 id="interests" className="text-xl font-semibold tracking-tight">
        Interests
      </h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-rule px-3.5 py-1 text-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}