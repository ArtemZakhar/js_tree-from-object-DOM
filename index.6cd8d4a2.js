function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}!function t(r,n){if(Object.values(n).every(function(e){return 0===Object.keys(e).length})){var a=document.createElement("ul");Object.keys(n).forEach(function(e){var t=document.createElement("li");t.textContent=e,a.append(t)}),r.append(a);return}var o=document.createElement("ul");Object.entries(n).map(function(r){var n=function(e){if(Array.isArray(e))return e}(r)||function(e,t){var r,n,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var o=[],l=!0,u=!1;try{for(a=a.call(e);!(l=(r=a.next()).done)&&(o.push(r.value),2!==o.length);l=!0);}catch(e){u=!0,n=e}finally{try{l||null==a.return||a.return()}finally{if(u)throw n}}return o}}(r,2)||function(t,r){if(t){if("string"==typeof t)return e(t,2);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,2)}}(r,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),a=n[0],l=n[1],u=document.createElement("li");u.textContent=a,o.append(u),t(u,l)}),r.append(o)}(document.querySelector("#tree"),{Drink:{Wine:{},Schnaps:{}},Fruit:{Red:{Cherry:{},Strawberry:{}},Yellow:{Banana:{},Pineapple:{}}}});
//# sourceMappingURL=index.6cd8d4a2.js.map
