open Wonka;
open StatefulWonka.Reducer;
type action =
  | Increment
  | Double
  | Square;

type state = {count: int};
let reducer =
  (. state, action) =>
    switch (action) {
    | Increment => {count: state.count + 1}
    | Double => {count: state.count * 2}
    | Square => {count: state.count * state.count}
    };
let state = {count: 1};

let dispatch = reduce(reducer, state);

let result = Do(Increment) |> fromValue |> dispatch |> toArray;
Js.log2("RESULT", result);
type state2 = {
  name: string,
  count: int,
};

type action2 =
  | IncrementCount
  | DoubleCount
  | SetCount(int);

let initialState = {name: "Test", count: 2};

let reducer =
  (. state:state2, action:action2) =>
    switch (action) {
    | IncrementCount => {...state, count: state.count + 1}
    | DoubleCount => {...state, count: state.count * 2}
    | SetCount(number) => {...state, count: number}
    };

let dispatch = reduce(reducer, initialState);
let incrementCount = Do(IncrementCount) |> fromValue |> dispatch |> toArray;
Js.log2("RESULT:IncrementCount", incrementCount);
let result = Do(DoubleCount) |> fromValue |> dispatch |> toArray;
Js.log2("RESULT:DoubleCount", result);
let asyncUpdate = () =>
  makeAsyncAction(fromValue(100) |> map((. count) => SetCount(count)));

let promiseUpdate = () =>
  Js.Promise.(
    makePromiseAction(
      resolve(100) |> then_(count => resolve(SetCount(count))),
    )
  );

let sync = makeAction(DoubleCount) |> dispatch;

let async = asyncUpdate() |> dispatch;

let promise = promiseUpdate() |> dispatch;
sync->Js.log;
[@react.component]
let make = () => {
  let containerStyle =
    ReactDOMRe.Style.make(
      ~display="flex",
      ~alignItems="center",
      ~justifyContent="space-between",
      (),
    );
  <div style=containerStyle>
    <div> {React.string("Check Console ")} </div>
  </div>;
};
