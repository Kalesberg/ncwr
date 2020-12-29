"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_helmet_1 = require("react-helmet");
var gatsby_1 = require("gatsby");
var components_1 = require("../../components");
require("./global.scss");
var layout_module_scss_1 = require("./layout.module.scss");
exports["default"] = (function (_a) {
    var children = _a.children, _b = _a.title, siteTitle = _b === void 0 ? '' : _b, blocks = _a.blocks;
    var _c = gatsby_1.useStaticQuery(gatsby_1.graphql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    {\n      site {\n        siteMetadata {\n          config {\n            description\n            title\n            titleDivider\n          }\n        }\n      }\n    }\n  "], ["\n    {\n      site {\n        siteMetadata {\n          config {\n            description\n            title\n            titleDivider\n          }\n        }\n      }\n    }\n  "])))).site.siteMetadata.config, description = _c.description, title = _c.title, titleDivider = _c.titleDivider;
    return (react_1["default"].createElement("div", { className: layout_module_scss_1["default"].layout },
        react_1["default"].createElement(react_helmet_1.Helmet, null,
            react_1["default"].createElement("html", { lang: 'en' }),
            react_1["default"].createElement("title", null, siteTitle + titleDivider + ("" + (title || '404: Page Not Found'))),
            react_1["default"].createElement("meta", { name: 'description', content: description })),
        react_1["default"].createElement(components_1.Header, null),
        react_1["default"].createElement(components_1.Main, { blocks: blocks }, children),
        (blocks[0].template !== 'main-find-treatment') &&
            react_1["default"].createElement(components_1.Footer, null)));
});
var templateObject_1;
