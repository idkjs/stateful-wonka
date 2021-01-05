'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Wonka = require("wonka/src/Wonka.bs.js");
var React = require("react");
var Reducer$StatefulWonka = require("stateful-wonka/src/Reducer.bs.js");

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

var state = {
  count: 1
};

var dispatch = Reducer$StatefulWonka.reduce(reducer, state);

var result = Wonka.toArray(Curry._1(dispatch, Wonka.fromValue({
              TAG: /* Do */0,
              _0: /* Increment */0
            })));

console.log("RESULT", result);

var initialState = {
  name: "Test",
  count: 2
};

function reducer$1(state, action) {
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

var dispatch$1 = Reducer$StatefulWonka.reduce(reducer$1, initialState);

var incrementCount = Wonka.toArray(dispatch$1(Wonka.fromValue({
              TAG: /* Do */0,
              _0: /* IncrementCount */0
            })));

console.log("RESULT:IncrementCount", incrementCount);

var result$1 = Wonka.toArray(dispatch$1(Wonka.fromValue({
              TAG: /* Do */0,
              _0: /* DoubleCount */1
            })));

console.log("RESULT:DoubleCount", result$1);

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

var sync = dispatch$1(Reducer$StatefulWonka.makeAction(/* DoubleCount */1));

var async = dispatch$1(asyncUpdate(undefined));

var promise = dispatch$1(promiseUpdate(undefined));

console.log(sync);

function Simple(Props) {
  var containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  };
  return React.createElement("div", {
              style: containerStyle
            }, React.createElement("div", undefined, "Check Console "));
}

var make = Simple;

exports.state = state;
exports.initialState = initialState;
exports.reducer = reducer$1;
exports.dispatch = dispatch$1;
exports.incrementCount = incrementCount;
exports.result = result$1;
exports.asyncUpdate = asyncUpdate;
exports.promiseUpdate = promiseUpdate;
exports.sync = sync;
exports.async = async;
exports.promise = promise;
exports.make = make;
/* dispatch Not a pure module */
