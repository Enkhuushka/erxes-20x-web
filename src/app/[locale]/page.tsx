import { getTranslations } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Curriculum from "@/components/sections/Curriculum";
import CtaBanner from "@/components/sections/CtaBanner";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Curriculum />
      <CtaBanner />
    </>
  );
}
