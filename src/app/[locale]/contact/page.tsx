import { getTranslations } from "next-intl/server";
import ContactForm from "@/components/sections/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: t("title"),
    description: t("lead"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <div className="min-h-[calc(100vh-64px)] bg-background px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[900px]">
        <div className="mb-10 text-center">
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground">
            {t("title")}
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">{t("lead")}</p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="rounded-[16px] border border-border bg-card p-6 md:p-8">
            <h2 className="text-xl font-semibold text-foreground">{t("title")}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t("lead")}</p>
            <dl className="mt-6 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-foreground">{t("emailLabel")}</dt>
                <dd className="text-muted-foreground">hello@erxes.io</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">{t("phoneLabel")}</dt>
                <dd className="text-muted-foreground">+976 7777-8888</dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
