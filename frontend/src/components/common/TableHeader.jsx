import React, { Component } from "react";
import TableHeaderItem from "./TableHeaderItem";
import _ from "lodash";
import moment from "moment";
class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };

    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (column.headerContent) return column.headerContent();
    if (column.filtered)
      return (
        <TableHeaderItem
          path={column.path}
          data={
            column.dateFormated
              ? Object.keys(
                  _.groupBy(
                    this.props.data.map((i) => ({
                      ...i,
                      [column.path]: moment([column.path]).format(
                        column.dateFormated
                      ),
                    })),
                    column.path
                  )
                )
              : Object.keys(_.groupBy(this.props.data, column.path))
          }
          handleClick={this.props.handleClick}
        />
      );
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) =>
            !column.headerContent ? (
              <th
                key={column.path || column.key || column.label}
                onClick={() => this.raiseSort(column.path)}
              >
                <div>
                  {column.label} {this.renderSortIcon(column)}
                </div>
              </th>
            ) : (
              <th
                className="clickable"
                key={column.path || column.key || column.label}
              >
                {column.label} {this.renderSortIcon(column)}
              </th>
            )
          )}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
