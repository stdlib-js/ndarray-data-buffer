// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function e(e){var n;if("object"!=typeof e||null===e)throw new TypeError(t("invalid argument. Must provide an ndarray. Value: `%s`.",e));if(n=e.data,r(n))return n;throw new TypeError(t("invalid argument. Must provide an ndarray. Value: `%s`.",e))}export{e as default};
//# sourceMappingURL=index.mjs.map
