import React from "react";
import Table from "./common/Table";
const SummaryTable = ({ data }) => {
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
      <div className="title mb-1" key={"summaryHeader"}>
        Leave of absences summary
      </div>
      <Table columns={columns} data={data} />
    </>
  );
};

export default SummaryTable;
