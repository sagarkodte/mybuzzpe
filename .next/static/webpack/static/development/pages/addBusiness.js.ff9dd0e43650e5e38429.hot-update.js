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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Components_twoColumnLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/twoColumnLayout */ "./Components/twoColumnLayout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "/workspace/mybuzzpe/pages/addBusiness.js";






var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, _React$Component);

  function _default(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_default).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componentDidMount", function () {
      if (localStorage.getItem('token') !== null) {
        console.log('Data Available');

        _this.setState({
          token: localStorage.getItem('token')
        }, function () {
          console.log(this.state.token);
        });
      }

      alert(3);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "addBusiness", function () {
      console.log('Business Details');
      var businessDetails = {
        "businessName": _this.state.businessName,
        "businessDescription": _this.state.businessDescription,
        "addressarea": 'govt',
        "addressLine1": _this.state.addressLine1,
        "addressCity": _this.state.addressCity,
        "addressState": _this.state.addressState,
        "addressPincode": _this.state.addressPincode,
        "businessCategory": '/i,/r',
        "businessContactNumbers": '9664067927',
        "businessTags": 'php,fdfd'
      };
      console.log('businessDetails :', businessDetails);

      if (_this.validateForm()) {
        axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(_config__WEBPACK_IMPORTED_MODULE_10___default.a.url + '/api/Business/add', businessDetails, {
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': _this.state.token
          }
        }).then(function (res) {
          console.log('res business :', res);

          _this.setState({
            success: 'Business Details Successfully Added',
            businessName: '',
            businessDescription: '',
            addressLine1: '',
            addressCity: '',
            addressState: '',
            addressPincode: '',
            businessCategory: ''
          });

          setTimeout(function () {
            _this.props.url.push('/shopDetails');

            _this.setState({
              success: ''
            });
          }, 3000);
        }).catch(function (error) {
          console.log('errr :', error); // if (error.response.data) {
          //   this.setState({ error: error.response.data.message });
          // }
          //return error;
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "category", function (categoryType) {
      console.log('category Api');
      var categoryApi = '/api/category/' + categoryType;
      console.log('api category :', _config__WEBPACK_IMPORTED_MODULE_10___default.a.url + categoryApi);
      axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(_config__WEBPACK_IMPORTED_MODULE_10___default.a.url + categoryApi, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        console.log('res of cat :', res);
        var categoryList = res.data.data.map(function (value, key) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            key: key,
            value: value.category,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            },
            __self: this
          }, value.name);
        });

        _this.setState({
          categoryList: categoryList
        });
      }).catch(function (error) {
        return error;
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "subCategory", function (subCategory) {
      var category = {
        category: subCategory
      };
      console.log('cat gory ', category);
      axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(_config__WEBPACK_IMPORTED_MODULE_10___default.a.url + '/api/category/children', category, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        console.log('res of cat :', res);
        var subCategoryList = res.data.data.map(function (value, key) {
          return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            key: key,
            value: value.category,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121
            },
            __self: this
          }, value.name);
        });

        _this.setState({
          subCategoryList: subCategoryList
        });
      }).catch(function (error) {
        return error;
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleOnChange", function (e) {
      var eventName = e.target.name;
      var options = e.target.options;
      console.log('options :', options);

      switch (eventName) {
        case 'businessName':
          console.log('handle change1 :', eventName, e.target.value);

          _this.setState({
            businessName: e.target.value,
            errors: ''
          });

          break;

        case 'addressLine1':
          console.log('handle change2 :', eventName, e.target.value);

          _this.setState({
            addressLine1: e.target.value,
            errors: ''
          });

          break;

        case 'addressCity':
          _this.setState({
            addressCity: e.target.value,
            errors: ''
          });

          console.log('handle change3 :', eventName, e.target.value);
          break;

        case 'addressState':
          _this.setState({
            addressState: e.target.value,
            errors: ''
          });

          console.log('handle change4 :', eventName, e.target.value);
          break;

        case 'addressPincode':
          _this.setState({
            addressPincode: e.target.value,
            errors: ''
          });

          console.log('handle change5 :', eventName, e.target.value);
          break;
        // case 'businessCategory':
        //   this.setState({businessCategory:e.target.value, errors:''});
        //   break;

        case 'businessDescription':
          console.log('handle change5 :', eventName, e.target.value);

          _this.setState({
            businessDescription: e.target.value,
            errors: ''
          });

          break;

        case 'categoryType':
          console.log('handle change5 :', eventName, e.target.value);

          _this.setState({
            categoryType: e.target.value
          });

          _this.category(e.target.value);

          break;

        case 'category':
          console.log('handle change5 :', eventName, e.target.value);

          _this.subCategory(e.target.value);

          _this.setState({
            category: e.target.value
          });

        case 'subCategory':
          _this.setState({
            subCategory: e.target.value
          });

          break;

        default:
          break;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onCanel", function () {
      _this.props.url.push('/shopDetails');
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "validateForm", function () {
      var errors = {};
      var formIsValid = true;

      if (!_this.state.businessName) {
        formIsValid = false;
        errors["businessName"] = "*Please enter your businessName.";
      }

      if (typeof _this.state.businessName !== "undefined") {
        if (!_this.state.businessName.match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["businessName"] = "*Please enter alphabet characters only.";
        }
      }

      if (!_this.state.addressLine1) {
        formIsValid = false;
        errors["addressLine1"] = "*Please enter your address line 1.";
      } // if (typeof this.state.addressLine1!== "undefined") {
      //   if (!this.state.lastName.match(/^[#.0-9a-zA-Z\s,-]+$/)) {
      //     formIsValid = false;
      //     errors["addressLine1"] = "*Please enter alphabet characters only.";
      //   }
      // }


      if (!_this.state.addressCity) {
        formIsValid = false;
        errors["addressCity"] = "*Please enter your city.";
      }

      if (typeof _this.state.addressCity !== "undefined") {
        if (!_this.state.addressCity.match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["addressCity"] = "*Please enter alphabet characters only.";
        }
      }

      if (!_this.state.addressState) {
        formIsValid = false;
        errors["addressState"] = "*Please enter your state.";
      }

      if (typeof _this.state.addressState !== "undefined") {
        if (!_this.state.addressState.match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["addressState"] = "*Please enter alphabet characters only.";
        }
      }

      if (!_this.state.addressPincode) {
        formIsValid = false;
        errors["addressPincode"] = "*Please enter your pincode.";
      }

      if (typeof _this.state.addressPincode !== "undefined") {
        if (!_this.state.addressPincode.match(/^\d{6}$/)) {
          formIsValid = false;
          errors["addressPincode"] = "*Please enter valid 6 digit pincode.";
        }
      } // if (!this.state.businessCategory) {
      //   formIsValid = false;
      //   errors["businessCategory"] = "*Please enter category.";
      // }


      if (!_this.state.businessDescription) {
        formIsValid = false;
        errors["businessDescription"] = "*Please enter business description.";
      }

      _this.setState({
        errors: errors
      });

      return formIsValid;
    });

    _this.state = {
      token: '',
      businessName: '',
      businessDescription: '',
      addressLine1: '',
      addressCity: '',
      addressState: '',
      addressPincode: '',
      categoryType: 'Select Category Type',
      category: 'Select Category',
      subCategory: 'Select Sub Category',
      categoryList: '',
      subCategoryList: '',
      errors: {},
      success: '',
      error: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "render",
    value: function render() {
      console.log('render this :', this.state.businessName);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_twoColumnLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "page-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "inner-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "dashboard-box d-sm-flex align-items-center justify-content-between ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "dashbord-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, "Add new business")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "dashboard-wrapper",
        id: "shopDetails",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-12 col-sm-12 col-sx-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, "Business Name*"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control input-md",
        name: "businessName",
        value: this.state.businessName,
        type: "text",
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("font", {
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, this.state.errors.businessName))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, "Address Line 1 *"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control input-md",
        name: "addressLine1",
        value: this.state.addressLine1,
        type: "text",
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("font", {
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, this.state.errors.addressLine1))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, "Address City *"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control input-md",
        name: "addressCity",
        value: this.state.addressCity,
        type: "text",
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("font", {
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, this.state.errors.addressCity))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, "Address State*"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control input-md",
        name: "addressState",
        value: this.state.addressState,
        type: "text",
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("font", {
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, this.state.errors.addressState))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, "Pincode *"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control input-md",
        name: "addressPincode",
        value: this.state.addressPincode,
        type: "text",
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("font", {
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, this.state.errors.addressPincode))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, "Select Category Type:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        name: "categoryType",
        value: this.state.categoryType,
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "select category type",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, "Select Category Type"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "service",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, "Service"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "classified",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, "Classified"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, "Select Category:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        name: "category",
        value: this.state.category,
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "select category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, "Select Category"), this.state.categoryList)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, "Select Sub Category:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        multiple: true,
        name: "subCategory",
        value: this.state.subCategory,
        onChange: this.handleOnChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "select category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, "Select Sub Category"), this.state.subCategoryList)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, "Business Description"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("textarea", {
        className: "form-control",
        placeholder: "",
        name: "businessDescription",
        value: this.state.businessDescription,
        onChange: this.handleOnChange,
        rows: 3,
        "data-error": "Write your message",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("font", {
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, this.state.errors.businessDescription))), this.state.success !== '' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "alert alert-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        },
        __self: this
      }, this.state.success) : '', this.state.error ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "alert alert-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, this.state.error) : '', react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "btn btn-common",
        type: "button",
        onClick: this.addBusiness,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "btn btn-common",
        type: "button",
        onClick: this.onCanel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, "Cancel")))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=addBusiness.js.ff9dd0e43650e5e38429.hot-update.js.map