import{i as I,e as m,f as j,g as U,j as F,k as K,l as X,m as x,p as D,q as $,s as Z,t as B,u as y,v as J,w as Q,d as Y,h,S as V}from"./runtime-core.esm-bundler.CP1pOYXZ.js";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let A;const v=typeof window<"u"&&window.trustedTypes;if(v)try{A=v.createPolicy("vue",{createHTML:t=>t})}catch{}const W=A?t=>A.createHTML(t):t=>t,k="http://www.w3.org/2000/svg",tt="http://www.w3.org/1998/Math/MathML",a=typeof document<"u"?document:null,C=a&&a.createElement("template"),et={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?a.createElementNS(k,t):e==="mathml"?a.createElementNS(tt,t):n?a.createElement(t,{is:n}):a.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>a.createTextNode(t),createComment:t=>a.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>a.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,o){const r=n?n.previousSibling:e.lastChild;if(s&&(s===o||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{C.innerHTML=W(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const c=C.content;if(i==="svg"||i==="mathml"){const f=c.firstChild;for(;f.firstChild;)c.appendChild(f.firstChild);c.removeChild(f)}e.insertBefore(c,n)}return[r?r.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},nt=Symbol("_vtc");function it(t,e,n){const i=t[nt];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const E=Symbol("_vod"),st=Symbol("_vsh"),rt=Symbol(""),ot=/(^|;)\s*display\s*:/;function ct(t,e,n){const i=t.style,s=m(n);let o=!1;if(n&&!s){if(e)if(m(e))for(const r of e.split(";")){const c=r.slice(0,r.indexOf(":")).trim();n[c]==null&&S(i,c,"")}else for(const r in e)n[r]==null&&S(i,r,"");for(const r in n)r==="display"&&(o=!0),S(i,r,n[r])}else if(s){if(e!==n){const r=i[rt];r&&(n+=";"+r),i.cssText=n,o=ot.test(n)}}else e&&t.removeAttribute("style");E in t&&(t[E]=o?i.display:"",t[st]&&(i.display="none"))}const w=/\s*!important$/;function S(t,e,n){if(D(n))n.forEach(i=>S(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=ft(t,e);w.test(n)?t.setProperty($(i),n.replace(w,""),"important"):t[i]=n}}const T=["Webkit","Moz","ms"],g={};function ft(t,e){const n=g[e];if(n)return n;let i=x(e);if(i!=="filter"&&i in t)return g[e]=i;i=Z(i);for(let s=0;s<T.length;s++){const o=T[s]+i;if(o in t)return g[e]=o}return e}const M="http://www.w3.org/1999/xlink";function N(t,e,n,i,s,o=J(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(M,e.slice(6,e.length)):t.setAttributeNS(M,e,n):n==null||o&&!B(n)?t.removeAttribute(e):t.setAttribute(e,o?"":y(n)?String(n):n)}function L(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?W(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?t.getAttribute("value")||"":t.value,f=n==null?t.type==="checkbox"?"on":"":String(n);(c!==f||!("_value"in t))&&(t.value=f),n==null&&t.removeAttribute(e),t._value=n;return}let r=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=B(n):n==null&&c==="string"?(n="",r=!0):c==="number"&&(n=0,r=!0)}try{t[e]=n}catch{}r&&t.removeAttribute(s||e)}function lt(t,e,n,i){t.addEventListener(e,n,i)}function at(t,e,n,i){t.removeEventListener(e,n,i)}const H=Symbol("_vei");function ut(t,e,n,i,s=null){const o=t[H]||(t[H]={}),r=o[e];if(i&&r)r.value=i;else{const[c,f]=pt(e);if(i){const l=o[e]=ht(i,s);lt(t,c,l,f)}else r&&(at(t,c,r,f),o[e]=void 0)}}const _=/(?:Once|Passive|Capture)$/;function pt(t){let e;if(_.test(t)){e={};let i;for(;i=t.match(_);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):$(t.slice(2)),e]}let b=0;const dt=Promise.resolve(),mt=()=>b||(dt.then(()=>b=0),b=Date.now());function ht(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Q(St(i,n.value),e,5,[i])};return n.value=t,n.attached=mt(),n}function St(t,e){if(D(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const P=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,gt=(t,e,n,i,s,o)=>{const r=s==="svg";e==="class"?it(t,i,r):e==="style"?ct(t,n,i):K(e)?X(e)||ut(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bt(t,e,i,r))?(L(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&N(t,e,i,r,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!m(i))?L(t,x(e),i,o,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),N(t,e,i,r))};function bt(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&P(e)&&I(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return P(e)&&m(n)?!1:e in t}const q=F({patchProp:gt},et);let d,R=!1;function At(){return d||(d=j(q))}function vt(){return d=R?d:U(q),R=!0,d}const Ct=(...t)=>{const e=At().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=G(i);if(!s)return;const o=e._component;!I(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const r=n(s,!1,z(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),r},e},Et=(...t)=>{const e=vt().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=G(i);if(s)return n(s,!0,z(s))},e};function z(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function G(t){return m(t)?document.querySelector(t):t}const wt=()=>{},Tt=Y({props:{value:String,name:String,hydrate:{type:Boolean,default:!0}},setup({name:t,value:e,hydrate:n}){if(!e)return()=>null;let i=n?"astro-slot":"astro-static-slot";return()=>h(i,{name:t,innerHTML:e})}});let O=new WeakMap;const Lt=t=>async(e,n,i,{client:s})=>{if(!t.hasAttribute("ssr"))return;const o=e.name?`${e.name} Host`:void 0,r={};for(const[u,p]of Object.entries(i))r[u]=()=>h(Tt,{value:p,name:u==="default"?void 0:u});const c=s!=="only",f=c?Et:Ct;let l=O.get(t);if(l)l.props=n,l.slots=r,l.component.$forceUpdate();else{l={props:n,slots:r};const u=f({name:o,render(){let p=h(e,l.props,l.slots);return l.component=this,Mt(e.setup)&&(p=h(V,null,p)),p}});u.config.idPrefix=t.getAttribute("prefix"),await wt(),u.mount(t,c),O.set(t,l),t.addEventListener("astro:unmount",()=>u.unmount(),{once:!0})}};function Mt(t){const e=t?.constructor;return e&&e.name==="AsyncFunction"}export{Lt as default};
