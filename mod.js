// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=Math.floor;function e(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&(n=e.length,t(n)===n)&&e.length>=0&&e.length<=9007199254740991;var n}function n(){var t,e=arguments,n=e[0],r="https://stdlib.io/e/"+n+"?";for(t=1;t<e.length;t++)r+="&arg[]="+encodeURIComponent(e[t]);return r}function r(t){var r;if("object"!=typeof t||null===t)throw new TypeError(n("nullKy",t));if(e(r=t.data))return r;throw new TypeError(n("nullKy",t))}export{r as default};
//# sourceMappingURL=mod.js.map
