import React, { Component } from "react";
import _ from "underscore";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";
import moment from "moment";
class TableBody extends Component {
  renderCell = (item, column, index) => {
    if (column.content) return column.content(item, index);
    if (column.dateFormated)
      return moment(_.get(item, column.path)).format("DD-MM-YYYY");
    return _.get(item, column.path);
  };
  createKey = (item, column) => {
    return item.Id || column.path || column.key || column.label;
  };
  render() {
    const { columns } = this.props;
    return (
      <tbody>
        {this.props.data.map((item, index) => (
          <>
            <tr key={item.Id} className={item.edited ? "bg-warning" : null}>
              {columns.map((column) => (
                <td
                  key={this.createKey(item, column)}
                  className={column.color ? column.color : ""}
                >
                  {column.type === "rowNumber"
                    ? index + 1 + (this.props.currentPage - 1) * 10
                    : this.renderCell(
                        item,
                        column,
                        index + 1 + (this.props.currentPage - 1) * 10
                      )}
                </td>
              ))}
            </tr>
            {columns.map((column) =>
              column.collapsibleContet ? (
                <tr
                  id={`collapse${
                    index + 1 + (this.props.currentPage - 1) * 10
                  }`}
                  className="collapse"
                  aria-labelledby={`#heading${
                    index + 1 + (this.props.currentPage - 1) * 10
                  }`}
                >
                  <td colSpan={columns.length}>
                    {column.collapsibleContet(item)}
                  </td>
                </tr>
              ) : (
                ""
              )
            )}
          </>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
