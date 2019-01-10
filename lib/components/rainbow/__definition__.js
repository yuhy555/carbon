"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./"));

var _definition = _interopRequireDefault(require("./../../../demo/utils/definition"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var definition = new _definition.default('rainbow', _.default, {
  description: "Simple information visualised in a chart.",
  designerNotes: "\n* Helps the user visualise some data in a chart - it works best to show a relative proportion, a little like how you might use a pie chart.\n* Specify the source data, and the colours to use. Check out the Carbon Colours in the Style section.\n ",
  hiddenProps: ['config', 'data'],
  js: "function getData() {\n  return Immutable.List([{\n    y: 30,\n    name: 'First Bit',\n    label: 'label for first bit',\n    tooltip: 'More info about first bit!',\n    color: '#50B848'\n  }, {\n    y: 70,\n    name: 'Second Bit',\n    label: 'label for second bit',\n    tooltip: 'More info about second bit!',\n    color: '#ED1C5F'\n  }]);\n}",
  propTypes: {
    config: "Object",
    data: "Object",
    title: "String"
  },
  propDescriptions: {
    config: "Supply a custom config object to the Highcharts.",
    data: "Supply data for the chart.",
    title: "Supply a custom title for the chart."
  },
  propValues: {
    data: "getData()"
  }
});
var _default = definition;
exports.default = _default;