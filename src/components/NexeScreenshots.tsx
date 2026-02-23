"use client";

import { useState } from "react";
import Image from "next/image";
import screenshot1 from "@/assets/images/1.png";
import screenshot2 from "@/assets/images/2.png";
import screenshot3 from "@/assets/images/3.png";
import screenshot4 from "@/assets/images/4.png";

const screenshots = [
  { src: screenshot1, alt: "Nexe mobile screen 1" },
  { src: screenshot2, alt: "Nexe mobile screen 2" },
  { src: screenshot3, alt: "Nexe mobile screen 3" },
  { src: screenshot4, alt: "Nexe mobile screen 4" },
];

export default function NexeScreenshots() {
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {screenshots.map((shot, index) => (
        <div
          key={shot.alt}
          className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_20px_40px_-30px_rgba(15,23,42,0.35)] dark:shadow-[0_20px_40px_-30px_rgba(0,0,0,0.7)]"
        >
          {!loaded[index] && (
            <div className="absolute inset-0 animate-pulse bg-slate-200/80 dark:bg-white/10" />
          )}
          <Image
            src={shot.src}
            alt={shot.alt}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={`h-full w-full object-cover transition-opacity duration-500 ${
              loaded[index] ? "opacity-100" : "opacity-0"
            }`}
            onLoadingComplete={() =>
              setLoaded((prev) => ({ ...prev, [index]: true }))
            }
          />
        </div>
      ))}
    </div>
  );
}
