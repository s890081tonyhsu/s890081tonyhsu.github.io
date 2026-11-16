import{h as i,d as f,c as m,a,b as v,n as r,F as b,r as h,o as k}from"./runtime-core.esm-bundler.CP1pOYXZ.js";/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=({size:t,strokeWidth:e=2,absoluteStrokeWidth:n,color:o,iconNode:s,name:u,class:c,...g},{slots:d})=>i("svg",{...l,width:t||l.width,height:t||l.height,stroke:o||l.stroke,"stroke-width":n?Number(e)*24/Number(t):e,class:["lucide",`lucide-${x(u??"icon")}`],...g},[...s.map(p=>i(...p)),...d.default?[d.default()]:[]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=(t,e)=>(n,{slots:o})=>i(_,{...n,iconNode:e,name:t},o);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=w("MenuIcon",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),M=(t,e)=>{const n=t.__vccOpts||t;for(const[o,s]of e)n[o]=s;return n},C=f({__name:"Menu",props:{path:{}},setup(t,{expose:e}){e();const n=h(!1),s={isMenuVisible:n,toggleMenu:()=>n.value=!n.value,get MenuIcon(){return y}};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}}),I=["aria-expanded"];function V(t,e,n,o,s,u){return k(),m(b,null,[a("button",{type:"button",class:"menu-btn","aria-label":"Toggle navigation","aria-controls":"nav","aria-expanded":o.isMenuVisible,onClick:e[0]||(e[0]=c=>o.toggleMenu())},[v(o.MenuIcon,{size:28,"aria-hidden":"true"})],8,I),a("nav",{id:"nav",class:r(o.isMenuVisible?"show":"hide"),onClick:e[1]||(e[1]=c=>o.toggleMenu())},[a("h2",null,[a("a",{class:r(n.path==="/"?"active":""),href:"/"},"About me",2),e[2]||(e[2]=a("span",null,"|",-1)),a("a",{class:r(n.path==="/resume"?"active":""),href:"/resume"},"Resume",2),e[3]||(e[3]=a("span",null,"|",-1)),a("a",{class:r(n.path==="/collections"?"active":""),href:"/collections"},"Collections",2)])],2)],64)}const N=M(C,[["render",V]]);export{N as default};
