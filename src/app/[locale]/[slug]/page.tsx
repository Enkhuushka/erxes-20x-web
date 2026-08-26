import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { getServerApolloClient } from "@/lib/apollo/server-client";
import { CP_PAGES, type Page, type CpPagesData } from "@/graphql/cms/queries/page";
import ContactForm from "@/components/sections/ContactForm";

const staticSlugs = ["about", "services", "team", "contact"];

export async function generateStaticParams() {
  return staticSlugs.flatMap((slug) => [
    { locale: "mn", slug },
    { locale: "en", slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const page = await fetchPage(slug, locale);
  const title = page?.name || `${slug} — erxes 20x`;
  return {
    title: `${title} — ${t("defaultTitle")}`,
    description: page?.description || t("homeDescription"),
  };
}

async function fetchPage(slug: string, locale: string): Promise<Page | null> {
  try {
    const client = await getServerApolloClient();
    const { data } = await client.query<CpPagesData>({
      query: CP_PAGES,
      variables: { language: locale },
      fetchPolicy: "no-cache",
    });
    const pages: Page[] = data?.cpPages || [];
    return pages.find((p) => p.slug === slug) || null;
  } catch {
    return null;
  }
}

export default async function StaticPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const page = await fetchPage(slug, locale);

  if (!page && !staticSlugs.includes(slug)) {
    notFound();
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-background px-6 py-16 lg:px-10 lg:py-24">
      <article className="mx-auto max-w-[800px]">
        <h1 className="mb-6 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground">
          {page?.name || slug}
        </h1>
        {page?.description && (
          <p className="mb-10 text-lg text-muted-foreground">{page.description}</p>
        )}
        {page?.content ? (
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        ) : (
          <FallbackContent slug={slug} locale={locale} />
        )}
      </article>
    </div>
  );
}

async function FallbackContent({
  slug,
  locale,
}: {
  slug: string;
  locale: string;
}) {
  const t = await getTranslations({ locale, namespace: "contact" });

  if (slug === "contact") {
    return (
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-foreground">{t("title")}</h2>
          <p className="mt-2 text-muted-foreground">{t("lead")}</p>
          <dl className="mt-6 space-y-3 text-sm text-muted-foreground">
            <div>
              <dt className="font-semibold text-foreground">{t("emailLabel")}</dt>
              <dd>hello@erxes.io</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">{t("phoneLabel")}</dt>
              <dd>+976 7777-8888</dd>
            </div>
          </dl>
        </div>
        <ContactForm />
      </div>
    );
  }

  return (
    <p className="text-muted-foreground">
      {locale === "mn"
        ? "Уучлаарай, энэ хуудасны агуулга одоогоор бэлэн биш байна."
        : "This page content is not available yet."}
    </p>
  );
}
