"use client";

import { useState } from "react";
import Image, { ImageLoaderProps } from "next/image";

type Props = {
  uuid: string;
  alt: string;
};

export default function UploadcareImage({ uuid, alt }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  const loader = (
    { src: uuid, width }: ImageLoaderProps,
    isThumbnail: boolean,
  ): string => {
    if (isThumbnail) {
      return `https://ucarecdn.com/${uuid}/-/resize/100x/-/blur/50/-/quality/lightest/`;
    }

    return `https://ucarecdn.com/${uuid}/-/resize/${width}x/`;
  };

  return (
    <div className="relative h-full w-full">
      <Image
        sizes="10px"
        src={uuid}
        alt={alt + "(thumbnail)"}
        fill
        className="h-full w-full object-cover"
        loader={(p) => loader(p, true)}
      />
      <Image
        src={uuid}
        alt={alt}
        fill
        className={`h-full w-full object-cover transition-opacity duration-200 ease-in-out ${isLoading ? "opacity-0" : "opacity-100"}`}
        loader={(p) => loader(p, false)}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
