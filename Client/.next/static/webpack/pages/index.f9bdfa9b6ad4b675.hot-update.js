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

/***/ "./components/Board.js":
/*!*****************************!*\
  !*** ./components/Board.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./constants/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_constants__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_moralis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-moralis */ \"./node_modules/react-moralis/lib/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Board = ()=>{\n    _s();\n    const { Moralis, isWeb3Enabled, chainId: chainIdHex } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_3__.useMoralis)();\n    const chainId = parseInt(chainIdHex);\n    const raffleAddress = chainId in _constants__WEBPACK_IMPORTED_MODULE_2__.contractAddress ? _constants__WEBPACK_IMPORTED_MODULE_2__.contractAddress[chainId][0] : null;\n    const { runContractFunction: createEvent, isLoading, isFetching } = (0,react_moralis__WEBPACK_IMPORTED_MODULE_3__.useWeb3Contract)({\n        abi: NFticketabi,\n        contractAddress: NfticketAddress,\n        functionName: \"createEvent\",\n        params: {\n            _name: state.name,\n            _date: state.date,\n            _location: state.location,\n            _ticketPriceNormal: ethers.utils.parseEther(state.ticketPrice || \"0\"),\n            _totalSupplyNormal: state.totalSupply,\n            _uri: data\n        }\n    });\n    const [grid, setGrid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Array(35).fill(0));\n    const [selectedCell, setSelectedCell] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const numRows = 7;\n    const numCols = 5;\n    const toggleCellColor = (cellIndex)=>{\n        if (selectedCell === cellIndex) {\n            setSelectedCell(null);\n        } else {\n            setSelectedCell(cellIndex);\n        }\n    };\n    const handleColorChange = (color)=>{\n        if (selectedCell !== null) {\n            const newGrid = [\n                ...grid\n            ];\n            newGrid[selectedCell] = color;\n            setGrid(newGrid);\n            setSelectedCell(null);\n        }\n    };\n    // Function to convert 1D index to 2D (x, y) coordinates\n    const getIndexCoordinates = (index)=>{\n        const x = index % numCols + 1;\n        const y = Math.floor(index / numCols) + 1;\n        return {\n            x,\n            y\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-5 grid-rows-7 gap-0 w-3/4\",\n            children: grid.map((cellColor, index)=>{\n                const { x, y } = getIndexCoordinates(index);\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>toggleCellColor(index),\n                    className: \"h-10 border border-gray-300 cursor-pointer \".concat(cellColor === 2 ? \"bg-black\" : cellColor === 4 ? \"bg-yellow-500\" : cellColor === 3 ? \"bg-red-500\" : \"bg-white\", \" relative\"),\n                    children: [\n                        selectedCell === index && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute top-0 left-0 w-16 mt-10 z-10 bg-white border border-gray-300 rounded shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-4 w-4 mx-1 bg-black cursor-pointer\",\n                                    onClick: ()=>handleColorChange(2)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-4 w-4 mx-1 bg-yellow-500 cursor-pointer\",\n                                    onClick: ()=>handleColorChange(4)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-4 w-4 mx-1 bg-red-500 cursor-pointer\",\n                                    onClick: ()=>handleColorChange(3)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-4 w-4 mx-1 bg-white border cursor-pointer\",\n                                    onClick: ()=>handleColorChange(1)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                            lineNumber: 83,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-0 right-0 text-xs text-gray-500 p-1\",\n                            children: \"(\".concat(x, \",\").concat(y, \")\")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                            lineNumber: 103,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n                    lineNumber: 69,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Web3bridge-test-6\\\\Client\\\\components\\\\Board.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Board, \"nx1QC2hl688R3gAaRBWiYORahtk=\", false, function() {\n    return [\n        react_moralis__WEBPACK_IMPORTED_MODULE_3__.useMoralis,\n        react_moralis__WEBPACK_IMPORTED_MODULE_3__.useWeb3Contract\n    ];\n});\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WmZFO0FBMkdOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQm9hcmQuanM/ZDNiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29udHJhY3RBZGRyZXNzLCBhYmkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCJcclxuaW1wb3J0IHsgdXNlTW9yYWxpcywgdXNlV2ViM0NvbnRyYWN0IH0gZnJvbSBcInJlYWN0LW1vcmFsaXNcIlxyXG5pbXBvcnQgeyB1c2VOb3RpZmljYXRpb24gfSBmcm9tIFwid2ViM3Vpa2l0XCI7XHJcblxyXG5cclxuY29uc3QgQm9hcmQgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHsgTW9yYWxpcywgaXNXZWIzRW5hYmxlZCwgY2hhaW5JZDogY2hhaW5JZEhleCB9ID0gdXNlTW9yYWxpcygpXHJcblxyXG4gIGNvbnN0IGNoYWluSWQgPSBwYXJzZUludChjaGFpbklkSGV4KVxyXG5cclxuICBjb25zdCByYWZmbGVBZGRyZXNzID0gY2hhaW5JZCBpbiBjb250cmFjdEFkZHJlc3MgPyBjb250cmFjdEFkZHJlc3NbY2hhaW5JZF1bMF0gOiBudWxsXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHJ1bkNvbnRyYWN0RnVuY3Rpb246IGNyZWF0ZUV2ZW50LFxyXG4gICAgaXNMb2FkaW5nLFxyXG4gICAgaXNGZXRjaGluZyxcclxuICB9ID0gdXNlV2ViM0NvbnRyYWN0KHtcclxuICAgIGFiaTogTkZ0aWNrZXRhYmksXHJcbiAgICBjb250cmFjdEFkZHJlc3M6IE5mdGlja2V0QWRkcmVzcyxcclxuICAgIGZ1bmN0aW9uTmFtZTogXCJjcmVhdGVFdmVudFwiLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIF9uYW1lOiBzdGF0ZS5uYW1lLFxyXG4gICAgICBfZGF0ZTogc3RhdGUuZGF0ZSxcclxuICAgICAgX2xvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbixcclxuICAgICAgX3RpY2tldFByaWNlTm9ybWFsOiBldGhlcnMudXRpbHMucGFyc2VFdGhlcihzdGF0ZS50aWNrZXRQcmljZSB8fCBcIjBcIiksXHJcbiAgICAgIF90b3RhbFN1cHBseU5vcm1hbDogc3RhdGUudG90YWxTdXBwbHksXHJcbiAgICAgIF91cmk6ZGF0YSxcclxuICAgIH0sXHJcbiAgfSlcclxuXHJcbiAgY29uc3QgW2dyaWQsIHNldEdyaWRdID0gdXNlU3RhdGUoQXJyYXkoMzUpLmZpbGwoMCkpO1xyXG4gIGNvbnN0IFtzZWxlY3RlZENlbGwsIHNldFNlbGVjdGVkQ2VsbF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgbnVtUm93cyA9IDc7XHJcbiAgY29uc3QgbnVtQ29scyA9IDU7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZUNlbGxDb2xvciA9IChjZWxsSW5kZXgpID0+IHtcclxuICAgIGlmIChzZWxlY3RlZENlbGwgPT09IGNlbGxJbmRleCkge1xyXG4gICAgICBzZXRTZWxlY3RlZENlbGwobnVsbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTZWxlY3RlZENlbGwoY2VsbEluZGV4KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDb2xvckNoYW5nZSA9IChjb2xvcikgPT4ge1xyXG4gICAgaWYgKHNlbGVjdGVkQ2VsbCAhPT0gbnVsbCkge1xyXG4gICAgICBjb25zdCBuZXdHcmlkID0gWy4uLmdyaWRdO1xyXG4gICAgICBuZXdHcmlkW3NlbGVjdGVkQ2VsbF0gPSBjb2xvcjtcclxuICAgICAgc2V0R3JpZChuZXdHcmlkKTtcclxuICAgICAgc2V0U2VsZWN0ZWRDZWxsKG51bGwpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIEZ1bmN0aW9uIHRvIGNvbnZlcnQgMUQgaW5kZXggdG8gMkQgKHgsIHkpIGNvb3JkaW5hdGVzXHJcbiAgY29uc3QgZ2V0SW5kZXhDb29yZGluYXRlcyA9IChpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgeCA9IChpbmRleCAlIG51bUNvbHMpICsgMTtcclxuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGluZGV4IC8gbnVtQ29scykgKyAxO1xyXG4gICAgcmV0dXJuIHsgeCwgeSB9O1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy01IGdyaWQtcm93cy03IGdhcC0wIHctMy80XCI+XHJcbiAgICAgICAge2dyaWQubWFwKChjZWxsQ29sb3IsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IHgsIHkgfSA9IGdldEluZGV4Q29vcmRpbmF0ZXMoaW5kZXgpO1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlQ2VsbENvbG9yKGluZGV4KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLTEwIGJvcmRlciBib3JkZXItZ3JheS0zMDAgY3Vyc29yLXBvaW50ZXIgJHtcclxuICAgICAgICAgICAgICAgIGNlbGxDb2xvciA9PT0gMlxyXG4gICAgICAgICAgICAgICAgICA/IFwiYmctYmxhY2tcIlxyXG4gICAgICAgICAgICAgICAgICA6IGNlbGxDb2xvciA9PT0gNFxyXG4gICAgICAgICAgICAgICAgICA/IFwiYmcteWVsbG93LTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgIDogY2VsbENvbG9yID09PSAzXHJcbiAgICAgICAgICAgICAgICAgID8gXCJiZy1yZWQtNTAwXCJcclxuICAgICAgICAgICAgICAgICAgOiBcImJnLXdoaXRlXCJcclxuICAgICAgICAgICAgICB9IHJlbGF0aXZlYH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtzZWxlY3RlZENlbGwgPT09IGluZGV4ICYmIChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIHctMTYgbXQtMTAgei0xMCBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQgc2hhZG93LW1kXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTQgdy00IG14LTEgYmctYmxhY2sgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbG9yQ2hhbmdlKDIpfSAvLyBCbGFja1xyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCBteC0xIGJnLXllbGxvdy01MDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbG9yQ2hhbmdlKDQpfSAvLyBHcmVlblxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC00IHctNCBteC0xIGJnLXJlZC01MDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbG9yQ2hhbmdlKDMpfSAvLyBSZWRcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNCB3LTQgbXgtMSBiZy13aGl0ZSBib3JkZXIgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNvbG9yQ2hhbmdlKDEpfSAvLyBXaGl0ZVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICB7LyogRGlzcGxheSB0aGUgeCwgeSBjb29yZGluYXRlcyAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTAgdGV4dC14cyB0ZXh0LWdyYXktNTAwIHAtMVwiPlxyXG4gICAgICAgICAgICAgICAge2AoJHt4fSwke3l9KWB9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY29udHJhY3RBZGRyZXNzIiwiYWJpIiwidXNlTW9yYWxpcyIsInVzZVdlYjNDb250cmFjdCIsInVzZU5vdGlmaWNhdGlvbiIsIkJvYXJkIiwiTW9yYWxpcyIsImlzV2ViM0VuYWJsZWQiLCJjaGFpbklkIiwiY2hhaW5JZEhleCIsInBhcnNlSW50IiwicmFmZmxlQWRkcmVzcyIsInJ1bkNvbnRyYWN0RnVuY3Rpb24iLCJjcmVhdGVFdmVudCIsImlzTG9hZGluZyIsImlzRmV0Y2hpbmciLCJORnRpY2tldGFiaSIsIk5mdGlja2V0QWRkcmVzcyIsImZ1bmN0aW9uTmFtZSIsInBhcmFtcyIsIl9uYW1lIiwic3RhdGUiLCJuYW1lIiwiX2RhdGUiLCJkYXRlIiwiX2xvY2F0aW9uIiwibG9jYXRpb24iLCJfdGlja2V0UHJpY2VOb3JtYWwiLCJldGhlcnMiLCJ1dGlscyIsInBhcnNlRXRoZXIiLCJ0aWNrZXRQcmljZSIsIl90b3RhbFN1cHBseU5vcm1hbCIsInRvdGFsU3VwcGx5IiwiX3VyaSIsImRhdGEiLCJncmlkIiwic2V0R3JpZCIsIkFycmF5IiwiZmlsbCIsInNlbGVjdGVkQ2VsbCIsInNldFNlbGVjdGVkQ2VsbCIsIm51bVJvd3MiLCJudW1Db2xzIiwidG9nZ2xlQ2VsbENvbG9yIiwiY2VsbEluZGV4IiwiaGFuZGxlQ29sb3JDaGFuZ2UiLCJjb2xvciIsIm5ld0dyaWQiLCJnZXRJbmRleENvb3JkaW5hdGVzIiwiaW5kZXgiLCJ4IiwieSIsIk1hdGgiLCJmbG9vciIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImNlbGxDb2xvciIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Board.js\n"));

/***/ })

});