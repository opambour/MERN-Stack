webpackHotUpdate("frontend/app",{

/***/ "./src/frontend/views/home/home.component.jsx":
/*!****************************************************!*\
  !*** ./src/frontend/views/home/home.component.jsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeComponent = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ahref = __webpack_require__(/*! ../../components/ahref.component */ "./src/frontend/components/ahref.component.jsx");

var HomeComponent =
/*#__PURE__*/
function (_Component) {
  function HomeComponent() {
    (0, _classCallCheck2.default)(this, HomeComponent);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(HomeComponent).apply(this, arguments));
  }

  (0, _createClass2.default)(HomeComponent, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "row"
      }, _react.default.createElement("article", {
        className: "col-md-12"
      }, " ", _react.default.createElement("div", {
        className: "jumbotron"
      }, _react.default.createElement("h1", {
        className: "display-4"
      }, "Hello, React!"), _react.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam dolore eaque ex laudantium mollitia nam obcaecati porro quos? A ad alias aut consectetur eos nulla quae saepe temporibus? A!"), _react.default.createElement("hr", {
        className: "my-4"
      }), _react.default.createElement(_ahref.Ahref, {
        hrefLink: '#',
        hrefClassName: 'btn btn-lg btn-primary',
        hrefTooltipDataToggle: 'tooltip',
        hrefDataPlacement: 'top',
        hrefTitle: 'Read more...'
      }))), _react.default.createElement("article", {
        className: "col-md-8"
      }, " ", _react.default.createElement("h1", {
        className: 'display-4'
      }, "Main Content")), _react.default.createElement("article", {
        className: "col-md-4"
      }, " ", _react.default.createElement("h1", {
        className: 'display-4'
      }, "Aside Content")));
    }
  }]);
  (0, _inherits2.default)(HomeComponent, _Component);
  return HomeComponent;
}(_react.Component);

exports.HomeComponent = HomeComponent;

/***/ })

})
//# sourceMappingURL=app.718a86d6ea739e65596a.hot-update.js.map