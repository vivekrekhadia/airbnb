"use client";
import Image from "next/image";
import React from "react";

interface AvatarProps {
  src: string | null | undefined;
}

function Avatar({ src }: AvatarProps) {
  return (
    <Image
      className="rounded-full"
      alt="avatar"
      height={30}
      width={30}
      src={src || "/Images/placeholder.png"}
    />
  );
}

export default Avatar;
