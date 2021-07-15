import React from "react";
import moment from "moment";
import Table from "./common/Table";
import AnsenceCard from "./common/AbsenceCard";
import CollapsibleIcon from "./common/CollapsibleIcon";
const AbsencesTable = ({ data }) => {
  const columns = [
    {
      path: "userId",
      type: "rowNumber",
      label: "#",
    },
    {
      path: "name",
      label: "Name",
      filtered: true,
    },
    { path: "type", label: "Type", filtered: true },
    {
      content: (item) => (
        <div>{moment(item.createdAt).format("DD-MM-YYYY")}</div>
      ),
      label: "Register Date",
    },
    {
      content: (item) => (
        <div
          className={
            item.confirmedAt
              ? "text-nowrap text-success"
              : item.rejectedAt
              ? "text-nowrap text-danger"
              : "text-nowrap"
          }
        >
          {item.confirmedAt
            ? `Confirmed`
            : item.rejectedAt
            ? `Rejected`
            : "in process"}
        </div>
      ),
      label: "Status",
    },
    {
      content: (item) => (
        <div
          className={
            item.confirmedAt
              ? "text-nowrap text-success"
              : item.rejectedAt
              ? "text-nowrap text-danger"
              : "text-nowrap"
          }
        >
          {item.confirmedAt
            ? ` ${moment(item.confirmedAt).format("DD-MM-YYYY")}`
            : item.rejectedAt
            ? `${moment(item.rejectedAt).format("DD-MM-YYYY")}`
            : ""}
        </div>
      ),
      label: "Date",
      filtered: true,
      path: "confirmedAt",
      dateFormated: "DD-MM-YYYY",
    },
    {
      collapsibleContet: (item) => <AnsenceCard row={item} />,
      content: (item, index) => <CollapsibleIcon index={index} />,
    },
  ];
  return (
    <>
      <div className="title mb-1">Leave of absences detail</div>
      <Table columns={columns} data={data} />
    </>
  );
};

export default AbsencesTable;
