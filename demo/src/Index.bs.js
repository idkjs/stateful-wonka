'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var Simple$Demo = require("./Simple.bs.js");
var ExampleStyles$Demo = require("./ExampleStyles.bs.js");
var StatefulWonkaReducer$Demo = require("./StatefulWonkaReducer.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = ExampleStyles$Demo.style;

function makeContainer(text) {
  var container = document.createElement("div");
  container.className = "container";
  var title = document.createElement("div");
  title.className = "containerTitle";
  title.innerText = text;
  var content = document.createElement("div");
  content.className = "containerContent";
  container.appendChild(title);
  container.appendChild(content);
  document.body.appendChild(container);
  return content;
}

ReactDom.render(React.createElement(StatefulWonkaReducer$Demo.make, {}), makeContainer("StatefulWonkaReducer"));

ReactDom.render(React.createElement(Simple$Demo.make, {}), makeContainer("Wonka Simple"));

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
