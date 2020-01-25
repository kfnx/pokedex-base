(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./src/page/Detail/index.js":
/*!**********************************!*\
  !*** ./src/page/Detail/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Detail; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ \"./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js\");\n/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../query */ \"./src/query/index.js\");\n\n\n\n\nfunction Detail() {\n  var _useParams = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"useParams\"])(),\n      id = _useParams.id,\n      name = _useParams.name;\n\n  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(_query__WEBPACK_IMPORTED_MODULE_3__[\"GET_POKEMON_DETAIL\"], {\n    variables: {\n      id: id,\n      name: name\n    }\n  }),\n      loading = _useQuery.loading,\n      error = _useQuery.error,\n      data = _useQuery.data;\n\n  if (loading) return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, \"LOADING\");\n  if (error) return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, \"ERROR\");\n  return react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null, react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"b\", null, \"DETAIL\"), react__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"](\"p\", null, data.pokemon && JSON.stringify(data.pokemon)));\n}\n\n//# sourceURL=webpack:///./src/page/Detail/index.js?");

/***/ }),

/***/ "./src/query/index.js":
/*!****************************!*\
  !*** ./src/query/index.js ***!
  \****************************/
/*! exports provided: GET_POKEMONS, GET_POKEMON_DETAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_POKEMONS\", function() { return GET_POKEMONS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_POKEMON_DETAIL\", function() { return GET_POKEMON_DETAIL; });\n/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ \"./node_modules/apollo-boost/lib/bundle.esm.js\");\nfunction _templateObject2() {\n  var data = _taggedTemplateLiteral([\"\\n  query getPokemon($id: String, $name: String) {\\n    pokemon(id: $id, name: $name) {\\n      id\\n      name\\n      image\\n      classification\\n      resistant\\n      weaknesses\\n      types\\n      maxHP\\n      maxCP\\n      fleeRate\\n      evolutions {\\n        id\\n        name\\n        image\\n        number\\n        types\\n        maxHP\\n        maxCP\\n        evolutionRequirements {\\n          name\\n          amount\\n        }\\n      }\\n      number\\n    }\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  query getPokemons($first: Int!) {\\n    pokemons(first: $first) {\\n      id\\n      name\\n      image\\n      types\\n      number\\n      classification\\n      weaknesses\\n      resistant\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar GET_POKEMONS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__[\"gql\"])(_templateObject());\nvar GET_POKEMON_DETAIL = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__[\"gql\"])(_templateObject2());\n\n\n//# sourceURL=webpack:///./src/query/index.js?");

/***/ })

}]);