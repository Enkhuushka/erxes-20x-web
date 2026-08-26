import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import DayPage from "@/components/sections/DayPage";
import { dayDataMn, dayDataEn } from "@/lib/day-data";

const days = ["day-1", "day-2", "day-3", "day-4", "day-5"];

export async function generateStaticParams() {
  return days.flatMap((day) => [
    { locale: "mn", day },
    { locale: "en", day },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; day: string }>;
}) {
  const { locale, day } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const dayNum = parseInt(day.replace("day-", ""), 10);
  const data = locale === "mn" ? dayDataMn[dayNum] : dayDataEn[dayNum];
  return {
    title: data ? `${data.title} — ${t("defaultTitle")}` : t("defaultTitle"),
    description: t("homeDescription"),
  };
}

export default async function DayRoute({
  params,
}: {
  params: Promise<{ locale: string; day: string }>;
}) {
  const { locale, day } = await params;
  const dayNum = parseInt(day.replace("day-", ""), 10);

  if (!days.includes(day) || Number.isNaN(dayNum)) {
    notFound();
  }

  const data = locale === "mn" ? dayDataMn[dayNum] : dayDataEn[dayNum];

  if (!data) {
    notFound();
  }

  return <DayPage day={data} />;
}
