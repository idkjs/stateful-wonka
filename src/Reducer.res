open Wonka
open Wonka_types

type event<'action> =
  | Do('action)
  | Await(sourceT<'action>)

type reducer<'state, 'action> = (. 'state, 'action) => 'state

type dispatch<'state, 'action> = operatorT<event<'action>, 'state>

export reduce = (reducer: reducer<'state, 'action>, initialState): dispatch<
  'state,
  'action,
> =>
  curry(source =>
    source
    |> mergeMap((. event) =>
      switch event {
      | Do(action) => fromValue(action)
      | Await(source) => source
      }
    )
    |> scan(reducer, initialState)
  )

/* **
 * Synchronous actions
 */

export toAction = action => Do(action)

export makeAction = action => action |> toAction |> fromValue

export toActions = actions => actions |> Js.Array.map(toAction)

export makeActions = actions => actions |> toActions |> fromArray

/* **
 * Async actions (based on Wonka sources)
 */

export toAsyncAction = source => Await(source)

export makeAsyncAction = source => source |> toAsyncAction |> fromValue

export toAsyncActions = sources => sources |> Js.Array.map(toAsyncAction)

export makeAsyncActions = sources => sources |> toAsyncActions |> fromArray

/* **
 * Promised actions
 */

export toPromiseAction = promise => Await(promise |> fromPromise)

export makePromiseAction = promise => promise |> toPromiseAction |> fromValue

export toPromiseActions = promises => promises |> Js.Array.map(toPromiseAction)

export makePromiseActions = promises =>
  promises |> toPromiseActions |> fromArray
