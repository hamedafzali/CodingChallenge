import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  membersAbsencesAdded,
  membersAbsencesSummaryAdded,
} from "../store/employee";

import * as PersonsService from "../services/persons";
import CollapsibleTable from "./common/collapsibleTable";
import Loading from "./common/loading";

const Main = () => {
  const state = useSelector((state) => state.employeesReducer);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);

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
    }, 5000);
    if (isLoading) return <Loading />;
    clearTimeout(timeOut);
  }
  return (
    <div className="container p-3 border rounded">
      <div className="row">
        <div className="col-md-12 col-lg-4">
          <div className="title mb-1">Summary of the absences</div>
          <table className="table table-sm table-hover text-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Confirmed</th>
                <th scope="col">Rejected</th>
                {/* <th scope="col">photo</th> */}
              </tr>
            </thead>
            <tbody>
              {state.membersAbsencesSummary.map((row, index) => (
                <tr key={index}>
                  <th scope="row">{++index}</th>
                  <td>{row.name}</td>
                  <td>{row.confirmed}</td>
                  <td>{row.rejected}</td>
                  {/* <td>
                    <img src={`${row.image}/${row.userId}`} width="50" />
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
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
        <div className="col-md-12 col-lg-8">
          <div className="title mb-1">Detail of the absences</div>
          <CollapsibleTable data={state.membersAbsences} />
        </div>
      </div>
    </div>
  );
};

export default Main;
