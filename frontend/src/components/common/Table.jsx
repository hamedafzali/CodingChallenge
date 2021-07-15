import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { paginate } from "../../utils/paginate";
import _ from "lodash";
import Pagination from "../common/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import TableFooter from "./TableFooter";

const Table = ({ columns, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  let [filteredData, setFilteredData] = useState(data);
  const filterData = (val, path) => {
    setCurrentPage(1);
    return path === "notFiltered" || val === "All data"
      ? data
      : data.filter((i) => i[path] === val);
  };

  const clickHandler = (i, path) => {
    setFilteredData(filterData(i, path));
  };

  let sortedCol = "";
  try {
    sortedCol = columns.filter((i) => i.sorted === true)[0].path;
  } catch (e) {}

  const [sortColumn, setSortColumn] = useState({
    path: sortedCol,
    order: "asc",
  });

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const getPagedData = () => {
    const sorted = _.orderBy(
      filteredData,
      [sortColumn.path],
      [sortColumn.order]
    );

    const PData = paginate(sorted, currentPage, pageSize);
    return { totalCount: filteredData.length, PData };
  };
  const handleSort = (sortColumn) => {
    setSortColumn(sortColumn);
  };
  const { totalCount, PData } = getPagedData();
  if (!data.length) return <div>No data to display</div>;
  return (
    <div className="text-center">
      <table
        className="table table-sm table-striped table-hover border"
        style={{ fontSize: 14 }}
      >
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={handleSort}
          data={data}
          handleClick={clickHandler}
        />
        <TableBody columns={columns} data={PData} currentPage={currentPage} />
        <TableFooter columns={columns} data={PData} />
      </table>
      <div className="text-right">
        <Pagination
          itemsCount={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Table;
