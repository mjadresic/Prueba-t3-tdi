"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/DataContext.js":
/*!*********************************!*\
  !*** ./contexts/DataContext.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DataContext\": () => (/* binding */ DataContext),\n/* harmony export */   \"DataProvider\": () => (/* binding */ DataProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst DataContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst DataProvider = ({ children  })=>{\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        orders: [],\n        products: [],\n        loading: true,\n        error: null\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const ordersRes = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('/local-data/orders.json');\n                const productsRes = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('/local-data/products.json');\n                console.log('Orders:', ordersRes.data);\n                console.log('Products:', productsRes.data);\n                setData({\n                    orders: ordersRes.data,\n                    products: productsRes.data,\n                    loading: false,\n                    error: null\n                });\n            } catch (error) {\n                console.error('Error fetching data:', error);\n                setData({\n                    orders: [],\n                    products: [],\n                    loading: false,\n                    error: error.message\n                });\n            }\n        };\n        fetchData();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataContext.Provider, {\n        value: {\n            ...data,\n            setData\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\contexts\\\\DataContext.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9EYXRhQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDakM7QUFFbEIsS0FBSyxDQUFDSSxXQUFXLGlCQUFHSixvREFBYTtBQUVqQyxLQUFLLENBQUNLLFlBQVksSUFBSSxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUM3QyxLQUFLLE1BQUVDLElBQUksTUFBRUMsT0FBTyxNQUFJUCwrQ0FBUSxDQUFDLENBQUM7UUFDaENRLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDVkMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNaQyxPQUFPLEVBQUUsSUFBSTtRQUNiQyxLQUFLLEVBQUUsSUFBSTtJQUNiLENBQUM7SUFFRFYsZ0RBQVMsS0FBTyxDQUFDO1FBQ2YsS0FBSyxDQUFDVyxTQUFTLGFBQWUsQ0FBQztZQUM3QixHQUFHLENBQUMsQ0FBQztnQkFDSCxLQUFLLENBQUNDLFNBQVMsR0FBRyxLQUFLLENBQUNYLGdEQUFTLENBQUMsQ0FBeUI7Z0JBQzNELEtBQUssQ0FBQ2EsV0FBVyxHQUFHLEtBQUssQ0FBQ2IsZ0RBQVMsQ0FBQyxDQUEyQjtnQkFDL0RjLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVMsVUFBRUosU0FBUyxDQUFDUCxJQUFJO2dCQUNyQ1UsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBVyxZQUFFRixXQUFXLENBQUNULElBQUk7Z0JBQ3pDQyxPQUFPLENBQUMsQ0FBQztvQkFDUEMsTUFBTSxFQUFFSyxTQUFTLENBQUNQLElBQUk7b0JBQ3RCRyxRQUFRLEVBQUVNLFdBQVcsQ0FBQ1QsSUFBSTtvQkFDMUJJLE9BQU8sRUFBRSxLQUFLO29CQUNkQyxLQUFLLEVBQUUsSUFBSTtnQkFDYixDQUFDO1lBQ0gsQ0FBQyxDQUFDLEtBQUssRUFBRUEsS0FBSyxFQUFFLENBQUM7Z0JBQ2ZLLE9BQU8sQ0FBQ0wsS0FBSyxDQUFDLENBQXNCLHVCQUFFQSxLQUFLO2dCQUMzQ0osT0FBTyxDQUFDLENBQUM7b0JBQ1BDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQ1ZDLFFBQVEsRUFBRSxDQUFDLENBQUM7b0JBQ1pDLE9BQU8sRUFBRSxLQUFLO29CQUNkQyxLQUFLLEVBQUVBLEtBQUssQ0FBQ08sT0FBTztnQkFDdEIsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBRUROLFNBQVM7SUFDWCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSw2RUFDSFQsV0FBVyxDQUFDZ0IsUUFBUTtRQUFDQyxLQUFLLEVBQUUsQ0FBQztlQUFJZCxJQUFJO1lBQUVDLE9BQU87UUFBQyxDQUFDO2tCQUM5Q0YsUUFBUTs7Ozs7O0FBR2YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWRhc2hib2FyZC8uL2NvbnRleHRzL0RhdGFDb250ZXh0LmpzP2UwNGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgb3JkZXJzOiBbXSxcclxuICAgIHByb2R1Y3RzOiBbXSxcclxuICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmRlcnNSZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9sb2NhbC1kYXRhL29yZGVycy5qc29uJyk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHNSZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9sb2NhbC1kYXRhL3Byb2R1Y3RzLmpzb24nKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnT3JkZXJzOicsIG9yZGVyc1Jlcy5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnUHJvZHVjdHM6JywgcHJvZHVjdHNSZXMuZGF0YSk7XHJcbiAgICAgICAgc2V0RGF0YSh7XHJcbiAgICAgICAgICBvcmRlcnM6IG9yZGVyc1Jlcy5kYXRhLFxyXG4gICAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzUmVzLmRhdGEsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIHNldERhdGEoe1xyXG4gICAgICAgICAgb3JkZXJzOiBbXSxcclxuICAgICAgICAgIHByb2R1Y3RzOiBbXSxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERhdGFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IC4uLmRhdGEsIHNldERhdGEgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiRGF0YUNvbnRleHQiLCJEYXRhUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRhdGEiLCJzZXREYXRhIiwib3JkZXJzIiwicHJvZHVjdHMiLCJsb2FkaW5nIiwiZXJyb3IiLCJmZXRjaERhdGEiLCJvcmRlcnNSZXMiLCJnZXQiLCJwcm9kdWN0c1JlcyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/DataContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/DataContext */ \"./contexts/DataContext.js\");\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__.DataProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\_app.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\_app.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNEO1NBRTdDQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxNQUFNLDZFQUNISCwrREFBWTs4RkFDVkUsU0FBUztlQUFLQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QixDQUFDO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWRhc2hib2FyZC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9EYXRhQ29udGV4dCc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERhdGFQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9EYXRhUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJEYXRhUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();