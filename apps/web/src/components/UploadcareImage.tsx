"use client";

import { useState } from "react";
import Image, { ImageLoaderProps } from "next/image";

type Props = {
  uuid: string;
  alt: string;
  sizes?: string;
};

export default function UploadcareImage({ uuid, alt, sizes }: Props) {
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
        priority
      />
      <Image
        sizes={sizes}
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
