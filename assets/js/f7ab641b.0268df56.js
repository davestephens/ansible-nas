"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[3178],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),g=r,f=c["".concat(p,".").concat(g)]||c[g]||m[g]||a;return n?i.createElement(f,o(o({ref:t},u),{},{components:n})):i.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const a={title:"Piwigo"},o=void 0,l={unversionedId:"applications/other/piwigo",id:"applications/other/piwigo",title:"Piwigo",description:"Homepage: Piwigo.org",source:"@site/docs/applications/other/piwigo.md",sourceDirName:"applications/other",slug:"/applications/other/piwigo",permalink:"/docs/applications/other/piwigo",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/main/website/docs/applications/other/piwigo.md",tags:[],version:"current",frontMatter:{title:"Piwigo"},sidebar:"tutorialSidebar",previous:{title:"Paperless-ng",permalink:"/docs/applications/other/paperless_ng"},next:{title:"The Lounge",permalink:"/docs/applications/other/thelounge"}},p={},s=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Homepage: ",(0,r.kt)("a",{parentName:"p",href:"https://piwigo.org"},"Piwigo.org")),(0,r.kt)("p",null,"Piwigo is open source photo gallery software for the web. Designed for organisations, teams and individuals."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"piwigo_enabled: true")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,r.kt)("p",null,"If you want to access Piwigo externally, set ",(0,r.kt)("inlineCode",{parentName:"p"},"piwigo_available_externally: true")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,r.kt)("p",null,"The Piwigo web interface can be found at ",(0,r.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:16923"},"http://ansible_nas_host_or_ip:16923"),"."),(0,r.kt)("h2",{id:"specific-configuration"},"Specific Configuration"),(0,r.kt)("p",null,"Optional configurations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"piwigo_mysql_user")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/group_vars/nas.yml"),' before installing Piwigo, this defaults to "piwigo".')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"piwigo_mysql_password")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/group_vars/nas.yml"),' before installing Piwigo, this defaults to "piwigo".')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"piwigo_mysql_root_password")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/group_vars/nas.yml"),' before installing Piwigo, this defaults to "piwigo".')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On first run you'll need to enter database details:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Host: ",(0,r.kt)("inlineCode",{parentName:"li"},"db:3306")),(0,r.kt)("li",{parentName:"ul"},'Username: the value of piwigo_mysql_user, defaults to "piwigo"'),(0,r.kt)("li",{parentName:"ul"},'Password: the value of piwigo_password, defaults to "piwigo"'),(0,r.kt)("li",{parentName:"ul"},"Database Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"piwigo")),(0,r.kt)("li",{parentName:"ul"},"Database tables prefix: should be prefilled with ",(0,r.kt)("inlineCode",{parentName:"li"},"piwigo_"))))))}m.isMDXComponent=!0}}]);