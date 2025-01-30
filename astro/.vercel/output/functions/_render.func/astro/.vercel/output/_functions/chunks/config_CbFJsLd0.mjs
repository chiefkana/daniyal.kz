const SITE = {
  website: "https://daniyal.kz/",
  // replace this with your deployed domain
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
  scheduledPostMargin: 15 * 60 * 1e3,
  // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/satnaing/astro-paper/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true
  }
};
const LOCALE = {
  lang: "ru",
  // html lang code. Set this empty and default will be "en"
  langTag: ["ru-RU", "kk-KZ"]
  // BCP 47 Language Tags. Set this empty [] to use the environment default
};
const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 216,
  height: 46
};
const SOCIALS = [
  {
    name: "Facebook",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Facebook`,
    active: true
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/daniyal_mebel/",
    linkTitle: `${SITE.title} on Instagram`,
    active: true
  },
  {
    name: "WhatsApp",
    href: "whatsapp://send?phone=77026596484&text=Здравствуйте! Интересуюсь вашей мебелью",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: true
  },
  {
    name: "Mail",
    href: "mailto:shop@daniyal.kz",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true
  }
];

export { LOCALE as L, SITE as S, SOCIALS as a, LOGO_IMAGE as b };
