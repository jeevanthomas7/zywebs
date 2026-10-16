import { Test } from "@/components/test";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Color Test | ZYWEBS",
  description: "Test brand colors on black and white backgrounds with buttons and text.",
};

export default function TestPage() {
  return (
    <main className="w-full min-h-screen">
      <Test />
    </main>
  );
}
