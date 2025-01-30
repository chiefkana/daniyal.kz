import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_--UVzMgK.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_DGlxq9K3.mjs';
import { a as $$Header, b as $$Footer, c as $$Layout } from '../chunks/Footer_OwRavoxp.mjs';
import { $ as $$Main } from '../chunks/Main_Cl2SF2qE.mjs';
import { $ as $$Tag } from '../chunks/Tag_riw31jYO.mjs';
import { g as getUniqueTags } from '../chunks/getUniqueTags_CcwLUpiX.mjs';
import { S as SITE } from '../chunks/config_CbFJsLd0.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  let tags = getUniqueTags(posts);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Tags | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "tags" })} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Tags", "pageDesc": "All the tags used in posts." }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<ul> ${tags.map(({ tag }) => renderTemplate`${renderComponent($$result3, "Tag", $$Tag, { "tag": tag, "size": "lg" })}`)} </ul> ` })} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/kanatbektursyn/Documents/pet/daniyal.kz/astro/src/pages/tags/index.astro", undefined);

const $$file = "/Users/kanatbektursyn/Documents/pet/daniyal.kz/astro/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
