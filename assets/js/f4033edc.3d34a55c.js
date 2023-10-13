"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3629],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),d=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},o=function(t){var e=d(t.components);return r.createElement(p.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,o=u(t,["components","mdxType","originalType","parentName"]),s=d(n),c=a,g=s["".concat(p,".").concat(c)]||s[c]||m[c]||i;return n?r.createElement(g,l(l({ref:e},o),{},{components:n})):r.createElement(g,l({ref:e},o))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=c;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u[s]="string"==typeof t?t:a,l[1]=u;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5129:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={},l="SUPPLIER DATA",u={unversionedId:"data-editing/supplier_data",id:"data-editing/supplier_data",title:"SUPPLIER DATA",description:"MODULE OVERVIEW",source:"@site/docs/data-editing/supplier_data.md",sourceDirName:"data-editing",slug:"/data-editing/supplier_data",permalink:"/Lucasmolin/my-website/docs/data-editing/supplier_data",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/data-editing/supplier_data.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Attributes",permalink:"/Lucasmolin/my-website/docs/data-editing/attributes"},next:{title:"VIRTUAL CONTENT",permalink:"/Lucasmolin/my-website/docs/data-editing/virtual_content"}},p={},d=[{value:"MODULE OVERVIEW",id:"module-overview",level:3},{value:"DATA &amp; DEFINITIONS",id:"data--definitions",level:3}],o={toc:d},s="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,r.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"supplier-data"},"SUPPLIER DATA"),(0,a.kt)("h3",{id:"module-overview"},"MODULE OVERVIEW"),(0,a.kt)("p",null,"In this module, we manage supplier data for products. One product can have several sets of supplier data. This module is one sheet and is language dependent."),(0,a.kt)("h3",{id:"data--definitions"},"DATA & DEFINITIONS"),(0,a.kt)("p",null,"The product relations module is divided into two different templates: Product Relations and Addon Categories."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Data"),(0,a.kt)("th",{parentName:"tr",align:null},"Definition"),(0,a.kt)("th",{parentName:"tr",align:null},"Rules & Validation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"organisation_slug"),(0,a.kt)("td",{parentName:"tr",align:null},"Identifier for the organisation that owns the product."),(0,a.kt)("td",{parentName:"tr",align:null},"Must be an active organisation in SQARP.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"manufacturer_article_number"),(0,a.kt)("td",{parentName:"tr",align:null},"The manufacturers unique identifier for the product."),(0,a.kt)("td",{parentName:"tr",align:null},"Article number must exist in SQARP.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"market_slug"),(0,a.kt)("td",{parentName:"tr",align:null},"Identifier for the market the supplier data refers to"),(0,a.kt)("td",{parentName:"tr",align:null},"Must be ISO Alpha-3 code")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"supplier_article_number"),(0,a.kt)("td",{parentName:"tr",align:null},"The suppliers unique identifier for the product"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"supplier_product_url"),(0,a.kt)("td",{parentName:"tr",align:null},"URL to the corresponding product page on the suppliers website"),(0,a.kt)("td",{parentName:"tr",align:null},"Must be valid URL. Validated for 200 response.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"supplier",(0,a.kt)("em",{parentName:"td"},"product_title"),"[lang]"),(0,a.kt)("td",{parentName:"tr",align:null},"The suppliers name for the product in the specified language"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"supplier_partner_pricing_unit_slug"),(0,a.kt)("td",{parentName:"tr",align:null},"The unit in which the product is priced"),(0,a.kt)("td",{parentName:"tr",align:null},"Must be valid unit. List of available units can be found here.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"supplier_partner_packaging_unit_slug"),(0,a.kt)("td",{parentName:"tr",align:null},"The unit in which the product is packaged"),(0,a.kt)("td",{parentName:"tr",align:null},"Must be valid unit. List of available units can be found here.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"supplier_partner_pricing_multiple"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of pricing units per packaging unit."),(0,a.kt)("td",{parentName:"tr",align:null},"Must be positive numeric value.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"supplier_minimum_order_quantity"),(0,a.kt)("td",{parentName:"tr",align:null},"The minimum number of pricing units that must be purchased in a single order."),(0,a.kt)("td",{parentName:"tr",align:null},"Must be positive numeric value.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"supplier_max_delivery_time"),(0,a.kt)("td",{parentName:"tr",align:null},"The maximum delivery time of the product in business days."),(0,a.kt)("td",{parentName:"tr",align:null},"Must be positive integer.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"supplier",(0,a.kt)("em",{parentName:"td"},"delivery_notes"),"[lang]"),(0,a.kt)("td",{parentName:"tr",align:null},"Delivery notes for the product in the specified language."),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"supplier_recommended_price_unit_slug"),(0,a.kt)("td",{parentName:"tr",align:null},"The unit corresponding to the recommended retail price of the product."),(0,a.kt)("td",{parentName:"tr",align:null},"Must be valid unit. List of available units can be found here.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"supplier_recommended_price_currency_slug"),(0,a.kt)("td",{parentName:"tr",align:null},"The currency corresponding to the recommended retail price of the product."),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status"),(0,a.kt)("td",{parentName:"tr",align:null},"The products current status."),(0,a.kt)("td",{parentName:"tr",align:null},"Allowed values are \u201cACTIVE\u201d, \u201cINACTIVE\u201d, \u201cDISCONTINUED\u201d, \u201cUNRELEASED\u201d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"release_date"),(0,a.kt)("td",{parentName:"tr",align:null},"The planned release date for the product"),(0,a.kt)("td",{parentName:"tr",align:null},"Must be on the format YYYY-MM-DD")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"discontinued_date"),(0,a.kt)("td",{parentName:"tr",align:null},"The planned discontinuation date for the product"),(0,a.kt)("td",{parentName:"tr",align:null},"Must be on the format YYYY-MM-DD")))))}m.isMDXComponent=!0}}]);