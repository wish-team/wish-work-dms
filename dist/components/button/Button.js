"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
require("./button.scss");
/**
 * Primary UI component for user interaction
 */
var Button = function (_a) {
    var primary = _a.primary, backgroundColor = _a.backgroundColor, size = _a.size, label = _a.label, props = __rest(_a, ["primary", "backgroundColor", "size", "label"]);
    var mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (react_1.default.createElement("button", __assign({ type: "button", className: ['storybook-button', "storybook-button--" + size, mode].join(' '), style: { backgroundColor: backgroundColor } }, props), label));
};
exports.Button = Button;
exports.Button.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    primary: prop_types_1.default.bool,
    /**
     * What background color to use
     */
    backgroundColor: prop_types_1.default.string,
    /**
     * How large should the button be?
     */
    size: prop_types_1.default.oneOf(['small', 'medium', 'large']),
    /**
     * Button contents
     */
    label: prop_types_1.default.string.isRequired,
    /**
     * Optional click handler
     */
    onClick: prop_types_1.default.func,
};
exports.Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
};
