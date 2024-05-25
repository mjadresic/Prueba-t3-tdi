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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DataContext\": () => (/* binding */ DataContext),\n/* harmony export */   \"DataProvider\": () => (/* binding */ DataProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst DataContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst DataProvider = ({ children  })=>{\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        orders: [],\n        products: [],\n        loading: true,\n        error: null\n    });\n    const fetchData = async ()=>{\n        try {\n            const ordersRes = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('/orders.json');\n            const productsRes = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('/products.json');\n            setData({\n                orders: ordersRes.data,\n                products: productsRes.data,\n                loading: false,\n                error: null\n            });\n        } catch (error) {\n            console.error('Error fetching data:', error);\n            setData({\n                orders: [],\n                products: [],\n                loading: false,\n                error: error.message\n            });\n        }\n    };\n    const compileData = async ()=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/etl');\n            await fetchData();\n        } catch (error) {\n            console.error('Error compiling data:', error);\n            setData({\n                orders: [],\n                products: [],\n                loading: false,\n                error: error.message\n            });\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const initializeData = async ()=>{\n            try {\n                await fetchData();\n            } catch (error) {\n                console.error('Data not found, compiling data:', error);\n                await compileData();\n            }\n        };\n        initializeData();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataContext.Provider, {\n        value: {\n            ...data,\n            setData,\n            compileData\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\Prueba-t3-tdi\\\\my-dashboard\\\\contexts\\\\DataContext.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9EYXRhQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDakM7QUFFbEIsS0FBSyxDQUFDSSxXQUFXLGlCQUFHSixvREFBYTtBQUVqQyxLQUFLLENBQUNLLFlBQVksSUFBSSxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUM3QyxLQUFLLE1BQUVDLElBQUksTUFBRUMsT0FBTyxNQUFJUCwrQ0FBUSxDQUFDLENBQUM7UUFDaENRLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDVkMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNaQyxPQUFPLEVBQUUsSUFBSTtRQUNiQyxLQUFLLEVBQUUsSUFBSTtJQUNiLENBQUM7SUFFRCxLQUFLLENBQUNDLFNBQVMsYUFBZSxDQUFDO1FBQzdCLEdBQUcsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxDQUFDQyxTQUFTLEdBQUcsS0FBSyxDQUFDWCxnREFBUyxDQUFDLENBQWM7WUFDaEQsS0FBSyxDQUFDYSxXQUFXLEdBQUcsS0FBSyxDQUFDYixnREFBUyxDQUFDLENBQWdCO1lBQ3BESyxPQUFPLENBQUMsQ0FBQztnQkFDUEMsTUFBTSxFQUFFSyxTQUFTLENBQUNQLElBQUk7Z0JBQ3RCRyxRQUFRLEVBQUVNLFdBQVcsQ0FBQ1QsSUFBSTtnQkFDMUJJLE9BQU8sRUFBRSxLQUFLO2dCQUNkQyxLQUFLLEVBQUUsSUFBSTtZQUNiLENBQUM7UUFDSCxDQUFDLENBQUMsS0FBSyxFQUFFQSxLQUFLLEVBQUUsQ0FBQztZQUNmSyxPQUFPLENBQUNMLEtBQUssQ0FBQyxDQUFzQix1QkFBRUEsS0FBSztZQUMzQ0osT0FBTyxDQUFDLENBQUM7Z0JBQ1BDLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0JBQ1ZDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQ1pDLE9BQU8sRUFBRSxLQUFLO2dCQUNkQyxLQUFLLEVBQUVBLEtBQUssQ0FBQ00sT0FBTztZQUN0QixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLLENBQUNDLFdBQVcsYUFBZSxDQUFDO1FBQy9CLEdBQUcsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxDQUFDaEIsZ0RBQVMsQ0FBQyxDQUFVO1lBQzFCLEtBQUssQ0FBQ1UsU0FBUztRQUNqQixDQUFDLENBQUMsS0FBSyxFQUFFRCxLQUFLLEVBQUUsQ0FBQztZQUNmSyxPQUFPLENBQUNMLEtBQUssQ0FBQyxDQUF1Qix3QkFBRUEsS0FBSztZQUM1Q0osT0FBTyxDQUFDLENBQUM7Z0JBQ1BDLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0JBQ1ZDLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQ1pDLE9BQU8sRUFBRSxLQUFLO2dCQUNkQyxLQUFLLEVBQUVBLEtBQUssQ0FBQ00sT0FBTztZQUN0QixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRGhCLGdEQUFTLEtBQU8sQ0FBQztRQUNmLEtBQUssQ0FBQ2tCLGNBQWMsYUFBZSxDQUFDO1lBQ2xDLEdBQUcsQ0FBQyxDQUFDO2dCQUNILEtBQUssQ0FBQ1AsU0FBUztZQUNqQixDQUFDLENBQUMsS0FBSyxFQUFFRCxLQUFLLEVBQUUsQ0FBQztnQkFDZkssT0FBTyxDQUFDTCxLQUFLLENBQUMsQ0FBaUMsa0NBQUVBLEtBQUs7Z0JBQ3RELEtBQUssQ0FBQ08sV0FBVztZQUNuQixDQUFDO1FBQ0gsQ0FBQztRQUVEQyxjQUFjO0lBQ2hCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNLDZFQUNIaEIsV0FBVyxDQUFDaUIsUUFBUTtRQUFDQyxLQUFLLEVBQUUsQ0FBQztlQUFJZixJQUFJO1lBQUVDLE9BQU87WUFBRVcsV0FBVztRQUFDLENBQUM7a0JBQzNEYixRQUFROzs7Ozs7QUFHZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZGFzaGJvYXJkLy4vY29udGV4dHMvRGF0YUNvbnRleHQuanM/ZTA0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERhdGFDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGNvbnN0IERhdGFQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBvcmRlcnM6IFtdLFxyXG4gICAgcHJvZHVjdHM6IFtdLFxyXG4gICAgbG9hZGluZzogdHJ1ZSxcclxuICAgIGVycm9yOiBudWxsLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBvcmRlcnNSZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9vcmRlcnMuanNvbicpO1xyXG4gICAgICBjb25zdCBwcm9kdWN0c1JlcyA9IGF3YWl0IGF4aW9zLmdldCgnL3Byb2R1Y3RzLmpzb24nKTtcclxuICAgICAgc2V0RGF0YSh7XHJcbiAgICAgICAgb3JkZXJzOiBvcmRlcnNSZXMuZGF0YSxcclxuICAgICAgICBwcm9kdWN0czogcHJvZHVjdHNSZXMuZGF0YSxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgc2V0RGF0YSh7XHJcbiAgICAgICAgb3JkZXJzOiBbXSxcclxuICAgICAgICBwcm9kdWN0czogW10sXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbXBpbGVEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2V0bCcpO1xyXG4gICAgICBhd2FpdCBmZXRjaERhdGEoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNvbXBpbGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgc2V0RGF0YSh7XHJcbiAgICAgICAgb3JkZXJzOiBbXSxcclxuICAgICAgICBwcm9kdWN0czogW10sXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbml0aWFsaXplRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBmZXRjaERhdGEoKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdEYXRhIG5vdCBmb3VuZCwgY29tcGlsaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIGF3YWl0IGNvbXBpbGVEYXRhKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaW5pdGlhbGl6ZURhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RGF0YUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgLi4uZGF0YSwgc2V0RGF0YSwgY29tcGlsZURhdGEgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiRGF0YUNvbnRleHQiLCJEYXRhUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRhdGEiLCJzZXREYXRhIiwib3JkZXJzIiwicHJvZHVjdHMiLCJsb2FkaW5nIiwiZXJyb3IiLCJmZXRjaERhdGEiLCJvcmRlcnNSZXMiLCJnZXQiLCJwcm9kdWN0c1JlcyIsImNvbnNvbGUiLCJtZXNzYWdlIiwiY29tcGlsZURhdGEiLCJpbml0aWFsaXplRGF0YSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/DataContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/DataContext */ \"./contexts/DataContext.js\");\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_DataContext__WEBPACK_IMPORTED_MODULE_1__.DataProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\Prueba-t3-tdi\\\\my-dashboard\\\\pages\\\\_app.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\Prueba-t3-tdi\\\\my-dashboard\\\\pages\\\\_app.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNEO1NBRTdDQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxNQUFNLDZFQUNISCwrREFBWTs4RkFDVkUsU0FBUztlQUFLQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QixDQUFDO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWRhc2hib2FyZC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0cy9EYXRhQ29udGV4dCc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPERhdGFQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9EYXRhUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiJdLCJuYW1lcyI6WyJEYXRhUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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