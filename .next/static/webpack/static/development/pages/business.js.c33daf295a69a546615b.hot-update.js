webpackHotUpdate("static\\development\\pages\\business.js",{

/***/ "./pages/business.js":
/*!***************************!*\
  !*** ./pages/business.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js?d225");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js?b0b4");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js?308d");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js?6bb5");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js?013f");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js?4e2b");
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







var _jsxFileName = "D:\\Buzzpe\\pages\\business.js";







var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componentDidMount", function () {
      _this.businessDetails();

      console.log('loginSuccess :', _this.props.url.query.path);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "businessDetails", function () {
      if (_this.props.url.query.path !== '') {
        var data = {
          "businessId": _this.props.url.query.path,
          "comment": "Hello test",
          "rating": 3
        };
        axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(_config__WEBPACK_IMPORTED_MODULE_10___default.a.url + '/api/business/singlelist', data, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function (res) {
          console.log('categories of 2 :', res.data.data);
          var businessId = {
            "businessId": "5d11ec2a9e0d020d6f3a95af" // // var product=[],service=[];
            // let product='',service='';
            // axios.post(Config.url+'/api/catalog/list-short',businessId,{headers: {
            //   'Content-Type': 'application/json'
            // }}).then(res =>{
            //   console.log('api is called');
            //  console.log('businessId :',res.data.productData);
            //  console.log('businessId :',res.data.serviceData);
            // //  product.push(res.data.productData);
            // //  service.push(res.data.serviceData);
            // product=res.data.productData.map((value,key)=>{
            //   console.log('description s :',value.description);
            //   //productDesc.push(value.description);
            //   return {
            //     description:value.description
            //   }
            // });
            // service=res.data.serviceData.map((value,key)=>{
            //   console.log('description s :',value.description);
            //   //serviceDesc.push(value.description);
            //   return{
            //     description:value.description
            //   }
            // });
            // }).catch(error => {
            //   // return error;
            //   //this.setState({businessDetails:'Data not found'});
            // });

          };
          console.log('pro desc :', product);
          var businessDetails = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "product-info row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "col-lg-12 col-md-12 col-xs-12",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "product-img",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
            className: "img-fluid",
            src: "http://blog.brac.net/wp-content/uploads/2016/09/common-banner-1200x480.jpg",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "col-lg-8 col-md-12 col-xs-12",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "details-box",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "ads-details-info",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            },
            __self: this
          }, res.data.data.businessName), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "details-meta",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
            href: "#",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "lni-alarm-clock",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          }), " Product ")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
            href: "#",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "lni-map-marker",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }), " Services")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
            href: "#",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "lni-eye",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          }), " 299 View"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            className: "mb-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            },
            __self: this
          }, res.data.data.businessDescription), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
            className: "title-small mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88
            },
            __self: this
          }, "Specification:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
            className: "list-specification",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "lni-check-mark-circle",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          }), " 256GB PCIe flash storage"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "lni-check-mark-circle",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            },
            __self: this
          }), " 2.7 GHz dual-core Intel Core i5"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "lni-check-mark-circle",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92
            },
            __self: this
          }), " Turbo Boost up to 3.1GHz"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "lni-check-mark-circle",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 93
            },
            __self: this
          }), " Intel Iris Graphics 6100"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "lni-check-mark-circle",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 94
            },
            __self: this
          }), " 8GB memory"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "lni-check-mark-circle",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95
            },
            __self: this
          }), " 10 hour battery life"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "lni-check-mark-circle",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 96
            },
            __self: this
          }), " 13.3\" Retina Display"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "lni-check-mark-circle",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 97
            },
            __self: this
          }), " 1 Year international warranty")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            className: "mb-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          }, "Up for sale we have a vintage Raleigh Sport Men\u2019s Bicycle. This bike does have some general wear and surface corrosion on some of the parts but is overall in good shape. It has been checked out and does work. Brakes and gears work. Seat is fully intact. Frame and fenders are in nice shape with minimal wear. A few minor dents in the fenders but most of the paint is intact.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 104
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "col-md-12 text-center ",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 105
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
            className: "nav-justified ",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "nav nav-tabs ",
            id: "nav-tab",
            role: "tablist",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
            className: "nav-item nav-link active",
            id: "pop1-tab",
            "data-toggle": "tab",
            href: "#pop1",
            role: "tab",
            "aria-controls": "pop1",
            "aria-selected": "true",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 108
            },
            __self: this
          }, "Product"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
            className: "nav-item nav-link",
            id: "pop2-tab",
            "data-toggle": "tab",
            href: "#pop2",
            role: "tab",
            "aria-controls": "pop2",
            "aria-selected": "false",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            },
            __self: this
          }, "Services"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "tab-content",
            id: "nav-tabContent",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 113
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "tab-pane fade show active",
            id: "pop1",
            role: "tabpanel",
            "aria-labelledby": "pop1-tab",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "pt-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 115
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 118
            },
            __self: this
          }, productDesc)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "tab-pane fade",
            id: "pop2",
            role: "tabpanel",
            "aria-labelledby": "pop2-tab",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 120
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "pt-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 124
            },
            __self: this
          }, serviceDesc))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "tag-bottom",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 131
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "float-left",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
            className: "advertisement",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 134
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "lni-folder",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            },
            __self: this
          }), " Categories:"), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
            href: "#",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            },
            __self: this
          }, "Electronics"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "lni-archive",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            },
            __self: this
          }), " Condition:"), " New")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 140
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 141
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 141
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "lni-package",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 141
            },
            __self: this
          }), " Brand:"), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
            href: "#",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 141
            },
            __self: this
          }, "Apple"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "float-right",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "share",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "social-link",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 147
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
            className: "facebook",
            "data-toggle": "tooltip",
            "data-placement": "top",
            title: "facebook",
            href: "#",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 148
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "lni-facebook-filled",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 148
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
            className: "twitter",
            "data-toggle": "tooltip",
            "data-placement": "top",
            title: "twitter",
            href: "#",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 149
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "lni-twitter-filled",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 149
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
            className: "linkedin",
            "data-toggle": "tooltip",
            "data-placement": "top",
            title: "linkedin",
            href: "#",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 150
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "lni-linkedin-fill",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 150
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
            className: "google",
            "data-toggle": "tooltip",
            "data-placement": "top",
            title: "google plus",
            href: "#",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 151
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "lni-google-plus",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 151
            },
            __self: this
          })))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "col-lg-4 col-md-6 col-xs-12 mt-5",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("aside", {
            className: "details-sidebar",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 159
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "widget",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 160
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
            className: "widget-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 161
            },
            __self: this
          }, "Ad Posted By"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "agent-inner",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "agent-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 163
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "agent-photo",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 164
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
            href: "#",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 165
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
            src: "assets/img/productinfo/agent.jpg",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 165
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "agent-details",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 167
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 168
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
            href: "#",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 168
            },
            __self: this
          }, "Tahmina Anny")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
            className: "lni-phone-handset",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 169
            },
            __self: this
          }), "(123) 123-456"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 172
            },
            __self: this
          }, res.data.data.addressLine1, res.data.data.addressLine2, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 172
            },
            __self: this
          }), res.data.data.addressCity, ",", res.data.data.addressState, ",", res.data.data.addressPincode), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
            className: "btn btn-common fullwidth mt-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            },
            __self: this
          }, "Send Enquiry"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 175
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            style: {
              color: '#333',
              fontSize: '15px'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 177
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 177
            },
            __self: this
          }, "Hours of Operation")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 178
            },
            __self: this
          }, "Today 9.00am - 11.30pm"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 179
            },
            __self: this
          }, res.data.data.workingMonday ? 'Monday' + ' ' + res.data.data.workingMonday.from + '' + ' am ' + ' - ' + res.data.data.workingMonday.to + '' + ' pm ' : 'Closed'), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 180
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 181
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 182
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 183
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 184
            },
            __self: this
          }, "Status : Open"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "mt-2",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 185
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            style: {
              color: '#333',
              fontSize: '15px'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 186
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 186
            },
            __self: this
          }, "Also Listed in")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 187
            },
            __self: this
          }, "Chemist"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 188
            },
            __self: this
          }, "Ayurvedic Medicine Shops"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 189
            },
            __self: this
          }, "Chemist Home Delivery")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "mt-2",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 191
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            style: {
              color: '#333',
              fontSize: '15px'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 192
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 192
            },
            __self: this
          }, "Modes of Payment")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 193
            },
            __self: this
          }, "Cash"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 194
            },
            __self: this
          }, "Credit Card")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "mt-2",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 196
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            style: {
              color: '#333',
              fontSize: '15px'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 197
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 197
            },
            __self: this
          }, "Year Established")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 198
            },
            __self: this
          }, "2019")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "widget",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 203
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
            className: "widget-title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 204
            },
            __self: this
          }, "More Ads From Seller"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "container",
            style: {
              marginTop: '10px'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 205
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "row",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 206
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "col-md-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 207
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "thumbnail",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 208
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
            href: "https://www.w3schools.com/w3images/lights.jpg",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 209
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
            src: "https://www.w3schools.com/w3images/lights.jpg",
            alt: "Lights",
            style: {
              width: '100%'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 210
            },
            __self: this
          })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "col-md-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 215
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "thumbnail",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 216
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
            href: "https://www.w3schools.com/w3images/lights.jpg",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 217
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
            src: "https://www.w3schools.com/w3images/lights.jpg",
            alt: "Nature",
            style: {
              width: '100%'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 218
            },
            __self: this
          })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "col-md-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 223
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "thumbnail",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 224
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
            href: "/w3images/fjords.jpg",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 225
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
            src: "https://www.w3schools.com/w3images/lights.jpg",
            alt: "Fjords",
            style: {
              width: '100%'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 226
            },
            __self: this
          }))))))))));

          _this.setState({
            businessDetails: businessDetails
          });
        }).catch(function (error) {
          // return error;
          _this.setState({
            businessDetails: 'Data not found'
          });
        });
      }
    });

    _this.state = {
      businessDetails: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      console.log('this.state.businessDetails :', this.state.businessDetails);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Components_dashBoardLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "product-info row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-12 col-md-12 col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "product-img",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "img-fluid",
        src: "http://blog.brac.net/wp-content/uploads/2016/09/common-banner-1200x480.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-8 col-md-12 col-xs-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "details-box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "ads-details-info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, res.data.data.businessName), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "details-meta",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-alarm-clock",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }), " Product ")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-map-marker",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }), " Services")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-eye",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }), " 299 View"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, res.data.data.businessDescription), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "title-small mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, "Specification:"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "list-specification",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-check-mark-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }), " 256GB PCIe flash storage"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-check-mark-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }), " 2.7 GHz dual-core Intel Core i5"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-check-mark-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }), " Turbo Boost up to 3.1GHz"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-check-mark-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }), " Intel Iris Graphics 6100"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-check-mark-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }), " 8GB memory"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-check-mark-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }), " 10 hour battery life"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-check-mark-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }), " 13.3\" Retina Display"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-check-mark-circle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }), " 1 Year international warranty")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, "Up for sale we have a vintage Raleigh Sport Men\u2019s Bicycle. This bike does have some general wear and surface corrosion on some of the parts but is overall in good shape. It has been checked out and does work. Brakes and gears work. Seat is fully intact. Frame and fenders are in nice shape with minimal wear. A few minor dents in the fenders but most of the paint is intact.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-12 text-center ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: "nav-justified ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "nav nav-tabs ",
        id: "nav-tab",
        role: "tablist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "nav-item nav-link active",
        id: "pop1-tab",
        "data-toggle": "tab",
        href: "#pop1",
        role: "tab",
        "aria-controls": "pop1",
        "aria-selected": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, "Product"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "nav-item nav-link",
        id: "pop2-tab",
        "data-toggle": "tab",
        href: "#pop2",
        role: "tab",
        "aria-controls": "pop2",
        "aria-selected": "false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, "Services"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tab-content",
        id: "nav-tabContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tab-pane fade show active",
        id: "pop1",
        role: "tabpanel",
        "aria-labelledby": "pop1-tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "pt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, productDesc)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tab-pane fade",
        id: "pop2",
        role: "tabpanel",
        "aria-labelledby": "pop2-tab",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "pt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, serviceDesc))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "tag-bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "float-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "advertisement",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-folder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }), " Categories:"), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, "Electronics"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-archive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }), " Condition:"), " New")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-package",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }), " Brand:"), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, "Apple"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "float-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "social-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "facebook",
        "data-toggle": "tooltip",
        "data-placement": "top",
        title: "facebook",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-facebook-filled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "twitter",
        "data-toggle": "tooltip",
        "data-placement": "top",
        title: "twitter",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-twitter-filled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "linkedin",
        "data-toggle": "tooltip",
        "data-placement": "top",
        title: "linkedin",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-linkedin-fill",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        className: "google",
        "data-toggle": "tooltip",
        "data-placement": "top",
        title: "google plus",
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-google-plus",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      })))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-lg-4 col-md-6 col-xs-12 mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("aside", {
        className: "details-sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "widget-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, "Ad Posted By"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "agent-inner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "agent-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "agent-photo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "assets/img/productinfo/agent.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "agent-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, "Tahmina Anny")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "lni-phone-handset",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }), "(123) 123-456"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, res.data.data.addressLine1, res.data.data.addressLine2, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }), res.data.data.addressCity, ",", res.data.data.addressState, ",", res.data.data.addressPincode), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "btn btn-common fullwidth mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }, "Send Enquiry"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        style: {
          color: '#333',
          fontSize: '15px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358
        },
        __self: this
      }, "Hours of Operation")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359
        },
        __self: this
      }, "Today 9.00am - 11.30pm"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, res.data.data.workingMonday ? 'Monday' + ' ' + res.data.data.workingMonday.from + '' + ' am ' + ' - ' + res.data.data.workingMonday.to + '' + ' pm ' : 'Closed'), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, "Status : Open"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        style: {
          color: '#333',
          fontSize: '15px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, "Also Listed in")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, "Chemist"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369
        },
        __self: this
      }, "Ayurvedic Medicine Shops"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370
        },
        __self: this
      }, "Chemist Home Delivery")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        style: {
          color: '#333',
          fontSize: '15px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, "Modes of Payment")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }, "Cash"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, "Credit Card")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "mt-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        style: {
          color: '#333',
          fontSize: '15px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }, "Year Established")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        },
        __self: this
      }, "2019")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "widget",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", {
        className: "widget-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, "More Ads From Seller"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        style: {
          marginTop: '10px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "thumbnail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://www.w3schools.com/w3images/lights.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "https://www.w3schools.com/w3images/lights.jpg",
        alt: "Lights",
        style: {
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "thumbnail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "https://www.w3schools.com/w3images/lights.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "https://www.w3schools.com/w3images/lights.jpg",
        alt: "Nature",
        style: {
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "col-md-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "thumbnail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "/w3images/fjords.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "https://www.w3schools.com/w3images/lights.jpg",
        alt: "Fjords",
        style: {
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      }))))))))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=business.js.c33daf295a69a546615b.hot-update.js.map