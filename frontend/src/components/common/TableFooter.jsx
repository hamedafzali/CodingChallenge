import React from "react";
const TableFooter = ({ columns, data }) => {
  console.log(data);
  const sum = (column) => {
    return data.reduce((acc, curr) => {
      console.log(acc, curr, column);
      return acc + curr[column];
    }, 0);
  };
  return (
    <tfoot class="bg-light text-uppercase font-weight-bold">
      <tr>
        {columns.map((column) => (
          <td>{column.sum ? sum(column.path) : column.sumText}</td>
        ))}
      </tr>
    </tfoot>
  );
};

export default TableFooter;
