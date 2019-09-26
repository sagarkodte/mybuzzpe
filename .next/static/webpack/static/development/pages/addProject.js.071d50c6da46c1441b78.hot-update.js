webpackHotUpdate("static/development/pages/addProject.js",{

/***/ "./pages/addProject.js":
/*!*****************************!*\
  !*** ./pages/addProject.js ***!
  \*****************************/
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
/* harmony import */ var react_tag_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-tag-autocomplete */ "./node_modules/react-tag-autocomplete/dist-es5/ReactTags.js");
/* harmony import */ var react_tag_autocomplete__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_tag_autocomplete__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Components_Loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Components/Loader */ "./Components/Loader.js");







var _jsxFileName = "/workspace/mybuzzpe/pages/addProject.js";













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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getAllskills", function (query) {
      console.log(query);
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(_config__WEBPACK_IMPORTED_MODULE_11___default.a.url + '/api/business/getallskills?p=' + query).then(function (res) {
        var cata = res.data.data;
        var arr = cata;
        var newResponse = arr.map(function (name, id) {
          return {
            id: id,
            name: name
          };
        });
        console.log(newResponse);

        _this.setState({
          suggestions: newResponse
        }); //this.setState({ categories: cata });
        //console.log(this.state.categories)

      }).catch(function (error) {
        return error;
      });
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getBudgetType", function (selectedOption) {
      console.log(selectedOption.value);

      _this.setState({
        SelectedbudgetType: selectedOption.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSubCategoryChange", function (selectedOption) {
      _this.setState({
        selectedSubOption: selectedOption
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "addProject", function () {
      if (_this.handleValidation()) {
        if (_this.state.selectedOption && _this.state.selectedSubOption) {
          var cat = _this.state.selectedOption;
          var subCat = _this.state.selectedSubOption;
          var projectCategory = [];
          subCat.push(cat);
          subCat.forEach(function (item) {
            projectCategory.push(item.value);
          });

          _this.setState({
            projectCategory: projectCategory
          });
        }

        _Services_businessService__WEBPACK_IMPORTED_MODULE_14___default.a.addProject({
          'description': _this.state.projectDescription,
          'category': _this.state.projectCategory.toString(),
          'services': _this.state.services.toString(),
          'budget': _this.state.budgetAmt,
          'budgetType': _this.state.SelectedbudgetType,
          'note': _this.state.note
        }, {
          headers: {
            'x-access-token': _this.state.token
          }
        }).then(function (res) {
          console.log('res3', res.data);

          _this.setState({
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
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSubmit", function (e) {
      e.preventDefault();

      _this.uploadFile(_this.state.file);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onChange", function (e) {
      _this.setState({
        file: e.target.files[0]
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "uploadFile", function (file) {
      var formData = new FormData();
      formData.append('sampleFile', file);
      formData.append('projectId', _this.state.projectID);
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(_config__WEBPACK_IMPORTED_MODULE_11___default.a.url + '/api/project/uploadfile', formData, {
        headers: {
          'content-type': 'multipart/form-data',
          'x-access-token': _this.state.token
        }
      }).then(function (res) {
        console.log(res);
        Object(react_toastify__WEBPACK_IMPORTED_MODULE_16__["toast"])("Project Added Successfully.!", {
          onClose: function onClose() {
            return next_router__WEBPACK_IMPORTED_MODULE_17___default.a.push({
              pathname: '/project-list' //state: { detail: path }

            });
          }
        });
      }).catch(function (error) {// return error;
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "scrollToTop", function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    _this.state = (_this$state = {
      token: '',
      businessName: '',
      note: '',
      addressLine1: '',
      addressCity: '',
      addressState: '',
      addressPincode: '',
      categoryType: 'Select Category Type',
      category: 'Select Category',
      subCategory: 'Select Sub Category',
      budgetAmt: '',
      businessTags: '',
      categoryList: '',
      subCategoryList: '',
      subCategoryArray: [],
      errors: {},
      fields: {},
      success: '',
      error: '',
      // new vars
      categoryArray: [],
      selectedOption: null
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this$state, "subCategoryArray", []), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this$state, "selectedSubOption", null), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this$state, "projectCategory", []), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this$state, "tags", []), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this$state, "suggestions", []), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this$state, "budgetType", [{
      value: 'Monthly',
      label: 'Monthly'
    }, {
      value: 'Hourly',
      label: 'Hourly'
    }]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this$state, "SelectedbudgetType", ''), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this$state, "services", ''), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this$state, "file", null), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this$state, "showUploadFile", false), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_this$state, "projectID", ''), _this$state);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(_default, [{
    key: "handleDelete",
    value: function handleDelete(i) {
      var tags = this.state.tags.slice(0);
      tags.splice(i, 1);
      this.setState({
        tags: tags
      }, function () {
        var _this3 = this;

        var array = [];
        this.state.tags.map(function (item, i) {
          array.push(item.name);
          array.join(',');
          console.log(array);

          _this3.setState({
            services: array
          });
        });
      });
    }
  }, {
    key: "handleAddition",
    value: function handleAddition(tag) {
      var tags = [].concat(this.state.tags, tag);
      this.setState({
        tags: tags
      }, function () {
        var _this4 = this;

        var array = [];
        this.state.tags.map(function (item, i) {
          array.push(item.name);
          array.join(',');
          console.log(array);

          _this4.setState({
            services: array
          });
        });
      });
    }
  }, {
    key: "handleValidation",
    value: function handleValidation() {
      var fields = this.state.fields;
      var errors = {};
      var formIsValid = true; //Name

      if (!fields["projectDescription"]) {
        formIsValid = false;
        errors["projectDescription"] = "Cannot be empty";
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_twoColumnLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_16__["ToastContainer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "page-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "inner-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "dashboard-box d-sm-flex align-items-center justify-content-between ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "dashbord-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, "Add new project")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        ref: function ref(el) {
          _this5.uploadDiv = el;
        },
        class: "dashboard-wrapper",
        id: "business-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }), this.state.showUploadFile ? '' : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-12 col-sm-12 col-sx-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, "Project Description"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("textarea", {
        className: "form-control",
        placeholder: "",
        name: "projectDescription",
        value: this.state.fields["projectDescription"],
        onChange: this.handleValidation.bind(this, 'projectDescription'),
        rows: 3,
        "data-error": "Write your message",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        style: {
          color: "red"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, this.state.errors["projectDescription"])), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, "Select Category:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onChange: this.handleCategoryChange,
        options: this.state.categoryArray,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, "Select Sub Category:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_8__["default"], {
        value: this.state.selectedSubOption,
        isMulti: true,
        onChange: function onChange() {
          return _this5.handleSubCategoryChange.apply(_this5, arguments);
        },
        options: this.state.subCategoryArray,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, "Add Skills *"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_tag_autocomplete__WEBPACK_IMPORTED_MODULE_15___default.a, {
        handleInputChange: this.getAllskills,
        minQueryLength: 1,
        tags: this.state.tags,
        suggestions: this.state.suggestions,
        handleDelete: this.handleDelete.bind(this),
        handleAddition: this.handleAddition.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, "Budget"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "form-control input-md",
        name: "budgetAmt",
        value: this.state.budgetAmt,
        type: "number",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, "Budget Type"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onChange: this.getBudgetType,
        options: this.state.budgetType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, "Note"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("textarea", {
        className: "form-control",
        placeholder: "",
        name: "note",
        value: this.state.note,
        onChange: this.handleChange,
        rows: 3,
        "data-error": "Write your message",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      })), this.state.success !== '' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "alert alert-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, this.state.success) : '', this.state.error ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "alert alert-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, this.state.error) : '', react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "btn btn-common",
        type: "button",
        onClick: this.addProject,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "btn btn-common",
        type: "button",
        onClick: this.onCanel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, "Cancel")), this.state.showUploadFile ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-12 col-sm-12 col-sx-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
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
      }, "Add Project Related File"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        className: "type_file",
        type: "file",
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "btn btn-common",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, "Upload File")))) : '')));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=addProject.js.071d50c6da46c1441b78.hot-update.js.map