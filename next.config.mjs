import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "api.qrserver.com", pathname: "/**" },
      { protocol: "https", hostname: "enkhee.next.erxes.io", pathname: "/**" },
    ],
  },
  env: {
    NEXT_PUBLIC_ERXES_ENDPOINT: "https://enkhee.next.erxes.io/gateway/graphql",
    NEXT_PUBLIC_ERXES_APP_TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRQb3J0YWxJZCI6IkEzTkIxYXpVdThHb3YwbmNYaUZDOSIsImlhdCI6MTc4NzcxOTIxOX0.mCqIS3ftSLyjkYxjyKh5BqZMh85zpPA7ZtdaIukBAOw",
    NEXT_PUBLIC_ERXES_CMS_ID: "6a8e6fb7ed3454d670e465d1",
    ERXES_APP_TOKEN: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRQb3J0YWxJZCI6IkEzTkIxYXpVdThHb3YwbmNYaUZDOSIsImlhdCI6MTc4NzcxOTIxOX0.mCqIS3ftSLyjkYxjyKh5BqZMh85zpPA7ZtdaIukBAOw",
  },
};

export default withNextIntl(nextConfig);
