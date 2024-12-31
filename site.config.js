const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Snowclik",
    image: "/avatar.webp", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Creador de contenido",
    bio: "¡Hola a todos! Me llamo Snowclik pero puedes decirme Snow, hago contenido de discord, gameplays, streams de juegos como minecraft, roblox, de mi tarea y más",
    email: "",
    linkedin: "",
    github: "",
    instagram: "snowclik",
    youtube: "snowclik",
  },
  projects: [
    {
      name: `Redes sociales`,
      href: "https://bento.me/snowclik",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Snowclik Blog",
    description: "Bienvenido a Snowclik blog!",
    scheme: "system", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://snowclik-blog.vercel.app/",
  since: 2024, // If leave this empty, current year will be used.
  lang: "es-ES", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: true,
    config: {
      host: "https://cusdis.com",
      appid: "b4f33d02-67da-4c38-8ada-c1239f2706fe", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }