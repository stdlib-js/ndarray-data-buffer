// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=Math.floor;var e=9007199254740991;function r(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&(n=r.length,t(n)===n)&&r.length>=0&&r.length<=e;var n}function n(){var t,e=arguments,r="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)r+="&arg[]="+encodeURIComponent(e[t]);return r}function o(t){var e;if("object"!=typeof t||null===t)throw new TypeError(n("1kTDv",t));if(r(e=t.data))return e;throw new TypeError(n("1kTDv",t))}export{o as default};
//# sourceMappingURL=mod.js.map
