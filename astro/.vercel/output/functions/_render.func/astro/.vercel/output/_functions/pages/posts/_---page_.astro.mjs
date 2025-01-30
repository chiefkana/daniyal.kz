import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_--UVzMgK.mjs';
import 'kleur/colors';
import { S as SITE } from '../../chunks/config_CbFJsLd0.mjs';
import { a as $$Header, b as $$Footer, c as $$Layout } from '../../chunks/Footer_OwRavoxp.mjs';
import { $ as $$Main } from '../../chunks/Main_Cl2SF2qE.mjs';
import { $ as $$Pagination } from '../../chunks/Pagination_Baqa9oRi.mjs';
import { C as Card } from '../../chunks/Card_1KyWFnAv.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DGlxq9K3.mjs';
import { g as getSortedPosts } from '../../chunks/getSortedPosts_BhvKpI_m.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://daniyal.kz/");
const $$Posts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Posts;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Posts | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "posts" })} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Posts", "pageDesc": "All the articles I've posted." }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<ul> ${page.data.map(({ data, slug }) => renderTemplate`${renderComponent($$result3, "Card", Card, { "href": `/posts/${slug}/`, "frontmatter": data })}`)} </ul> ` })} ${renderComponent($$result2, "Pagination", $$Pagination, { "page": page })} ${renderComponent($$result2, "Footer", $$Footer, { "noMarginTop": page.lastPage > 1 })} ` })}`;
}, "/Users/kanatbektursyn/Documents/pet/daniyal.kz/astro/src/layouts/Posts.astro", undefined);

const $$Astro = createAstro("https://daniyal.kz/");
const getStaticPaths = async ({ paginate }) => {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return paginate(getSortedPosts(posts), { pageSize: SITE.postPerPage });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Posts", $$Posts, { "page": page })}`;
}, "/Users/kanatbektursyn/Documents/pet/daniyal.kz/astro/src/pages/posts/[...page].astro", undefined);

const $$file = "/Users/kanatbektursyn/Documents/pet/daniyal.kz/astro/src/pages/posts/[...page].astro";
const $$url = "/posts/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
