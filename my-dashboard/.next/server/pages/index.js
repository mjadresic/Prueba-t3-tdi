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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./contexts/DataContext.js":
/*!*********************************!*\
  !*** ./contexts/DataContext.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DataContext\": () => (/* binding */ DataContext),\n/* harmony export */   \"DataProvider\": () => (/* binding */ DataProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst DataContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst DataProvider = ({ children  })=>{\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        orders: [],\n        products: [],\n        loading: true,\n        error: null\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const ordersRes = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('/local-data/orders.json');\n                const productsRes = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('/local-data/products.json');\n                console.log('Orders:', ordersRes.data);\n                console.log('Products:', productsRes.data);\n                setData({\n                    orders: ordersRes.data,\n                    products: productsRes.data,\n                    loading: false,\n                    error: null\n                });\n            } catch (error) {\n                console.error('Error fetching data:', error);\n                setData({\n                    orders: [],\n                    products: [],\n                    loading: false,\n                    error: error.message\n                });\n            }\n        };\n        fetchData();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataContext.Provider, {\n        value: {\n            ...data,\n            setData\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\contexts\\\\DataContext.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9EYXRhQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDakM7QUFFbEIsS0FBSyxDQUFDSSxXQUFXLGlCQUFHSixvREFBYTtBQUVqQyxLQUFLLENBQUNLLFlBQVksSUFBSSxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUM3QyxLQUFLLE1BQUVDLElBQUksTUFBRUMsT0FBTyxNQUFJUCwrQ0FBUSxDQUFDLENBQUM7UUFDaENRLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDVkMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNaQyxPQUFPLEVBQUUsSUFBSTtRQUNiQyxLQUFLLEVBQUUsSUFBSTtJQUNiLENBQUM7SUFFRFYsZ0RBQVMsS0FBTyxDQUFDO1FBQ2YsS0FBSyxDQUFDVyxTQUFTLGFBQWUsQ0FBQztZQUM3QixHQUFHLENBQUMsQ0FBQztnQkFDSCxLQUFLLENBQUNDLFNBQVMsR0FBRyxLQUFLLENBQUNYLGdEQUFTLENBQUMsQ0FBeUI7Z0JBQzNELEtBQUssQ0FBQ2EsV0FBVyxHQUFHLEtBQUssQ0FBQ2IsZ0RBQVMsQ0FBQyxDQUEyQjtnQkFDL0RjLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVMsVUFBRUosU0FBUyxDQUFDUCxJQUFJO2dCQUNyQ1UsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBVyxZQUFFRixXQUFXLENBQUNULElBQUk7Z0JBQ3pDQyxPQUFPLENBQUMsQ0FBQztvQkFDUEMsTUFBTSxFQUFFSyxTQUFTLENBQUNQLElBQUk7b0JBQ3RCRyxRQUFRLEVBQUVNLFdBQVcsQ0FBQ1QsSUFBSTtvQkFDMUJJLE9BQU8sRUFBRSxLQUFLO29CQUNkQyxLQUFLLEVBQUUsSUFBSTtnQkFDYixDQUFDO1lBQ0gsQ0FBQyxDQUFDLEtBQUssRUFBRUEsS0FBSyxFQUFFLENBQUM7Z0JBQ2ZLLE9BQU8sQ0FBQ0wsS0FBSyxDQUFDLENBQXNCLHVCQUFFQSxLQUFLO2dCQUMzQ0osT0FBTyxDQUFDLENBQUM7b0JBQ1BDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQ1ZDLFFBQVEsRUFBRSxDQUFDLENBQUM7b0JBQ1pDLE9BQU8sRUFBRSxLQUFLO29CQUNkQyxLQUFLLEVBQUVBLEtBQUssQ0FBQ08sT0FBTztnQkFDdEIsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBRUROLFNBQVM7SUFDWCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSw2RUFDSFQsV0FBVyxDQUFDZ0IsUUFBUTtRQUFDQyxLQUFLLEVBQUUsQ0FBQztlQUFJZCxJQUFJO1lBQUVDLE9BQU87UUFBQyxDQUFDO2tCQUM5Q0YsUUFBUTs7Ozs7O0FBR2YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWRhc2hib2FyZC8uL2NvbnRleHRzL0RhdGFDb250ZXh0LmpzP2UwNGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgb3JkZXJzOiBbXSxcclxuICAgIHByb2R1Y3RzOiBbXSxcclxuICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmRlcnNSZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9sb2NhbC1kYXRhL29yZGVycy5qc29uJyk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHNSZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9sb2NhbC1kYXRhL3Byb2R1Y3RzLmpzb24nKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnT3JkZXJzOicsIG9yZGVyc1Jlcy5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnUHJvZHVjdHM6JywgcHJvZHVjdHNSZXMuZGF0YSk7XHJcbiAgICAgICAgc2V0RGF0YSh7XHJcbiAgICAgICAgICBvcmRlcnM6IG9yZGVyc1Jlcy5kYXRhLFxyXG4gICAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzUmVzLmRhdGEsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIHNldERhdGEoe1xyXG4gICAgICAgICAgb3JkZXJzOiBbXSxcclxuICAgICAgICAgIHByb2R1Y3RzOiBbXSxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERhdGFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IC4uLmRhdGEsIHNldERhdGEgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiRGF0YUNvbnRleHQiLCJEYXRhUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRhdGEiLCJzZXREYXRhIiwib3JkZXJzIiwicHJvZHVjdHMiLCJsb2FkaW5nIiwiZXJyb3IiLCJmZXRjaERhdGEiLCJvcmRlcnNSZXMiLCJnZXQiLCJwcm9kdWN0c1JlcyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/DataContext.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_DataContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/DataContext */ \"./contexts/DataContext.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst Home = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { loading , error: error1 , setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_DataContext__WEBPACK_IMPORTED_MODULE_3__.DataContext);\n    const { 0: isCompiling , 1: setIsCompiling  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleButtonClick = (chart)=>{\n        router.push(`/charts/${chart}`);\n    };\n    const handleCompileData = async ()=>{\n        setIsCompiling(true);\n        try {\n            // Ejecutar la compilación de archivos\n            const compileRes = await axios__WEBPACK_IMPORTED_MODULE_4___default().get('/api/etl');\n            console.log('Data compilation process initiated:', compileRes.data);\n            // Leer los datos desde los archivos compilados\n            const ordersRes = await axios__WEBPACK_IMPORTED_MODULE_4___default().get('/local-data/orders.json');\n            const productsRes = await axios__WEBPACK_IMPORTED_MODULE_4___default().get('/local-data/products.json');\n            console.log('Orders:', ordersRes.data);\n            console.log('Products:', productsRes.data);\n            setData({\n                orders: ordersRes.data,\n                products: productsRes.data,\n                loading: false,\n                error: null\n            });\n        } catch (error) {\n            console.error('Error compiling data:', error);\n            setData({\n                orders: [],\n                products: [],\n                loading: false,\n                error: error.message\n            });\n        } finally{\n            setIsCompiling(false);\n        }\n    };\n    if (loading || isCompiling) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Descargando archivos... por favor espere\"\n        }, void 0, false, {\n            fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n            lineNumber: 48,\n            columnNumber: 12\n        }, undefined));\n    }\n    if (error1) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \"Error al cargar los datos: \",\n                error1\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n            lineNumber: 52,\n            columnNumber: 12\n        }, undefined));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Dashboard de Productos y Compras\"\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"Para actualizar la base de datos, presione el siguiente bot\\xf3n:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleCompileData,\n                disabled: isCompiling,\n                children: isCompiling ? 'Compilando Datos...' : 'Compilar Datos'\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                    lineNumber: 65,\n                    columnNumber: 12\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Seleccione un gr\\xe1fico:\"\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleButtonClick('producto-mas-comprado')\n                ,\n                children: \"Producto m\\xe1s comprado\"\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleButtonClick('categoria-mas-popular')\n                ,\n                children: \"Categor\\xeda de producto m\\xe1s popular\"\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleButtonClick('cliente-con-mas-compras')\n                ,\n                children: \"Cliente que ha realizado m\\xe1s compras\"\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleButtonClick('total-gastado')\n                ,\n                children: \"Cantidad total gastada por el cliente que m\\xe1s ha gastado\"\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleButtonClick('calificacion-promedio')\n                ,\n                children: \"Calificaci\\xf3n promedio de los productos comprados\"\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleButtonClick('metodos-pago-distribucion')\n                ,\n                children: \"Distribuci\\xf3n de los m\\xe9todos de pago utilizados\"\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleButtonClick('ciudad-mas-compras')\n                ,\n                children: \"Ciudad con m\\xe1s compras realizadas\"\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleButtonClick('tasa-devoluciones')\n                ,\n                children: \"Tasa de devoluciones (cancelaciones) de productos\"\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleButtonClick('peso-promedio-productos')\n                ,\n                children: \"Peso promedio de los productos comprados\"\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleButtonClick('ventas-tiempo')\n                ,\n                children: \"Ventas a lo largo del tiempo\"\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\index.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHRzL0RhdGFDb250ZXh0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgc2V0RGF0YSB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcbiAgY29uc3QgW2lzQ29tcGlsaW5nLCBzZXRJc0NvbXBpbGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gKGNoYXJ0KSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChgL2NoYXJ0cy8ke2NoYXJ0fWApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvbXBpbGVEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0SXNDb21waWxpbmcodHJ1ZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBFamVjdXRhciBsYSBjb21waWxhY2nDs24gZGUgYXJjaGl2b3NcclxuICAgICAgY29uc3QgY29tcGlsZVJlcyA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9ldGwnKTtcclxuICAgICAgY29uc29sZS5sb2coJ0RhdGEgY29tcGlsYXRpb24gcHJvY2VzcyBpbml0aWF0ZWQ6JywgY29tcGlsZVJlcy5kYXRhKTtcclxuXHJcbiAgICAgIC8vIExlZXIgbG9zIGRhdG9zIGRlc2RlIGxvcyBhcmNoaXZvcyBjb21waWxhZG9zXHJcbiAgICAgIGNvbnN0IG9yZGVyc1JlcyA9IGF3YWl0IGF4aW9zLmdldCgnL2xvY2FsLWRhdGEvb3JkZXJzLmpzb24nKTtcclxuICAgICAgY29uc3QgcHJvZHVjdHNSZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9sb2NhbC1kYXRhL3Byb2R1Y3RzLmpzb24nKTtcclxuICAgICAgY29uc29sZS5sb2coJ09yZGVyczonLCBvcmRlcnNSZXMuZGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdQcm9kdWN0czonLCBwcm9kdWN0c1Jlcy5kYXRhKTtcclxuXHJcbiAgICAgIHNldERhdGEoe1xyXG4gICAgICAgIG9yZGVyczogb3JkZXJzUmVzLmRhdGEsXHJcbiAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzUmVzLmRhdGEsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY29tcGlsaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICBzZXREYXRhKHtcclxuICAgICAgICBvcmRlcnM6IFtdLFxyXG4gICAgICAgIHByb2R1Y3RzOiBbXSxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcclxuICAgICAgfSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXRJc0NvbXBpbGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKGxvYWRpbmcgfHwgaXNDb21waWxpbmcpIHtcclxuICAgIHJldHVybiA8ZGl2PkRlc2NhcmdhbmRvIGFyY2hpdm9zLi4uIHBvciBmYXZvciBlc3BlcmU8L2Rpdj47XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiA8ZGl2PkVycm9yIGFsIGNhcmdhciBsb3MgZGF0b3M6IHtlcnJvcn08L2Rpdj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPkRhc2hib2FyZCBkZSBQcm9kdWN0b3MgeSBDb21wcmFzPC9oMT5cclxuICAgICAgPGRpdj5QYXJhIGFjdHVhbGl6YXIgbGEgYmFzZSBkZSBkYXRvcywgcHJlc2lvbmUgZWwgc2lndWllbnRlIGJvdMOzbjo8L2Rpdj5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ29tcGlsZURhdGF9IGRpc2FibGVkPXtpc0NvbXBpbGluZ30+XHJcbiAgICAgICAge2lzQ29tcGlsaW5nID8gJ0NvbXBpbGFuZG8gRGF0b3MuLi4nIDogJ0NvbXBpbGFyIERhdG9zJ31cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPGRpdj48aHI+PC9ocj48L2Rpdj5cclxuICAgICAgPGgxPlNlbGVjY2lvbmUgdW4gZ3LDoWZpY286PC9oMT5cclxuICAgICAgPGhyPjwvaHI+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQnV0dG9uQ2xpY2soJ3Byb2R1Y3RvLW1hcy1jb21wcmFkbycpfT5Qcm9kdWN0byBtw6FzIGNvbXByYWRvPC9idXR0b24+XHJcbiAgICAgIDxocj48L2hyPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbkNsaWNrKCdjYXRlZ29yaWEtbWFzLXBvcHVsYXInKX0+Q2F0ZWdvcsOtYSBkZSBwcm9kdWN0byBtw6FzIHBvcHVsYXI8L2J1dHRvbj5cclxuICAgICAgPGhyPjwvaHI+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQnV0dG9uQ2xpY2soJ2NsaWVudGUtY29uLW1hcy1jb21wcmFzJyl9PkNsaWVudGUgcXVlIGhhIHJlYWxpemFkbyBtw6FzIGNvbXByYXM8L2J1dHRvbj5cclxuICAgICAgPGhyPjwvaHI+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQnV0dG9uQ2xpY2soJ3RvdGFsLWdhc3RhZG8nKX0+Q2FudGlkYWQgdG90YWwgZ2FzdGFkYSBwb3IgZWwgY2xpZW50ZSBxdWUgbcOhcyBoYSBnYXN0YWRvPC9idXR0b24+XHJcbiAgICAgIDxocj48L2hyPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbkNsaWNrKCdjYWxpZmljYWNpb24tcHJvbWVkaW8nKX0+Q2FsaWZpY2FjacOzbiBwcm9tZWRpbyBkZSBsb3MgcHJvZHVjdG9zIGNvbXByYWRvczwvYnV0dG9uPlxyXG4gICAgICA8aHI+PC9ocj5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVCdXR0b25DbGljaygnbWV0b2Rvcy1wYWdvLWRpc3RyaWJ1Y2lvbicpfT5EaXN0cmlidWNpw7NuIGRlIGxvcyBtw6l0b2RvcyBkZSBwYWdvIHV0aWxpemFkb3M8L2J1dHRvbj5cclxuICAgICAgPGhyPjwvaHI+XHJcbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQnV0dG9uQ2xpY2soJ2NpdWRhZC1tYXMtY29tcHJhcycpfT5DaXVkYWQgY29uIG3DoXMgY29tcHJhcyByZWFsaXphZGFzPC9idXR0b24+XHJcbiAgICAgIDxocj48L2hyPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbkNsaWNrKCd0YXNhLWRldm9sdWNpb25lcycpfT5UYXNhIGRlIGRldm9sdWNpb25lcyAoY2FuY2VsYWNpb25lcykgZGUgcHJvZHVjdG9zPC9idXR0b24+XHJcbiAgICAgIDxocj48L2hyPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbkNsaWNrKCdwZXNvLXByb21lZGlvLXByb2R1Y3RvcycpfT5QZXNvIHByb21lZGlvIGRlIGxvcyBwcm9kdWN0b3MgY29tcHJhZG9zPC9idXR0b24+XHJcbiAgICAgIDxocj48L2hyPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUJ1dHRvbkNsaWNrKCd2ZW50YXMtdGllbXBvJyl9PlZlbnRhcyBhIGxvIGxhcmdvIGRlbCB0aWVtcG88L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiRGF0YUNvbnRleHQiLCJheGlvcyIsIkhvbWUiLCJyb3V0ZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJzZXREYXRhIiwiaXNDb21waWxpbmciLCJzZXRJc0NvbXBpbGluZyIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiY2hhcnQiLCJwdXNoIiwiaGFuZGxlQ29tcGlsZURhdGEiLCJjb21waWxlUmVzIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJvcmRlcnNSZXMiLCJwcm9kdWN0c1JlcyIsIm9yZGVycyIsInByb2R1Y3RzIiwibWVzc2FnZSIsImRpdiIsImgxIiwiYnIiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJociJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();