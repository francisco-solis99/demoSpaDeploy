const c=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}};c();const a=[{path:"/",template:"<h1>\u{1F3E0}Home</h1>"},{path:"/contact",template:"<h1>\u{1F477}\u200D\u2642\uFE0FContact</h1>"},{path:"/about",template:"<h1>\u{1F4BB}About me</h1>"}];function i(e){this.routes=e,this.loadInitialRoute()}i.prototype={constructor:i,loadInitialRoute(){const e=window.location.pathname.split("/"),n=e.length>1?e.slice(1):"";console.log("En el init => "+n),this.loadRoute(...n)},matchUrlToRoute(e){return console.log("En el  match => "+e),this.routes.find(l=>{const r=l.path.split("/").slice(1);return r.length!==e.length?!1:r.every((t,o)=>t===e[o])})},loadRoute(...e){console.log("En el  load => "+e);const n=this.matchUrlToRoute(e),l=`/${e.join("")}`;window.history.pushState({},"this works",l);const r=document.querySelector("#app");r.innerHTML=n.template}};const u=new i(a);document.querySelectorAll("button").forEach(e=>{e.addEventListener("click",n=>{u.loadRoute(n.target.dataset.path)})});
