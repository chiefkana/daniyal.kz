import{c as m,a as y}from"./runtime-dom.esm-bundler.W4bb0QgH.js";import{d as S,s as a,S as g}from"./runtime-core.esm-bundler.D23soL21.js";const A=()=>{},b=S({props:{value:String,name:String,hydrate:{type:Boolean,default:!0}},setup({name:t,value:n,hydrate:r}){if(!n)return()=>null;let c=r?"astro-slot":"astro-static-slot";return()=>a(c,{name:t,innerHTML:n})}});let p=new WeakMap;const M=t=>async(n,r,c,{client:f})=>{if(!t.hasAttribute("ssr"))return;const l=n.name?`${n.name} Host`:void 0,u={};for(const[s,o]of Object.entries(c))u[s]=()=>a(b,{value:o,name:s==="default"?void 0:s});const i=f!=="only",d=i?m:y;let e=p.get(t);if(e)e.props=r,e.slots=u,e.component.$forceUpdate();else{e={props:r,slots:u};const s=d({name:l,render(){let o=a(n,e.props,e.slots);return e.component=this,h(n.setup)&&(o=a(g,null,o)),o}});s.config.idPrefix=t.getAttribute("prefix"),await A(),s.mount(t,i),p.set(t,e),t.addEventListener("astro:unmount",()=>s.unmount(),{once:!0})}};function h(t){const n=t?.constructor;return n&&n.name==="AsyncFunction"}export{M as default};
