module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar _default = {\n  env: \"development\" || false,\n  port: process.env.PORT || 8000\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Himanshu\\\\EZT1\\\\config\\\\index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./config/index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/controllers/index.js":
/*!*************************************!*\
  !*** ./server/controllers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid/v4 */ \"uuid/v4\");\n/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ \"xlsx\");\n/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\nvar counterHint = 0;\nvar reverse = false;\n\nfunction internalCategories(type, data) {\n  return \"<internal_category>\\n                <catid>13570164220533888</catid>\\n                <title><![CDATA[\".concat(type, \": \").concat(data, \"]]></title>\\n            </internal_category>\");\n}\n\nfunction generateHints(data) {\n  counterHint++;\n  return \"<hint>\\n             <name>hint #\".concat(counterHint, \"</name>\\n             <type>html</type>\\n             <value><![CDATA[\").concat(data, \"]]></value>\\n            </hint>\");\n}\n\nfunction questionProperties(solution) {\n  return \"<questionProperties>\\n           <property name=\\\"pageTag\\\" type=\\\"string\\\" value=\\\"\\\" />\\n           <property name=\\\"customType\\\" type=\\\"string\\\" value=\\\"\\\" />\\n           <property name=\\\"completeIncompleteGrading\\\" type=\\\"string\\\" value=\\\"false\\\" />\\n           <property name=\\\"instructor_info\\\" type=\\\"string\\\" value=\\\"\\\" />\\n           <property name=\\\"forceManualScoring\\\" type=\\\"string\\\" value=\\\"automatic\\\" />\\n           <property name=\\\"problemSolution\\\" type=\\\"string\\\" value=\\\"\".concat(solution, \"\\\" />\\n           <property name=\\\"audioPlayerPosition\\\" type=\\\"string\\\" value=\\\"above\\\" />\\n           <property name=\\\"useCommonFeedback\\\" type=\\\"string\\\" value=\\\"true\\\" />\\n           <property name=\\\"aggregatedGrading\\\" type=\\\"string\\\" value=\\\"false\\\" />\\n         </questionProperties>\");\n}\n\nfunction rootXML(categories, questionData, commonFeedValue, quesMeta, questionProperties, questionHintValue, randomVariables, listAnswers) {\n  var commonFeed = '';\n  if (commonFeedValue !== '') commonFeed = \"<commonFeedback><![CDATA[\".concat(commonFeedValue, \"]]></commonFeedback>\");\n  var questionStem = \"<worksheet><stem><![CDATA[\".concat(questionData, \"]]></stem>\").concat(commonFeed, \"</worksheet>\");\n  return \"<questionSet><question>\\n               <format>1</format>\\n               <ezid>13570164500387354</ezid>\\n               <version>1561981908321</version>\\n               <title><![CDATA[Problem \".concat(quesMeta['qtitle'], \"]]></title>\\n               <type>\").concat(quesMeta['qtype'], \"</type>\\n               \").concat(categories, \"\\n               \").concat(randomVariables, \"\\n               \").concat(questionProperties, \"\\n               \").concat(questionStem, \"\\n               \").concat(questionHintValue, \"\\n               \").concat(listAnswers, \"\\n             </question></questionSet>\");\n}\n\nfunction imageAndMmlCover(data) {\n  console.log(data);\n  var k = data.split('.');\n  var a = k.pop();\n  var b = k.join('');\n\n  if (a == 'mml') {\n    return \"%\" + \"media:\" + b + \".\" + a + \"%\"; //return `<p>&nbsp;</p><p>${result}</p><p>&nbsp;</p>`;\n  } else return \"%\" + \"media:\" + b + \"_\" + a + \".ext\" + \"%\";\n}\n\nfunction splitImageAndMml(str) {\n  str = str.split('>>'); //console.log(str);\n\n  var response = '';\n\n  if (str.length > 1) {\n    var media = imageAndMmlCover(str[0]);\n    str[0] = imageAndMmlCover(str[0]);\n  } //check for new line\n\n\n  var splitter = reverse ? '<<i:' : '<<n:';\n\n  for (var x = 0; x < str.length; x++) {\n    var ele = str[x].split(splitter);\n\n    if (ele.length > 1) {\n      ele[1] = reverse ? imageAndMmlCover(ele[1]) : \"<p>&nbsp;</p><p>\".concat(imageAndMmlCover(ele[1]), \"</p><p>&nbsp;</p>\");\n      str[x] = ele[0] + ele[1];\n    }\n  }\n\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var y = _step.value;\n      response += y;\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return response;\n}\n\nfunction imageAndMmlgenerate(type, data) {\n  var result = '';\n\n  if (type == 1 || type == 0) {\n    result = type == 0 ? \"<p>&nbsp;</p><p>\".concat(imageAndMmlCover(data), \"</p><p>&nbsp;</p>\") : \"<p>\".concat(imageAndMmlCover(data), \"</p>\");\n  } else {\n    var resultString = data.split('<<i:');\n\n    if (resultString.length == 1) {\n      resultString = data.split('<<n:');\n      reverse = true;\n    } else {\n      reverse = false;\n    }\n\n    var response = '';\n\n    if (resultString.length > 1) {\n      resultString = resultString.map(function (x) {\n        if (x !== '') {\n          return !reverse ? splitImageAndMml(x) : \"<p>&nbsp;</p><p>\".concat(splitImageAndMml(x), \"</p><p>&nbsp;</p>\");\n        } else {\n          return x;\n        }\n      });\n      console.log(resultString);\n\n      for (var k = 0; k < resultString.length; k++) {\n        response += resultString[k];\n      }\n    } else {\n      response = data;\n    } // let newlineString = response.split('<<n:');\n    //     console.log(response)\n    //        if(newlineString.length>1){\n    //           newlineString = newlineString.map((x)=>{\n    //                  if(x!==''){\n    //                     return `<p>&nbsp;</p><p>${splitImageAndMml(x)}</p><p>&nbsp;</p>`;\n    //                  }else{\n    //                     return `<p>${x}</p>`;\n    //                  }\n    //            });\n    //            for(let k=0; k<newlineString.length; k++){\n    //                response += newlineString[k];\n    //            }\n    //        }else{\n    //            response = data;\n    //        }\n    //     newlineString = newlineString.map((x)=>{\n    //           if(x!==''){\n    //              return `<p>&nbsp;</p><p>${splitImageAndMml(x)}</p><p>&nbsp;</p>`;\n    //           }else{\n    //              return `<p>${x}</p>`;\n    //           }\n    //     });\n    //     let finalResponse = '';\n    //     for(let k=0; k<newlineString.length; k++){\n    //         finalResponse += newlineString[k];\n    //     }\n    //\n    //\n    //  data = data.replace(/<<i:.+>>/, function (match) {\n    //             match = match.replace('<<i:', '');\n    //             match = match.replace('>>', '');\n    //           //  resultString = resultString.match(/<<i:.+>>/)\n    //\n    //           //  console.log(resultString);\n    //             return imageAndMmlCover(match);\n    //    }\n    //  );\n    //  data = data.replace(/<<n:.+>>/ig, function (match) {\n    //              match = match.replace('<<n:', '');\n    //              match = match.replace('>>', '');\n    //              if(match.match('.mml'))\n    //                 return `<p>&nbsp;</p><p>${imageAndMmlCover(match)}</p><p>&nbsp;</p>`;\n    //              else\n    //                 return `<p>${imageAndMmlCover(match)}</p>`;\n    //     }\n    // );\n\n\n    result = \"<p>\".concat(response, \"</p>\");\n  }\n\n  return result;\n} // { col1: 'Category tags' }\n// { col1: 'Bloom\\'s: Object' }\n// { col1: 'Bloom\\'s: Verb' }\n// { col1: 'Accessibility' }\n// { col1: 'ABET Outcomes' }\n// { col1: 'Chapter' }\n// { col1: 'Difficulty' }\n// { col1: 'Section' }\n// { col1: 'Topic' }\n// { col1: 'Subtopic' }\n// { col1: 'Units' }\n// { col1: 'Q type', col2: 'WS' }\n// { col1: 'Section Break' }\n// { col1: 'Custom Question Type Title', col2: 'Numeric Response' }\n// { col1: 'Question Title', col2: 1.001 }\n\n\nfunction generateRandomVariable(variableValue) {\n  var variableName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'A';\n  var allVariables = '';\n  var varible = variableValue.split('\\n');\n  var listData = '';\n  varible = varible.filter(function (el) {\n    return el != '';\n  });\n\n  for (var y = 0; y < varible.length; y++) {\n    console.log(varible[y].length);\n    varible[y] = varible[y].replace('\\r', '');\n    listData += \"<row><![CDATA[\" + varible[y] + \"]]></row>\";\n  }\n\n  return \"<pooledRandom><name>\".concat(variableName, \"</name><arrayed>true</arrayed>\\n                      <rows>\").concat(listData, \"</rows>\\n                     </pooledRandom>\");\n}\n\nfunction generateAnswerTyps(optionValue, type, answerValue) {\n  if (type.toLowerCase() == 'np') {\n    return \"<numberAnswer>\\n                   <name><![CDATA\".concat(optionValue, \"]></name>\\n                   <weight>100</weight>\\n                   <answerProperties>\\n                     <property name=\\\"completeIncompleteGrading\\\" type=\\\"string\\\" value=\\\"false\\\" />\\n                   </answerProperties>\\n                   <fieldWidth>7</fieldWidth>\\n                   <correctAnswer><![CDATA[[A(3)]]]></correctAnswer>\\n                   <formatString><![CDATA[#.####]]></formatString>\\n                   <precisionString><![CDATA[2]]></precisionString>\\n                   <units></units>\\n                   <precisionType>2</precisionType>\\n                   <engineeringUnits>false</engineeringUnits>\\n                   <currency>false</currency>\\n                 </numberAnswer>\");\n  } else if (type.toLowerCase() == 'mcq') {\n    if (answerValue) {\n      answerValue = answerValue.split(',');\n      answerValue = answerValue.map(function (e) {\n        return e.trim();\n      });\n    } else {\n      answerValue = ['1'];\n    }\n\n    var options = '';\n    console.log(answerValue);\n    var multipleCount = optionValue.split(',');\n\n    for (var y = 1; y <= multipleCount.length; y++) {\n      var indexedEle = y.toString();\n      var k = answerValue.indexOf(indexedEle) >= 0 ? 'true' : 'false';\n      options += \"<choice>\\n                                <distractor><![CDATA[\".concat(multipleCount[y - 1], \"]]></distractor>\\n                                <correct>\").concat(k, \"</correct>\\n                               </choice>\");\n    }\n\n    return \"<multipleChoiceAnswer>\\n                     <name><![CDATA[C]]></name>\\n                     <weight>100</weight>\\n                     <answerProperties>\\n                        <property name=\\\"presentation\\\" type=\\\"string\\\" value=\\\"dropDown\\\" />\\n                        <property name=\\\"completeIncompleteGrading\\\" type=\\\"string\\\" value=\\\"false\\\" />\\n                        <property name=\\\"width\\\" type=\\\"string\\\" value=\\\"\\\" />\\n                        <property name=\\\"prompt\\\" type=\\\"string\\\" value=\\\"\\\" />\\n                        <property name=\\\"scramble\\\" type=\\\"string\\\" value=\\\"true\\\" />\\n                     </answerProperties>\\n                     <choices>\\n                       \".concat(options, \"\\n                     </choices>\\n                  </multipleChoiceAnswer>\");\n  }\n}\n\nfunction uploadXLSX(workbook, inputfiletoread) {\n  var xlsxJSON = xlsx__WEBPACK_IMPORTED_MODULE_2___default.a.utils.sheet_to_json(workbook.Sheets[inputfiletoread], {\n    defVal: \"\"\n  });\n  var categoriesXML = '';\n  var questionValue = '';\n  var commonFeedValue = '';\n  var questionPropertiesValue = '';\n  var questionHintValue = '';\n  var randomVariables = '';\n  var listAnswers = '';\n  counterHint = 0;\n  var questionMeta = {};\n  var _iteratorNormalCompletion2 = true;\n  var _didIteratorError2 = false;\n  var _iteratorError2 = undefined;\n\n  try {\n    for (var _iterator2 = xlsxJSON[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n      var xlsxColumnValeus = _step2.value;\n\n      if (xlsxColumnValeus.col1 && xlsxColumnValeus.col1.toLowerCase() == 'accessibility' && xlsxColumnValeus.col2 !== undefined) {\n        categoriesXML += internalCategories('Accessibility', xlsxColumnValeus.col2);\n      } else if (xlsxColumnValeus.col1 && xlsxColumnValeus.col1.toLowerCase() == 'abet outcomes' && xlsxColumnValeus.col2 !== undefined) {\n        categoriesXML += internalCategories('ABET Outcomes', xlsxColumnValeus.col2);\n      } else if (xlsxColumnValeus.col1 && xlsxColumnValeus.col1.toLowerCase() == 'chapter' && xlsxColumnValeus.col2 !== undefined) {\n        categoriesXML += internalCategories('Chapter', xlsxColumnValeus.col2);\n      } else if (xlsxColumnValeus.col1 && xlsxColumnValeus.col1.toLowerCase() == 'difficulty' && xlsxColumnValeus.col2 !== undefined) {\n        categoriesXML += internalCategories('Difficulty', xlsxColumnValeus.col2);\n      } else if (xlsxColumnValeus.col1 && xlsxColumnValeus.col1.toLowerCase() == 'section' && xlsxColumnValeus.col2 !== undefined) {\n        categoriesXML += internalCategories('Section', xlsxColumnValeus.col2);\n      } else if (xlsxColumnValeus.col1 && xlsxColumnValeus.col1.toLowerCase() == 'topic' && xlsxColumnValeus.col2 !== undefined) {\n        categoriesXML += internalCategories('Topic', xlsxColumnValeus.col2);\n      } else if (xlsxColumnValeus.col1 && xlsxColumnValeus.col1.toLowerCase() == 'subtopic' && xlsxColumnValeus.col2 !== undefined) {\n        categoriesXML += internalCategories('Subtopic', xlsxColumnValeus.col2);\n      } else if (xlsxColumnValeus.col1 && xlsxColumnValeus.col1.toLowerCase() == 'units' && xlsxColumnValeus.col2 !== undefined) {\n        categoriesXML += internalCategories('Units', xlsxColumnValeus.col2);\n      } else if (xlsxColumnValeus.col1 && xlsxColumnValeus.col1 == 'Q type' && xlsxColumnValeus.col2 !== undefined) {\n        questionMeta['qtype'] = xlsxColumnValeus.col2;\n      } else if (xlsxColumnValeus.col1 && xlsxColumnValeus.col1 == 'Question Title' && xlsxColumnValeus.col2 !== undefined) {\n        questionMeta['qtitle'] = xlsxColumnValeus.col2;\n      } else if (xlsxColumnValeus.col1 && xlsxColumnValeus.col1 == 'Question' && xlsxColumnValeus.col2 !== undefined) {\n        questionValue += imageAndMmlgenerate(xlsxColumnValeus.col1, xlsxColumnValeus.col2);\n      } else if (xlsxColumnValeus.col1 && xlsxColumnValeus.col1 == 'Qform' && xlsxColumnValeus.col2 !== undefined) {\n        questionValue += imageAndMmlgenerate(0, xlsxColumnValeus.col2);\n      } else if (xlsxColumnValeus.col1 && xlsxColumnValeus.col1 == 'Qimage' && xlsxColumnValeus.col2 !== undefined) {\n        questionValue += imageAndMmlgenerate(1, xlsxColumnValeus.col2);\n      } else if (xlsxColumnValeus.col1 && xlsxColumnValeus.col1 == 'Explanation' && xlsxColumnValeus.col2 !== undefined) {\n        commonFeedValue += imageAndMmlgenerate(xlsxColumnValeus.col1, xlsxColumnValeus.col2);\n      } else if (xlsxColumnValeus.col1 && xlsxColumnValeus.col1 == 'Eimage' && xlsxColumnValeus.col2 !== undefined) {\n        commonFeedValue += imageAndMmlgenerate(1, xlsxColumnValeus.col2);\n      } else if (xlsxColumnValeus.col1 && xlsxColumnValeus.col1 == 'Eform' && xlsxColumnValeus.col2 !== undefined) {\n        commonFeedValue += imageAndMmlgenerate(0, xlsxColumnValeus.col2);\n      } else if (xlsxColumnValeus.col1 && xlsxColumnValeus.col1 == 'Solution' && xlsxColumnValeus.col2 !== undefined) {\n        questionPropertiesValue = questionProperties(xlsxColumnValeus.col2);\n      } else if (xlsxColumnValeus.col1 && xlsxColumnValeus.col1 == 'Hints' && xlsxColumnValeus.col2 !== undefined) {\n        questionHintValue = generateHints(xlsxColumnValeus.col2);\n      } else if (xlsxColumnValeus.col1 && xlsxColumnValeus.col1.match('Random Variables') && xlsxColumnValeus.col2 !== undefined) {\n        randomVariables += generateRandomVariable(xlsxColumnValeus.col2, xlsxColumnValeus.col3);\n      } else if (xlsxColumnValeus.col1 && /<answer.*\\d>$/ig.test(xlsxColumnValeus.col1) && xlsxColumnValeus.col2 !== undefined && xlsxColumnValeus.col3 !== undefined) {\n        listAnswers += generateAnswerTyps(xlsxColumnValeus.col2, xlsxColumnValeus.col3, xlsxColumnValeus.col4);\n      } // console.log(arrEle)\n\n    }\n  } catch (err) {\n    _didIteratorError2 = true;\n    _iteratorError2 = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n        _iterator2[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError2) {\n        throw _iteratorError2;\n      }\n    }\n  }\n\n  categoriesXML = \"<categories>\".concat(categoriesXML, \"</categories>\");\n\n  if (randomVariables !== '') {\n    randomVariables = \"<randomVariables>\".concat(randomVariables, \"</randomVariables>\");\n  }\n\n  if (questionHintValue !== '') {\n    questionHintValue = \"<hints>\".concat(questionHintValue, \"</hints>\");\n  }\n\n  if (listAnswers !== '') {\n    listAnswers = \"<answers>\".concat(listAnswers, \"</answers>\");\n  }\n\n  return rootXML(categoriesXML, questionValue, commonFeedValue, questionMeta, questionPropertiesValue, questionHintValue, randomVariables, listAnswers);\n}\n\nvar _default = function _default(router) {\n  router.post('/upload-xlsx', function (req, res) {\n    new formidable__WEBPACK_IMPORTED_MODULE_0___default.a.IncomingForm().parse(req).on('file', function (name, file) {\n      var tempPptFileName = uuid_v4__WEBPACK_IMPORTED_MODULE_1___default()();\n      var xml = '';\n      var workbook = xlsx__WEBPACK_IMPORTED_MODULE_2___default.a.readFile(\"\".concat(file.path));\n      var sheet_name_list = workbook.SheetNames;\n      var _iteratorNormalCompletion3 = true;\n      var _didIteratorError3 = false;\n      var _iteratorError3 = undefined;\n\n      try {\n        for (var _iterator3 = sheet_name_list[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n          var x = _step3.value;\n          xml += uploadXLSX(workbook, x);\n        }\n      } catch (err) {\n        _didIteratorError3 = true;\n        _iteratorError3 = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion3 && _iterator3[\"return\"] != null) {\n            _iterator3[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError3) {\n            throw _iteratorError3;\n          }\n        }\n      }\n\n      res.send({\n        xml: xml\n      });\n    }).on('end', function () {\n      res.end();\n    });\n  });\n  router.get('/generate-xml', function (req, res) {\n    res.send({\n      key: 'generate-xml'\n    });\n  });\n  return router;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(counterHint, \"counterHint\", \"E:\\\\Himanshu\\\\EZT1\\\\server\\\\controllers\\\\index.js\");\n  reactHotLoader.register(reverse, \"reverse\", \"E:\\\\Himanshu\\\\EZT1\\\\server\\\\controllers\\\\index.js\");\n  reactHotLoader.register(internalCategories, \"internalCategories\", \"E:\\\\Himanshu\\\\EZT1\\\\server\\\\controllers\\\\index.js\");\n  reactHotLoader.register(generateHints, \"generateHints\", \"E:\\\\Himanshu\\\\EZT1\\\\server\\\\controllers\\\\index.js\");\n  reactHotLoader.register(questionProperties, \"questionProperties\", \"E:\\\\Himanshu\\\\EZT1\\\\server\\\\controllers\\\\index.js\");\n  reactHotLoader.register(rootXML, \"rootXML\", \"E:\\\\Himanshu\\\\EZT1\\\\server\\\\controllers\\\\index.js\");\n  reactHotLoader.register(imageAndMmlCover, \"imageAndMmlCover\", \"E:\\\\Himanshu\\\\EZT1\\\\server\\\\controllers\\\\index.js\");\n  reactHotLoader.register(splitImageAndMml, \"splitImageAndMml\", \"E:\\\\Himanshu\\\\EZT1\\\\server\\\\controllers\\\\index.js\");\n  reactHotLoader.register(imageAndMmlgenerate, \"imageAndMmlgenerate\", \"E:\\\\Himanshu\\\\EZT1\\\\server\\\\controllers\\\\index.js\");\n  reactHotLoader.register(generateRandomVariable, \"generateRandomVariable\", \"E:\\\\Himanshu\\\\EZT1\\\\server\\\\controllers\\\\index.js\");\n  reactHotLoader.register(generateAnswerTyps, \"generateAnswerTyps\", \"E:\\\\Himanshu\\\\EZT1\\\\server\\\\controllers\\\\index.js\");\n  reactHotLoader.register(uploadXLSX, \"uploadXLSX\", \"E:\\\\Himanshu\\\\EZT1\\\\server\\\\controllers\\\\index.js\");\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Himanshu\\\\EZT1\\\\server\\\\controllers\\\\index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/index.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config */ \"./config/index.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nvar compile = function compile(app) {\n  if (_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env === \"development\") {\n    var compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a);\n    var middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a.output.publicPath\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\nvar _default = {\n  compile: compile\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"E:\\\\Himanshu\\\\EZT1\\\\server\\\\devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Himanshu\\\\EZT1\\\\server\\\\devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../config */ \"./config/index.js\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _controllers___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/ */ \"./server/controllers/index.js\");\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../template.js */ \"./template.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar CURRENT_WORKING_DIR = process.cwd();\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.urlencoded({\n  limit: '10mb',\n  extended: true\n}));\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_3___default.a.json({\n  limit: '10mb',\n  extended: true\n}));\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'public'))); //comment out before building for production\n\n //comment out before building for production\n\n_devBundle__WEBPACK_IMPORTED_MODULE_6__[\"default\"].compile(app);\napp.use('/api', Object(_controllers___WEBPACK_IMPORTED_MODULE_4__[\"default\"])(express__WEBPACK_IMPORTED_MODULE_0___default.a.Router()));\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'dist')));\napp.get('*', function (req, res) {\n  res.send(Object(_template_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\n});\napp.listen(_config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].port, function (err) {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s.', _config__WEBPACK_IMPORTED_MODULE_2__[\"default\"].port);\n});\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"E:\\\\Himanshu\\\\EZT1\\\\server\\\\server.js\");\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"E:\\\\Himanshu\\\\EZT1\\\\server\\\\server.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar _default = function _default() {\n  return \"<!doctype html>\\n      <html lang=\\\"en\\\">\\n        <head>\\n            <title></title>\\n            <meta charset=\\\"UTF-8\\\">\\n            <meta http-equiv=\\\"Content-type\\\" content=\\\"text/html; charset=UTF-8\\\">\\n            <meta name=\\\"viewport\\\"  content=\\\"width=device-width initial-scale=1\\\"/>\\n            <link rel=\\\"stylesheet\\\" href=\\\"https://s3.amazonaws.com/assessts-book/css/impactwebfont.css\\\">\\n            <link href=\\\"https://fonts.googleapis.com/css?family=Roboto\\\" rel=\\\"stylesheet\\\">\\n            <link href=\\\"https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap\\\" rel=\\\"stylesheet\\\">\\n            <link rel=\\\"stylesheet\\\" href=\\\"/css/web-icons.css\\\">\\n        </head>\\n        <body>\\n          <div id=\\\"root\\\"></div>\\n          <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\"></script>\\n          <script type=\\\"text/javascript\\\" src=\\\"/js/vkbeauty.js\\\"></script>\\n        </body>\\n      </html>\";\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"E:\\\\Himanshu\\\\EZT1\\\\template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).enterModule;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar CURRENT_WORKING_DIR = process.cwd();\nvar config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'eval-source-map',\n  entry: ['babel-polyfill', 'react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader'],\n      resolve: {\n        extensions: [\".js\", \".jsx\"]\n      }\n    }, {\n      test: /.css$/,\n      use: [{\n        loader: 'style-loader'\n      }, {\n        loader: 'css-loader'\n      }]\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).default;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"E:\\\\Himanshu\\\\EZT1\\\\webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"E:\\\\Himanshu\\\\EZT1\\\\webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\")).leaveModule;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!***********************************************!*\
  !*** multi babel-polyfill ./server/server.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"babel-polyfill\");\nmodule.exports = __webpack_require__(/*! E:\\Himanshu\\EZT1\\server\\server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_./server/server.js?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"formidable\");\n\n//# sourceURL=webpack:///external_%22formidable%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader%22?");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uuid/v4\");\n\n//# sourceURL=webpack:///external_%22uuid/v4%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ }),

/***/ "xlsx":
/*!***********************!*\
  !*** external "xlsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"xlsx\");\n\n//# sourceURL=webpack:///external_%22xlsx%22?");

/***/ })

/******/ });