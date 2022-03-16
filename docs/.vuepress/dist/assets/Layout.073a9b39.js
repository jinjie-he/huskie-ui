var e=Object.defineProperty,t=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,l,a)=>l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,o=(e,t)=>{for(var l in t||(t={}))n.call(t,l)&&r(e,l,t[l]);if(a)for(var l of a(t))s.call(t,l)&&r(e,l,t[l]);return e},i=(e,a)=>t(e,l(a));"undefined"!=typeof require&&require;import{f as u,i as c,j as v,k as d,l as p,m as h,n as b,r as m,h as f,o as g,p as k,w as y,q as x,d as w,t as L,s as $,c as C,v as M,x as T,y as O,z as R,A as B,B as P,a as j,F as z,C as E,b as D,D as _,E as H,G as N,T as S,H as q,I as A,J as F,K as G,L as I,u as W,g as U,M as X,N as Y,O as V,e as J,P as K,Q,R as Z,S as ee,U as te,W as le,X as ae,Y as ne}from"./app.1f0751dd.js";const se=["href","rel","target","aria-label"],re=u({inheritAttrs:!1});var oe=u(i(o({},re),{props:{item:{type:Object,required:!0}},setup:function(e){const t=e,l=c(),a=T(),{item:n}=v(t),s=d((()=>p(n.value.link))),r=d((()=>h(n.value.link)||b(n.value.link))),o=d((()=>{if(!r.value)return n.value.target?n.value.target:s.value?"_blank":void 0})),i=d((()=>"_blank"===o.value)),u=d((()=>!s.value&&!r.value&&!i.value)),O=d((()=>{if(!r.value)return n.value.rel?n.value.rel:i.value?"noopener noreferrer":void 0})),R=d((()=>n.value.ariaLabel||n.value.text)),B=d((()=>{const e=Object.keys(a.value.locales);return e.length?!e.some((e=>e===n.value.link)):"/"!==n.value.link})),P=d((()=>!!B.value&&l.path.startsWith(n.value.link))),j=d((()=>!!u.value&&(n.value.activeMatch?new RegExp(n.value.activeMatch).test(l.path):P.value)));return(e,t)=>{const l=m("RouterLink"),a=m("OutboundLink");return f(u)?(g(),k(l,$({key:0,class:["nav-link",{"router-link-active":f(j)}],to:f(n).link,"aria-label":f(R)},e.$attrs),{default:y((()=>[x(e.$slots,"before"),w(" "+L(f(n).text)+" ",1),x(e.$slots,"after")])),_:3},16,["class","to","aria-label"])):(g(),C("a",$({key:1,class:"nav-link external",href:f(n).link,rel:f(O),target:f(o),"aria-label":f(R)},e.$attrs),[x(e.$slots,"before"),w(" "+L(f(n).text)+" ",1),f(i)?(g(),k(a,{key:0})):M("v-if",!0),x(e.$slots,"after")],16,se))}}}));const ie=["aria-labelledby"],ue={class:"hero"},ce=["src","alt"],ve={key:1,id:"main-title"},de={key:2,class:"description"},pe={key:3,class:"actions"},he={key:0,class:"features"},be={class:"theme-default-content custom"},me=["innerHTML"],fe=["textContent"];var ge=u({setup(e){const t=O(),l=R(),a=d((()=>t.value.heroImage?B(t.value.heroImage):null)),n=d((()=>null===t.value.heroText?null:t.value.heroText||l.value.title||"Hello")),s=d((()=>t.value.heroAlt||n.value||"hero")),r=d((()=>null===t.value.tagline?null:t.value.tagline||l.value.description||"Welcome to your VuePress site")),o=d((()=>P(t.value.actions)?t.value.actions.map((({text:e,link:t,type:l="primary"})=>({text:e,link:t,type:l}))):[])),i=d((()=>P(t.value.features)?t.value.features:[])),u=d((()=>t.value.footer)),c=d((()=>t.value.footerHtml));return(e,t)=>{const l=m("Content");return g(),C("main",{class:"home","aria-labelledby":f(n)?"main-title":void 0},[j("header",ue,[f(a)?(g(),C("img",{key:0,src:f(a),alt:f(s)},null,8,ce)):M("v-if",!0),f(n)?(g(),C("h1",ve,L(f(n)),1)):M("v-if",!0),f(r)?(g(),C("p",de,L(f(r)),1)):M("v-if",!0),f(o).length?(g(),C("p",pe,[(g(!0),C(z,null,E(f(o),(e=>(g(),k(oe,{key:e.text,class:_(["action-button",[e.type]]),item:e},null,8,["class","item"])))),128))])):M("v-if",!0)]),f(i).length?(g(),C("div",he,[(g(!0),C(z,null,E(f(i),(e=>(g(),C("div",{key:e.title,class:"feature"},[j("h2",null,L(e.title),1),j("p",null,L(e.details),1)])))),128))])):M("v-if",!0),j("div",be,[D(l)]),f(u)?(g(),C(z,{key:1},[M(" eslint-disable-next-line vue/no-v-html "),f(c)?(g(),C("div",{key:0,class:"footer",innerHTML:f(u)},null,8,me)):(g(),C("div",{key:1,class:"footer",textContent:L(f(u))},null,8,fe))],2112)):M("v-if",!0)],8,ie)}}});const ke=e=>!p(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,ye={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"};var xe=u({setup(e){const t=e=>{e.style.height=e.scrollHeight+"px"},l=e=>{e.style.height=""};return(e,a)=>(g(),k(S,{name:"dropdown",onEnter:t,onAfterEnter:l,onBeforeLeave:t},{default:y((()=>[x(e.$slots,"default")])),_:3}))}});const we=["aria-label"],Le={class:"title"},$e=j("span",{class:"arrow down"},null,-1),Ce=["aria-label"],Me={class:"title"},Te={class:"nav-dropdown"},Oe={class:"dropdown-subtitle"},Re={key:1},Be={class:"dropdown-subitem-wrapper"};var Pe=u({props:{item:{type:Object,required:!0}},setup(e){const t=e,{item:l}=v(t),a=d((()=>l.value.ariaLabel||l.value.text)),n=q(!1),s=c();A((()=>s.path),(()=>{n.value=!1}));const r=e=>{const t=0===e.detail;n.value=!!t&&!n.value},o=(e,t)=>t[t.length-1]===e;return(e,t)=>(g(),C("div",{class:_(["dropdown-wrapper",{open:n.value}])},[j("button",{class:"dropdown-title",type:"button","aria-label":f(a),onClick:r},[j("span",Le,L(f(l).text),1),$e],8,we),j("button",{class:"mobile-dropdown-title",type:"button","aria-label":f(a),onClick:t[0]||(t[0]=e=>n.value=!n.value)},[j("span",Me,L(f(l).text),1),j("span",{class:_(["arrow",n.value?"down":"right"])},null,2)],8,Ce),D(xe,null,{default:y((()=>[F(j("ul",Te,[(g(!0),C(z,null,E(f(l).children,((e,t)=>(g(),C("li",{key:e.link||t,class:"dropdown-item"},[e.children?(g(),C(z,{key:0},[j("h4",Oe,[e.link?(g(),k(oe,{key:0,item:e,onFocusout:t=>o(e,f(l).children)&&0===e.children.length&&(n.value=!1)},null,8,["item","onFocusout"])):(g(),C("span",Re,L(e.text),1))]),j("ul",Be,[(g(!0),C(z,null,E(e.children,(t=>(g(),C("li",{key:t.link,class:"dropdown-subitem"},[D(oe,{item:t,onFocusout:a=>o(t,e.children)&&o(e,f(l).children)&&(n.value=!1)},null,8,["item","onFocusout"])])))),128))])],64)):(g(),k(oe,{key:1,item:e,onFocusout:t=>o(e,f(l).children)&&(n.value=!1)},null,8,["item","onFocusout"]))])))),128))],512),[[G,n.value]])])),_:1})],2))}});const je={key:0,class:"navbar-links"};var ze=u({setup(e){const t=e=>X(e)?Y(e):e.children?i(o({},e),{children:e.children.map(t)}):e,l=(()=>{const e=U();return d((()=>(e.value.navbar||[]).map(t)))})(),a=(()=>{const e=I(),t=W(),l=R(),a=U();return d((()=>{var n,s;const r=Object.keys(l.value.locales);if(r.length<2)return[];const o=e.currentRoute.value.path,i=e.currentRoute.value.fullPath;return[{text:null!=(n=a.value.selectLanguageText)?n:"unkown language",ariaLabel:null!=(s=a.value.selectLanguageAriaLabel)?s:"unkown language",children:r.map((n=>{var s,r,u,c,v,d;const p=null!=(r=null==(s=l.value.locales)?void 0:s[n])?r:{},h=null!=(c=null==(u=a.value.locales)?void 0:u[n])?c:{},b=`${p.lang}`,m=null!=(v=h.selectLanguageName)?v:b;let f;if(b===l.value.lang)f=i;else{const l=o.replace(t.value,n);f=e.getRoutes().some((e=>e.path===l))?l:null!=(d=h.home)?d:n}return{text:m,link:f}}))}]}))})(),n=(()=>{const e=U(),t=d((()=>e.value.repo)),l=d((()=>t.value?ke(t.value):null)),a=d((()=>t.value&&!p(t.value)?`https://github.com/${t.value}`:t.value)),n=d((()=>a.value?e.value.repoLabel?e.value.repoLabel:null===l.value?"Source":l.value:null));return d((()=>a.value&&n.value?[{text:n.value,link:a.value}]:[]))})(),s=d((()=>[...l.value,...a.value,...n.value]));return(e,t)=>f(s).length?(g(),C("nav",je,[(g(!0),C(z,null,E(f(s),(e=>(g(),C("div",{key:e.text,class:"navbar-links-item"},[e.children?(g(),k(Pe,{key:0,item:e},null,8,["item"])):(g(),k(oe,{key:1,item:e},null,8,["item"]))])))),128))])):M("v-if",!0)}});const Ee=["title"],De={class:"icon",focusable:"false",viewBox:"0 0 32 32"},_e=[J('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9)],He={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Ne=[j("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1)];var Se=u({setup(e){const t=U(),l=V(),a=()=>{l.value=!l.value};return(e,n)=>(g(),C("button",{class:"toggle-dark-button",title:f(t).toggleDarkMode,onClick:a},[F((g(),C("svg",De,_e,512)),[[G,!f(l)]]),F((g(),C("svg",He,Ne,512)),[[G,f(l)]])],8,Ee))}});const qe=["title"],Ae=[j("div",{class:"icon","aria-hidden":"true"},[j("span"),j("span"),j("span")],-1)];var Fe=u({emits:["toggle"],setup(e){const t=U();return(e,l)=>(g(),C("div",{class:"toggle-sidebar-button",title:f(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:l[0]||(l[0]=t=>e.$emit("toggle"))},Ae,8,qe))}});const Ge=["src","alt"];var Ie=u({emits:["toggle-sidebar"],setup(e){const t=W(),l=R(),a=U(),n=V(),s=q(null),r=q(null),o=d((()=>a.value.home||t.value)),i=d((()=>n.value&&void 0!==a.value.logoDark?a.value.logoDark:a.value.logo)),u=d((()=>l.value.title)),c=q(0),v=d((()=>c.value?{maxWidth:c.value+"px"}:{})),p=d((()=>a.value.darkMode));function h(e,t){var l,a,n;const s=null==(n=null==(a=null==(l=null==e?void 0:e.ownerDocument)?void 0:l.defaultView)?void 0:a.getComputedStyle(e,null))?void 0:n[t],r=Number.parseInt(s,10);return Number.isNaN(r)?0:r}return K((()=>{const e=h(s.value,"paddingLeft")+h(s.value,"paddingRight"),t=()=>{var t;window.innerWidth<=719?c.value=0:c.value=s.value.offsetWidth-e-((null==(t=r.value)?void 0:t.offsetWidth)||0)};t(),window.addEventListener("resize",t,!1),window.addEventListener("orientationchange",t,!1)})),(e,t)=>{const l=m("RouterLink"),a=m("NavbarSearch");return g(),C("header",{ref:(e,t)=>{t.navbar=e,s.value=e},class:"navbar"},[D(Fe,{onToggle:t[0]||(t[0]=t=>e.$emit("toggle-sidebar"))}),j("span",{ref:(e,t)=>{t.siteBrand=e,r.value=e}},[D(l,{to:f(o)},{default:y((()=>[f(i)?(g(),C("img",{key:0,class:"logo",src:f(B)(f(i)),alt:f(u)},null,8,Ge)):M("v-if",!0),f(u)?(g(),C("span",{key:1,class:_(["site-name",{"can-hide":f(i)}])},L(f(u)),3)):M("v-if",!0)])),_:1},8,["to"])],512),j("div",{class:"navbar-links-wrapper",style:Q(f(v))},[x(e.$slots,"before"),D(ze,{class:"can-hide"}),x(e.$slots,"after"),f(p)?(g(),k(Se,{key:0})):M("v-if",!0),D(a)],4)],512)}}});const We={class:"page-meta"},Ue={key:0,class:"meta-item edit-link"},Xe={key:1,class:"meta-item last-updated"},Ye={class:"meta-item-label"},Ve={class:"meta-item-info"},Je={key:2,class:"meta-item contributors"},Ke={class:"meta-item-label"},Qe={class:"meta-item-info"},Ze=["title"],et=w(", ");var tt=u({setup(e){const t=U(),l=(()=>{const e=U(),t=Z(),l=O();return d((()=>{var a,n;if(!(null==(n=null!=(a=l.value.editLink)?a:e.value.editLink)||n))return null;const{repo:s,docsRepo:r=s,docsBranch:o="main",docsDir:i="",editLinkText:u}=e.value;if(!r)return null;const c=(({docsRepo:e,docsBranch:t,docsDir:l,filePathRelative:a,editLinkPattern:n})=>{const s=ke(e);let r;return n?r=n:null!==s&&(r=ye[s]),r?r.replace(/:repo/,p(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,H(`${N(l)}/${a}`)):null})({docsRepo:r,docsBranch:o,docsDir:i,filePathRelative:t.value.filePathRelative,editLinkPattern:e.value.editLinkPattern});return c?{text:null!=u?u:"Edit this page",link:c}:null}))})(),a=(()=>{const e=R(),t=U(),l=Z(),a=O();return d((()=>{var n,s,r,o;if(!(null==(s=null!=(n=a.value.lastUpdated)?n:t.value.lastUpdated)||s))return null;if(!(null==(r=l.value.git)?void 0:r.updatedTime))return null;return new Date(null==(o=l.value.git)?void 0:o.updatedTime).toLocaleString(e.value.lang)}))})(),n=(()=>{const e=U(),t=Z(),l=O();return d((()=>{var a,n,s,r;return(null==(n=null!=(a=l.value.contributors)?a:e.value.contributors)||n)&&null!=(r=null==(s=t.value.git)?void 0:s.contributors)?r:null}))})();return(e,s)=>(g(),C("footer",We,[f(l)?(g(),C("div",Ue,[D(oe,{class:"meta-item-label",item:f(l)},null,8,["item"])])):M("v-if",!0),f(a)?(g(),C("div",Xe,[j("span",Ye,L(f(t).lastUpdatedText)+": ",1),j("span",Ve,L(f(a)),1)])):M("v-if",!0),f(n)&&f(n).length?(g(),C("div",Je,[j("span",Ke,L(f(t).contributorsText)+": ",1),j("span",Qe,[(g(!0),C(z,null,E(f(n),((e,t)=>(g(),C(z,{key:t},[j("span",{class:"contributor",title:`email: ${e.email}`},L(e.name),9,Ze),t!==f(n).length-1?(g(),C(z,{key:0},[et],2112)):M("v-if",!0)],64)))),128))])])):M("v-if",!0)]))}});const lt={key:0,class:"page-nav"},at={class:"inner"},nt={key:0,class:"prev"},st=w(" ← "),rt={key:1,class:"next"},ot=w(" → ");var it=u({setup(e){const t=e=>!1===e?null:X(e)?Y(e):!!te(e)&&e,l=(e,t,a)=>{const n=e.findIndex((e=>e.link===t));if(-1!==n){const t=e[n+a];return(null==t?void 0:t.link)?t:null}for(const s of e)if(s.children){const e=l(s.children,t,a);if(e)return e}return null},a=O(),n=ee(),s=c(),r=d((()=>{const e=t(a.value.prev);return!1!==e?e:l(n.value,s.path,-1)})),o=d((()=>{const e=t(a.value.next);return!1!==e?e:l(n.value,s.path,1)}));return(e,t)=>f(r)||f(o)?(g(),C("nav",lt,[j("p",at,[f(r)?(g(),C("span",nt,[st,D(oe,{item:f(r)},null,8,["item"])])):M("v-if",!0),f(o)?(g(),C("span",rt,[D(oe,{item:f(o)},null,8,["item"]),ot])):M("v-if",!0)])])):M("v-if",!0)}});const ut={class:"page"},ct={class:"theme-default-content"};var vt=u({setup:e=>(e,t)=>{const l=m("Content");return g(),C("main",ut,[x(e.$slots,"top"),j("div",ct,[D(l)]),D(tt),D(it),x(e.$slots,"bottom")])}});const dt=e=>decodeURI(e).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),pt=(e,t)=>!!((e,t)=>void 0!==t&&(e.hash===t||dt(e.path)===dt(t)))(e,t.link)||!!t.children&&t.children.some((t=>pt(e,t))),ht=(e,t)=>e.link?le(oe,i(o({},t),{item:e})):le("p",t,e.text),bt=(e,t)=>{var l;return(null===(l=e.children)||void 0===l?void 0:l.length)?le("ul",{class:{"sidebar-sub-items":t>0}},e.children.map((e=>le("li",le(mt,{item:e,depth:t+1}))))):null},mt=({item:e,depth:t=0})=>{const l=c(),a=pt(l,e);return[ht(e,{class:{"sidebar-heading":0===t,"sidebar-item":!0,active:a}}),bt(e,t)]};mt.displayName="SidebarChild",mt.props={item:{type:Object,required:!0},depth:{type:Number,required:!1}};const ft={class:"sidebar"},gt={class:"sidebar-links"};var kt=u({setup(e){const t=ee();return(e,l)=>(g(),C("aside",ft,[D(ze),x(e.$slots,"top"),j("ul",gt,[(g(!0),C(z,null,E(f(t),(e=>(g(),k(f(mt),{key:e.link||e.text,item:e},null,8,["item"])))),128))]),x(e.$slots,"bottom")]))}}),yt=u({setup(e){const t=Z(),l=O(),a=U(),n=d((()=>!1!==l.value.navbar&&!1!==a.value.navbar)),s=ee(),r=q(!1),o=e=>{r.value="boolean"==typeof e?e:!r.value},i={x:0,y:0},u=e=>{i.x=e.changedTouches[0].clientX,i.y=e.changedTouches[0].clientY},c=e=>{const t=e.changedTouches[0].clientX-i.x,l=e.changedTouches[0].clientY-i.y;Math.abs(t)>Math.abs(l)&&Math.abs(t)>40&&(t>0&&i.x<=80?o(!0):o(!1))},v=d((()=>[{"no-navbar":!n.value,"no-sidebar":!s.value.length,"sidebar-open":r.value},l.value.pageClass]));let p;K((()=>{const e=I();p=e.afterEach((()=>{o(!1)}))})),ae((()=>{p()}));const h=ne(),b=h.resolve,m=h.pending;return(e,a)=>(g(),C("div",{class:_(["theme-container",f(v)]),onTouchstart:u,onTouchend:c},[x(e.$slots,"navbar",{},(()=>[f(n)?(g(),k(Ie,{key:0,onToggleSidebar:o},{before:y((()=>[x(e.$slots,"navbar-before")])),after:y((()=>[x(e.$slots,"navbar-after")])),_:3})):M("v-if",!0)])),j("div",{class:"sidebar-mask",onClick:a[0]||(a[0]=e=>o(!1))}),x(e.$slots,"sidebar",{},(()=>[D(kt,null,{top:y((()=>[x(e.$slots,"sidebar-top")])),bottom:y((()=>[x(e.$slots,"sidebar-bottom")])),_:3})])),x(e.$slots,"page",{},(()=>[f(l).home?(g(),k(ge,{key:0})):(g(),k(S,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:f(b),onBeforeLeave:f(m)},{default:y((()=>[D(vt,{key:f(t).path},{top:y((()=>[x(e.$slots,"page-top")])),bottom:y((()=>[x(e.$slots,"page-bottom")])),_:3})])),_:3},8,["onBeforeEnter","onBeforeLeave"]))]))],34))}});export{yt as default};
