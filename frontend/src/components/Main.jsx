import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Loading from "./common/loading";
import SummaryTable from "./SummaryTable";
import AbsencesTable from "./AbsencesTable";

import * as EmployeesService from "../services/Employees";
import {
  membersAbsencesAdded,
  membersAbsencesSummaryAdded,
} from "../store/employee";
import { loadingChanged, errorChanged } from "../store/loading";

const Main = (props) => {
  const employees = useSelector((state) => state.employeesReducer);
  const isLoading = useSelector((state) => state.loadingsReducer);
  const dispatch = useDispatch();
  const setLoadingStatus = (status) =>
    setTimeout(
      () => {
        dispatch(loadingChanged(status));
      },
      status ? 0 : 3000
    );
  useEffect(() => {
    setLoadingStatus(true);
    getData()
      .then(() => {
        dispatch(errorChanged(false));
        setLoadingStatus(false);
      })
      .catch((err) => {
        console.log("error", err);
        dispatch(errorChanged(true));
        setLoadingStatus(false);
      });
  }, [dispatch]);

  const getData = async () => {
    const { data: employeesData } = await EmployeesService.getMembersAbsences();
    dispatch(membersAbsencesAdded(employeesData));

    const { data: employeesSummary } = await EmployeesService.getSummary();
    dispatch(membersAbsencesSummaryAdded(employeesSummary));
  };
  //onsole.log("isLoading", isLoading);
  let timeOut;
  if (isLoading.status) return <Loading />;
  else {
    timeOut = setTimeout(() => {
      dispatch(loadingChanged(false));
    }, 3000);
    if (isLoading.status) return <Loading />;
    clearTimeout(timeOut);
  }
  return (
    <div className="container p-3 border rounded">
      <div className="row">
        <div className="col-md-12 col-lg-5 col-xl-4">
          <SummaryTable data={employees.membersAbsencesSummary} />
        </div>
        <div className="col-md-12  col-lg-7 col-xl-8">
          <AbsencesTable data={employees.membersAbsences} />
        </div>
      </div>
    </div>
  );
};

export default Main;
