webpackHotUpdate("static/development/pages/category.js",{

/***/ "./pages/category.js":
/*!***************************!*\
  !*** ./pages/category.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Components_dashBoardLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Components/dashBoardLayout */ "./Components/dashBoardLayout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Components_Categories__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Components/Categories */ "./Components/Categories.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_17__);








var _jsxFileName = "/workspace/mybuzzpe/pages/category.js";











var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "componentDidMount", function () {
      _this.setState({
        categoriesUrl: _this.props.url.query.path
      }, function () {
        this.showQuestions();
      });

      _this.getAllresult();

      _this.categories();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "showQuestions", function (path) {
      //console.log(this.state.categoriesUrl)
      if (path) {
        _this.setState({
          categoriesUrl: path
        }, function () {
          var _this2 = this;

          axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(_config__WEBPACK_IMPORTED_MODULE_11___default.a.url + '/api/question/list', {
            category: this.state.categoriesUrl
          }).then(function (response) {
            _this2.toggle();

            _this2.setState({
              allQuestions: response.data.data
            });

            console.log(_this2.state.allQuestions);
          }).catch(function (error) {//console.log(error);
          });
        });
      } else {
        axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(_config__WEBPACK_IMPORTED_MODULE_11___default.a.url + '/api/question/list', {
          category: _this.state.categoriesUrl
        }).then(function (response) {
          _this.toggle();

          _this.setState({
            allQuestions: response.data.data
          });

          console.log(_this.state.allQuestions);
        }).catch(function (error) {//console.log(error);
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "categories", function () {
      _this.setState({
        loader: true
      });

      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get(_config__WEBPACK_IMPORTED_MODULE_11___default.a.url + '/api/category/main').then(function (res) {
        var cata = res.data.data; ////console.log(cata)

        _this.setState({
          categories: cata
        });

        _this.setState({
          loader: false
        }); //console.log(this.state.categories)

      }).catch(function (error) {
        return error;
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "subCategories", function (item) {
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(_config__WEBPACK_IMPORTED_MODULE_11___default.a.url + '/api/category/children', {
        category: item.path
      }).then(function (response) {
        _this.setState(function (prevState) {
          return {
            modal2: !prevState.modal2
          };
        });

        console.log(response.data.data);

        _this.setState({
          subCatename: response.data.data
        });

        console.log(_this.state.subCatename);
      }).catch(function (error) {//console.log(error);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "toggle", function () {
      _this.setState(function (prevState) {
        return {
          modal: !prevState.modal
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "toggle2", function () {
      _this.setState(function (prevState) {
        return {
          modal2: !prevState.modal2
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "finish", function () {
      var newA = [];

      _this.state.checkboxValue.forEach(function (index) {
        index.forEach(function (index1) {
          newA.push(index1);
        });
      });

      _this.setState({
        newA: newA
      });

      if (_this.state.checkboxValue[_this.state.current] != undefined && _this.state.checkboxValue[_this.state.current].length) {
        _this.setState({
          message: ''
        });

        _this.getAllresult();
      } else {
        _this.setState({
          message: 'Please select atleast one option.'
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "getAllresult", function () {
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(_config__WEBPACK_IMPORTED_MODULE_11___default.a.url + '/api/business/search', {
        category: _this.props.url.query.path,
        query: _this.state.newA.toString()
      }).then(function (response) {
        _this.setState({
          allResult: response.data.data
        });

        console.log(_this.state.allResult);
      }).catch(function (error) {//console.log(error);
      });
    });

    _this.state = {
      quesList: [],
      modal: false,
      modal2: false,
      current: 0,
      allQuestions: [],
      checkboxValue: [],
      message: '',
      allResult: [],
      newA: [],
      categories: [],
      categoriesUrl: ''
    };
    _this.next = _this.next.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.previous = _this.previous.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Index, [{
    key: "getRadioValue",
    value: function getRadioValue(event) {
      var _event$target = event.target,
          checked = _event$target.checked,
          value = _event$target.value;

      if (checked) {
        var a = [];
        a.push(value);
        this.state.checkboxValue[this.state.current] = a;
      }

      console.log(this.state.current, this.state.checkboxValue);
    }
  }, {
    key: "getCheckboxValue",
    value: function getCheckboxValue(event) {
      var _event$target2 = event.target,
          checked = _event$target2.checked,
          value = _event$target2.value;

      if (checked) {
        var a = this.state.checkboxValue[this.state.current] ? this.state.checkboxValue[this.state.current] : [];
        a.push(value);
        this.state.checkboxValue[this.state.current] = a;
      } else {
        var _a = this.state.checkboxValue[this.state.current];
        delete _a.splice(_a.indexOf(value), 1);
        this.state.checkboxValue[this.state.current] = _a;
      }

      console.log(this.state.current, this.state.checkboxValue);
    }
  }, {
    key: "next",
    value: function next() {
      if (this.state.checkboxValue[this.state.current] != undefined && this.state.checkboxValue[this.state.current].length) {
        this.slider.slickNext();
        this.setState({
          current: this.state.current + 1
        });
        this.setState({
          message: ''
        });
      } else {
        this.setState({
          message: 'Please select atleast one option.'
        });
      }
    }
  }, {
    key: "previous",
    value: function previous() {
      this.slider.slickPrev();
      this.setState({
        current: this.state.current - 1
      });
      this.setState({
        message: ''
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Components_dashBoardLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "container page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-3 col-md-12 col-xs-12 page-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("aside", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "widget_search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        role: "search",
        id: "search-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
        type: "search",
        className: "form-control",
        autoComplete: "off",
        name: "s",
        placeholder: "Search...",
        id: "search-input",
        defaultValue: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        type: "submit",
        id: "search-submit",
        className: "search-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
        className: "lni-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "widget categories",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "widget-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, "All Categories"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        className: "categories-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, this.state.categories.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
          onClick: function onClick() {
            return _this3.subCategories(item);
          },
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          },
          __self: this
        }, item.name));
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["Modal"], {
        isOpen: this.state.modal2,
        toggle: this.toggle2,
        className: this.props.className,
        id: "homepage_cata_modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["ModalHeader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "Select Category"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["ModalBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Catalist, {
        clk: this.showQuestions,
        data: this.state.subCatename,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["ModalFooter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["Button"], {
        color: "secondary",
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233
        },
        __self: this
      }, "Cancel"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        className: "widget-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240
        },
        __self: this
      }, "Advertisement"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "add-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        className: "img-fluid",
        src: "assets/img/img1.jpg",
        alt: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "col-lg-9 col-md-12 col-xs-12 page-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "product-filter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "short-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, "Showing (1 - 12 products of 7371 products)")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "Show-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, "Show Items"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
        className: "woocommerce-ordering",
        method: "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("select", {
        name: "order",
        className: "orderby",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        selected: "selected",
        value: "menu-order",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, "49 items"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "popularity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, "popularity"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "popularity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, "Average ration"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "popularity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, "newness"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("option", {
        value: "popularity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, "price")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "adds-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "tab-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "list-view",
        className: "tab-pane fade active show",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, this.state.allResult.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "featured-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 274
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("figure", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 275
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "price-save",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 276
          },
          __self: this
        }, "10% Save"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 279
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          className: "bg-green",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
          className: "lni-heart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 280
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("i", {
          className: "lni-bookmark",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 281
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          className: "img-fluid",
          src: item.uploadedPhotos[0],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 283
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "feature-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 285
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 287
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          href: "ads-details.html",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 287
          },
          __self: this
        }, item.businessName)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "meta-tag",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 288
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 289
          },
          __self: this
        }, item.addressarea, " ", item.addressPincode)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: "dsc",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293
          },
          __self: this
        }, item.businessTags.toString()), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "listing-bottom",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          className: "contactNumber float-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 298
          },
          __self: this
        }, item.businessContactNumbers), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_13___default.a, {
          href: 'business?path=' + item._id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
          className: "btn btn-common float-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299
          },
          __self: this
        }, "View Details")))));
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "pagination-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
        className: "pagination justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "page-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "page-link active",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, "1")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "page-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "page-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, "2")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "page-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "page-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, "3")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        className: "page-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("a", {
        className: "page-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, "Next")))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["Modal"], {
        isOpen: this.state.modal,
        toggle: this.toggle,
        id: "search_result_question_modal",
        className: this.props.className,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["ModalBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_17___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        swipe: false,
        arrows: false,
        ref: function ref(c) {
          return _this3.slider = c;
        }
      }, settings, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }), this.state.allQuestions.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 334
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h5", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 335
          },
          __self: this
        }, item.question), item.options.map(function (opt, i) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
            htmlfor: opt.title,
            className: "search_result_questions",
            key: i,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 337
            },
            __self: this
          }, item.type === 'radio' ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            className: "optRadio",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 338
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
            onChange: _this3.getRadioValue.bind(_this3),
            type: "radio",
            name: "options",
            id: opt.title,
            value: opt.title,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 338
            },
            __self: this
          })) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 338
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
            className: "checkbox",
            onChange: function onChange(event) {
              return _this3.getCheckboxValue(event);
            },
            type: "checkbox",
            name: "options[]",
            id: opt.title,
            value: opt.title,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 338
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h6", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 338
            },
            __self: this
          }, opt.title));
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["ModalFooter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }, this.state.message), this.state.current > 0 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["Button"], {
        color: "primary",
        onClick: this.previous,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347
        },
        __self: this
      }, "Previous") : '', this.state.current < this.state.allQuestions.length - 1 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["Button"], {
        color: "secondary",
        onClick: this.next,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }, "Next") : '', this.state.current == this.state.allQuestions.length - 1 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["Button"], {
        color: "secondary",
        onClick: function onClick() {
          _this3.finish();

          _this3.toggle();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, "Finish") : '')));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



function Catalist(props) {
  console.log(props);
  var data = props.data;
  var clk = props.clk;

  if (data) {
    var listItems = data.map(function (singlecat, index) {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("li", {
        onClick: function onClick() {
          return clk(singlecat.path);
        },
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, singlecat.name);
    });
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366
      },
      __self: this
    }, listItems);
  } else {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370
      },
      __self: this
    }, "hello");
  }
}

/***/ })

})
//# sourceMappingURL=category.js.2879e8359a880549b310.hot-update.js.map