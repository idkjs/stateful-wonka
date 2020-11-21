'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Wonka = require("wonka/src/Wonka.bs.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Reducer$StatefulWonka = require("stateful-wonka/src/Reducer.bs.js");

var leftButtonStyle = {
  width: "48px",
  borderRadius: "4px 0px 0px 4px"
};

var rightButtonStyle = {
  width: "48px",
  borderRadius: "0px 4px 4px 0px"
};

var containerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
};

function reducer(state, action) {
  switch (action) {
    case /* Increment */0 :
        return {
                count: state.count + 1 | 0
              };
    case /* Double */1 :
        return {
                count: (state.count << 1)
              };
    case /* Square */2 :
        return {
                count: Math.imul(state.count, state.count)
              };
    
  }
}

function Simple(Props) {
  var children = Props.children;
  React.useState(function () {
        return true;
      });
  var dispatch = Reducer$StatefulWonka.reduce(reducer, {
        count: 1
      });
  var count = Wonka.toArray(Curry._1(dispatch, Wonka.fromValue({
                TAG: /* Do */0,
                _0: /* Increment */0
              })));
  var match = React.useState(function () {
        return true;
      });
  var setShow = match[1];
  React.useEffect((function () {
          var id = setInterval((function (param) {
                  return Curry._1(setShow, (function (previousShow) {
                                return !previousShow;
                              }));
                }), 1000);
          return (function (param) {
                    clearInterval(id);
                    
                  });
        }), []);
  var style = match[0] ? ({
        opacity: "1",
        transition: "opacity 1s"
      }) : ({
        opacity: "0",
        transition: "opacity 1s"
      });
  return React.createElement("div", {
              style: containerStyle
            }, React.createElement("div", undefined, "Count: ", Belt_Array.map(count, (function (c) {
                        return String(c.count);
                      }))), React.createElement("div", undefined, "Count: ", String(1)), React.createElement("div", undefined, React.createElement("button", {
                      style: leftButtonStyle,
                      onClick: (function (_event) {
                          Wonka.toArray(Curry._1(dispatch, Wonka.fromValue({
                                        TAG: /* Do */0,
                                        _0: /* Increment */0
                                      })));
                          
                        })
                    }, "+"), React.createElement("button", {
                      style: rightButtonStyle,
                      onClick: (function (_event) {
                          Wonka.toArray(Curry._1(dispatch, Wonka.fromValue({
                                        TAG: /* Do */0,
                                        _0: /* Double */1
                                      })));
                          
                        })
                    }, "x2")), React.createElement("div", {
                  style: style
                }, children));
}

var make = Simple;

exports.leftButtonStyle = leftButtonStyle;
exports.rightButtonStyle = rightButtonStyle;
exports.containerStyle = containerStyle;
exports.reducer = reducer;
exports.make = make;
/* Wonka Not a pure module */
