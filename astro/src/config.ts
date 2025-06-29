import type { SocialObjects } from "./types";
import type { Site } from "./types";

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
};

export const LOGO_IMAGE = {
  enable: false,
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
    linkTitle: `Отправить нам имейл ${SITE.title}`,
    active: true,
  },
];
