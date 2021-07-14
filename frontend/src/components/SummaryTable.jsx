import React from "react";
import { useSelector } from "react-redux";
import Table from "./common/Table";
const SummaryTable = ({ data }) => {
  const employees = useSelector((state) => state.employeesReducer);
  console.log(employees.selectedEmployee);
  const columns = [
    {
      type: "rowNumber",
      label: "#",
    },
    { path: "name", label: "Name", sumText: "Total" },
    { path: "requested", label: "Requested", sum: true },
    { path: "confirmed", label: "Confirmed", sum: true },
    { path: "rejected", label: "Rejected", sum: true },
  ];
  return (
    <>
      <div className="title mb-1"> Leave of absences summary</div>
      <Table columns={columns} data={data} />
    </>
  );
};

export default SummaryTable;
