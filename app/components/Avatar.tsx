"use client";
import Image from "next/image";
import React from "react";

function Avatar() {
  return (
    <Image
      className="rounded-full"
      alt="avatar"
      height={30}
      width={30}
      src="/Images/placeholder.png"
    />
  );
}

export default Avatar;
