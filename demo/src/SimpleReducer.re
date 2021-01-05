// let leftButtonStyle =
//   ReactDOMRe.Style.make(~borderRadius="4px 0px 0px 4px", ~width="48px", ());
// let rightButtonStyle =
//   ReactDOMRe.Style.make(~borderRadius="0px 4px 4px 0px", ~width="48px", ());
// let containerStyle =
//   ReactDOMRe.Style.make(
//     ~display="flex",
//     ~alignItems="center",
//     ~justifyContent="space-between",
//     (),
//   );

// // type state = {
// //   name: string,
// //   count: int,
// // };

// // type action =
// //   | IncrementCount
// //   | DoubleCount
// //   | SetCount(int);

// // let initialState = {name: "Test", count: 0};

// // let reducer =
// //   (. state, action) =>
// //     switch (action) {
// //     | IncrementCount => {...state, count: state.count + 1}
// //     | DoubleCount => {...state, count: state.count * 2}
// //     | SetCount(number) => {...state, count: number}
// //     };

// // let dispatch = reduce(reducer, initialState);

// // let asyncUpdate = () =>
// //   makeAsyncAction(fromValue(100) |> map((. count) => SetCount(count)));

// // let promiseUpdate = () =>
// //   Js.Promise.(
// //     makePromiseAction(
// //       resolve(100) |> then_(count => resolve(SetCount(count))),
// //     )
// //   );

// // let sync = makeAction(DoubleCount) |> dispatch;

// // let async = asyncUpdate() |> dispatch;

// // let promise = promiseUpdate() |> dispatch;
// open Wonka;
// open StatefulWonka.Reducer;
// type action =
//   | Increment
//   | Double
//   | Square;

// type state = {count: int};

// open Js.Promise;

// let reducer =
//   (. state, action) =>
//     switch (action) {
//     | Increment => {count: state.count + 1}
//     | Double => {count: state.count * 2}
//     | Square => {count: state.count * state.count}
//     };

// [@react.component]
// let make = (~children) => {
//   let (show, setShow) = React.useState(() => true);
//   let initialState = {count: 1};

//   let dispatch = reduce(reducer, initialState);

//   let count = Do(Increment) |> fromValue |> dispatch |> toArray;
//   let (state, dispatch) = reduce(reducer, initialState);

//   // Notice that instead of `useEffect`, we have `useEffect0`. See
//   // reasonml.github.io/reason-react/docs/en/components#hooks for more info
//   React.useEffect0(() => {
//     let id =
//       Js.Global.setInterval(
//         () => setShow(previousShow => !previousShow),
//         1000,
//       );

//     Some(() => Js.Global.clearInterval(id));
//   });

//   let style =
//     if (show) {
//       ReactDOMRe.Style.make(~opacity="1", ~transition="opacity 1s", ());
//     } else {
//       ReactDOMRe.Style.make(~opacity="0", ~transition="opacity 1s", ());
//     };

//   <div style=containerStyle>
//     <div>
//       {React.string("Count: ")}
//       {count
//        ->Belt.Array.map(c => React.string(c.count->string_of_int))
//        ->React.array}
//     </div>
//     <div>
//       {React.string("Count: ")}
//       {React.string(state.count->string_of_int)}
//     </div>
//     <div>
//       <button
//         style=leftButtonStyle
//         onClick={_event =>
//           {
//             Do(Increment) |> fromValue |> dispatch |> toArray;
//           }
//           ->ignore
//         }>
//         {React.string("+")}
//       </button>
//       <button
//         style=rightButtonStyle
//         onClick={_event =>
//           {
//             Do(Double) |> fromValue |> dispatch |> toArray;
//           }
//           ->ignore
//         }>
//         {React.string("x2")}
//       </button>
//     </div>
//     <div style> children </div>
//   </div>;
// };
