import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../../../chunks/astro/server_--UVzMgK.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../chunks/_astro_content_DGlxq9K3.mjs';
import { a as $$Header, b as $$Footer, c as $$Layout } from '../../../chunks/Footer_OwRavoxp.mjs';
import { $ as $$Main } from '../../../chunks/Main_Cl2SF2qE.mjs';
import { C as Card } from '../../../chunks/Card_1KyWFnAv.mjs';
import { $ as $$Pagination } from '../../../chunks/Pagination_Baqa9oRi.mjs';
import { S as SITE } from '../../../chunks/config_CbFJsLd0.mjs';
/* empty css                                       */
import { g as getUniqueTags } from '../../../chunks/getUniqueTags_CcwLUpiX.mjs';
import { g as getSortedPosts } from '../../../chunks/getSortedPosts_BhvKpI_m.mjs';
import { a as slugifyAll } from '../../../chunks/slugify_CvQuO4Tx.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro$1 = createAstro("https://daniyal.kz/");
const $$TagPosts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TagPosts;
  const { page, tag, tagName } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Tag: ${tagName} | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "tags" })} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": [`Tag:`, `${tagName}`], "titleTransition": tag, "pageDesc": `All the articles with the tag "${tagName}".` }, { "default": ($$result3) => renderTemplate`  ${maybeRenderHead()}<ul> ${page.data.map(({ data, slug }) => renderTemplate`${renderComponent($$result3, "Card", Card, { "href": `/posts/${slug}/`, "frontmatter": data })}`)} </ul> `, "title": ($$result3) => renderTemplate`<h1${addAttribute(renderTransition($$result3, "vfrq7tp3", "", tag), "data-astro-transition-scope")}>${`Tag:${tag}`}</h1>` })} ${renderComponent($$result2, "Pagination", $$Pagination, { "page": page })} ${renderComponent($$result2, "Footer", $$Footer, { "noMarginTop": page.lastPage > 1 })} ` })}`;
}, "/Users/kanatbektursyn/Documents/pet/daniyal.kz/astro/src/layouts/TagPosts.astro", "self");

const getPostsByTag = (posts, tag) => getSortedPosts(
  posts.filter((post) => slugifyAll(post.data.tags).includes(tag))
);

const $$Astro = createAstro("https://daniyal.kz/");
async function getStaticPaths({ paginate }) {
  const posts = await getCollection("blog");
  const tags = getUniqueTags(posts);
  return tags.flatMap(({ tag, tagName }) => {
    const tagPosts = getPostsByTag(posts, tag);
    return paginate(tagPosts, {
      params: { tag },
      props: { tagName },
      pageSize: SITE.postPerPage
    });
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const params = Astro2.params;
  const { tag } = params;
  const { page, tagName } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "TagPosts", $$TagPosts, { "page": page, "tag": tag, "tagName": tagName })}`;
}, "/Users/kanatbektursyn/Documents/pet/daniyal.kz/astro/src/pages/tags/[tag]/[...page].astro", undefined);

const $$file = "/Users/kanatbektursyn/Documents/pet/daniyal.kz/astro/src/pages/tags/[tag]/[...page].astro";
const $$url = "/tags/[tag]/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
