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
exports.id = "pages/charts/ventas-tiempo";
exports.ids = ["pages/charts/ventas-tiempo"];
exports.modules = {

/***/ "./contexts/DataContext.js":
/*!*********************************!*\
  !*** ./contexts/DataContext.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DataContext\": () => (/* binding */ DataContext),\n/* harmony export */   \"DataProvider\": () => (/* binding */ DataProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst DataContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst DataProvider = ({ children  })=>{\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        orders: [],\n        products: [],\n        loading: true,\n        error: null\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const ordersRes = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('/local-data/orders.json');\n                const productsRes = await axios__WEBPACK_IMPORTED_MODULE_2___default().get('/local-data/products.json');\n                console.log('Orders:', ordersRes.data);\n                console.log('Products:', productsRes.data);\n                setData({\n                    orders: ordersRes.data,\n                    products: productsRes.data,\n                    loading: false,\n                    error: null\n                });\n            } catch (error) {\n                console.error('Error fetching data:', error);\n                setData({\n                    orders: [],\n                    products: [],\n                    loading: false,\n                    error: error.message\n                });\n            }\n        };\n        fetchData();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataContext.Provider, {\n        value: {\n            ...data,\n            setData\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\contexts\\\\DataContext.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9EYXRhQ29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDakM7QUFFbEIsS0FBSyxDQUFDSSxXQUFXLGlCQUFHSixvREFBYTtBQUVqQyxLQUFLLENBQUNLLFlBQVksSUFBSSxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUM3QyxLQUFLLE1BQUVDLElBQUksTUFBRUMsT0FBTyxNQUFJUCwrQ0FBUSxDQUFDLENBQUM7UUFDaENRLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDVkMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNaQyxPQUFPLEVBQUUsSUFBSTtRQUNiQyxLQUFLLEVBQUUsSUFBSTtJQUNiLENBQUM7SUFFRFYsZ0RBQVMsS0FBTyxDQUFDO1FBQ2YsS0FBSyxDQUFDVyxTQUFTLGFBQWUsQ0FBQztZQUM3QixHQUFHLENBQUMsQ0FBQztnQkFDSCxLQUFLLENBQUNDLFNBQVMsR0FBRyxLQUFLLENBQUNYLGdEQUFTLENBQUMsQ0FBeUI7Z0JBQzNELEtBQUssQ0FBQ2EsV0FBVyxHQUFHLEtBQUssQ0FBQ2IsZ0RBQVMsQ0FBQyxDQUEyQjtnQkFDL0RjLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVMsVUFBRUosU0FBUyxDQUFDUCxJQUFJO2dCQUNyQ1UsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBVyxZQUFFRixXQUFXLENBQUNULElBQUk7Z0JBQ3pDQyxPQUFPLENBQUMsQ0FBQztvQkFDUEMsTUFBTSxFQUFFSyxTQUFTLENBQUNQLElBQUk7b0JBQ3RCRyxRQUFRLEVBQUVNLFdBQVcsQ0FBQ1QsSUFBSTtvQkFDMUJJLE9BQU8sRUFBRSxLQUFLO29CQUNkQyxLQUFLLEVBQUUsSUFBSTtnQkFDYixDQUFDO1lBQ0gsQ0FBQyxDQUFDLEtBQUssRUFBRUEsS0FBSyxFQUFFLENBQUM7Z0JBQ2ZLLE9BQU8sQ0FBQ0wsS0FBSyxDQUFDLENBQXNCLHVCQUFFQSxLQUFLO2dCQUMzQ0osT0FBTyxDQUFDLENBQUM7b0JBQ1BDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQ1ZDLFFBQVEsRUFBRSxDQUFDLENBQUM7b0JBQ1pDLE9BQU8sRUFBRSxLQUFLO29CQUNkQyxLQUFLLEVBQUVBLEtBQUssQ0FBQ08sT0FBTztnQkFDdEIsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO1FBRUROLFNBQVM7SUFDWCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSw2RUFDSFQsV0FBVyxDQUFDZ0IsUUFBUTtRQUFDQyxLQUFLLEVBQUUsQ0FBQztlQUFJZCxJQUFJO1lBQUVDLE9BQU87UUFBQyxDQUFDO2tCQUM5Q0YsUUFBUTs7Ozs7O0FBR2YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWRhc2hib2FyZC8uL2NvbnRleHRzL0RhdGFDb250ZXh0LmpzP2UwNGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgb3JkZXJzOiBbXSxcclxuICAgIHByb2R1Y3RzOiBbXSxcclxuICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICBlcnJvcjogbnVsbCxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBvcmRlcnNSZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9sb2NhbC1kYXRhL29yZGVycy5qc29uJyk7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdHNSZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9sb2NhbC1kYXRhL3Byb2R1Y3RzLmpzb24nKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnT3JkZXJzOicsIG9yZGVyc1Jlcy5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnUHJvZHVjdHM6JywgcHJvZHVjdHNSZXMuZGF0YSk7XHJcbiAgICAgICAgc2V0RGF0YSh7XHJcbiAgICAgICAgICBvcmRlcnM6IG9yZGVyc1Jlcy5kYXRhLFxyXG4gICAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzUmVzLmRhdGEsXHJcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgIHNldERhdGEoe1xyXG4gICAgICAgICAgb3JkZXJzOiBbXSxcclxuICAgICAgICAgIHByb2R1Y3RzOiBbXSxcclxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERhdGFDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IC4uLmRhdGEsIHNldERhdGEgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiRGF0YUNvbnRleHQiLCJEYXRhUHJvdmlkZXIiLCJjaGlsZHJlbiIsImRhdGEiLCJzZXREYXRhIiwib3JkZXJzIiwicHJvZHVjdHMiLCJsb2FkaW5nIiwiZXJyb3IiLCJmZXRjaERhdGEiLCJvcmRlcnNSZXMiLCJnZXQiLCJwcm9kdWN0c1JlcyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/DataContext.js\n");

/***/ }),

/***/ "./pages/charts/ventas-tiempo.js":
/*!***************************************!*\
  !*** ./pages/charts/ventas-tiempo.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ \"recharts\");\n/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_DataContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/DataContext */ \"./contexts/DataContext.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst VentasTiempo = ()=>{\n    const { orders  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_DataContext__WEBPACK_IMPORTED_MODULE_3__.DataContext);\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (orders.length === 0) {\n            console.log('No orders data');\n            return;\n        }\n        // Agrupar y contar las compras por timestamp (fecha)\n        const salesOverTime = orders.reduce((acc, order)=>{\n            const date = moment__WEBPACK_IMPORTED_MODULE_4___default()(order.timestamp, 'DD-MM-YYYY HH:mm').format('YYYY-MM-DD');\n            acc[date] = (acc[date] || 0) + order.quantity;\n            return acc;\n        }, {});\n        // Crear el array de datos para el gráfico\n        const salesData = Object.keys(salesOverTime).map((date)=>({\n                date,\n                sales: salesOverTime[date]\n            })\n        );\n        // Ordenar los datos por fecha\n        salesData.sort((a, b)=>new Date(a.date) - new Date(b.date)\n        );\n        setData(salesData);\n    }, [\n        orders\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Ventas a lo largo del tiempo\"\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\charts\\\\ventas-tiempo.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.ResponsiveContainer, {\n                width: \"100%\",\n                height: 400,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.LineChart, {\n                    width: 800,\n                    height: 400,\n                    data: data,\n                    margin: {\n                        top: 20,\n                        right: 30,\n                        left: 20,\n                        bottom: 5\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.CartesianGrid, {\n                            strokeDasharray: \"3 3\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\charts\\\\ventas-tiempo.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.XAxis, {\n                            dataKey: \"date\",\n                            tickFormatter: (tick)=>moment__WEBPACK_IMPORTED_MODULE_4___default()(tick).format('YYYY-MM-DD')\n                        }, void 0, false, {\n                            fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\charts\\\\ventas-tiempo.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.YAxis, {}, void 0, false, {\n                            fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\charts\\\\ventas-tiempo.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {\n                            labelFormatter: (label)=>moment__WEBPACK_IMPORTED_MODULE_4___default()(label).format('YYYY-MM-DD')\n                        }, void 0, false, {\n                            fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\charts\\\\ventas-tiempo.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.Legend, {}, void 0, false, {\n                            fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\charts\\\\ventas-tiempo.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recharts__WEBPACK_IMPORTED_MODULE_2__.Line, {\n                            type: \"monotone\",\n                            dataKey: \"sales\",\n                            stroke: \"#8884d8\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\charts\\\\ventas-tiempo.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\charts\\\\ventas-tiempo.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\charts\\\\ventas-tiempo.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\2024-1\\\\Taller de Integracion\\\\T3\\\\tarea-3-mjadresic\\\\my-dashboard\\\\pages\\\\charts\\\\ventas-tiempo.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VentasTiempo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1kYXNoYm9hcmQvLi9wYWdlcy9jaGFydHMvdmVudGFzLXRpZW1wby5qcz82MTY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmVDaGFydCwgTGluZSwgWEF4aXMsIFlBeGlzLCBUb29sdGlwLCBDYXJ0ZXNpYW5HcmlkLCBMZWdlbmQsIFJlc3BvbnNpdmVDb250YWluZXIgfSBmcm9tICdyZWNoYXJ0cyc7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMvRGF0YUNvbnRleHQnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5jb25zdCBWZW50YXNUaWVtcG8gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBvcmRlcnMgfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChvcmRlcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdObyBvcmRlcnMgZGF0YScpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWdydXBhciB5IGNvbnRhciBsYXMgY29tcHJhcyBwb3IgdGltZXN0YW1wIChmZWNoYSlcclxuICAgIGNvbnN0IHNhbGVzT3ZlclRpbWUgPSBvcmRlcnMucmVkdWNlKChhY2MsIG9yZGVyKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBtb21lbnQob3JkZXIudGltZXN0YW1wLCAnREQtTU0tWVlZWSBISDptbScpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgICBhY2NbZGF0ZV0gPSAoYWNjW2RhdGVdIHx8IDApICsgb3JkZXIucXVhbnRpdHk7XHJcbiAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9LCB7fSk7XHJcblxyXG4gICAgLy8gQ3JlYXIgZWwgYXJyYXkgZGUgZGF0b3MgcGFyYSBlbCBncsOhZmljb1xyXG4gICAgY29uc3Qgc2FsZXNEYXRhID0gT2JqZWN0LmtleXMoc2FsZXNPdmVyVGltZSkubWFwKGRhdGUgPT4gKHtcclxuICAgICAgZGF0ZSxcclxuICAgICAgc2FsZXM6IHNhbGVzT3ZlclRpbWVbZGF0ZV0sXHJcbiAgICB9KSk7XHJcblxyXG4gICAgLy8gT3JkZW5hciBsb3MgZGF0b3MgcG9yIGZlY2hhXHJcbiAgICBzYWxlc0RhdGEuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYS5kYXRlKSAtIG5ldyBEYXRlKGIuZGF0ZSkpO1xyXG5cclxuICAgIHNldERhdGEoc2FsZXNEYXRhKTtcclxuICB9LCBbb3JkZXJzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+VmVudGFzIGEgbG8gbGFyZ28gZGVsIHRpZW1wbzwvaDE+XHJcbiAgICAgIDxSZXNwb25zaXZlQ29udGFpbmVyIHdpZHRoPVwiMTAwJVwiIGhlaWdodD17NDAwfT5cclxuICAgICAgICA8TGluZUNoYXJ0XHJcbiAgICAgICAgICB3aWR0aD17ODAwfVxyXG4gICAgICAgICAgaGVpZ2h0PXs0MDB9XHJcbiAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgbWFyZ2luPXt7XHJcbiAgICAgICAgICAgIHRvcDogMjAsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAzMCxcclxuICAgICAgICAgICAgbGVmdDogMjAsXHJcbiAgICAgICAgICAgIGJvdHRvbTogNSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIgLz5cclxuICAgICAgICAgIDxYQXhpcyBkYXRhS2V5PVwiZGF0ZVwiIHRpY2tGb3JtYXR0ZXI9eyh0aWNrKSA9PiBtb21lbnQodGljaykuZm9ybWF0KCdZWVlZLU1NLUREJyl9IC8+XHJcbiAgICAgICAgICA8WUF4aXMgLz5cclxuICAgICAgICAgIDxUb29sdGlwIGxhYmVsRm9ybWF0dGVyPXsobGFiZWwpID0+IG1vbWVudChsYWJlbCkuZm9ybWF0KCdZWVlZLU1NLUREJyl9IC8+XHJcbiAgICAgICAgICA8TGVnZW5kIC8+XHJcbiAgICAgICAgICA8TGluZSB0eXBlPVwibW9ub3RvbmVcIiBkYXRhS2V5PVwic2FsZXNcIiBzdHJva2U9XCIjODg4NGQ4XCIgLz5cclxuICAgICAgICA8L0xpbmVDaGFydD5cclxuICAgICAgPC9SZXNwb25zaXZlQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZlbnRhc1RpZW1wbztcclxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmVDaGFydCIsIkxpbmUiLCJYQXhpcyIsIllBeGlzIiwiVG9vbHRpcCIsIkNhcnRlc2lhbkdyaWQiLCJMZWdlbmQiLCJSZXNwb25zaXZlQ29udGFpbmVyIiwiRGF0YUNvbnRleHQiLCJtb21lbnQiLCJWZW50YXNUaWVtcG8iLCJvcmRlcnMiLCJkYXRhIiwic2V0RGF0YSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJzYWxlc092ZXJUaW1lIiwicmVkdWNlIiwiYWNjIiwib3JkZXIiLCJkYXRlIiwidGltZXN0YW1wIiwiZm9ybWF0IiwicXVhbnRpdHkiLCJzYWxlc0RhdGEiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwic2FsZXMiLCJzb3J0IiwiYSIsImIiLCJEYXRlIiwiZGl2IiwiaDEiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsInN0cm9rZURhc2hhcnJheSIsImRhdGFLZXkiLCJ0aWNrRm9ybWF0dGVyIiwidGljayIsImxhYmVsRm9ybWF0dGVyIiwibGFiZWwiLCJ0eXBlIiwic3Ryb2tlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/charts/ventas-tiempo.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("moment");

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

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("recharts");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/charts/ventas-tiempo.js"));
module.exports = __webpack_exports__;

})();