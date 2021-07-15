import React from "react";
import employeesReducer, {
  membersAbsencesAdded,
  MEMBER_ABSENCE_ADDED,
  membersAbsencesSummaryAdded,
  MEMBER_ABSENCE_SUMMARY_ADDED,
  employeeAddSelected,
  EMPLOYEE_ADD_SELECTED,
  employeeRemoveSelected,
  EMPLOYEE_REMOVE_SELECTED,
} from "../store/employee";
describe("Employees", () => {
  describe("action", () => {
    test("must create membersAbsencesAdded object", () => {
      const result = membersAbsencesAdded("test");
      const toBeResult = {
        type: MEMBER_ABSENCE_ADDED,
        payload: "test",
      };
      expect(result).toEqual(toBeResult);
    });
    test("must create membersAbsencesSummaryAdded object", () => {
      const result = membersAbsencesSummaryAdded("test");
      const toBeResult = {
        type: MEMBER_ABSENCE_SUMMARY_ADDED,
        payload: "test",
      };
      expect(result).toEqual(toBeResult);
    });
    test("must create employeeAddSelected object", () => {
      const result = employeeAddSelected("test");
      const toBeResult = {
        type: EMPLOYEE_ADD_SELECTED,
        payload: "test",
      };
      expect(result).toEqual(toBeResult);
    });
    test("must create employeeRemoveSelected object", () => {
      const result = employeeRemoveSelected();
      const toBeResult = {
        type: EMPLOYEE_REMOVE_SELECTED,
      };
      expect(result).toEqual(toBeResult);
    });
  });
  describe("reducer", () => {
    test("must create employeeRemoveSelected object", () => {
      const result = employeesReducer(
        {
          membersAbsences: [],
          membersAbsencesSummary: [],
          selectedEmployee: [],
        },
        employeeRemoveSelected()
      );
      const toBeResult = {
        membersAbsences: [],
        membersAbsencesSummary: [],
        selectedEmployee: [],
      };
      expect(result).toEqual(toBeResult);
    });
    test("must return state", () => {
      const result = employeesReducer(
        {
          membersAbsences: [],
          membersAbsencesSummary: [],
          selectedEmployee: [],
        },
        employeeRemoveSelected()
      );
      const toBeResult = {
        membersAbsences: [],
        membersAbsencesSummary: [],
        selectedEmployee: [],
      };
      expect(result).toEqual(toBeResult);
    });
    test("must clear selected", () => {
      const result = employeesReducer(
        {
          membersAbsences: [],
          membersAbsencesSummary: [],
          selectedEmployee: ["max"],
        },
        employeeRemoveSelected()
      );
      const toBeResult = {
        membersAbsences: [],
        membersAbsencesSummary: [],
        selectedEmployee: [],
      };
      expect(result.selectedEmployee.length).toBe(
        toBeResult.selectedEmployee.length
      );
    });
  });
});
