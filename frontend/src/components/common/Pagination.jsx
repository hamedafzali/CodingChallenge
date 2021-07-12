import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav className="bg-light">
      <ul className="pagination justify-content-center">
        <li
          className={
            currentPage === 1
              ? "page-item disabled user-select-none"
              : "page-item user-select-none"
          }
        >
          <div
            className="page-link"
            href="#"
            onClick={() => onPageChange(currentPage - 1)}
            tabindex="-1"
          >
            Previous
          </div>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <div className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </div>
          </li>
        ))}
        <li
          className={
            currentPage === pagesCount
              ? "page-item disabled user-select-none"
              : "page-item user-select-none"
          }
        >
          <div
            className="page-link"
            href="#"
            onClick={() => onPageChange(currentPage + 1)}
            tabindex="-1"
          >
            Next
          </div>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
