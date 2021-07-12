//Action Types
const MEMBER_ABSENCE_ADDED = "membersAbsencesAdded";
const MEMBER_ABSENCE_SUMMARY_ADDED = "membersAbsencesSummaryAdded";

//actions
export const membersAbsencesAdded = (data) => ({
  type: MEMBER_ABSENCE_ADDED,
  payload: data,
});
export const membersAbsencesSummaryAdded = (data) => ({
  type: MEMBER_ABSENCE_SUMMARY_ADDED,
  payload: data,
});

//reducers
export default function employeesReducer(
  state = { membersAbsences: [], membersAbsencesSummary: [] },
  action
) {
  switch (action.type) {
    case MEMBER_ABSENCE_ADDED:
      return { ...state, membersAbsences: action.payload };
    case MEMBER_ABSENCE_SUMMARY_ADDED:
      return { ...state, membersAbsencesSummary: action.payload };
    default:
      return state;
  }
}
