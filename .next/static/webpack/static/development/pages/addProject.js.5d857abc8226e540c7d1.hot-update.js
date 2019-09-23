webpackHotUpdate("static\\development\\pages\\addProject.js",{

/***/ "./Services/businessService.js":
/*!*************************************!*\
  !*** ./Services/businessService.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js?288e");

var _promise = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js?795b"));

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var _config = _interopRequireDefault(__webpack_require__(/*! ../config */ "./config.js"));

module.exports.addBusiness = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new _promise.default(function (resolve, reject) {
    if (headers.length == 0) reject('Token missing');

    _axios.default.post(_config.default.url + '/api/business/add', data, headers).then(function (res) {
      resolve(res.data);
    }).catch(function (error) {
      reject(error);
    });
  });
};

module.exports.addProject = function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new _promise.default(function (resolve, reject) {
    if (headers.length == 0) reject('Token missing');

    _axios.default.post(_config.default.url + '/api/project/add', data, headers).then(function (res) {
      resolve(res.data);
    }).catch(function (error) {
      reject(error);
    });
  });
};

/***/ })

})
//# sourceMappingURL=addProject.js.5d857abc8226e540c7d1.hot-update.js.map