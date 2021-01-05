// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Wonka = require("wonka/src/Wonka.bs.js");
var Reducer$Stateful = require("../src/Reducer.bs.js");

function call(self, arg) {
  return self.call(undefined, arg);
}

Jest.describe("Reducer", (function (param) {
        var reducer = function (state, action) {
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
        };
        return Jest.describe("reduce()", (function (param) {
                      Jest.test("creates a dispatcher that handles events", (function (param) {
                              var dispatch = Reducer$Stateful.reduce(reducer, {
                                    count: 1
                                  });
                              var result = Wonka.toArray(Curry._1(dispatch, Wonka.fromValue({
                                            TAG: /* Do */0,
                                            _0: /* Increment */0
                                          })));
                              return Jest.ExpectJs.toEqual([{
                                            count: 2
                                          }], Jest.ExpectJs.expect(result));
                            }));
                      Jest.testPromise("creates a dispatcher that handles async events", undefined, (function (param) {
                              var dispatch = Reducer$Stateful.reduce(reducer, {
                                    count: 1
                                  });
                              var expectResult = function (result) {
                                return Promise.resolve(Jest.ExpectJs.toEqual({
                                                count: 2
                                              }, Jest.ExpectJs.expect(result)));
                              };
                              return Wonka.toPromise(Curry._1(dispatch, Wonka.fromValue({
                                                    TAG: /* Await */1,
                                                    _0: Wonka.fromValue(/* Double */1)
                                                  }))).then(expectResult);
                            }));
                      Jest.testPromise("creates a dispatcher that handles promised events", undefined, (function (param) {
                              var dispatch = Reducer$Stateful.reduce(reducer, {
                                    count: 2
                                  });
                              var expectResult = function (result) {
                                return Promise.resolve(Jest.ExpectJs.toEqual({
                                                count: 4
                                              }, Jest.ExpectJs.expect(result)));
                              };
                              return Wonka.toPromise(Curry._1(dispatch, Wonka.fromValue({
                                                    TAG: /* Await */1,
                                                    _0: Wonka.fromPromise(Promise.resolve(/* Double */1))
                                                  }))).then(expectResult);
                            }));
                      Jest.test("handles multiple events", (function (param) {
                              var dispatch = Reducer$Stateful.reduce(reducer, {
                                    count: 1
                                  });
                              var result = Wonka.toArray(Curry._1(dispatch, Wonka.fromArray([
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
                              return Jest.ExpectJs.toEqual([
                                          {
                                            count: 2
                                          },
                                          {
                                            count: 3
                                          },
                                          {
                                            count: 4
                                          }
                                        ], Jest.ExpectJs.expect(result));
                            }));
                      Jest.testPromise("handles multiple async events", undefined, (function (param) {
                              var dispatch = Reducer$Stateful.reduce(reducer, {
                                    count: 1
                                  });
                              var mock = jest.fn();
                              var expectCalls = function (param) {
                                return Promise.resolve(Jest.ExpectJs.toEqual([
                                                {
                                                  count: 2
                                                },
                                                {
                                                  count: 4
                                                },
                                                {
                                                  count: 8
                                                }
                                              ], Jest.ExpectJs.expect(Jest.MockJs.calls(mock))));
                              };
                              return Wonka.toPromise(Wonka.onPush(function ($$event) {
                                                  mock.call(undefined, $$event);
                                                  
                                                })(Curry._1(dispatch, Wonka.fromArray([
                                                        {
                                                          TAG: /* Await */1,
                                                          _0: Wonka.fromValue(/* Double */1)
                                                        },
                                                        {
                                                          TAG: /* Await */1,
                                                          _0: Wonka.fromValue(/* Double */1)
                                                        },
                                                        {
                                                          TAG: /* Await */1,
                                                          _0: Wonka.fromValue(/* Double */1)
                                                        }
                                                      ])))).then(expectCalls);
                            }));
                      return Jest.testPromise("handles multiple promised events", undefined, (function (param) {
                                    var dispatch = Reducer$Stateful.reduce(reducer, {
                                          count: 2
                                        });
                                    var mock = jest.fn();
                                    var expectCalls = function (param) {
                                      return Promise.resolve(Jest.ExpectJs.toEqual([
                                                      {
                                                        count: 4
                                                      },
                                                      {
                                                        count: 16
                                                      },
                                                      {
                                                        count: 256
                                                      }
                                                    ], Jest.ExpectJs.expect(Jest.MockJs.calls(mock))));
                                    };
                                    return Wonka.toPromise(Wonka.onPush(function ($$event) {
                                                        mock.call(undefined, $$event);
                                                        
                                                      })(Curry._1(dispatch, Wonka.fromArray([
                                                              {
                                                                TAG: /* Await */1,
                                                                _0: Wonka.fromPromise(Promise.resolve(/* Square */2))
                                                              },
                                                              {
                                                                TAG: /* Await */1,
                                                                _0: Wonka.fromPromise(Promise.resolve(/* Square */2))
                                                              },
                                                              {
                                                                TAG: /* Await */1,
                                                                _0: Wonka.fromPromise(Promise.resolve(/* Square */2))
                                                              }
                                                            ])))).then(expectCalls);
                                  }));
                    }));
      }));

exports.call = call;
/*  Not a pure module */
