/*! For license information please see a1478d3a.5741be89.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{108:function(e,t,n){(function(e){!function(e){"use strict";var t,n=function(){try{if(e.URLSearchParams&&"bar"===new e.URLSearchParams("foo=bar").get("foo"))return e.URLSearchParams}catch(t){}return null}(),a=n&&"a=1"===new n({a:1}).toString(),r=n&&"+"===new n("s=%2B").get("s"),o=!n||((t=new n).append("s"," &"),"s=+%26"===t.toString()),i=u.prototype,l=!(!e.Symbol||!e.Symbol.iterator);if(!(n&&a&&r&&o)){i.append=function(e,t){m(this.__URLSearchParams__,e,t)},i.delete=function(e){delete this.__URLSearchParams__[e]},i.get=function(e){var t=this.__URLSearchParams__;return this.has(e)?t[e][0]:null},i.getAll=function(e){var t=this.__URLSearchParams__;return this.has(e)?t[e].slice(0):[]},i.has=function(e){return _(this.__URLSearchParams__,e)},i.set=function(e,t){this.__URLSearchParams__[e]=[""+t]},i.toString=function(){var e,t,n,a,r=this.__URLSearchParams__,o=[];for(t in r)for(n=f(t),e=0,a=r[t];e<a.length;e++)o.push(n+"="+f(a[e]));return o.join("&")};var c=!!r&&n&&!a&&e.Proxy;Object.defineProperty(e,"URLSearchParams",{value:c?new Proxy(n,{construct:function(e,t){return new e(new u(t[0]).toString())}}):u});var s=e.URLSearchParams.prototype;s.polyfill=!0,s.forEach=s.forEach||function(e,t){var n=h(this.toString());Object.getOwnPropertyNames(n).forEach((function(a){n[a].forEach((function(n){e.call(t,n,a,this)}),this)}),this)},s.sort=s.sort||function(){var e,t,n,a=h(this.toString()),r=[];for(e in a)r.push(e);for(r.sort(),t=0;t<r.length;t++)this.delete(r[t]);for(t=0;t<r.length;t++){var o=r[t],i=a[o];for(n=0;n<i.length;n++)this.append(o,i[n])}},s.keys=s.keys||function(){var e=[];return this.forEach((function(t,n){e.push(n)})),d(e)},s.values=s.values||function(){var e=[];return this.forEach((function(t){e.push(t)})),d(e)},s.entries=s.entries||function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),d(e)},l&&(s[e.Symbol.iterator]=s[e.Symbol.iterator]||s.entries)}function u(e){((e=e||"")instanceof URLSearchParams||e instanceof u)&&(e=e.toString()),this.__URLSearchParams__=h(e)}function f(e){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'\(\)~]|%20|%00/g,(function(e){return t[e]}))}function p(e){return e.replace(/[ +]/g,"%20").replace(/(%[a-f0-9]{2})+/gi,(function(e){return decodeURIComponent(e)}))}function d(t){var n={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return l&&(n[e.Symbol.iterator]=function(){return n}),n}function h(e){var t={};if("object"==typeof e)if(E(e))for(var n=0;n<e.length;n++){var a=e[n];if(!E(a)||2!==a.length)throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements");m(t,a[0],a[1])}else for(var r in e)e.hasOwnProperty(r)&&m(t,r,e[r]);else{0===e.indexOf("?")&&(e=e.slice(1));for(var o=e.split("&"),i=0;i<o.length;i++){var l=o[i],c=l.indexOf("=");-1<c?m(t,p(l.slice(0,c)),p(l.slice(c+1))):l&&m(t,p(l),"")}}return t}function m(e,t,n){var a="string"==typeof n?n:null!=n&&"function"==typeof n.toString?n.toString():JSON.stringify(n);_(e,t)?e[t].push(a):e[t]=[a]}function E(e){return!!e&&"[object Array]"===Object.prototype.toString.call(e)}function _(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(void 0!==e?e:"undefined"!=typeof window?window:this)}).call(this,n(29))},109:function(e,t,n){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||a(t,e,n)},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.stripHexcode=t.generateEmoticonPermutations=t.fromUnicodeToHexcode=t.fromHexcodeToCodepoint=t.fromCodepointToUnicode=t.flattenEmojiData=t.fetchFromCDN=void 0;var i=o(n(110));t.fetchFromCDN=i.default;var l=o(n(111));t.flattenEmojiData=l.default;var c=o(n(112));t.fromCodepointToUnicode=c.default;var s=o(n(113));t.fromHexcodeToCodepoint=s.default;var u=o(n(114));t.fromUnicodeToHexcode=u.default;var f=o(n(115));t.generateEmoticonPermutations=f.default;var p=o(n(116));t.stripHexcode=p.default,r(n(88),t),r(n(117),t)},110:function(e,t,n){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if(void 0===t&&(t="latest"),void 0===n&&(n={}),__DEV__){if(!e||".json"!==e.slice(-5))throw new Error("A valid JSON dataset is required to fetch.");if(!t)throw new Error("A valid release version is required.")}var o=n.local,i=void 0!==o&&o,l=r(n,["local"]),c=i?localStorage:sessionStorage,s="emojibase/"+t+"/"+e,u=c.getItem(s);if(u)try{return Promise.resolve(JSON.parse(u))}catch(f){return Promise.resolve([])}return fetch("https://cdn.jsdelivr.net/npm/emojibase-data@"+t+"/"+e,a({credentials:"omit",mode:"cors",redirect:"error"},l)).then((function(e){if(!e.ok)throw new Error("Failed to load Emojibase dataset.");return e.json()})).then((function(e){try{c.setItem(s,JSON.stringify(e))}catch(f){}return e}))}},111:function(e,t,n){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=this&&this.__rest||function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},o=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var a=Array(e),r=0;for(t=0;t<n;t++)for(var o=arguments[t],i=0,l=o.length;i<l;i++,r++)a[r]=o[i];return a};Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=[];return e.forEach((function(e){if(e.skins){var n=e.skins,i=r(e,["skins"]);t.push(i),n.forEach((function(n){var r=a({},n);e.tags&&(r.tags=o(e.tags)),t.push(r)}))}else t.push(e)})),t}},112:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return String.fromCodePoint.apply(String,e)}},113:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return void 0===t&&(t="-"),e.split(t).map((function(e){return Number.parseInt(e,16)}))}},114:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(88);t.default=function(e,t){void 0===t&&(t=!0);var n=[];return Array.from(e).forEach((function(e){for(var r=e.codePointAt(0).toString(16).toUpperCase();r.length<4;)r="0"+r;(!t||t&&!r.match(a.SEQUENCE_REMOVAL_PATTERN))&&n.push(r)})),n.join("-")}},115:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t,n){void 0===n&&(n={});var a=n.isFace,r=void 0===a||a,o=n.withNose,i=void 0===o||o,l=[t];return t.toUpperCase()!==t&&l.push.apply(l,e(t.toUpperCase(),n)),r&&(t.includes("/")&&l.push.apply(l,e(t.replace("/","\\"),n)),t.includes(")")&&(l.push.apply(l,e(t.replace(")","]"),n)),l.push.apply(l,e(t.replace(")","}"),n))),t.includes("(")&&(l.push.apply(l,e(t.replace("(","["),n)),l.push.apply(l,e(t.replace("(","{"),n))),t.includes(":")&&l.push.apply(l,e(t.replace(":","="),n)),i&&l.forEach((function(e){e.includes("-")||l.push(e.slice(0,e.length-1)+"-"+e.slice(-1))}))),l.sort((function(e,t){return t.length-e.length})),Array.from(new Set(l))}},116:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(88),r=new RegExp("(-| )?("+a.SEQUENCE_REMOVAL_PATTERN.source+")","g");t.default=function(e){return e.replace(r,"")}},117:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0})},118:function(e){e.exports=JSON.parse('{"groups":{"0":"smileys-emotion","1":"people-body","2":"component","3":"animals-nature","4":"food-drink","5":"travel-places","6":"activities","7":"objects","8":"symbols","9":"flags"},"hierarchy":{"0":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"1":[15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],"2":[31,32],"3":[33,34,35,36,37,38,39,40],"4":[41,42,43,44,45,46,47,48],"5":[49,50,51,52,53,54,55,56,57,58,59],"6":[60,61,62,63,64],"7":[65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"8":[83,84,85,86,87,88,89,90,91,92,93,94,95,96],"9":[97,98,99]},"subgroups":{"0":"face-smiling","1":"face-affection","2":"face-tongue","3":"face-hand","4":"face-neutral-skeptical","5":"face-sleepy","6":"face-unwell","7":"face-hat","8":"face-glasses","9":"face-concerned","10":"face-negative","11":"face-costume","12":"cat-face","13":"monkey-face","14":"emotion","15":"hand-fingers-open","16":"hand-fingers-partial","17":"hand-single-finger","18":"hand-fingers-closed","19":"hands","20":"hand-prop","21":"body-parts","22":"person","23":"person-gesture","24":"person-role","25":"person-fantasy","26":"person-activity","27":"person-sport","28":"person-resting","29":"family","30":"person-symbol","31":"skin-tone","32":"hair-style","33":"animal-mammal","34":"animal-bird","35":"animal-amphibian","36":"animal-reptile","37":"animal-marine","38":"animal-bug","39":"plant-flower","40":"plant-other","41":"food-fruit","42":"food-vegetable","43":"food-prepared","44":"food-asian","45":"food-marine","46":"food-sweet","47":"drink","48":"dishware","49":"place-map","50":"place-geographic","51":"place-building","52":"place-religious","53":"place-other","54":"transport-ground","55":"transport-water","56":"transport-air","57":"hotel","58":"time","59":"sky-weather","60":"event","61":"award-medal","62":"sport","63":"game","64":"arts-crafts","65":"clothing","66":"sound","67":"music","68":"musical-instrument","69":"phone","70":"computer","71":"light-video","72":"book-paper","73":"money","74":"mail","75":"writing","76":"office","77":"lock","78":"tool","79":"science","80":"medical","81":"household","82":"other-object","83":"transport-sign","84":"warning","85":"arrow","86":"religion","87":"zodiac","88":"av-symbol","89":"gender","90":"math","91":"punctuation","92":"currency","93":"other-symbol","94":"keycap","95":"alphanum","96":"geometric","97":"flag","98":"country-flag","99":"subdivision-flag"}}')},68:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));n(108);var a=n(0),r=n.n(a),o=n(109),i=n(118),l=n(83),c=n(48),s=n.n(c),u="undefined"!=typeof location,f=[{value:"zh",label:"Chinese (zh)"},{value:"zh-hant",label:"Chinese, Traditional (zh-hant)"},{value:"da",label:"Danish (da)"},{value:"nl",label:"Dutch (nl)"},{value:"en",label:"English (en)"},{value:"en-gb",label:"English, Great Britain (en-gb)"},{value:"fr",label:"French (fr)"},{value:"de",label:"German (de)"},{value:"it",label:"Italian (it)"},{value:"ja",label:"Japanese (ja)"},{value:"ko",label:"Korean (ko)"},{value:"ms",label:"Malay (ms)"},{value:"pl",label:"Polish (pl)"},{value:"pt",label:"Portuguese (pt)"},{value:"ru",label:"Russian (ru)"},{value:"es",label:"Spanish (es)"},{value:"es-mx",label:"Spanish, Mexico (es-mx)"},{value:"sv",label:"Swedish (sv)"},{value:"th",label:"Thai (th)"}];function p(e){u&&history.pushState({},document.title,""+location.origin+location.pathname+"?"+e.toString())}function d(){var e,t,n,c,d,h=new URLSearchParams(u?location.search:""),m=Object(a.useState)(null!==(e=h.get("filter"))&&void 0!==e?e:""),E=m[0],_=m[1],v=Object(a.useState)(null!==(t=h.get("locale"))&&void 0!==t?t:"en"),g=v[0],O=v[1],S=Object(a.useState)(Number(null!==(n=h.get("group"))&&void 0!==n?n:-1)),b=S[0],y=S[1],I=Object(a.useState)(Number(null!==(c=h.get("subgroup"))&&void 0!==c?c:-1)),N=I[0],P=I[1],R=Object(a.useState)(Boolean(null!==(d=h.get("skinTones"))&&void 0!==d&&d)),T=R[0],U=R[1],L=Object(a.useState)([]),j=L[0],M=L[1],w=Object(a.useState)(!0),K=w[0],A=w[1];Object(a.useEffect)((function(){A(!0),Object(o.fetchFromCDN)(g+"/data.json").then((function(e){M(e)})).finally((function(){A(!1)}))}),[g]);var C=function(e,t,n,a){return e.filter((function(e){if(n>=0&&e.group!==n)return!1;if(a>=0&&e.subgroup!==a)return!1;if(t){var r=e.annotation.toLocaleLowerCase().includes(t),o=e.shortcodes.map((function(e){return e.toLocaleLowerCase().includes(t)})).indexOf(!0)>-1,i=(e.tags||[]).map((function(e){return e.toLocaleLowerCase().includes(t)})).indexOf(!0)>-1;return r||o||i}return!0})).sort((function(e,t){return e.order-t.order}))}(T?Object(o.flattenEmojiData)(j):j,E.toLocaleLowerCase(),b,N);return r.a.createElement(l.a,{title:"Emoji browser",description:"Browse all emojis across any supported locale."},r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:s.a.browserFilters},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement("label",{htmlFor:"filter"},"Filter"),r.a.createElement("input",{type:"text",id:"filter",name:"filter",value:E,onChange:function(e){var t=e.currentTarget.value;h.set("filter",t),_(t),p(h)},disabled:K})),r.a.createElement("div",{className:"col col--3"},r.a.createElement("label",{htmlFor:"locale"},"Locale"),r.a.createElement("select",{id:"locale",name:"locale",value:g,onChange:function(e){var t=e.currentTarget.value;h.set("locale",t),O(t),p(h)},disabled:K},f.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)})))),r.a.createElement("div",{className:"col col--3"},r.a.createElement("label",{htmlFor:"group"},"Group"),r.a.createElement("select",{id:"group",name:"group",value:b,onChange:function(e){var t=Number(e.currentTarget.value);h.set("group",String(t)),h.set("subgroup","-1"),y(t),P(-1),p(h)},disabled:K},r.a.createElement("option",{value:"-1"},"(none)"),Object.entries(i.groups).map((function(e){var t=e[0],n=e[1];return r.a.createElement("option",{key:t,value:t},n)})))),r.a.createElement("div",{className:"col col--3"},r.a.createElement("label",{htmlFor:"subgroup"},"Subgroup"),r.a.createElement("select",{id:"subgroup",name:"subgroup",value:N,onChange:function(e){var t=Number(e.currentTarget.value);h.set("subgroup",String(t)),P(t),p(h)},disabled:K||!i.hierarchy[b]},r.a.createElement("option",{value:"-1"},"(none)"),(i.hierarchy[b]||[]).map((function(e){return r.a.createElement("option",{key:e,value:e},i.subgroups[e])}))))),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement("label",{htmlFor:"skinTones"},r.a.createElement("input",{type:"checkbox",id:"skinTones",name:"skinTones",checked:T,onChange:function(e){var t=e.currentTarget.checked;h.set("skinTones",String(t)),U(t),p(h)},disabled:K})," ","Include skin tone variations?")))),r.a.createElement("table",{style:{width:"100%"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Annotation"),r.a.createElement("th",null,"Shortcodes"),r.a.createElement("th",null,"Tags"))),r.a.createElement("tbody",null,K&&r.a.createElement("tr",null,r.a.createElement("td",{colSpan:4,className:"text--center"},"Loading emojis\u2026")),!K&&r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{colSpan:4,className:"text--center"},C.length.toLocaleString()," emojis")),C.map((function(e){return r.a.createElement("tr",{key:e.hexcode,"data-hexcode":e.hexcode},r.a.createElement("td",{className:"text--center"},e.emoji||e.text),r.a.createElement("td",null,e.annotation,e.emoticon&&r.a.createElement("span",{className:"text--muted"}," ",e.emoticon)),r.a.createElement("td",null,e.shortcodes.map((function(e){return":"+e+":"})).join(", ")),r.a.createElement("td",null,e.tags.join(", ")))}))))))))}},88:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EMOTICON_OPTIONS=t.SUPPORTED_LOCALES=t.UNICODE_VERSIONS=t.EMOJI_VERSIONS=t.FIRST_UNICODE_EMOJI_VERSION=t.LATEST_CLDR_VERSION=t.LATEST_UNICODE_VERSION=t.LATEST_EMOJI_VERSION=t.SKIN_KEY_DARK=t.SKIN_KEY_MEDIUM_DARK=t.SKIN_KEY_MEDIUM=t.SKIN_KEY_MEDIUM_LIGHT=t.SKIN_KEY_LIGHT=t.GROUP_KEY_COMPONENT=t.GROUP_KEY_FLAGS=t.GROUP_KEY_SYMBOLS=t.GROUP_KEY_OBJECTS=t.GROUP_KEY_ACTIVITIES=t.GROUP_KEY_TRAVEL_PLACES=t.GROUP_KEY_FOOD_DRINK=t.GROUP_KEY_ANIMALS_NATURE=t.GROUP_KEY_PEOPLE_BODY=t.GROUP_KEY_SMILEYS_EMOTION=t.DARK_SKIN=t.MEDIUM_DARK_SKIN=t.MEDIUM_SKIN=t.MEDIUM_LIGHT_SKIN=t.LIGHT_SKIN=t.MALE=t.FEMALE=t.EMOJI=t.TEXT=t.SEQUENCE_REMOVAL_PATTERN=void 0,t.SEQUENCE_REMOVAL_PATTERN=/200D|FE0E|FE0F/g,t.TEXT=0,t.EMOJI=1,t.FEMALE=0,t.MALE=1,t.LIGHT_SKIN=1,t.MEDIUM_LIGHT_SKIN=2,t.MEDIUM_SKIN=3,t.MEDIUM_DARK_SKIN=4,t.DARK_SKIN=5,t.GROUP_KEY_SMILEYS_EMOTION="smileys-emotion",t.GROUP_KEY_PEOPLE_BODY="people-body",t.GROUP_KEY_ANIMALS_NATURE="animals-nature",t.GROUP_KEY_FOOD_DRINK="food-drink",t.GROUP_KEY_TRAVEL_PLACES="travel-places",t.GROUP_KEY_ACTIVITIES="activities",t.GROUP_KEY_OBJECTS="objects",t.GROUP_KEY_SYMBOLS="symbols",t.GROUP_KEY_FLAGS="flags",t.GROUP_KEY_COMPONENT="component",t.SKIN_KEY_LIGHT="light",t.SKIN_KEY_MEDIUM_LIGHT="medium-light",t.SKIN_KEY_MEDIUM="medium",t.SKIN_KEY_MEDIUM_DARK="medium-dark",t.SKIN_KEY_DARK="dark",t.LATEST_EMOJI_VERSION="13.0",t.LATEST_UNICODE_VERSION="13.0.0",t.LATEST_CLDR_VERSION="37",t.FIRST_UNICODE_EMOJI_VERSION="6.0.0",t.EMOJI_VERSIONS=["1.0","2.0","3.0","4.0","5.0","11.0","12.0","12.1","13.0"],t.UNICODE_VERSIONS=["6.0","6.1","6.2","6.3","7.0","8.0","9.0","10.0","11.0","12.0","12.1","13.0"],t.SUPPORTED_LOCALES=["da","de","en","en-gb","es","es-mx","fr","it","ja","ko","ms","nl","pl","pt","ru","sv","th","zh","zh-hant"],t.EMOTICON_OPTIONS={":{>":{withNose:!1},"</3":{isFace:!1},"<3":{isFace:!1},"\\m/":{isFace:!1},"0)":{withNose:!1}}}}]);