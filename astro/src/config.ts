import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://daniyal.kz/", // replace this with your deployed domain
  author: "Kanat Bektursyn",
  profile: "https://daniyal.kz/",
  desc: "Ваш стиль - Наша мебель. Мебельный дом Даниял!",
  title: "Мебельный дом Даниял",
  ogImage: "og-image.jpg",
  lightAndDarkMode: true,
  productPerIndex: 8,
  productPerPage: 4,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  editPost: {
    url: "https://github.com/satnaing/astro-paper/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "ru", // html lang code. Set this empty and default will be "en"
  langTag: ["ru-RU", "kk-KZ"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/MebelnyiDomDaniyal/",
    linkTitle: `${SITE.title} в Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/daniyal_mebel/",
    linkTitle: `${SITE.title} в Instagram`,
    active: true,
  },
  {
    name: "WhatsApp",
    href: "whatsapp://send?phone=77026596484&text=Здравствуйте! Интересуюсь вашей мебелью",
    linkTitle: `${SITE.title} в WhatsApp`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:shop@daniyal.kz",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
