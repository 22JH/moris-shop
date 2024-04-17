"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function BackBtn({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return <div onClick={() => router.back()}>{children}</div>;
}
