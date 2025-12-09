"use client";

import { FadeIn } from "@/components/animation";

import { ChartAreaInteractive } from "./_components/chart-area-interactive";
import { DataTable } from "./_components/data-table";
import data from "./_components/data.json";
import { SectionCards } from "./_components/section-cards";

export default function Page() {
  return (
    <div className="@container/main flex flex-col gap-4 md:gap-6">
      <FadeIn>
        <SectionCards />
      </FadeIn>
      <FadeIn delay={100}>
        <ChartAreaInteractive />
      </FadeIn>
      <FadeIn delay={200}>
        <DataTable data={data} />
      </FadeIn>
    </div>
  );
}
