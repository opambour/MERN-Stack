webpackHotUpdate("frontend/app",{

/***/ "./src/frontend/components/button.component.jsx":
/*!******************************************************!*\
  !*** ./src/frontend/components/button.component.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var Button =
/*#__PURE__*/
function (_Component) {
  function Button(props) {
    (0, _classCallCheck2.default)(this, Button);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Button).call(this, props));
  }

  (0, _createClass2.default)(Button, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("button", {
        type: this.props.buttonType,
        className: this.props.buttonClasses,
        style: this.props.buttonStyle,
        "data-toggle": this.props.dataToggle,
        "data-target": this.props.dataTarget,
        "data-dismiss": this.props.dataDismiss,
        onClick: this.props.buttonClickEvent
      }, this.props.buttonName, " ", this.props.buttonIcon);
    }
  }]);
  (0, _inherits2.default)(Button, _Component);
  return Button;
}(_react.Component); // set default props


exports.Button = Button;
Button.defaultProps = {
  buttonType: 'button'
}; // set property or data types

Button.propTypes = {
  buttonType: _propTypes.default.string,
  buttonClasses: _propTypes.default.string,
  buttonStyle: _propTypes.default.string,
  dataToggle: _propTypes.default.string,
  dataTarget: _propTypes.default.string,
  dataDismiss: _propTypes.default.string,
  buttonClickEvent: _propTypes.default.func,
  buttonName: _propTypes.default.string,
  buttonIcon: _propTypes.default.string
};

/***/ })

})
//# sourceMappingURL=app.df38c88b1d67a62f50df.hot-update.js.map