"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[636],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,v=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(v,a(a({ref:t},c),{},{components:r})):n.createElement(v,a({ref:t},c))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},926:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={title:"PyTivo"},a=void 0,p={unversionedId:"applications/media-serving/pytivo",id:"applications/media-serving/pytivo",title:"PyTivo",description:"Project Homepage:",source:"@site/docs/applications/media-serving/pytivo.md",sourceDirName:"applications/media-serving",slug:"/applications/media-serving/pytivo",permalink:"/docs/applications/media-serving/pytivo",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/main/website/docs/applications/media-serving/pytivo.md",tags:[],version:"current",frontMatter:{title:"PyTivo"},sidebar:"tutorialSidebar",previous:{title:"Plex",permalink:"/docs/applications/media-serving/plex"},next:{title:"Tautulli",permalink:"/docs/applications/media-serving/tautulli"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Project Homepage:\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lucasnz/pytivo"},"https://github.com/lucasnz/pytivo")),(0,o.kt)("p",null,"Docker Homepage:\n",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/pinion/docker-pytivo"},"https://hub.docker.com/r/pinion/docker-pytivo")),(0,o.kt)("p",null,"PyTivo is both an HMO and GoBack server. Similar to TiVo Desktop pyTivo\nloads many standard video compression codecs and outputs mpeg2 video to\nthe TiVo. However, pyTivo is able to load MANY more file types than TiVo\nDesktop. ",(0,o.kt)("a",{parentName:"p",href:"http://pytivo.org/"},"http://pytivo.org/")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"pytivo_enabled: true")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"group_vars/all.yml")," file. The PyTivo\nweb interface can be found at ",(0,o.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:9032"},"http://ansible_nas_host_or_ip:9032"),"."),(0,o.kt)("h2",{id:"specific-configuration"},"Specific Configuration"),(0,o.kt)("p",null,"PyTivo needs to be configured for use. Your ansible-nas media is\navailable to share via:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"/movies - Where your movies are stored"),(0,o.kt)("li",{parentName:"ul"},"/music - Where your music is stored"),(0,o.kt)("li",{parentName:"ul"},"/photos - Where your photos are stored"),(0,o.kt)("li",{parentName:"ul"},"/podcasts - Where your podcasts are stored"),(0,o.kt)("li",{parentName:"ul"},"/tv - Where your TV episodes are stored")),(0,o.kt)("p",null,"Configuration help for PyTivo settings can be found at ",(0,o.kt)("a",{parentName:"p",href:"https://pytivo.sourceforge.io/wiki/index.php/Configure_pyTivo"},"Configure_pyTivo"),"."))}d.isMDXComponent=!0}}]);