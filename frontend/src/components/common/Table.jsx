import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import { paginate } from "../../utils/paginate";
import _ from "lodash";
import Pagination from "../common/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import TableFooter from "./TableFooter";

const Table = ({ columns, data }) => {
  const [size, setSize] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setpageSize] = useState(10);
  const [keyword, setKeyword] = useState("");
  let [filteredData, setFilteredData] = useState(data);
  const filterData = (val, path) => {
    setCurrentPage(1);
    return path === "notFiltered" || val === "All data"
      ? data
      : data.filter((i) => i[path] === val);
  };

  const clickHandler = (i, path) => {
    console.log(i, path);
    setFilteredData(filterData(i, path));
  };

  const pageSizeData = [
    { id: 5, name: "5" },
    { id: 10, name: "10", selected: true },
    { id: 15, name: "15" },
    { id: 50, name: "50" },
  ];
  let sortedCol = "";
  try {
    sortedCol = columns.filter((i) => i.sorted === true)[0].path;
  } catch (e) {}

  const [sortColumn, setSortColumn] = useState({
    path: sortedCol,
    order: "asc",
  });

  const doSearch = (data) => {
    console.log("doSearch", data);
    return _.filter(data, function (item) {
      //_.indexOf(data).conca
      try {
        var s = "";
        columns.forEach((i) => {
          s += item[i.path];
        });

        if (s.indexOf(keyword) !== -1) {
          //if (_.indexOf(s, keyword) !== -1) {
          return item;
        } else return null;
      } catch (e) {
        return null;
      }
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const getPagedData = () => {
    let searchedData = doSearch(filteredData);
    const sorted = _.orderBy(
      searchedData,
      [sortColumn.path],
      [sortColumn.order]
    );

    const PData = paginate(sorted, currentPage, pageSize);
    return { totalCount: searchedData.length, PData };
  };
  const handleSort = (sortColumn) => {
    setSortColumn(sortColumn);
  };
  const { totalCount, PData } = getPagedData();
  //console.log("table data", data);
  if (!data.length) return <div>No data to display</div>;
  return (
    <div className="text-center">
      <table
        className="table table-sm table-striped table-hover border"
        style={{ fontSize: size }}
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
      {/* <div className="overlay "></div> */}
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
