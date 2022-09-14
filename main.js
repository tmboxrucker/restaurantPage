(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>u});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),d=t(667),c=t.n(d),s=new URL(t(825),t.b),l=i()(a()),p=c()(s);l.push([n.id,":root {\n    --primary-dark: #333;\n    --primary-light: #ededed;\n    --secondary-light: #fefefe;\n}\n\n* {\n    margin: 0%;\n    padding: 0%;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: var(--primary-light);\n    font-family: 'Roboto', sans-serif;\n    color: var(--primary-dark);\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    font-size: 1.4em;\n    background-image: url("+p+");\n    background-position: bottom;\n    background-attachment: fixed;\n    background-size: cover;\n}\n\ninput, select, button {\n    font-family: inherit;\n    font-size: inherit;\n}\n\n#content {\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.header {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    padding-top: 50px;\n    padding-bottom: 20px;\n    gap: 50px;\n    background-color: rgb(1, 1, 1, .7);\n    color: var(--primary-light);\n}\n\n.navigation {\n    display: flex;\n    gap: 25px;\n}\n\n.nav {\n    transition: translate .5s;\n}\n\n.nav:hover {\n    cursor: pointer;\n    translate: 5px 5px;\n}\n\n.active {\n    border-bottom: 3px solid var(--primary-light);\n}\n\n.body {\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    align-self: center;\n    width: 750px;\n    background-color: rgb(1, 1, 1, .5);\n    color: var(--primary-light);\n    border: rgb(100, 100, 100, .5) 1px solid;\n}\n\n.footer {\n    font-size: medium;\n    display: flex;\n    justify-content: center;\n    padding: 10px;\n    background-color: rgb(1, 1, 1, .7);\n    color: var(--primary-light);\n    border-top: rgb(100, 100, 100, .5) 1px solid;\n}\n\n/* Home Page */\n\n.home {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    flex: 1;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    animation: fadeIn 1.5s;\n    min-height: 750px;\n}\n\n.home img{\n    height: 500px;\n    width: fit-content;\n    border-radius: 500px;\n    /* padding: 10px; */\n}\n\n/* Menu Page */\n\n.menu {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 2rem;\n    animation: fadeIn 1.5s;\n}\n\n.menuItem {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 2rem;\n    background-color: rgb(1, 1, 1, .7);\n    gap: 10px;\n}\n\n.menuItem p {\n    font-size: medium;\n}\n\n.menu img {\n    width: 100%;\n    height: 200px;\n    object-fit: cover;\n}\n\n.menu h2 {\n    font-size: larger;\n}\n\n/* Contact Page */\n\n.contact {\n    display: flex ;\n    flex-direction: column;\n    align-items: center;\n    font-size: 1.6em;\n    animation: fadeIn 1.5s;\n}\n\n.form {\n    width: 100%;\n}\n\n.socialMediaHolder {\n    display: flex;\n    gap: 10px;\n}\n\n.formInput {\n    position: relative;\n    margin-top: 1rem;\n}\n\n.formInput input, .formInput textarea {\n    width: 98%;\n    padding: 0.5rem 0;\n    margin: 1rem 0;\n    font-size: 1.6rem;\n    border: none;\n    outline: none;\n    border-bottom: 2px solid var(--primary-light);\n    resize: none;\n    background: rgba(1, 1, 1, 0);\n    color: var(--primary-light);\n}\n\nspan {\n    position: absolute;\n    left: 0;\n    padding: 0.5rem 0;\n    margin: 1rem 0;\n    font-size: 1.6rem;\n    pointer-events: none;\n    transition: 0.3s;\n    color: var(--primary-light);\n}\n\n.formInput input:focus ~ span,\n.formInput input:valid ~ span,\n.formInput textarea:focus ~ span,\n.formInput textarea:valid ~ span {\n    font-size: 1.2rem;\n    transform: translateY(-2rem);\n}\n\n.formInput input:not(:placeholder-shown):not(:focus):invalid ~ span {\n    color: red;\n    font-size: 1.2rem;\n    transform: translateY(-2rem);\n}\n\ninput[type='submit'] {\n    width: 10rem;\n    font-size: 1.6rem;\n    background: var(--primary-light);\n    padding: 8px 22px;\n    color: var(--primary-dark);\n    border: none;\n    outline: none;\n    border-radius: 4px;\n    cursor: pointer;\n    transition: 0.5s;\n}\n\n.contact img {\n    width: 30px;\n}\n\n/* Animation */\n\n@keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n  \n    100% {\n      opacity: 1;\n    }\n  }\n\n",""]);const u=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],d=0;d<n.length;d++){var c=n[d],s=r.base?c[0]+r.base:c[0],l=o[s]||0,p="".concat(s," ").concat(l);o[s]=l+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=a(m,r);r.byIndex=d,e.splice(d,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var d=t(o[i]);e[d].references--}for(var c=r(n,a),s=0;s<o.length;s++){var l=t(o[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},825:(n,e,t)=>{n.exports=t.p+"e46b335d9c9529832036.jpg"}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),a=t.n(r),o=t(569),i=t.n(o),d=t(565),c=t.n(d),s=t(216),l=t.n(s),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=n=>{const e=document.createElement("p");return e.textContent=n,e},g=()=>{const n=document.getElementById("body");n.textContent="",n.appendChild((()=>{const n=document.createElement("div");n.classList.add("home");const e=document.createElement("img");return e.src="images/chef-andrew.jpg",e.alt="Chef Andrew",n.appendChild(h("All types of cullinary cuisines at home")),n.appendChild(h("From breakfast to dinner, and everything in between!")),n.appendChild(e),n.appendChild(h("Ask about the weekly hot sauce!")),n})())},v=(n,e)=>{const t=document.createElement("div");t.classList.add("menuItem");const r=document.createElement("h2");r.innerHTML=n;const a=document.createElement("p");a.innerHTML=e;const o=document.createElement("img");return o.src=`images/food/${n.toLowerCase().replace(/\s/g,"")}.jpg`,o.alt=n,t.appendChild(o),t.appendChild(r),t.appendChild(a),t},b=n=>{const e=document.createElement("a");e.classList.add(n),e.setAttribute("href","https://github.com/tmboxrucker");const t=document.createElement("img");return t.src=`images/${n.toLowerCase().replace(/\s/g,"")}.png`,t.alt=n,e.appendChild(t),e},y=(n,e,t)=>{const r=document.createElement("div");r.classList.add("formInput");const a=document.createElement(n);a.setAttribute("required",!0),a.setAttribute("placeholder"," "),null!=t&&a.setAttribute("type",t);const o=document.createElement("span");return o.innerHTML=e,r.appendChild(a),r.appendChild(o),r},x=()=>{const n=document.getElementById("body");n.textContent="",n.appendChild((()=>{const n=document.createElement("div");n.classList.add("contact");const e=document.createElement("div");return e.classList.add("socialMediaHolder"),e.appendChild(b("twitter")),e.appendChild(b("instagram")),n.appendChild((()=>{const n=document.createElement("form");n.classList.add("form"),n.setAttribute("onsubmit","return false");const e=document.createElement("p");e.innerHTML="Message me!";const t=document.createElement("input");return t.setAttribute("type","submit"),t.setAttribute("value","Submit"),n.appendChild(e),n.appendChild(y("input","Name","text")),n.appendChild(y("input","Email","email")),n.appendChild(y("textarea","Type your message...")),n.appendChild(t),n})()),n.appendChild((n=>{const e=document.createElement("p");return e.textContent=n,e})("Follow me below!")),n.appendChild(e),n})())},C=()=>{const n=document.createElement("div"),e=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div");return n.classList.add("navigation"),e.classList.add("nav"),t.classList.add("nav"),r.classList.add("nav"),e.innerHTML="Home",t.innerHTML="Menu",r.innerHTML="Contact",e.addEventListener("click",(n=>{n.target.classList.contains("active")||(E(e),g())})),t.addEventListener("click",(n=>{n.target.classList.contains("active")||(E(t),(()=>{const n=document.getElementById("body");n.textContent="",n.appendChild((()=>{const n=document.createElement("div");return n.classList.add("menu"),n.appendChild(v("Chicken Carbonara","Desription of dish")),n.appendChild(v("Sandwich","Desription of dish")),n.appendChild(v("Cinnamon Rolls","Desription of dish")),n})())})())})),r.addEventListener("click",(n=>{n.target.classList.contains("active")||(E(r),x())})),n.appendChild(e),n.appendChild(t),n.appendChild(r),n},E=n=>{document.querySelectorAll(".nav").forEach((n=>{null!=n&&n.classList.remove("active")})),n.classList.add("active")};(()=>{const n=document.getElementById("content");n.appendChild((()=>{const n=document.createElement("div");n.classList.add("header");const e=document.createElement("h1");return e.classList.add("title"),e.innerHTML="Chef Andrew's Eatery",n.appendChild(e),n.appendChild(C()),n})()),n.appendChild((()=>{const n=document.createElement("div");return n.classList.add("body"),n.setAttribute("id","body"),n.innerHTML="This is a blurb of text. blah blah blah",n})()),n.appendChild((()=>{const n=document.createElement("div");return n.classList.add("footer"),n.innerHTML="Page made by Troy Boxrucker 2022",n})()),E(document.querySelector(".nav")),g()})()})()})();