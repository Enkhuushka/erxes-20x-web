import { useTranslations } from "next-intl";
import { Wifi, Lock } from "lucide-react";

export default function WifiInfo() {
  const t = useTranslations("wifi");

  return (
    <section className="bg-background px-6 py-12 lg:px-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="relative overflow-hidden rounded-[24px] border border-border bg-card p-6 md:p-10">
          <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-[0_0_24px_rgba(224,86,253,0.25)]">
                <Wifi className="h-7 w-7" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  {t("eyebrow")}
                </p>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                  {t("title")}
                </h2>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-[12px] border border-border bg-background-soft px-4 py-3">
                <Wifi className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t("ssidLabel")}
                  </p>
                  <p className="text-lg font-bold text-foreground">{t("ssid")}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-[12px] border border-border bg-background-soft px-4 py-3">
                <Lock className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t("passwordLabel")}
                  </p>
                  <p className="text-lg font-bold text-foreground">{t("password")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
