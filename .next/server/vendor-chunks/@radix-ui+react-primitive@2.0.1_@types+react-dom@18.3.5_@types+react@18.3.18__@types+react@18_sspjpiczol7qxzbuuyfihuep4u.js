"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@radix-ui+react-primitive@2.0.1_@types+react-dom@18.3.5_@types+react@18.3.18__@types+react@18_sspjpiczol7qxzbuuyfihuep4u";
exports.ids = ["vendor-chunks/@radix-ui+react-primitive@2.0.1_@types+react-dom@18.3.5_@types+react@18.3.18__@types+react@18_sspjpiczol7qxzbuuyfihuep4u"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@radix-ui+react-primitive@2.0.1_@types+react-dom@18.3.5_@types+react@18.3.18__@types+react@18_sspjpiczol7qxzbuuyfihuep4u/node_modules/@radix-ui/react-primitive/dist/index.mjs":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@radix-ui+react-primitive@2.0.1_@types+react-dom@18.3.5_@types+react@18.3.18__@types+react@18_sspjpiczol7qxzbuuyfihuep4u/node_modules/@radix-ui/react-primitive/dist/index.mjs ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Primitive: () => (/* binding */ Primitive),\n/* harmony export */   Root: () => (/* binding */ Root),\n/* harmony export */   dispatchDiscreteCustomEvent: () => (/* binding */ dispatchDiscreteCustomEvent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.83.4/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"(ssr)/./node_modules/.pnpm/next@14.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.83.4/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-dom.js\");\n/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/react-slot */ \"(ssr)/./node_modules/.pnpm/@radix-ui+react-slot@1.1.1_@types+react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.mjs\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"(ssr)/./node_modules/.pnpm/next@14.1.3_react-dom@18.3.1_react@18.3.1__react@18.3.1_sass@1.83.4/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-runtime.js\");\n// packages/react/primitive/src/Primitive.tsx\n\n\n\n\nvar NODES = [\n  \"a\",\n  \"button\",\n  \"div\",\n  \"form\",\n  \"h2\",\n  \"h3\",\n  \"img\",\n  \"input\",\n  \"label\",\n  \"li\",\n  \"nav\",\n  \"ol\",\n  \"p\",\n  \"span\",\n  \"svg\",\n  \"ul\"\n];\nvar Primitive = NODES.reduce((primitive, node) => {\n  const Node = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, forwardedRef) => {\n    const { asChild, ...primitiveProps } = props;\n    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.Slot : node;\n    if (typeof window !== \"undefined\") {\n      window[Symbol.for(\"radix-ui\")] = true;\n    }\n    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });\n  });\n  Node.displayName = `Primitive.${node}`;\n  return { ...primitive, [node]: Node };\n}, {});\nfunction dispatchDiscreteCustomEvent(target, event) {\n  if (target) react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync(() => target.dispatchEvent(event));\n}\nvar Root = Primitive;\n\n//# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQHJhZGl4LXVpK3JlYWN0LXByaW1pdGl2ZUAyLjAuMV9AdHlwZXMrcmVhY3QtZG9tQDE4LjMuNV9AdHlwZXMrcmVhY3RAMTguMy4xOF9fQHR5cGVzK3JlYWN0QDE4X3NzcGpwaWN6b2w3cXh6YnV1eWZpaHVlcDR1L25vZGVfbW9kdWxlcy9AcmFkaXgtdWkvcmVhY3QtcHJpbWl0aXZlL2Rpc3QvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUMrQjtBQUNPO0FBQ007QUFDSjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsNkNBQWdCO0FBQy9CLFlBQVksNkJBQTZCO0FBQ3pDLDJCQUEyQixzREFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0RBQUcsU0FBUyxzQ0FBc0M7QUFDN0UsR0FBRztBQUNILGtDQUFrQyxLQUFLO0FBQ3ZDLFdBQVc7QUFDWCxDQUFDLElBQUk7QUFDTDtBQUNBLGNBQWMsZ0RBQWtCO0FBQ2hDO0FBQ0E7QUFLRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FuemhhbnR1c2h1Ly4vbm9kZV9tb2R1bGVzLy5wbnBtL0ByYWRpeC11aStyZWFjdC1wcmltaXRpdmVAMi4wLjFfQHR5cGVzK3JlYWN0LWRvbUAxOC4zLjVfQHR5cGVzK3JlYWN0QDE4LjMuMThfX0B0eXBlcytyZWFjdEAxOF9zc3BqcGljem9sN3F4emJ1dXlmaWh1ZXA0dS9ub2RlX21vZHVsZXMvQHJhZGl4LXVpL3JlYWN0LXByaW1pdGl2ZS9kaXN0L2luZGV4Lm1qcz9jOTJhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhY2thZ2VzL3JlYWN0L3ByaW1pdGl2ZS9zcmMvUHJpbWl0aXZlLnRzeFxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBTbG90IH0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC1zbG90XCI7XG5pbXBvcnQgeyBqc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbnZhciBOT0RFUyA9IFtcbiAgXCJhXCIsXG4gIFwiYnV0dG9uXCIsXG4gIFwiZGl2XCIsXG4gIFwiZm9ybVwiLFxuICBcImgyXCIsXG4gIFwiaDNcIixcbiAgXCJpbWdcIixcbiAgXCJpbnB1dFwiLFxuICBcImxhYmVsXCIsXG4gIFwibGlcIixcbiAgXCJuYXZcIixcbiAgXCJvbFwiLFxuICBcInBcIixcbiAgXCJzcGFuXCIsXG4gIFwic3ZnXCIsXG4gIFwidWxcIlxuXTtcbnZhciBQcmltaXRpdmUgPSBOT0RFUy5yZWR1Y2UoKHByaW1pdGl2ZSwgbm9kZSkgPT4ge1xuICBjb25zdCBOb2RlID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIGZvcndhcmRlZFJlZikgPT4ge1xuICAgIGNvbnN0IHsgYXNDaGlsZCwgLi4ucHJpbWl0aXZlUHJvcHMgfSA9IHByb3BzO1xuICAgIGNvbnN0IENvbXAgPSBhc0NoaWxkID8gU2xvdCA6IG5vZGU7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHdpbmRvd1tTeW1ib2wuZm9yKFwicmFkaXgtdWlcIildID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3goQ29tcCwgeyAuLi5wcmltaXRpdmVQcm9wcywgcmVmOiBmb3J3YXJkZWRSZWYgfSk7XG4gIH0pO1xuICBOb2RlLmRpc3BsYXlOYW1lID0gYFByaW1pdGl2ZS4ke25vZGV9YDtcbiAgcmV0dXJuIHsgLi4ucHJpbWl0aXZlLCBbbm9kZV06IE5vZGUgfTtcbn0sIHt9KTtcbmZ1bmN0aW9uIGRpc3BhdGNoRGlzY3JldGVDdXN0b21FdmVudCh0YXJnZXQsIGV2ZW50KSB7XG4gIGlmICh0YXJnZXQpIFJlYWN0RE9NLmZsdXNoU3luYygoKSA9PiB0YXJnZXQuZGlzcGF0Y2hFdmVudChldmVudCkpO1xufVxudmFyIFJvb3QgPSBQcmltaXRpdmU7XG5leHBvcnQge1xuICBQcmltaXRpdmUsXG4gIFJvb3QsXG4gIGRpc3BhdGNoRGlzY3JldGVDdXN0b21FdmVudFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@radix-ui+react-primitive@2.0.1_@types+react-dom@18.3.5_@types+react@18.3.18__@types+react@18_sspjpiczol7qxzbuuyfihuep4u/node_modules/@radix-ui/react-primitive/dist/index.mjs\n");

/***/ })

};
;