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
    let searchedData = doSearch(data);
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
