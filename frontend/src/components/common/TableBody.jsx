import React, { Component } from "react";
import _ from "underscore";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
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
          <tr key={item.Id} className={item.edited ? "bg-warning" : null}>
            {columns.map((column) => (
              <td
                key={this.createKey(item, column)}
                className={column.color ? column.color : ""}
              >
                {column.type === "rowNumber"
                  ? ++index + (this.props.currentPage - 1) * 10
                  : this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
