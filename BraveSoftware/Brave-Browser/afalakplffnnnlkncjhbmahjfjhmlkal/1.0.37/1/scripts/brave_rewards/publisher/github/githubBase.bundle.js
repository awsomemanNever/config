!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=16)}([function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return s}));let r=null;const i=()=>r,o=e=>{r?e(!0):(chrome.runtime.sendMessage("mnojpmjdmbbfmejpflffifhffcmidifd",{type:"SupportsGreaselion"},(function(t){if(!chrome.runtime.lastError&&t&&t.supported)return r=chrome.runtime.connect("mnojpmjdmbbfmejpflffifhffcmidifd",{name:"Greaselion"}),void e(!0)})),setTimeout(()=>{if(!r)return r=chrome.runtime.connect("jidkidbbcafjabdphckchenhfomhnfma",{name:"Greaselion"}),void e(!0)},100))},s=(e,t)=>{e&&r&&r.postMessage({type:"GreaselionError",mediaType:e,data:{errorMessage:t}})}},function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));const r=(e,t,n)=>{if(e.length<t.length)return"";const r=e.indexOf(t);if(-1===r)return"";const i=r+t.length,o=e.indexOf(n,i);let s="";return o!==i?s=-1!==o&&o>i||-1!==o?e.substring(i,o):e.substring(i):""===n&&(s=e.substring(i)),s},i=(e,t)=>{const n=Object.getOwnPropertyNames(e),r=Object.getOwnPropertyNames(t);if(n.length!==r.length)return!1;for(let r=0;r<n.length;r++){const i=n[r];if(e[i]!==t[i])return!1}return!0},o=()=>"complete"===document.readyState&&"visible"===document.visibilityState},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0);let i=!1;const o=(e,t)=>{if(!e||i)return;i=!0;const n=Object(r.b)();n&&(n.postMessage({type:"RegisterOnUpdatedTab",mediaType:e}),n.onMessage.addListener((function(e){if(e.data)switch(e.type){case"OnUpdatedTab":t(e.data.changeInfo)}})))}},function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));const r="github",i="github.com"},,function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return c}));var r=n(5);const i=e=>e?`${r.b}#channel:${e}`:"",o=e=>e?`https://github.com/${e}/`:"",s=e=>{if(!e.pathname)return"";const t=e.pathname.split("/").filter(e=>e);return t&&0!==t.length?t.length>1&&"orgs"===t[0]?t[1]:t[0]:""},u=e=>!!["/","/about","/enterprise","/events","/explore","/home","/issues","/login","/logout","/marketplace","/nonprofit","/notifications","/pricing","/pulls","/search","/settings","/team","/tos"].includes(e),a=e=>{if(!e)return!1;const t=e.match("[?|&]tab=([^&]+)&?");if(!t||t.length<2||!t[1])return!1;const n=t[1];return!!["repositories"].includes(n)},c=async e=>{if(!e)throw new Error("Invalid parameters");const t=(e=>e?"https://api.github.com/users/"+e:"")(e);if(!t)throw new Error("Invalid profile api url");const n=await fetch(t);if(!n.ok)throw new Error(`Profile API request failed: ${n.statusText} (${n.status})`);const r=await n.json();return{user:{id:r.id,screenName:r.login,fullName:r.name||r.login,favIconUrl:r.avatar_url},post:{id:"",timestamp:"",text:""}}}},,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(5),o=n(7);const s=()=>{const e=new URL(location.href);o.f(e.pathname)?(()=>{const e="https://"+i.a,t=i.a,n=i.a,o=Object(r.b)();o&&o.postMessage({type:"SavePublisherVisit",mediaType:"",data:{url:e,publisherKey:t,publisherName:n,mediaKey:"",favIconUrl:""}})})():(e=>{const t=o.d(e);if(t)return o.c(t).then(e=>{const n=e.user.id,s=o.b(n),u=e.user.fullName;if(!u)return void Object(r.c)(i.b,"Invalid publisher name");const a=e.user.favIconUrl,c=o.a(t),f=Object(r.b)();f&&f.postMessage({type:"SavePublisherVisit",mediaType:i.b,data:{url:c,publisherKey:s,publisherName:u,mediaKey:"",favIconUrl:a}})});Object(r.c)(i.b,"Invalid screen name")})(e)};var u=n(4),a=n(1);let c="";const f=e=>{e&&(e.url||"complete"===e.status)&&location.href!==c&&(c=location.href,s())};chrome.extension.inIncognitoContext||(Object(r.a)(e=>{e?(a.b()?s():document.addEventListener("readystatechange",(function(){a.b()&&s()})),document.addEventListener("visibilitychange",(function(){"visible"===document.visibilityState&&s()})),u.a(i.b,f)):console.error("Failed to initialize communications port")}),console.info("Greaselion script loaded: githubBase.ts"))}]);