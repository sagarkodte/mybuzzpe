webpackHotUpdate("static\\development\\pages\\addBusiness.js",{

/***/ "./pages/addBusiness.js":
/*!******************************!*\
  !*** ./pages/addBusiness.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js?d225");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js?b0b4");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js?308d");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js?6bb5");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js?013f");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js?4e2b");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _Components_twoColumnLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/twoColumnLayout */ "./Components/twoColumnLayout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Services_categoryService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Services/categoryService */ "./Services/categoryService.js");
/* harmony import */ var _Services_categoryService__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_Services_categoryService__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Services_businessService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Services/businessService */ "./Services/businessService.js");
/* harmony import */ var _Services_businessService__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_Services_businessService__WEBPACK_IMPORTED_MODULE_14__);







var _jsxFileName = "D:\\Buzzpe\\pages\\addBusiness.js";









var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(_default, _React$Component);

  function _default(props) {
    var _this$state;

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

      _Services_categoryService__WEBPACK_IMPORTED_MODULE_13___default.a.getMainCategories().then(function (res) {
        var a = [];
        res.data.forEach(function (item) {
          a.push({
            value: item.path,
            label: item.name
          });
        });

        _this.setState({
          categoryArray: a
        }, function () {
          console.log(this.state.categoryArray);
        });
      }).catch(function (error) {
        console.log('error 8', error);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (event) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, event.target.name, event.target.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleCategoryChange", function (selectedOption) {
      _this.setState({
        selectedOption: selectedOption
      }, function () {
        var _this2 = this;

        _Services_categoryService__WEBPACK_IMPORTED_MODULE_13___default.a.getSubCategories(this.state.selectedOption.value).then(function (res) {
          var a = [];
          res.data.forEach(function (item) {
            a.push({
              value: item.path,
              label: item.name
            });
          });

          _this2.setState({
            subCategoryArray: a
          }, function () {
            console.log(this.state.subCategoryArray);
          });
        }).catch(function (error) {
          console.log('error 8', error);
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSubCategoryChange", function (selectedOption) {
      _this.setState({
        selectedSubOption: selectedOption
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "addBusiness", function () {
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
        _Services_businessService__WEBPACK_IMPORTED_MODULE_14___default.a.addBusiness({
          'businessName': this.state.businessName,
          'businessDescription': this.state.businessDescription,
          'addressLine1': this.state.addressLine1,
          'addressCity': this.state.addressCity,
          'addressState': this.state.addressState,
          'addressPincode': this.state.addressPincode,
          'businessContactNumbers': this.state.businessContactNumbers,
          'addressArea': this.state.addressArea,
          'businessCategory': this.state.businessCategory.toString(),
          'businessTags': this.state.businessTags
        }, {
          headers: {
            'x-access-token': this.state.token
          }
        }).then(function (res) {
          console.log('res3', res);
        }).catch(function (err) {
          console.log('err3', err);
        });
      });
    });

    _this.state = (_this$state = {
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
      businessContactNumbers: '',
      businessTags: '',
      categoryList: '',
      subCategoryList: '',
      subCategoryArray: [],
      errors: {},
      success: '',
      error: '',
      // new vars
      categoryArray: [],
      selectedOption: null
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this$state, "subCategoryArray", []), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this$state, "selectedSubOption", null), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this$state, "businessCategory", []), _this$state);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_twoColumnLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "page-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "inner-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "dashboard-box d-sm-flex align-items-center justify-content-between ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "dashbord-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Add new business")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "dashboard-wrapper",
        id: "shopDetails",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-12 col-sm-12 col-sx-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "Business Name*"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control input-md",
        name: "businessName",
        value: this.state.businessName,
        type: "text",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("font", {
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, this.state.errors.businessName))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Address Line 1 *"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control input-md",
        name: "addressLine1",
        value: this.state.addressLine1,
        type: "text",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("font", {
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, this.state.errors.addressLine1))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "Address Area *"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control input-md",
        name: "addressarea",
        value: this.state.addressarea,
        type: "text",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("font", {
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, this.state.errors.addressarea))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "Address City *"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control input-md",
        name: "addressCity",
        value: this.state.addressCity,
        type: "text",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("font", {
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, this.state.errors.addressCity))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "Address State*"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control input-md",
        name: "addressState",
        value: this.state.addressState,
        type: "text",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("font", {
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, this.state.errors.addressState))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "Pincode *"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control input-md",
        name: "addressPincode",
        value: this.state.addressPincode,
        type: "text",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("font", {
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, this.state.errors.addressPincode))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "Contact Number *"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control input-md",
        name: "businessContactNumbers",
        value: this.state.businessContactNumbers,
        type: "text",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("font", {
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, this.state.errors.businessContactNumbers))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Select Category:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onChange: this.handleCategoryChange,
        options: this.state.categoryArray,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "Select Sub Category:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_8__["default"], {
        value: this.state.selectedSubOption,
        isMulti: true,
        onChange: function onChange() {
          return _this3.handleSubCategoryChange.apply(_this3, arguments);
        },
        options: this.state.subCategoryArray,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "Business Tags*"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control input-md",
        name: "businessTags",
        value: this.state.businessTags,
        type: "text",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("font", {
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, this.state.errors.businessTags))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, "Business Description"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("textarea", {
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
          lineNumber: 174
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("font", {
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, this.state.errors.businessDescription))), this.state.success !== '' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "alert alert-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, this.state.success) : '', this.state.error ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "alert alert-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, this.state.error) : '', react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "btn btn-common",
        type: "button",
        onClick: this.addBusiness,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "btn btn-common",
        type: "button",
        onClick: this.onCanel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, "Cancel")))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=addBusiness.js.429b39c8f34303e0492a.hot-update.js.map