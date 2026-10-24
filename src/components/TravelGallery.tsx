import Image from "next/image";
import type { Photo } from "@/data/site";

export function TravelGallery({ photos }: { photos: Photo[] }) {
  return (
    <section aria-labelledby="travel" className="mt-24">
      <h2
        id="travel"
        className="text-3xl font-bold tracking-tight sm:text-4xl"
      >
        Travel
      </h2>
      <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
        {photos.map((p) => (
          <li
            key={p.src}
            className="group relative aspect-[4/5] overflow-hidden rounded-xl"
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(min-width: 768px) 320px, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <p className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-sm font-medium">
              {p.place}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}