'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var Simple$Demo = require("./StatefulWonkaReducer/Simple.bs.js");
var ExampleStyles$Demo = require("./ExampleStyles.bs.js");
var BlinkingGreeting$Demo = require("./BlinkingGreeting/BlinkingGreeting.bs.js");
var FetchedDogPictures$Demo = require("./FetchedDogPictures/FetchedDogPictures.bs.js");
var StatefulWonkaReducer$Demo = require("./StatefulWonkaReducer/StatefulWonkaReducer.bs.js");
var ReducerFromReactJSDocs$Demo = require("./ReducerFromReactJSDocs/ReducerFromReactJSDocs.bs.js");
var ReasonUsingJSUsingReason$Demo = require("./ReasonUsingJSUsingReason/ReasonUsingJSUsingReason.bs.js");

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

ReactDom.render(React.createElement(BlinkingGreeting$Demo.make, {
          children: "Hello!"
        }), makeContainer("Blinking Greeting"));

ReactDom.render(React.createElement(StatefulWonkaReducer$Demo.make, {}), makeContainer("StatefulWonkaReducer"));

ReactDom.render(React.createElement(Simple$Demo.make, {
          children: "Hello!"
        }), makeContainer("Wonka Simple"));

ReactDom.render(React.createElement(ReducerFromReactJSDocs$Demo.make, {}), makeContainer("Reducer From ReactJS Docs"));

ReactDom.render(React.createElement(FetchedDogPictures$Demo.make, {}), makeContainer("Fetched Dog Pictures"));

ReactDom.render(React.createElement(ReasonUsingJSUsingReason$Demo.make, {}), makeContainer("Reason Using JS Using Reason"));

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
