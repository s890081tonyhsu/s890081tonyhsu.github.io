import{h as i,d as p,c as g,a as s,b as v,n as r,F as h,r as k,o as b}from"./runtime-core.esm-bundler.CP1pOYXZ.js";/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=({size:t,strokeWidth:e=2,absoluteStrokeWidth:n,color:o,iconNode:a,name:u,class:c,...f},{slots:d})=>i("svg",{...l,width:t||l.width,height:t||l.height,stroke:o||l.stroke,"stroke-width":n?Number(e)*24/Number(t):e,class:["lucide",`lucide-${w(u??"icon")}`],...f},[...a.map(m=>i(...m)),...d.default?[d.default()]:[]]);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=(t,e)=>(n,{slots:o})=>i(x,{...n,iconNode:e,name:t},o);/**
 * @license lucide-vue-next v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=y("MenuIcon",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),_=(t,e)=>{const n=t.__vccOpts||t;for(const[o,a]of e)n[o]=a;return n},C=p({__name:"Menu",props:{path:{}},setup(t,{expose:e}){e();const n=k(!1),a={isMenuVisible:n,toggleMenu:()=>n.value=!n.value,get MenuIcon(){return M}};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}});function I(t,e,n,o,a,u){return b(),g(h,null,[s("div",{class:"menu-btn",onClick:e[0]||(e[0]=c=>o.toggleMenu())},[v(o.MenuIcon)]),s("div",{id:"nav",class:r(o.isMenuVisible?"show":"hide"),onClick:e[1]||(e[1]=c=>o.toggleMenu())},[s("h2",null,[s("a",{class:r(n.path==="/"?"active":""),href:"/"},"About me",2),e[2]||(e[2]=s("span",null,"|",-1)),s("a",{class:r(n.path==="/resume"?"active":""),href:"/resume"},"Resume",2),e[3]||(e[3]=s("span",null,"|",-1)),s("a",{class:r(n.path==="/collections"?"active":""),href:"/collections"},"Collections",2)])],2)],64)}const N=_(C,[["render",I]]);export{N as default};
