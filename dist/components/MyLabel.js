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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./styles/mylabel.css");
var MyLabel = function (_a) {
    var _b = _a.label, label = _b === void 0 ? "Custom Label" : _b, _c = _a.size, size = _c === void 0 ? "normal" : _c, _d = _a.color, color = _d === void 0 ? "primary" : _d, _e = _a.allCaps, allCaps = _e === void 0 ? false : _e, customFontColor = _a.customFontColor, backgroundColor = _a.backgroundColor;
    return ((0, jsx_runtime_1.jsx)("span", __assign({ className: "".concat(size, " ").concat(color && "text-" + color, " ").concat(allCaps ? "CAP" : ""), style: {
            color: customFontColor,
            backgroundColor: backgroundColor
        } }, { children: label })));
};
exports.MyLabel = MyLabel;
