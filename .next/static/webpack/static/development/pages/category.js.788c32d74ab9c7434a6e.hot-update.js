webpackHotUpdate("static\\development\\pages\\category.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
false,

/***/ "./pages/category.js":
/*!***************************!*\
  !*** ./pages/category.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Components_dashBoardLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Components/dashBoardLayout */ "./Components/dashBoardLayout.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");







var _jsxFileName = "D:\\buzzpe\\pages\\category.js";






 //import Slider from "react-slick";

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componentDidMount", function () {
      axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(_config__WEBPACK_IMPORTED_MODULE_10___default.a.url + '/api/question/list', {
        category: _this.props.url.query.path
      }).then(function (response) {
        _this.toggle(); // console.log(response.data.data);


        response.data.data.forEach(function (item, index) {
          item.options.forEach(function (item1, index1) {
            item1.selected = 0;
          });
        });
        console.log('News', response.data.data);

        _this.setState({
          quesList: response.data.data
        }, function () {
          this.setState({
            que: this.state.quesList[this.state.current]
          });
        });
      }).catch(function (error) {//console.log(error);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "toggle", function () {
      _this.setState(function (prevState) {
        return {
          modal: !prevState.modal
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "nextQue", function () {
      _this.setState({
        current: _this.state.current + 1
      }, function () {
        console.log('Ye5 ', this.state.current);
        this.setState({
          que: this.state.quesList[this.state.current]
        });
      });

      if (_this.state.isSelected) {
        console.log(3);
      }
    });

    _this.state = {
      quesList: [],
      modal: false,
      que: {
        question: '',
        options: []
      },
      optList: [],
      opt: {
        options: ''
      },
      current: 0,
      checked: '',
      isSelected: false
    }; // this.toggle = this.toggle.bind(this);

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "getRadioValue",
    value: function getRadioValue(event) {
      console.log(event.target.value);
    }
  }, {
    key: "getCheckboxValue",
    value: function getCheckboxValue(event) {
      var _event$target = event.target,
          checked = _event$target.checked,
          value = _event$target.value;
      this.setState({
        isSelected: true
      });
      console.log(checked);

      if (checked) {
        this.setState({
          checked: value
        }, function () {
          console.log(this.state.checked);
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_dashBoardLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-3 col-md-12 col-xs-12 page-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("aside", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "widget_search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        role: "search",
        id: "search-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "search",
        className: "form-control",
        autoComplete: "off",
        name: "s",
        placeholder: "Search...",
        id: "search-input",
        defaultValue: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        id: "search-submit",
        className: "search-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "widget categories",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "widget-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "All Categories"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "categories-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-dinner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }), " Hotel & Travels ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "category-counter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "(5)"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-control-panel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), " Services ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "category-counter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "(8)"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }), " Pets ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "category-counter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "(2)"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-coffee-cup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), " Restaurants ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "category-counter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "(3)"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }), " Real Estate ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "category-counter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "(4)"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-pencil",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), " Jobs ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "category-counter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "(5)"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-display",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }), " Electronics ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "category-counter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "(9)"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "widget-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "Advertisement"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "add-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "img-fluid",
        src: "assets/img/img1.jpg",
        alt: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-9 col-md-12 col-xs-12 page-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "product-filter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "short-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, "Showing (1 - 12 products of 7371 products)")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "Show-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Show Items"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        className: "woocommerce-ordering",
        method: "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        name: "order",
        className: "orderby",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        selected: "selected",
        value: "menu-order",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "49 items"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "popularity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "popularity"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "popularity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "Average ration"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "popularity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "newness"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "popularity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "price")))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "adds-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tab-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "list-view",
        className: "tab-pane fade active show",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, this.state.categoriesList)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "pagination-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "pagination justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "page-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "page-link active",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, "1")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "page-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "page-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, "2")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "page-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "page-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, "3")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "page-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "page-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, "Next")))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Modal"], {
        isOpen: this.state.modal,
        toggle: this.toggle,
        className: this.props.className,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["ModalBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, this.state.que.question, this.state.que.options.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, _this2.state.que.type === 'radio' ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "optRadio",
          onChange: _this2.getRadioValue.bind(_this2)[i],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
          type: "radio",
          name: "options",
          value: item.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        })) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
          className: "checkbox",
          onChange: function onChange(event) {
            return _this2.getCheckboxValue(event)[i];
          },
          type: "checkbox",
          name: "options[]",
          value: item.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 206
          },
          __self: this
        })), item.title);
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["ModalFooter"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        color: "primary",
        onClick: this.toggle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, "Do Something"), ' ', react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Button"], {
        color: "secondary",
        onClick: this.nextQue,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, "Next"))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=category.js.788c32d74ab9c7434a6e.hot-update.js.map