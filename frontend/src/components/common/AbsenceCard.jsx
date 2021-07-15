import React from "react";
import moment from "moment";
const AnsenceCard = ({ row }) => {
  return (
    <div className="row">
      <div className="col-xs-8 col-sm-8 col-md-9 col-lg-8 col-xl-9  text-center p-2">
        <table className="table table-sm shadow rounded">
          <thead>
            <tr className="bg-dark text-light ">
              <th
                scope="col"
                colSpan="5"
              >{`Mr/Ms ${row.name}'s absence from ${row.startDate} to ${row.endDate}`}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td colSpan="4">{`Registered by ${row.name} on ${moment(
                row.createdAt
              ).format("DD-MM-YYYY HH:MM")}`}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td colSpan="4">
                {row.confirmedAt
                  ? `Confirmed on ${moment(row.confirmedAt).format(
                      "DD-MM-YYYY"
                    )} ${
                      row.admitterNote ? `by note : ${row.admitterNote}` : ""
                    }`
                  : row.rejectedAt
                  ? `Rejected on ${moment(row.rejectedAt).format(
                      "DD-MM-YYYY"
                    )} ${
                      row.admitterNote ? `by note : ${row.admitterNote}` : ""
                    } `
                  : ""}
              </td>
            </tr>
            {row.memberNote ? (
              <tr>
                <th scope="row">3</th>
                <td colSpan="4">{`Memeber Note:${row.memberNote}`}</td>
              </tr>
            ) : (
              ""
            )}
            {row.admitterNote ? (
              <tr>
                <th scope="row">3</th>
                <td colSpan="4">{`Admitter Note:${row.admitterNote}`}</td>
              </tr>
            ) : (
              ""
            )}
          </tbody>
        </table>
      </div>
      <div className="col-xs-4 col-sm-4 col-md-3 col-lg-4 col-xl-3 ">
        <img
          src={`${row.image}/${row.userId}`}
          width="80%"
          className="rounded shadow border border-dark"
          alt=""
        />
      </div>
    </div>
  );
};

export default AnsenceCard;
