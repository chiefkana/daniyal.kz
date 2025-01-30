import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, F as Fragment } from '../chunks/astro/server_--UVzMgK.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_DGlxq9K3.mjs';
import { a as $$Header, $ as $$LinkButton, d as $$Socials, e as $$Hr, b as $$Footer, c as $$Layout } from '../chunks/Footer_OwRavoxp.mjs';
import { C as Card } from '../chunks/Card_1KyWFnAv.mjs';
import { g as getSortedPosts } from '../chunks/getSortedPosts_BhvKpI_m.mjs';
import { a as SOCIALS, S as SITE } from '../chunks/config_CbFJsLd0.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://daniyal.kz/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  const featuredPosts = sortedPosts.filter(({ data }) => data.featured);
  const recentPosts = sortedPosts.filter(({ data }) => !data.featured);
  const socialCount = SOCIALS.filter((social) => social.active).length;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "astro-j7pv25f6" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "class": "astro-j7pv25f6" })} ${maybeRenderHead()}<main id="main-content" class="astro-j7pv25f6"> <section id="hero" class="astro-j7pv25f6"> <h1 class="astro-j7pv25f6">Добро пожаловать!</h1> <a target="_blank" href="/rss.xml" class="rss-link astro-j7pv25f6" aria-label="rss feed" title="RSS Feed"> <svg xmlns="http://www.w3.org/2000/svg" class="rss-icon astro-j7pv25f6"><path d="M19 20.001C19 11.729 12.271 5 4 5v2c7.168 0 13 5.832 13 13.001h2z" class="astro-j7pv25f6"></path><path d="M12 20.001h2C14 14.486 9.514 10 4 10v2c4.411 0 8 3.589 8 8.001z" class="astro-j7pv25f6"></path><circle cx="6" cy="18" r="2" class="astro-j7pv25f6"></circle> </svg> <span class="sr-only astro-j7pv25f6">RSS Feed</span> </a> <p class="astro-j7pv25f6">
AstroPaper is a minimal, responsive, accessible and SEO-friendly Astro
        blog theme. This theme follows best practices and provides accessibility
        out of the box. Light and dark mode are supported by default. Moreover,
        additional color schemes can also be configured.
</p> <p class="astro-j7pv25f6">
Read the blog posts or check
${renderComponent($$result2, "LinkButton", $$LinkButton, { "className": "underline decoration-dashed underline-offset-4 hover:text-skin-accent astro-j7pv25f6", "href": "https://github.com/satnaing/astro-paper#readme" }, { "default": ($$result3) => renderTemplate`
README
` })} for more info.
</p> ${// only display if at least one social link is enabled
  socialCount > 0 && renderTemplate`<div class="social-wrapper astro-j7pv25f6"> <div class="social-links astro-j7pv25f6">Social Links:</div> ${renderComponent($$result2, "Socials", $$Socials, { "class": "astro-j7pv25f6" })} </div>`} </section> ${renderComponent($$result2, "Hr", $$Hr, { "class": "astro-j7pv25f6" })} ${featuredPosts.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "class": "astro-j7pv25f6" }, { "default": ($$result3) => renderTemplate` <section id="featured" class="astro-j7pv25f6"> <h2 class="astro-j7pv25f6">Featured</h2> <ul class="astro-j7pv25f6"> ${featuredPosts.map(({ data, slug }) => renderTemplate`${renderComponent($$result3, "Card", Card, { "href": `/posts/${slug}/`, "frontmatter": data, "secHeading": false, "class": "astro-j7pv25f6" })}`)} </ul> </section> ${recentPosts.length > 0 && renderTemplate`${renderComponent($$result3, "Hr", $$Hr, { "class": "astro-j7pv25f6" })}`}` })}`} ${recentPosts.length > 0 && renderTemplate`<section id="recent-posts" class="astro-j7pv25f6"> <h2 class="astro-j7pv25f6">Recent Posts</h2> <ul class="astro-j7pv25f6"> ${recentPosts.map(
    ({ data, slug }, index) => index < SITE.postPerIndex && renderTemplate`${renderComponent($$result2, "Card", Card, { "href": `/posts/${slug}/`, "frontmatter": data, "secHeading": false, "class": "astro-j7pv25f6" })}`
  )} </ul> </section>`} <div class="all-posts-btn-wrapper astro-j7pv25f6"> ${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": "/posts/", "class": "astro-j7pv25f6" }, { "default": ($$result3) => renderTemplate`
All Posts
<svg xmlns="http://www.w3.org/2000/svg" class="astro-j7pv25f6"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" class="astro-j7pv25f6"></path> </svg> ` })} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "class": "astro-j7pv25f6" })} ` })} `;
}, "/Users/kanatbektursyn/Documents/pet/daniyal.kz/astro/src/pages/index.astro", undefined);

const $$file = "/Users/kanatbektursyn/Documents/pet/daniyal.kz/astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
