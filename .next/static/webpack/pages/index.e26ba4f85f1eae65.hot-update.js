"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Landing/mission/styled.js":
/*!**************************************************!*\
  !*** ./src/components/Landing/mission/styled.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IconWrapper\": function() { return /* binding */ IconWrapper; },\n/* harmony export */   \"Left\": function() { return /* binding */ Left; },\n/* harmony export */   \"Pointer\": function() { return /* binding */ Pointer; },\n/* harmony export */   \"PointerContainer\": function() { return /* binding */ PointerContainer; },\n/* harmony export */   \"PointerImage\": function() { return /* binding */ PointerImage; },\n/* harmony export */   \"Right\": function() { return /* binding */ Right; },\n/* harmony export */   \"TitleContainer\": function() { return /* binding */ TitleContainer; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/images */ \"./src/assets/images/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  align-items: center;\\n  gap: 16px;\\n  font-weight: 700;\\n  font-size: clamp(14px, 1.5vw, 18px);\\n  color: #313131;\\n\\n  span {\\n    max-width: max-content;\\n    text-align: \",\n        \";\\n\\n    @media screen and (max-width: 800px) {\\n      align-self: \",\n        \";\\n    }\\n  }\\n\\n  @media screen and (max-width: 800px) {\\n    flex-flow: \",\n        \";\\n  }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  flex-flow: column;\\n  justify-content: space-between;\\n  gap: 70px;\\n  align-items: flex-end;\\n  margin-right: 15px;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  flex-flow: column;\\n  justify-content: space-between;\\n  gap: 70px;\\n  align-items: flex-start;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  position: relative;\\n  top: \",\n        \";\\n  transform: \",\n        \";\\n  max-width: 86px;\\n  /* max-height: 55px; */\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  background: #ffffff;\\n  border: 3px solid rgba(218, 218, 218, 0.4);\\n  border-radius: 8px;\\n  min-width: 55px;\\n  height: 55px;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  box-shadow: -5px 5px 10px #f2f2f2;\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  display: flex;\\n  align-items: center;\\n  flex-flow: column;\\n  gap: 10px;\\n  font-size: 25px;\\n\\n  > p {\\n    color: #7d7d7d;\\n    font-size: clamp(14px, 1.2vw, 16px);\\n    line-height: 23px;\\n    max-width: 461px;\\n    text-align: center;\\n  }\\n\\n  div {\\n    color: #3b7525;\\n    font-family: \"Rubik Bubbles\";\\n\\n    img {\\n      position: relative;\\n      left: 12%;\\n      top: 10px;\\n      min-width: 25px;\\n      width: 2vw;\\n      max-width: 34px;\\n    }\\n  }\\n'\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\n\n\nconst PointerContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject(), (param)=>{\n    let { position  } = param;\n    return position === \"left\" ? \"right\" : \"left\";\n}, (param)=>{\n    let { position  } = param;\n    return position === \"left\" ? \"flex-start\" : \"flex-end\";\n}, (param)=>{\n    let { position  } = param;\n    return position === \"left\" ? \"column-reverse\" : \"column\";\n});\nconst Pointer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject1());\nconst Left = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject2());\nconst Right = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject3());\nconst PointerImage = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].img(_templateObject4(), (param)=>{\n    let { $bottom , $top  } = param;\n    return $bottom ? \"-18px\" : $top ? \"18px\" : \"\";\n}, (param)=>{\n    let { $left  } = param;\n    return $left && \"rotateY(180deg)\";\n});\nconst IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject5());\nconst TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject6());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYW5kaW5nL21pc3Npb24vc3R5bGVkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDYTtBQUU3QyxNQUFNRSxtQkFBbUJGLDZEQUFVLG9CQVV4QixTQUFtQkk7UUFBbEIsRUFBRUEsU0FBUSxFQUFFO1dBQU1BLGFBQWEsU0FBUyxVQUFVLE1BQU07QUFBRCxHQUd0RCxTQUNaQTtRQURhLEVBQUVBLFNBQVEsRUFBRTtXQUN6QkEsYUFBYSxTQUFTLGVBQWUsVUFBVTtBQUFELEdBS3JDLFNBQ1hBO1FBRFksRUFBRUEsU0FBUSxFQUFFO1dBQ3hCQSxhQUFhLFNBQVMsbUJBQW1CLFFBQVE7QUFBRCxHQUVwRDtBQUNLLE1BQU1DLFVBQVVMLDZEQUFVLHFCQUcvQjtBQUVLLE1BQU1NLE9BQU9OLDZEQUFVLHFCQU81QjtBQUVLLE1BQU1PLFFBQVFQLDZEQUFVLHFCQU03QjtBQUVLLE1BQU1RLGVBQWVSLDZEQUFVLHFCQUU3QixTQUF3QlU7UUFBdkIsRUFBRUEsUUFBTyxFQUFFQyxLQUFJLEVBQUU7V0FBTUQsVUFBVSxVQUFVQyxPQUFPLFNBQVMsRUFBRTtBQUFELEdBQ3ZELFNBQWVDO1FBQWQsRUFBRUEsTUFBSyxFQUFFO1dBQUtBLFNBQVM7QUFBZ0IsR0FHckQ7QUFFSyxNQUFNQyxjQUFjYiw2REFBVSxxQkFVbkM7QUFFSyxNQUFNYyxpQkFBaUJkLDZEQUFVLHFCQTRCdEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGFuZGluZy9taXNzaW9uL3N0eWxlZC5qcz9iY2Q4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBwbGFudGF0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXNcIjtcblxuZXhwb3J0IGNvbnN0IFBvaW50ZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMTRweCwgMS41dncsIDE4cHgpO1xuICBjb2xvcjogIzMxMzEzMTtcblxuICBzcGFuIHtcbiAgICBtYXgtd2lkdGg6IG1heC1jb250ZW50O1xuICAgIHRleHQtYWxpZ246ICR7KHsgcG9zaXRpb24gfSkgPT4gKHBvc2l0aW9uID09PSBcImxlZnRcIiA/IFwicmlnaHRcIiA6IFwibGVmdFwiKX07XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgYWxpZ24tc2VsZjogJHsoeyBwb3NpdGlvbiB9KSA9PlxuICAgICAgICBwb3NpdGlvbiA9PT0gXCJsZWZ0XCIgPyBcImZsZXgtc3RhcnRcIiA6IFwiZmxleC1lbmRcIn07XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICBmbGV4LWZsb3c6ICR7KHsgcG9zaXRpb24gfSkgPT5cbiAgICAgIHBvc2l0aW9uID09PSBcImxlZnRcIiA/IFwiY29sdW1uLXJldmVyc2VcIiA6IFwiY29sdW1uXCJ9O1xuICB9XG5gO1xuZXhwb3J0IGNvbnN0IFBvaW50ZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IExlZnQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDcwcHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFJpZ2h0ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiA3MHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbmA7XG5cbmV4cG9ydCBjb25zdCBQb2ludGVySW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogJHsoeyAkYm90dG9tLCAkdG9wIH0pID0+ICgkYm90dG9tID8gXCItMThweFwiIDogJHRvcCA/IFwiMThweFwiIDogXCJcIil9O1xuICB0cmFuc2Zvcm06ICR7KHsgJGxlZnQgfSkgPT4gJGxlZnQgJiYgXCJyb3RhdGVZKDE4MGRlZylcIn07XG4gIG1heC13aWR0aDogODZweDtcbiAgLyogbWF4LWhlaWdodDogNTVweDsgKi9cbmA7XG5cbmV4cG9ydCBjb25zdCBJY29uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjE4LCAyMTgsIDIxOCwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtaW4td2lkdGg6IDU1cHg7XG4gIGhlaWdodDogNTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IC01cHggNXB4IDEwcHggI2YyZjJmMjtcbmA7XG5cbmV4cG9ydCBjb25zdCBUaXRsZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBnYXA6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcblxuICA+IHAge1xuICAgIGNvbG9yOiAjN2Q3ZDdkO1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTRweCwgMS4ydncsIDE2cHgpO1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIG1heC13aWR0aDogNDYxcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgZGl2IHtcbiAgICBjb2xvcjogIzNiNzUyNTtcbiAgICBmb250LWZhbWlseTogXCJSdWJpayBCdWJibGVzXCI7XG5cbiAgICBpbWcge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbGVmdDogMTIlO1xuICAgICAgdG9wOiAxMHB4O1xuICAgICAgbWluLXdpZHRoOiAyNXB4O1xuICAgICAgd2lkdGg6IDJ2dztcbiAgICAgIG1heC13aWR0aDogMzRweDtcbiAgICB9XG4gIH1cbmA7XG4iXSwibmFtZXMiOlsic3R5bGVkIiwicGxhbnRhdGlvbiIsIlBvaW50ZXJDb250YWluZXIiLCJkaXYiLCJwb3NpdGlvbiIsIlBvaW50ZXIiLCJMZWZ0IiwiUmlnaHQiLCJQb2ludGVySW1hZ2UiLCJpbWciLCIkYm90dG9tIiwiJHRvcCIsIiRsZWZ0IiwiSWNvbldyYXBwZXIiLCJUaXRsZUNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Landing/mission/styled.js\n"));

/***/ })

});