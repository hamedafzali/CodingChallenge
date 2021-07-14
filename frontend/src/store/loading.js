//Action Types
const LOADING_CHANGED = "loadingChanged";
const ERROR_CHANGED = "errorChanged";
//actions

export const loadingChanged = (data) => ({
  type: LOADING_CHANGED,
  payload: data,
});
export const errorChanged = (data) => ({
  type: ERROR_CHANGED,
  payload: data,
});
//reducers
export default function loadingsReducer(
  state = { status: true, error: false },
  action
) {
  switch (action.type) {
    case LOADING_CHANGED:
      return { ...state, status: action.payload };
    case ERROR_CHANGED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
