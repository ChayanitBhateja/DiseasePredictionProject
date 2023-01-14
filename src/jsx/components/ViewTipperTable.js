import React, { useState, useRef, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const ViewTipperTable = () => {
  const [data, setData] = useState(
    document.querySelectorAll("#order_list tbody tr")
  );
  const sort = 5;
  const activePag = useRef(0);
  const [test, settest] = useState(0);

  // Active data
  const chageData = (frist, sec) => {
    for (var i = 0; i < data.length; ++i) {
      if (i >= frist && i < sec) {
        data[i].classList.remove("d-none");
      } else {
        data[i].classList.add("d-none");
      }
    }
  };
  // use effect
  useEffect(() => {
    setData(document.querySelectorAll("#order_list tbody tr"));
  }, [test]);

  // Active pagginarion
  activePag.current === 0 && chageData(0, sort);
  // paggination
  let paggination = Array(Math.ceil(data.length / sort))
    .fill()
    .map((_, i) => i + 1);

  // Active paggination & chage data
  const onClick = (i) => {
    activePag.current = i;
    chageData(activePag.current * sort, (activePag.current + 1) * sort);
    settest(i);
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-3">
          <div className="form-group">
            <label className="mb-2 ">
              <strong className="">Search</strong>
            </label>
            <input type="search" className="form-control" />
          </div>
        </div>
        <div className="mb-5">
          <button type="submit" className="btn btn-primary mr-3 ">
            Search
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <div id="order_list" className="dataTables_wrapper no-footer">
              <table
                id="example5"
                className="display mb-4 dataTablesCard dataTable no-footer w-100 "
                style={{ minWidth: 845 }}
                role="grid"
                aria-describedby="example5_info"
              >
                <thead>
                  <tr role="row">
                    <th
                      className="sorting_asc"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-sort="ascending"
                      aria-label="Order ID: activate to sort column descending"
                      style={{ width: "71.3333px" }}
                    >
                      SNO.
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Date: activate to sort column ascending"
                      style={{ width: "74.6667px" }}
                    >
                      Title
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Customer Name: activate to sort column ascending"
                      style={{ width: "85.3333px" }}
                    >
                      Tipper Name
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "98.6667px" }}
                    >
                      Sefault per match price
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: 68 }}
                    >
                      Rating
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "89.3333px" }}
                    >
                      Status
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "89.3333px" }}
                    >
                      Edit
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "89.3333px" }}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" className="odd">
                    <td>463</td>
                    <td>Match tips</td>
                    <td>george</td>
                    <td>50000</td>
                    <td>4</td>
                    <td>Active</td>
                    <td>
                      <span className="btn btn-sm light btn-warning">Edit</span>
                    </td>
                    <td>
                      <span className="btn btn-sm light btn-warning">
                        Delete
                      </span>
                    </td>
                  </tr>
                  <tr role="row" className="odd">
                    <td>463</td>
                    <td>Match tips</td>
                    <td>george</td>
                    <td>50000</td>
                    <td>4</td>
                    <td>Active</td>
                    <td>
                      <span className="btn btn-sm light btn-warning">Edit</span>
                    </td>
                    <td>
                      <span className="btn btn-sm light btn-warning">
                        Delete
                      </span>
                    </td>
                  </tr>
                  <tr role="row" className="odd">
                    <td>463</td>
                    <td>Match tips</td>
                    <td>george</td>
                    <td>50000</td>
                    <td>4</td>
                    <td>Active</td>
                    <td>
                      <span className="btn btn-sm light btn-warning">Edit</span>
                    </td>
                    <td>
                      <span className="btn btn-sm light btn-warning">
                        Delete
                      </span>
                    </td>
                  </tr>
                  <tr role="row" className="odd">
                    <td>463</td>
                    <td>Match tips</td>
                    <td>george</td>
                    <td>50000</td>
                    <td>4</td>
                    <td>Active</td>
                    <td>
                      <span className="btn btn-sm light btn-warning">Edit</span>
                    </td>
                    <td>
                      <span className="btn btn-sm light btn-warning">
                        Delete
                      </span>
                    </td>
                  </tr>
                  <tr role="row" className="odd">
                    <td>463</td>
                    <td>Match tips</td>
                    <td>george</td>
                    <td>50000</td>
                    <td>4</td>
                    <td>Active</td>
                    <td>
                      <span className="btn btn-sm light btn-warning">Edit</span>
                    </td>
                    <td>
                      <span className="btn btn-sm light btn-warning">
                        Delete
                      </span>
                    </td>
                  </tr>
                  <tr role="row" className="odd">
                    <td>463</td>
                    <td>Match tips</td>
                    <td>george</td>
                    <td>50000</td>
                    <td>4</td>
                    <td>Active</td>
                    <td>
                      <span className="btn btn-sm light btn-warning">Edit</span>
                    </td>
                    <td>
                      <span className="btn btn-sm light btn-warning">
                        Delete
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="d-sm-flex text-center justify-content-between">
                <div className="dataTables_info">
                  Showing {activePag.current * sort + 1} to{" "}
                  {data.length > (activePag.current + 1) * sort
                    ? (activePag.current + 1) * sort
                    : data.length}{" "}
                  of {data.length} entries
                </div>
                <div
                  className="dataTables_paginate paging_simple_numbers"
                  id="example5_paginate"
                >
                  <Link
                    className="paginate_button previous disabled"
                    to="/order-list"
                    onClick={() =>
                      activePag.current > 0 && onClick(activePag.current - 1)
                    }
                  >
                    Previous
                  </Link>
                  <span>
                    {paggination.map((number, i) => (
                      <Link
                        key={i}
                        to="/order-list"
                        className={`paginate_button  ${
                          activePag.current === i ? "current" : ""
                        } `}
                        onClick={() => onClick(i)}
                      >
                        {number}
                      </Link>
                    ))}
                  </span>
                  <Link
                    className="paginate_button next"
                    to="/order-list"
                    onClick={() =>
                      activePag.current + 1 < paggination.length &&
                      onClick(activePag.current + 1)
                    }
                  >
                    Next
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ViewTipperTable;
