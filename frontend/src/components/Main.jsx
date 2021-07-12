import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import {
  membersAbsencesAdded,
  membersAbsencesSummaryAdded,
} from "../store/employee";
import * as PersonsService from "../services/persons";
import CollapsibleTable from "./common/collapsibleTable";
import Loading from "./common/loading";
import Table from "./common/Table";
const Main = () => {
  const state = useSelector((state) => state.employeesReducer);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);
  const columnsSummary = [
    {
      type: "rowNumber",
      label: "#",
    },
    { path: "name", label: "Name", sumText: "Total" },
    { path: "requested", label: "Requested", sum: true },
    { path: "confirmed", label: "Confirmed", sum: true },
    { path: "rejected", label: "Rejected", sum: true },
  ];
  const columns = [
    {
      type: "rowNumber",
      label: "#",
    },
    { path: "name", label: "Name" },
    { path: "type", label: "Type" },
    {
      content: (item) => (
        <div>{moment(item.createdAt).format("DD-MM-YYYY")}</div>
      ),
      label: "Creation Date",
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
            ? `Confirmed on ${moment(item.confirmedAt).format("DD-MM-YYYY")}`
            : item.rejectedAt
            ? `Rejected on ${moment(item.rejectedAt).format("DD-MM-YYYY")}`
            : "in process"}
        </div>
      ),
      label: "Status",
    },

    {
      path: "userId",
      content: (item) => <div>&#x27A4;</div>,
    },
  ];
  const getData = async () => {
    const { data: employeesData } = await PersonsService.getMembersAbsences();
    dispatch(membersAbsencesAdded(employeesData));

    const { data: employeesSummary } = await PersonsService.getSummary();
    dispatch(membersAbsencesSummaryAdded(employeesSummary));
  };
  let timeOut;
  if (
    state.membersAbsences.length === 0 ||
    state.membersAbsencesSummary.length === 0
  )
    return <Loading />;
  else {
    setTimeout(() => {
      timeOut = setIsLoading(false);
    }, 3000);
    if (isLoading) return <Loading />;
    clearTimeout(timeOut);
  }
  return (
    <div className="container p-3 border rounded">
      <div className="row">
        <div className="col-md-12 col-lg-5 col-xl-4">
          <div className="title mb-1">Summary of the absences</div>
          <Table columns={columnsSummary} data={state.membersAbsencesSummary} />

          <div className="card" style={{ width: "100%" }}>
            {/* <image
              className="card-img-top"
              src="https://loremflickr.com/300/400"
              alt="Card image cap"
            /> */}
            <div className="card-body">
              <h5 className="card-title">Bernhard</h5>
              <p className="card-text">Crew Id: 253</p>
              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>
        <div className="col-md-12  col-lg-7 col-xl-8">
          <div className="title mb-1">Detail of the absences</div>
          {/* <CollapsibleTable data={state.membersAbsences} /> */}
          <Table columns={columns} data={state.membersAbsences} />
        </div>
      </div>
    </div>
  );
};

export default Main;
