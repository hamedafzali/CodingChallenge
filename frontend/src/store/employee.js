//Action Types
export const MEMBER_ABSENCE_ADDED = "membersAbsencesAdded";
export const MEMBER_ABSENCE_SUMMARY_ADDED = "membersAbsencesSummaryAdded";
export const EMPLOYEE_ADD_SELECTED = "employeeAddSelected";
export const EMPLOYEE_REMOVE_SELECTED = "employeeRemoveSelected";

//actions
export const membersAbsencesAdded = (data) => ({
  type: MEMBER_ABSENCE_ADDED,
  payload: data,
});
export const membersAbsencesSummaryAdded = (data) => ({
  type: MEMBER_ABSENCE_SUMMARY_ADDED,
  payload: data,
});
export const employeeAddSelected = (data) => ({
  type: EMPLOYEE_ADD_SELECTED,
  payload: data,
});
export const employeeRemoveSelected = () => ({
  type: EMPLOYEE_REMOVE_SELECTED,
});
//reducers
export default function employeesReducer(
  state = {
    membersAbsences: [],
    membersAbsencesSummary: [],
    selectedEmployee: [],
  },
  action
) {
  switch (action.type) {
    case MEMBER_ABSENCE_ADDED:
      return { ...state, membersAbsences: action.payload };
    case MEMBER_ABSENCE_SUMMARY_ADDED:
      return { ...state, membersAbsencesSummary: action.payload };
    case EMPLOYEE_ADD_SELECTED:
      return { ...state, selectedEmployee: action.payload };
    case EMPLOYEE_REMOVE_SELECTED:
      return { ...state, selectedEmployee: [] };
    default:
      return state;
  }
}
