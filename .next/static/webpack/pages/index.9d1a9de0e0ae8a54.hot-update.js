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

/***/ "./src/components/Landing/Navbar.jsx":
/*!*******************************************!*\
  !*** ./src/components/Landing/Navbar.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeaderContainer\": function() { return /* binding */ HeaderContainer; },\n/* harmony export */   \"HeaderRight\": function() { return /* binding */ HeaderRight; },\n/* harmony export */   \"MenuIcon\": function() { return /* binding */ MenuIcon; },\n/* harmony export */   \"NavButton\": function() { return /* binding */ NavButton; },\n/* harmony export */   \"NavList\": function() { return /* binding */ NavList; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_images_logo_white_bg_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/logo-white-bg.png */ \"./src/assets/images/logo-white-bg.png\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _containers_MobileSidebarConst__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/MobileSidebarConst */ \"./src/components/containers/MobileSidebarConst.jsx\");\n/* harmony import */ var _sidebar_MobileSidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sidebar/MobileSidebar */ \"./src/components/sidebar/MobileSidebar.jsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  justify-content: space-between;\\n  gap: 16px;\\n  padding-inline: clamp(20px, 6vw, 100px);\\n  margin-top: 24px;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  cursor: pointer;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  display: flex;\\n  flex-flow: row;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 60%;\\n  gap: 16px;\\n\\n  font-family: \"Noto Sans Batak\";\\n\\n  a {\\n    text-decoration: none;\\n    color: inherit;\\n    padding: 5px;\\n  }\\n\\n  @media screen and (max-width: 600px) {\\n    display: none;\\n  }\\n'\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        '\\n  display: flex;\\n  background-color: #17233c;\\n  padding: 12px 16px;\\n  color: #ffffff;\\n  border-radius: 6px;\\n  border: none;\\n  font-size: 16px;\\n  font-family: \"Noto Sans Batak\", sans-serif;\\n'\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: none;\\n\\n  @media screen and (max-width: 600px) {\\n    display: block;\\n  }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst Navbar = ()=>{\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const scrollTo = (id)=>{\n        let element = document.getElementById(id);\n        element.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeaderContainer, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {\n                src: _assets_images_logo_white_bg_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                alt: \"MUNGIN\",\n                width: 150,\n                height: 40,\n                className: \"ml-2\"\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/React Projects/mungin/src/components/Landing/Navbar.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(HeaderRight, {\n                className: \"w-3/5  justify-between md:flex hidden lg:flex \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavList, {\n                        onClick: ()=>scrollTo(\"work-progress\"),\n                        children: \"Process\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Desktop/React Projects/mungin/src/components/Landing/Navbar.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavList, {\n                        className: \"whitespace-nowrap\",\n                        onClick: ()=>scrollTo(\"our-mission\"),\n                        children: \"Our Mission\"\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Desktop/React Projects/mungin/src/components/Landing/Navbar.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/register\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            style: {\n                                color: \"#375a1a\"\n                            },\n                            children: \"Join Us\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Desktop/React Projects/mungin/src/components/Landing/Navbar.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Desktop/React Projects/mungin/src/components/Landing/Navbar.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/database\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(NavButton, {\n                            className: \" bg-[#17233C] p-3 text-white px-4 rounded-md whitespace-nowrap\",\n                            children: \"Check Our Database\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbookpro/Desktop/React Projects/mungin/src/components/Landing/Navbar.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/macbookpro/Desktop/React Projects/mungin/src/components/Landing/Navbar.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/macbookpro/Desktop/React Projects/mungin/src/components/Landing/Navbar.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MenuIcon, {\n                className: \"sm:block absolute right-10 md:hidden \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_8__.AiOutlineMenu, {\n                    size: 24,\n                    onClick: ()=>setOpen(true)\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Desktop/React Projects/mungin/src/components/Landing/Navbar.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 10\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/React Projects/mungin/src/components/Landing/Navbar.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_containers_MobileSidebarConst__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                anchor: \"right\",\n                open: open,\n                setOpen: setOpen,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_sidebar_MobileSidebar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    setOpen: setOpen\n                }, void 0, false, {\n                    fileName: \"/Users/macbookpro/Desktop/React Projects/mungin/src/components/Landing/Navbar.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbookpro/Desktop/React Projects/mungin/src/components/Landing/Navbar.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/macbookpro/Desktop/React Projects/mungin/src/components/Landing/Navbar.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nconst HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject());\n_c1 = HeaderContainer;\nconst NavList = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].p(_templateObject1());\n_c2 = NavList;\nconst HeaderRight = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject2());\n_c3 = HeaderRight;\nconst NavButton = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].button(_templateObject3());\n_c4 = NavButton;\nconst MenuIcon = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject4());\n_c5 = MenuIcon;\nvar _c, _c1, _c2, _c3, _c4, _c5;\n$RefreshReg$(_c, \"Navbar\");\n$RefreshReg$(_c1, \"HeaderContainer\");\n$RefreshReg$(_c2, \"NavList\");\n$RefreshReg$(_c3, \"HeaderRight\");\n$RefreshReg$(_c4, \"NavButton\");\n$RefreshReg$(_c5, \"MenuIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYW5kaW5nL05hdmJhci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNYO0FBQzRCO0FBQ007QUFDeEI7QUFDMEI7QUFDWjtBQUN0QjtBQUUvQixNQUFNVSxTQUFTLElBQU07O0lBQ25CLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRXRDLE1BQU1ZLFdBQVcsQ0FBQ0MsS0FBTztRQUN2QixJQUFJQyxVQUFVQyxTQUFTQyxjQUFjLENBQUNIO1FBQ3RDQyxRQUFRRyxjQUFjLENBQUM7WUFBRUMsVUFBVTtRQUFTO0lBQzlDO0lBRUEscUJBQ0UsOERBQUNDOzswQkFFQyw4REFBQ1gsbURBQUtBO2dCQUFDWSxLQUFLbEIsd0VBQUlBO2dCQUFFbUIsS0FBSTtnQkFBU0MsT0FBTztnQkFBS0MsUUFBUTtnQkFBSUMsV0FBVTs7Ozs7OzBCQUdqRSw4REFBQ0M7Z0JBQVlELFdBQVU7O2tDQUVyQiw4REFBQ0U7d0JBQVFDLFNBQVMsSUFBTWYsU0FBUztrQ0FBa0I7Ozs7OztrQ0FDbkQsOERBQUNjO3dCQUNDRixXQUFVO3dCQUNWRyxTQUFTLElBQU1mLFNBQVM7a0NBQ3pCOzs7Ozs7a0NBR0QsOERBQUNYLGtEQUFJQTt3QkFBQzJCLE1BQUs7a0NBQ1QsNEVBQUNDOzRCQUFJQyxPQUFPO2dDQUFFQyxPQUFPOzRCQUFVO3NDQUFHOzs7Ozs7Ozs7OztrQ0FFcEMsOERBQUM5QixrREFBSUE7d0JBQUMyQixNQUFNO2tDQUNWLDRFQUFDSTs0QkFBVVIsV0FBVTtzQ0FBaUU7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU8xRiw4REFBQ1M7Z0JBQVNULFdBQVU7MEJBQ2pCLDRFQUFDcEIseURBQWFBO29CQUFDOEIsTUFBTTtvQkFBSVAsU0FBUyxJQUFNaEIsUUFBUSxJQUFJOzs7Ozs7Ozs7OzswQkFHdkQsOERBQUNMLHNFQUFpQkE7Z0JBQUM2QixRQUFPO2dCQUFRekIsTUFBTUE7Z0JBQU1DLFNBQVNBOzBCQUNyRCw0RUFBQ0osOERBQWFBO29CQUFDSSxTQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEM7R0EzQ01GO0tBQUFBO0FBNkNOLCtEQUFlQSxNQUFNQSxFQUFDO0FBRWYsTUFBTVUsa0JBQWtCZCw2REFBVSxvQkFPdkM7TUFQV2M7QUFTTixNQUFNTyxVQUFVckIsMkRBQVEscUJBRTdCO01BRldxQjtBQUlOLE1BQU1ELGNBQWNwQiw2REFBVSxxQkFtQm5DO01BbkJXb0I7QUFxQk4sTUFBTU8sWUFBWTNCLGdFQUFhLHFCQVNwQztNQVRXMkI7QUFXTixNQUFNQyxXQUFXNUIsNkRBQVUscUJBTWhDO01BTlc0QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MYW5kaW5nL05hdmJhci5qc3g/ZDFlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBsb2dvIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28td2hpdGUtYmcucG5nXCI7XG5pbXBvcnQgeyBBaU91dGxpbmVDbG9zZSwgQWlPdXRsaW5lTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBNb2JpbGVTaWRlYmFyQ29udCBmcm9tIFwiLi4vY29udGFpbmVycy9Nb2JpbGVTaWRlYmFyQ29uc3RcIjtcbmltcG9ydCBNb2JpbGVTaWRlYmFyIGZyb20gXCIuLi9zaWRlYmFyL01vYmlsZVNpZGViYXJcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBzY3JvbGxUbyA9IChpZCkgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxIZWFkZXJDb250YWluZXI+XG4gICAgICB7LyogaW1hZ2UgY29udGFpbmVyICovfVxuICAgICAgPEltYWdlIHNyYz17bG9nb30gYWx0PVwiTVVOR0lOXCIgd2lkdGg9ezE1MH0gaGVpZ2h0PXs0MH0gY2xhc3NOYW1lPVwibWwtMlwiIC8+XG5cbiAgICAgIHsvKiBkZXNrdG9wIGRpc3BsYXkgKi99XG4gICAgICA8SGVhZGVyUmlnaHQgY2xhc3NOYW1lPVwidy0zLzUgIGp1c3RpZnktYmV0d2VlbiBtZDpmbGV4IGhpZGRlbiBsZzpmbGV4IFwiPlxuICAgICAgICB7LyogbGluayBjb250YWluZXIgKi99XG4gICAgICAgIDxOYXZMaXN0IG9uQ2xpY2s9eygpID0+IHNjcm9sbFRvKFwid29yay1wcm9ncmVzc1wiKX0+UHJvY2VzczwvTmF2TGlzdD5cbiAgICAgICAgPE5hdkxpc3RcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3aGl0ZXNwYWNlLW5vd3JhcFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsVG8oXCJvdXItbWlzc2lvblwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIE91ciBNaXNzaW9uXG4gICAgICAgIDwvTmF2TGlzdD5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwiIzM3NWExYVwiIH19PkpvaW4gVXM8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPXtcIi9kYXRhYmFzZVwifT5cbiAgICAgICAgICA8TmF2QnV0dG9uIGNsYXNzTmFtZT1cIiBiZy1bIzE3MjMzQ10gcC0zIHRleHQtd2hpdGUgcHgtNCByb3VuZGVkLW1kIHdoaXRlc3BhY2Utbm93cmFwXCI+XG4gICAgICAgICAgICBDaGVjayBPdXIgRGF0YWJhc2VcbiAgICAgICAgICA8L05hdkJ1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9IZWFkZXJSaWdodD5cblxuICAgICAgey8qIGhhbWJ1cmdlciBtZW51ICovfVxuICAgICAgPE1lbnVJY29uIGNsYXNzTmFtZT1cInNtOmJsb2NrIGFic29sdXRlIHJpZ2h0LTEwIG1kOmhpZGRlbiBcIj5cbiAgICAgICAgezxBaU91dGxpbmVNZW51IHNpemU9ezI0fSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfSAvPn1cbiAgICAgIDwvTWVudUljb24+XG5cbiAgICAgIDxNb2JpbGVTaWRlYmFyQ29udCBhbmNob3I9XCJyaWdodFwiIG9wZW49e29wZW59IHNldE9wZW49e3NldE9wZW59PlxuICAgICAgICA8TW9iaWxlU2lkZWJhciBzZXRPcGVuPXtzZXRPcGVufSAvPlxuICAgICAgPC9Nb2JpbGVTaWRlYmFyQ29udD5cbiAgICA8L0hlYWRlckNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcblxuZXhwb3J0IGNvbnN0IEhlYWRlckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxNnB4O1xuICBwYWRkaW5nLWlubGluZTogY2xhbXAoMjBweCwgNnZ3LCAxMDBweCk7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgTmF2TGlzdCA9IHN0eWxlZC5wYFxuICBjdXJzb3I6IHBvaW50ZXI7XG5gO1xuXG5leHBvcnQgY29uc3QgSGVhZGVyUmlnaHQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNjAlO1xuICBnYXA6IDE2cHg7XG5cbiAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zIEJhdGFrXCI7XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE5hdkJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzIzM2M7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2FucyBCYXRha1wiLCBzYW5zLXNlcmlmO1xuYDtcblxuZXhwb3J0IGNvbnN0IE1lbnVJY29uID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogbm9uZTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwibG9nbyIsIkFpT3V0bGluZUNsb3NlIiwiQWlPdXRsaW5lTWVudSIsInN0eWxlZCIsIk1vYmlsZVNpZGViYXJDb250IiwiTW9iaWxlU2lkZWJhciIsIkltYWdlIiwiTmF2YmFyIiwib3BlbiIsInNldE9wZW4iLCJzY3JvbGxUbyIsImlkIiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiSGVhZGVyQ29udGFpbmVyIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJjbGFzc05hbWUiLCJIZWFkZXJSaWdodCIsIk5hdkxpc3QiLCJvbkNsaWNrIiwiaHJlZiIsImRpdiIsInN0eWxlIiwiY29sb3IiLCJOYXZCdXR0b24iLCJNZW51SWNvbiIsInNpemUiLCJhbmNob3IiLCJwIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Landing/Navbar.jsx\n"));

/***/ })

});