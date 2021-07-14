import React from "react";
import moment from "moment";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";
function CollapsibleTable({ data }) {
  return (
    <>
      <table className="table table-sm table-hover">
        <thead>
          <tr key={99999}>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Reason</th>
            <th scope="col">Created At</th>
            <th scope="col">Status</th>
            {/* <th scope="col">Note</th> */}
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            index++;
            return (
              <>
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{row.name}</td>
                  <td>{row.type}</td>
                  <td className="text-nowrap">
                    {moment(row.createdAt).format("DD-MM-YYYY")}
                  </td>
                  <td
                    className={
                      row.confirmedAt
                        ? "text-nowrap text-success"
                        : row.rejectedAt
                        ? "text-nowrap text-danger"
                        : "text-nowrap"
                    }
                  >
                    {row.confirmedAt
                      ? `Confirmed on ${moment(row.confirmedAt).format(
                          "DD-MM-YYYY"
                        )}`
                      : row.rejectedAt
                      ? `Rejected on ${moment(row.rejectedAt).format(
                          "DD-MM-YYYY"
                        )}`
                      : "in process"}
                  </td>
                  {/* <td>{row.admitterNote}</td> */}
                  <td
                    data-toggle="collapse"
                    data-target={`#collapse${index}`}
                    style={{ cursor: "pointer" }}
                  >
                    &#10148;
                  </td>
                </tr>

                <tr
                  id={`collapse${index}`}
                  className="collapse"
                  aria-labelledby={`#heading${index}`}
                >
                  <td colSpan="6">
                    <div className="m-1 text-center p-2">
                      <table class="table table-sm shadow rounded">
                        <thead>
                          <tr className="bg-dark text-light ">
                            <th
                              scope="col"
                              colSpan="5"
                            >{`Absence in datail of Mr/Ms ${row.name} from ${row.startDate} to ${row.endDate}`}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td colspan="4">{`Registered by ${
                              row.name
                            } on ${moment(row.createdAt).format(
                              "DD-MM-YYYY HH:MM"
                            )}`}</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td colspan="4">
                              {`Confirmed `}
                              {row.admitterId
                                ? `by admitter ID ${row.admitterId}`
                                : ""}
                              {`on ${moment(row.confirmedAt).format(
                                "DD-MM-YYYY HH:MM"
                              )} `}
                              {row.admitterNote
                                ? `by note : ${row.admitterNote}`
                                : ""}
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td colspan="4">Larry the Bird</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CollapsibleTable;
