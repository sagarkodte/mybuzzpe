webpackHotUpdate("static\\development\\pages\\addProject.js",{

/***/ "./pages/addProject.js":
/*!*****************************!*\
  !*** ./pages/addProject.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js?967e");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js?3b8d");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js?d225");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js?b0b4");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js?308d");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js?6bb5");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js?013f");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js?4e2b");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var _Components_twoColumnLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Components/twoColumnLayout */ "./Components/twoColumnLayout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Services_categoryService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Services/categoryService */ "./Services/categoryService.js");
/* harmony import */ var _Services_categoryService__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_Services_categoryService__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Services_businessService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Services/businessService */ "./Services/businessService.js");
/* harmony import */ var _Services_businessService__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_Services_businessService__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_tag_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-tag-autocomplete */ "./node_modules/react-tag-autocomplete/dist-es5/ReactTags.js");
/* harmony import */ var react_tag_autocomplete__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_tag_autocomplete__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_fileupload_progress__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-fileupload-progress */ "./node_modules/react-fileupload-progress/lib/index.js");
/* harmony import */ var react_fileupload_progress__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_fileupload_progress__WEBPACK_IMPORTED_MODULE_18__);









var _jsxFileName = "D:\\Buzzpe\\pages\\addProject.js";











var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(_default, _React$Component);

  function _default(props) {
    var _this$state;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(_default).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "componentDidMount", function () {
      if (localStorage.getItem('token') !== null) {
        console.log('Data Available');

        _this.setState({
          token: localStorage.getItem('token')
        }, function () {
          console.log(this.state.token);
        });
      }

      _Services_categoryService__WEBPACK_IMPORTED_MODULE_15___default.a.getMainCategories().then(function (res) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleChange", function (event) {
      _this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])({}, event.target.name, event.target.value));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getAllskills", function (query) {
      console.log(query);
      axios__WEBPACK_IMPORTED_MODULE_12___default.a.get(_config__WEBPACK_IMPORTED_MODULE_13___default.a.url + '/api/business/getallskills?p=' + query).then(function (res) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleCategoryChange", function (selectedOption) {
      _this.setState({
        selectedOption: selectedOption
      }, function () {
        var _this2 = this;

        _Services_categoryService__WEBPACK_IMPORTED_MODULE_15___default.a.getSubCategories(this.state.selectedOption.value).then(function (res) {
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "getBudgetType", function (selectedOption) {
      console.log(selectedOption.value);

      _this.setState({
        SelectedbudgetType: selectedOption.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleSubCategoryChange", function (selectedOption) {
      _this.setState({
        selectedSubOption: selectedOption
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "addBusiness", function () {
      var cat = _this.state.selectedOption;
      var subCat = _this.state.selectedSubOption;
      var projectCategory = [];
      subCat.push(cat);
      subCat.forEach(function (item) {
        projectCategory.push(item.value);
      });

      _this.setState({
        projectCategory: projectCategory
      }, function () {
        _Services_businessService__WEBPACK_IMPORTED_MODULE_16___default.a.addProject({
          'description': this.state.projectDescription,
          'category': this.state.projectCategory.toString(),
          'services': this.state.services.toString(),
          'budget': this.state.budgetAmt,
          'budgetType': this.state.SelectedbudgetType,
          'note': this.state.note
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
      success: '',
      error: '',
      // new vars
      categoryArray: [],
      selectedOption: null
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "subCategoryArray", []), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "selectedSubOption", null), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "projectCategory", []), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "tags", []), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "suggestions", []), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "budgetType", [{
      value: 'Monthly',
      label: 'Monthly'
    }, {
      value: 'Hourly',
      label: 'Hourly'
    }]), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "SelectedbudgetType", ''), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "services", ''), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(_this$state, "file", null), _this$state);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
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
    key: "onSubmit",
    value: function () {
      var _onSubmit = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var res;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _context.next = 3;
                return this.uploadFile(this.state.file);

              case 3:
                res = _context.sent;
                console.log(res.data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onSubmit(_x) {
        return _onSubmit.apply(this, arguments);
      }

      return onSubmit;
    }()
  }, {
    key: "onChange",
    value: function onChange(e) {
      this.setState({
        file: e.target.files[0]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_Components_twoColumnLayout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "page-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "inner-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "dashboard-box d-sm-flex align-items-center justify-content-between ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h2", {
        className: "dashbord-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "Add new project")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-md-12 col-sm-12 col-sx-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, "Project Description"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("textarea", {
        className: "form-control",
        placeholder: "",
        name: "projectDescription",
        value: this.state.projectDescription,
        onChange: this.handleChange,
        rows: 3,
        "data-error": "Write your message",
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("font", {
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, this.state.errors.note))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "Select Category:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onChange: this.handleCategoryChange,
        options: this.state.categoryArray,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Select Sub Category:"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        value: this.state.selectedSubOption,
        isMulti: true,
        onChange: function onChange() {
          return _this5.handleSubCategoryChange.apply(_this5, arguments);
        },
        options: this.state.subCategoryArray,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, "Add Skills *"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_tag_autocomplete__WEBPACK_IMPORTED_MODULE_17___default.a, {
        handleInputChange: this.getAllskills,
        minQueryLength: 1,
        tags: this.state.tags,
        suggestions: this.state.suggestions,
        handleDelete: this.handleDelete.bind(this),
        handleAddition: this.handleAddition.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, "Budget"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        className: "form-control input-md",
        name: "budgetAmt",
        value: this.state.budgetAmt,
        type: "text",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("font", {
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, this.state.errors.budgetAmt))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, "Budget Type"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
        onChange: this.getBudgetType,
        options: this.state.budgetType,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, "Note"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("textarea", {
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
          lineNumber: 219
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("font", {
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, this.state.errors.note))), this.state.success !== '' ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "alert alert-success",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, this.state.success) : '', this.state.error ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "alert alert-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, this.state.error) : '', react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        className: "btn btn-common",
        type: "button",
        onClick: this.addBusiness,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, "Submit"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        className: "btn btn-common",
        type: "button",
        onClick: this.onCanel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "Cancel")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "col-md-12 col-sm-12 col-sx-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "form-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("form", {
        onSubmit: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, " React File Upload Example"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("input", {
        type: "file",
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, "Upload File")), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("label", {
        className: "control-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, "Attach Project Related File"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("textarea", {
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
          lineNumber: 240
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("font", {
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, this.state.errors.note)))))));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);



/***/ })

})
//# sourceMappingURL=addProject.js.a5751ee4b57ca5435631.hot-update.js.map