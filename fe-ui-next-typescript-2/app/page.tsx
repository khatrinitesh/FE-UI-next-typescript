"use client";

import { getApod } from "@/api/nasaApi";
import { ApodResponse } from "@/interface/common";
import { useEffect, useState } from "react";

export default function Home() {
  const [apod, setApod] = useState<ApodResponse | null>(null);

  useEffect(() => {
    getApod().then(setApod).catch(console.error);
  }, []);

  if (!apod) return <p>Loading...</p>;
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1>{apod.title}</h1>
      {apod.media_type === "image" && (
        <img src={apod.url} alt={apod.title} width={500} />
      )}
      <p>{apod.explanation}</p>
      <small>{apod.date}</small>
    </div>
  );
}
