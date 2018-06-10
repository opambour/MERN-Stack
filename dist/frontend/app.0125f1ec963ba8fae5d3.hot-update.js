webpackHotUpdate("frontend/app",{

/***/ "./src/frontend/components/ahref.component.jsx":
/*!*****************************************************!*\
  !*** ./src/frontend/components/ahref.component.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ahref = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var Ahref =
/*#__PURE__*/
function (_Component) {
  function Ahref(props) {
    (0, _classCallCheck2.default)(this, Ahref);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Ahref).call(this, props));
  }

  (0, _createClass2.default)(Ahref, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("a", {
        href: this.props.hrefLink,
        className: this.props.hrefClassName,
        "data-toggle": this.props.hrefTooltipDataToggle,
        "data-placement": this.props.hrefDataPlacement,
        title: this.props.hrefTitle
      }, this.props.hrefName);
    }
  }]);
  (0, _inherits2.default)(Ahref, _Component);
  return Ahref;
}(_react.Component);

exports.Ahref = Ahref;
Ahref.propTypes = {
  hrefLink: _propTypes.default.string,
  hrefClassName: _propTypes.default.string,
  hrefTooltipDataToggle: _propTypes.default.string,
  hrefDataPlacement: _propTypes.default.string,
  hrefTitle: _propTypes.default.string,
  hrefName: _propTypes.default.string
};

/***/ })

})
//# sourceMappingURL=app.0125f1ec963ba8fae5d3.hot-update.js.map