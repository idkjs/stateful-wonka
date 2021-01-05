// This is the ReactJS documentation's useReducer example, directly ported over
// https://reactjs.org/docs/hooks-reference.html#usereducer

// A little extra we've put, because the ReactJS example has no styling
let leftButtonStyle =
  ReactDOMRe.Style.make(~borderRadius="4px 0px 0px 4px", ~width="48px", ());
let rightButtonStyle =
  ReactDOMRe.Style.make(~borderRadius="0px 4px 4px 0px", ~width="48px", ());
let containerStyle =
  ReactDOMRe.Style.make(
    ~display="flex",
    ~alignItems="center",
    ~justifyContent="space-between",
    (),
  );

// Record and variant need explicit declarations.
open Wonka;
open StatefulWonka.Reducer;

type state = {
  name: string,
  count: int,
};

type action =
  | Increment
  | Double
  | SetCount(int);

let initialState = {name: "Test", count: 0};

let reducer =
  (. state, action) =>
    switch (action) {
    | Increment => {...state, count: state.count + 1}
    | Double => {...state, count: state.count * 2}
    | SetCount(number) => {...state, count: number}
    };

let dispatch = reduce(reducer, initialState);

let asyncUpdate = () =>
  makeAsyncAction(fromValue(100) |> map((. count) => SetCount(count)));

let promiseUpdate = () =>
  Js.Promise.(
    makePromiseAction(
      resolve(100) |> then_(count => resolve(SetCount(count))),
    )
  );

let sync = makeAction(Double) |> dispatch;

let async = asyncUpdate() |> dispatch;

let promise = promiseUpdate() |> dispatch;

[@react.component]
let make = () => {
  // let state = {count: 2};

  // let ( state, dispatch) = reducer;
  let double = ()=>Await(fromValue(Double)) |> fromValue |> dispatch |> toPromise|>Js.Promise.resolve|>Js.log;
  let increment = Do(Increment)|> fromValue
  |> dispatch
  |> toArray;

let count =
  [|Do(Increment), Do(Increment), Do(Increment)|]
  |> fromArray
  |> dispatch
  |> toArray;

  // We can use a fragment here, but we don't, because we want to style the counter
  <div style=containerStyle>
    <div>
      {React.string("Count: ")}
      {count->Belt.Array.map(c =>React.string(c.count->string_of_int))->React.array}
    </div>
    <div>
      <button style=leftButtonStyle onClick={_event => double()->ignore}>
        {React.string("2x")}
      </button>
      <button
        style=rightButtonStyle onClick={_event => increment->ignore}>
        {React.string("+")}
      </button>
    </div>
  </div>;
};
