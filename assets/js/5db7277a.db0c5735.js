"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),s=n,g=d["".concat(p,".").concat(s)]||d[s]||m[s]||i;return a?r.createElement(g,l(l({ref:t},c),{},{components:a})):r.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},8266:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:2},l="Product Packages",o={unversionedId:"data-editing/product_packages",id:"data-editing/product_packages",title:"Product Packages",description:"Module Overview",source:"@site/docs/data-editing/product_packages.md",sourceDirName:"data-editing",slug:"/data-editing/product_packages",permalink:"/my-website/docs/data-editing/product_packages",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-editing/product_packages.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Product Base",permalink:"/my-website/docs/data-editing/product_base"},next:{title:"Virtualization",permalink:"/my-website/docs/data-editing/virtualisation"}},p={},u=[{value:"Module Overview",id:"module-overview",level:3},{value:"Data &amp; Definitions",id:"data--definitions",level:3},{value:"HOW TO USE THE EDITING TEMPLATE",id:"how-to-use-the-editing-template",level:3}],c={toc:u},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"product-packages"},"Product Packages"),(0,n.kt)("h3",{id:"module-overview"},"Module Overview"),(0,n.kt)("p",null,"In this module, package information is added to existing products in SQARP. Currently, only primary packages can be added to products. One product can have several packages/parcels."),(0,n.kt)("h3",{id:"data--definitions"},"Data & Definitions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Data"),(0,n.kt)("th",{parentName:"tr",align:null},"Definition"),(0,n.kt)("th",{parentName:"tr",align:null},"Rules & Validation"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"manufacturer_article_number"),(0,n.kt)("td",{parentName:"tr",align:null},"The manufacturers unique identifier for a product"),(0,n.kt)("td",{parentName:"tr",align:null},"Article number must exist in SQARP.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"package_height_mm"),(0,n.kt)("td",{parentName:"tr",align:null},"The hight of the package in millimetres."),(0,n.kt)("td",{parentName:"tr",align:null},"Must be numerical")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"package_width_mm"),(0,n.kt)("td",{parentName:"tr",align:null},"The width of the package in millimetres."),(0,n.kt)("td",{parentName:"tr",align:null},"Must be numerical")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"package_depth_mm"),(0,n.kt)("td",{parentName:"tr",align:null},"The depth of the package in millimetres."),(0,n.kt)("td",{parentName:"tr",align:null},"Must be numerical")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"package_volume_m3"),(0,n.kt)("td",{parentName:"tr",align:null},"The volume of the package in cubic meters."),(0,n.kt)("td",{parentName:"tr",align:null},"Must be numerical")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"package_weight_kg"),(0,n.kt)("td",{parentName:"tr",align:null},"The weight of the package in kilograms."),(0,n.kt)("td",{parentName:"tr",align:null},"Must be numerical")))),(0,n.kt)("h3",{id:"how-to-use-the-editing-template"},"HOW TO USE THE EDITING TEMPLATE"),(0,n.kt)("p",null,"Each row in the editing template represents a package."),(0,n.kt)("p",null,"Only the products included in the template will be affected by the upload."),(0,n.kt)("p",null,"To add multiple packages to one product, include the product on multiple rows in the template, each row represents a package and can have different data."),(0,n.kt)("p",null,"To remove a package from a product with multiple packages, you remove the entire row representing the package you want to remove."),(0,n.kt)("p",null,"To remove a package from a product with one package. Remove all data from the row except for the manufacturer_article_number."),(0,n.kt)("p",null,"For the products included in the template, the package information will be changed to what is represented in the template upon upload."),(0,n.kt)("p",null,"All columns in the template are mandatory upon upload."))}m.isMDXComponent=!0}}]);