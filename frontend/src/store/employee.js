//Action Types
export const EMPLOYEE_ALL_ADDED = "employeeAllAdded";

//actions
export const employeeAllAdded = (data) => ({
  type: EMPLOYEE_ALL_ADDED,
  payload: { ...data },
});

//reducers
export default function reducer(state = [], action) {
  switch (action.type) {
    case EMPLOYEE_ALL_ADDED:
      return action.payload;
    default:
      return state;
  }
}
