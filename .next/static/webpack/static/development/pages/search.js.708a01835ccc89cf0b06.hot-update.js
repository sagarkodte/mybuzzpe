webpackHotUpdate("static/development/pages/search.js",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
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
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_14__);







var _jsxFileName = "/workspace/mybuzzpe/pages/search.js";









var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componentDidMount", function () {
      _this.getAllresult();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getAllresult", function () {
      axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(_config__WEBPACK_IMPORTED_MODULE_10___default.a.url + '/api/business/search', {
        query: _this.props.url.query.path
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
      isSelected: false,
      allQuestions: [],
      showNext: false,
      currentQuestion: 0,
      showFinish: false,
      showPrev: false,
      checkboxValue1: [],
      lastValue: '',
      radioValue: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_dashBoardLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container page",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-3 col-md-12 col-xs-12 page-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("aside", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "widget_search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        role: "search",
        id: "search-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
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
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        type: "submit",
        id: "search-submit",
        className: "search-btn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "widget categories",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "widget-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "All Categories"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "categories-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-dinner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), " Hotel & Travels ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "category-counter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "(5)"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-control-panel",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), " Services ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "category-counter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "(8)"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-github",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), " Pets ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "category-counter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "(2)"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-coffee-cup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), " Restaurants ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "category-counter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "(3)"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }), " Real Estate ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "category-counter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "(4)"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-pencil",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), " Jobs ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "category-counter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "(5)"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
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
        className: "lni-display",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }), " Electronics ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "category-counter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, "(9)"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "widget-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "Advertisement"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "add-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "img-fluid",
        src: "assets/img/img1.jpg",
        alt: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-9 col-md-12 col-xs-12 page-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "product-filter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "short-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }, "Showing (1 - 12 products of 7371 products)")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "Show-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Show Items"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        className: "woocommerce-ordering",
        method: "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
        name: "order",
        className: "orderby",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        selected: "selected",
        value: "menu-order",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, "49 items"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "popularity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "popularity"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "popularity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, "Average ration"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "popularity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, "newness"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
        value: "popularity",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "price")))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "adds-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tab-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "list-view",
        className: "tab-pane fade active show",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, this.state.allResult.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "featured-box",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("figure", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "price-save",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }, "10% Save"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          className: "bg-green",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "lni-heart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
          className: "lni-bookmark",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          className: "img-fluid",
          src: item.uploadedPhotos[0],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "feature-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          href: "ads-details.html",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }, item.businessName)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "meta-tag",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }, item.addressarea, " ", item.addressPincode)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          className: "dsc",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 169
          },
          __self: this
        }, item.businessTags.toString()), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "listing-bottom",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          className: "contactNumber float-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        }, item.businessContactNumbers), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: 'drtrt',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          className: "btn btn-common float-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 175
          },
          __self: this
        }, "View Details")))));
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "pagination-bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "pagination justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "page-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "page-link active",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, "1")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "page-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "page-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      }, "2")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "page-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "page-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "3")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "page-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "page-link",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, "Next")))))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=search.js.708a01835ccc89cf0b06.hot-update.js.map