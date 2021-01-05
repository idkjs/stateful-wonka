'use strict';

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

var initialState = {
  name: "Test",
  count: 0
};

function reducer(state, action) {
  if (typeof action === "number") {
    if (action !== 0) {
      return {
              name: state.name,
              count: (state.count << 1)
            };
    } else {
      return {
              name: state.name,
              count: state.count + 1 | 0
            };
    }
  } else {
    return {
            name: state.name,
            count: action._0
          };
  }
}

var dispatch = Reducer$StatefulWonka.reduce(reducer, initialState);

function asyncUpdate(param) {
  return Reducer$StatefulWonka.makeAsyncAction(Wonka.map(function (count) {
                    return /* SetCount */{
                            _0: count
                          };
                  })(Wonka.fromValue(100)));
}

function promiseUpdate(param) {
  return Reducer$StatefulWonka.makePromiseAction(Promise.resolve(100).then(function (count) {
                  return Promise.resolve(/* SetCount */{
                              _0: count
                            });
                }));
}

var sync = dispatch(Reducer$StatefulWonka.makeAction(/* Double */1));

var async = dispatch(asyncUpdate(undefined));

var promise = dispatch(promiseUpdate(undefined));

function StatefulWonkaReducer(Props) {
  var $$double = function (param) {
    console.log(Promise.resolve(Wonka.toPromise(dispatch(Wonka.fromValue({
                          TAG: /* Await */1,
                          _0: Wonka.fromValue(/* Double */1)
                        })))));
    
  };
  Wonka.toArray(dispatch(Wonka.fromValue({
                TAG: /* Do */0,
                _0: /* Increment */0
              })));
  var count = Wonka.toArray(dispatch(Wonka.fromArray([
                {
                  TAG: /* Do */0,
                  _0: /* Increment */0
                },
                {
                  TAG: /* Do */0,
                  _0: /* Increment */0
                },
                {
                  TAG: /* Do */0,
                  _0: /* Increment */0
                }
              ])));
  return React.createElement("div", {
              style: containerStyle
            }, React.createElement("div", undefined, "Count: ", Belt_Array.map(count, (function (c) {
                        return String(c.count);
                      }))), React.createElement("div", undefined, React.createElement("button", {
                      style: leftButtonStyle,
                      onClick: (function (_event) {
                          $$double(undefined);
                          
                        })
                    }, "2x"), React.createElement("button", {
                      style: rightButtonStyle,
                      onClick: (function (_event) {
                          
                        })
                    }, "+")));
}

var make = StatefulWonkaReducer;

exports.leftButtonStyle = leftButtonStyle;
exports.rightButtonStyle = rightButtonStyle;
exports.containerStyle = containerStyle;
exports.initialState = initialState;
exports.reducer = reducer;
exports.dispatch = dispatch;
exports.asyncUpdate = asyncUpdate;
exports.promiseUpdate = promiseUpdate;
exports.sync = sync;
exports.async = async;
exports.promise = promise;
exports.make = make;
/* dispatch Not a pure module */
