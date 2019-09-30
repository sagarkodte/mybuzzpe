webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Components_Categories__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Components/Categories */ "./Components/Categories.js");







var _jsxFileName = "/workspace/mybuzzpe/pages/index.js";









var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getSearchvalue", function (event) {
      _this.setState({
        Searchvalue: event.target.value
      }, function () {
        console.log(this.state.Searchvalue);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "searchResult", function () {
      next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push({
        pathname: '/search',
        search: '?path=' + _this.state.Searchvalue //state: { detail: path }

      }); // axios.post(serverUrl.url + '/api/business/search', {
      //     query: this.state.Searchvalue
      // })
      //     .then((response) => {
      //         this.setState({ allResult: response.data.data })
      //         console.log(this.state.allResult)
      //     })
      //     .catch((error) => {
      //         //console.log(error);
      //     });
    });

    _this.state = {
      categories: ''
    };
    _this.getSearchvalue = _this.getSearchvalue.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('loginSuccess :', this.props.loginSuccess);

      if (this.state.loginSuccess !== 'undefined') {
        react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"].success("Success Notification !", {
          position: react_toastify__WEBPACK_IMPORTED_MODULE_11__["toast"].POSITION.TOP_RIGHT
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      // console.log('this.state.categories :',this.state.categories);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_dashBoardLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "hero-area",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "overlay",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-12 col-lg-9 col-xs-12 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "contents",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        className: "head-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Welcome to The Global  ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "year buzc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Marketplace")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "BuzCafe is an online peer 2 peer platform to find local and nearby retail services at your doorstep and Recharge, Billing & Booking Services. ")))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        id: "categories",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-12 col-md-12 col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("form", {
        className: "form-inline my-2 my-lg-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        onChange: this.getSearchvalue,
        className: "form-control mr-sm-2",
        type: "text",
        placeholder: "Search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        onClick: this.searchResult,
        className: "btn btn-success my-2 my-sm-0",
        type: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Search")))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "mt-3 mb-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "inner-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "dashboard-wrapper mobile-recharge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "intro-title mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Book on Buzcafe"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_Categories__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        id: "about",
        className: "section-padding",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-6 col-lg-6 col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "about-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "intro-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, "BuzCafe Offerings"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "intro-desc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "Over the last decade, there has been tremendous shift in financial transactions and payment ecosystem across the globe. BuzCafe is offering convenience and ease of use in peer to peer transactions. BuzCafe offers cashless recharges, money transfers and payments convenient by peer to peer transfers through Web and Mobile application. BuzCafe is known for its exceptional money transfer service. Making any online money transfer easy and quick, BuzCafe comes with multiple features. "), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "/about",
        className: "btn btn-common btn-lg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "Read More"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-6 col-lg-6 col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "img-fluid",
        src: "http://3.17.162.108:8200/assets/img/welcome.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "works section-padding bg-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "section-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "How It Works?")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-4 col-md-4 col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "works-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "http://3.17.162.108:8200/assets/img/about/how-step-first.png",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Explore"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-4 col-md-4 col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "works-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "http://3.17.162.108:8200/assets/img/about/how-step-second.png",
        className: "img-fluid",
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
      }, "Buy "))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-4 col-md-4 col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "works-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "http://3.17.162.108:8200/assets/img/about/how-step-third.png",
        className: "img-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, " Enjoy"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", {
        className: "works-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "services section-padding ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        className: "section-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, "Key Features")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-6 col-lg-4 col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "services-item wow fadeInRight animated",
        "data-wow-delay": "0.2s",
        style: {
          visibility: 'visible',
          WebkitAnimationDelay: '0.2s',
          MozAnimationDelay: '0.2s',
          animationDelay: '0.2s'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fa fa-rocket",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "services-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "JavaScript:Void(0);",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "Modern eCash transfer app")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "Buzcafe is a point of convenience for eCash transfers between users and merchants ")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-6 col-lg-4 col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "services-item wow fadeInRight animated",
        "data-wow-delay": "0.4s",
        style: {
          visibility: 'visible',
          WebkitAnimationDelay: '0.4s',
          MozAnimationDelay: '0.4s',
          animationDelay: '0.4s'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fa fa-wallet",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "services-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "JavaScript:Void(0);",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "eCash Transfer online")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, "Users can transfer eCash through app and save time and efforts")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-6 col-lg-4 col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "services-item wow fadeInRight animated",
        "data-wow-delay": "0.6s",
        style: {
          visibility: 'visible',
          WebkitAnimationDelay: '0.6s',
          MozAnimationDelay: '0.6s',
          animationDelay: '0.6s'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fa fa-qrcode",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "services-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "JavaScript:Void(0);",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, " Scan and Pay")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, "User can scan and pay to other users and merchants")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-6 col-lg-4 col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "services-item wow fadeInRight animated",
        "data-wow-delay": "0.8s",
        style: {
          visibility: 'visible',
          WebkitAnimationDelay: '0.8s',
          MozAnimationDelay: '0.8s',
          animationDelay: '0.8s'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fa fa-file",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "services-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "JavaScript:Void(0);",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, "Track and manage expenses")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, "Users can have record of there daily and monthly expenses over app")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-6 col-lg-4 col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "services-item wow fadeInRight animated",
        "data-wow-delay": "1s",
        style: {
          visibility: 'visible',
          WebkitAnimationDelay: '1s',
          MozAnimationDelay: '1s',
          animationDelay: '1s'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fa fa-mobile",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "services-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "JavaScript:Void(0);",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, "Pay postpaid bills")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, "Users have convenience to pay bills like phone, electrcity bills etc.")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-6 col-lg-4 col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "services-item wow fadeInRight animated",
        "data-wow-delay": "1.2s",
        style: {
          visibility: 'visible',
          WebkitAnimationDelay: '1.2s',
          MozAnimationDelay: '1.2s',
          animationDelay: '1.2s'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "fa fa-credit-card",
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "services-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "JavaScript:Void(0);",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, "Pay through UPI applications")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, "The users can use integrated UPI applications to make payments "))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "counter-section section-padding",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-3 col-sm-6 work-counter-widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "counter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-users",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "counterUp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, "500"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        },
        __self: this
      }, "Users"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-3 col-sm-6 work-counter-widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "counter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-briefcase",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "counterUp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237
        },
        __self: this
      }, "200"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, "Business Listing"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-3 col-sm-6 work-counter-widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "counter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-gift",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "counterUp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, "50"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, "Offers"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-3 col-sm-6 work-counter-widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "counter",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-map",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "counterUp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, "320"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, "Buzcafe ")))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); // export default Home;




/***/ })

})
//# sourceMappingURL=index.js.b9b8b15b4600572e5eef.hot-update.js.map