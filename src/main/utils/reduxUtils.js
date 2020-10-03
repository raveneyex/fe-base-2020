import { always } from 'ramda';

/**
 * Returns an action creator with no payload.
 * @param {String} type the type of the action creator
 */
export const noPayloadActionCreator = type => always({ type });

/**
 * Returns an action creator with payload and type.
 * Curried for ease of use.
 * @param {String} type the type of the action creator
 * @param {Any} payload the payload of the action creator 
 */
export const payloadParamActionCreator = type => payload => ({ type, payload });

/**
 * Creates a reducer from an initialState and a reducerActionMap.
 * @param reducerActionMap: an object/dictionary of 'actions':'functions',
 *  where `actions` are action type strings
 *  and the functions have the standard reducer signature `(payload, state) => state`
 * @param initialState: the initial state of the reducer.
 */
export function createReducerFromActionMap(reducerActionMap, initialState) {
  return (state = initialState, action) => {
    const type = action && action.type,
        payload = action && action.payload,
        reducer = type && reducerActionMap[type];

    return reducer ? reducer(payload, state) : state;
  };
}
