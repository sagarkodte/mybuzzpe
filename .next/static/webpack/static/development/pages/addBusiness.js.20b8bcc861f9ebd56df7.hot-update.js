webpackHotUpdate("static/development/pages/addBusiness.js",{

/***/ "./pages/addBusiness.js":
/*!******************************!*\
  !*** ./pages/addBusiness.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/entries */ "./node_modules/@babel/runtime-corejs2/core-js/object/entries.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _Components_twoColumnLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Components/twoColumnLayout */ "./Components/twoColumnLayout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Services_categoryService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Services/categoryService */ "./Services/categoryService.js");
/* harmony import */ var _Services_categoryService__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_Services_categoryService__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Services_businessService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Services/businessService */ "./Services/businessService.js");
/* harmony import */ var _Services_businessService__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_Services_businessService__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Components_Loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Components/Loader */ "./Components/Loader.js");








var _jsxFileName = "/workspace/mybuzzpe/pages/addBusiness.js";












var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(_default, _React$Component);

  function _default(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(_default).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "componentDidMount", function () {
      if (localStorage.getItem('token') !== null) {
        console.log('Data Available');

        _this.setState({
          token: localStorage.getItem('token')
        }, function () {
          console.log(this.state.token);
        });
      }

      _Services_categoryService__WEBPACK_IMPORTED_MODULE_14___default.a.getMainCategories().then(function (res) {
        var a = [];
        res.data.forEach(function (item) {
          a.push({
            value: item.path,
            label: item.name
          });
        });

        _this.setState({
          categoryArray: a
        });
      }).catch(function (error) {
        console.log('error 8', error);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleChange", function (event) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, event.target.name, event.target.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleCategoryChange", function (selectedOption) {
      // console.log(selectedOption);
      _this.setState({
        selectedOption: selectedOption
      }, function () {
        var _this2 = this;

        _Services_categoryService__WEBPACK_IMPORTED_MODULE_14___default.a.getSubCategories(this.state.selectedOption.value).then(function (res) {
          var a = [];
          res.data.forEach(function (item) {
            a.push({
              value: item.path,
              label: item.name
            });
          });

          _this2.setState({
            subCategoryArray: a
          });
        }).catch(function (error) {
          console.log('error 8', error);
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleSubCategoryChange", function (selectedOption) {
      _this.setState({
        selectedSubOption: selectedOption
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleValidation", function () {
      var errors = {};
      if (!_this.state.businessName) errors.businessName = 'This field is required';
      if (!_this.state.addressLine1) errors.addressLine1 = 'This field is required';
      if (!_this.state.addressArea) errors.addressArea = 'This field is required';
      if (!_this.state.addressCity) errors.addressCity = 'This field is required';
      if (!_this.state.addressState) errors.addressState = 'This field is required';
      if (!_this.state.businessContactNumbers) errors.businessContactNumbers = 'This field is required';
      if (!_this.state.selectedOption) errors.selectedOption = 'This field is required';
      if (!_this.state.selectedSubOption) errors.selectedSubOption = 'This field is required';
      if (!_this.state.businessTags) errors.businessTags = 'This field is required';
      if (!_this.state.businessDescription) errors.businessDescription = 'This field is required';

      if (_babel_runtime_corejs2_core_js_object_entries__WEBPACK_IMPORTED_MODULE_0___default()(errors).length > 0) {
        _this.setState({
          errors: errors
        });

        return false;
      } else {
        return true;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "addBusiness", function () {
      if (_this.handleValidation()) {
        var cat = _this.state.selectedOption;
        var subCat = _this.state.selectedSubOption;
        var businessCategory = [];
        subCat.push(cat);
        subCat.forEach(function (item) {
          businessCategory.push(item.value);
        });

        _this.setState({
          businessCategory: businessCategory
        }, function () {
          var _this3 = this;

          _Services_businessService__WEBPACK_IMPORTED_MODULE_15___default.a.addBusiness({
            'businessName': this.state.businessName,
            'businessDescription': this.state.businessDescription,
            'addressLine1': this.state.addressLine1,
            'addressArea': this.state.addressArea,
            'addressCity': this.state.addressCity,
            'addressState': this.state.addressState,
            'addressPincode': this.state.addressPincode,
            'businessContactNumbers': this.state.businessContactNumbers,
            'businessCategory': this.state.businessCategory.toString(),
            'businessTags': this.state.businessTags
          }, {
            headers: {
              'x-access-token': this.state.token
            }
          }).then(function (res) {
            console.log('res3', res);

            _this3.setState({
              projectID: res.data._id
            }, function () {
              console.log(this.state.projectID);
              this.setState({
                showUploadFile: true
              }, function () {
                this.scrollToTop();
              });
            });
          }).catch(function (err) {
            console.log('err3', err);
          });
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onChange", function (e) {
      _this.setState({
        file: e.target.files[0]
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "onSubmit", function (e) {
      e.preventDefault();

      _this.uploadFile(_this.state.file);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "uploadFile", function (file) {
      var formData = new FormData();
      formData.append('sampleFile', file);
      formData.append('businessId', _this.state.projectID);
      axios__WEBPACK_IMPORTED_MODULE_11___default.a.post(_config__WEBPACK_IMPORTED_MODULE_12___default.a.url + '/api/business/uploadphotos', formData, {
        headers: {
          'content-type': 'multipart/form-data',
          'x-access-token': _this.state.token
        }
      }).then(function (res) {
        console.log(res);
        Object(react_toastify__WEBPACK_IMPORTED_MODULE_16__["toast"])("Business Added Successfully.!", {
          onClose: function onClose() {
            return next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push({
              pathname: '/business-list' //state: { detail: path }

            });
          }
        });
      }).catch(function (error) {// return error;
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "scrollToTop", function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    _this.state = {
      // new vars
      categoryArray: [],
      selectedOption: null,
      subCategoryArray: [],
      selectedSubOption: null,
      businessCategory: [],
      file: null,
      showUploadFile: false,
      projectID: '',
      errors: {}
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(_default, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Components_twoColumnLayout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "page-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "inner-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "dashboard-box d-sm-flex align-items-center justify-content-between ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "dashbord-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, "Add new business")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        ref: function ref(el) {
          _this4.uploadDiv = el;
        },
        class: "dashboard-wrapper",
        id: "business-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }), this.state.showUploadFile ? '' : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-md-12 col-sm-12 col-sx-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "Business Name*"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "form-control input-md",
        name: "businessName",
        value: this.state.businessName,
        type: "text",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          color: 'red'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, this.state.errors.businessName || '')), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, "Address Line 1 *"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "form-control input-md",
        name: "addressLine1",
        value: this.state.addressLine1,
        type: "text",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          color: 'red'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, this.state.errors.addressLine1 || '')), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Address Area *"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "form-control input-md",
        name: "addressArea",
        value: this.state.addressArea,
        type: "text",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          color: 'red'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, this.state.errors.addressArea || '')), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, "Address City *"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "form-control input-md",
        name: "addressCity",
        value: this.state.addressCity,
        type: "text",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          color: 'red'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, this.state.errors.addressCity || '')), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, "Address State*"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "form-control input-md",
        name: "addressState",
        value: this.state.addressState,
        type: "text",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          color: 'red'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, this.state.errors.addressState || '')), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, "Pincode *"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "form-control input-md",
        name: "addressPincode",
        value: this.state.addressPincode,
        type: "number",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          color: 'red'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, this.state.errors.addressPincode || '')), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, "Contact Number *"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "form-control input-md",
        name: "businessContactNumbers",
        value: this.state.businessContactNumbers,
        type: "number",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          color: 'red'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, this.state.errors.businessContactNumbers || '')), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, "Select Category:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onChange: this.handleCategoryChange,
        options: this.state.categoryArray,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          color: 'red'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, this.state.errors.selectedOption || '')), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "Select Sub Category:"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: this.state.selectedSubOption,
        isMulti: true,
        onChange: function onChange() {
          return _this4.handleSubCategoryChange.apply(_this4, arguments);
        },
        options: this.state.subCategoryArray,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          color: 'red'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, this.state.errors.selectedSubOption || '')), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "Business Tags*"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "form-control input-md",
        name: "businessTags",
        value: this.state.businessTags,
        type: "text",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          color: 'red'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, this.state.errors.businessTags || '')), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, "Business Description"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("textarea", {
        className: "form-control",
        placeholder: "",
        name: "businessDescription",
        value: this.state.businessDescription,
        onChange: this.handleChange,
        rows: 3,
        "data-error": "Write your message",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          color: 'red'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, this.state.errors.businessDescription || '')), this.state.success !== '' ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "alert alert-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, this.state.success) : '', this.state.error ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "alert alert-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, this.state.error) : '', react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "btn btn-common",
        type: "button",
        onClick: this.addBusiness,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "btn btn-common",
        type: "button",
        onClick: this.hh,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, "Cancel")), this.state.showUploadFile ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-md-12 col-sm-12 col-sx-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, "Add Image"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        className: "type_file",
        type: "file",
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        className: "btn btn-common",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, "Upload File")))) : '')));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=addBusiness.js.20b8bcc861f9ebd56df7.hot-update.js.map