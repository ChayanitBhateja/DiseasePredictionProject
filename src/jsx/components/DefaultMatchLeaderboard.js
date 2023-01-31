import React, { useState, useRef, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const DefaultMatchLeaderboard = () => {
  // Active data

  // use effect

  return (
    <Fragment>
      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <div id="order_lis" className="dataTables_wrapper no-footer">
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
                      Event Type
                    </th>

                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "98.6667px" }}
                    >
                      Match Name
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: 68 }}
                    >
                      Reward Nmae
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "89.3333px" }}
                    >
                      Rank
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "89.3333px" }}
                    >
                      Image
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "89.3333px" }}
                    >
                      Description
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "89.3333px" }}
                    >
                      Reward
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "89.3333px" }}
                    >
                      Create
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "89.3333px" }}
                    >
                      Delete
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
                  <tr role="row">
                    <td>4</td>
                    <td>event type</td>
                    <td>Insia vs England</td>
                    <td>winner</td>
                    <td>4</td>
                    <td>image</td>
                    <td>description</td>
                    <td>200 gold</td>
                    <td> 10/02/2022</td>
                    <td>
                      <span className="btn btn-sm light btn-warning">
                        Delete
                      </span>
                    </td>
                    <td>
                      <span className="btn btn-sm light btn-warning">Edit</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="d-sm-flex text-center justify-content-between">
                <div className="dataTables_info">Showing of 5 entries</div>
                <div
                  className="dataTables_paginate paging_simple_numbers"
                  id="example5_paginate"
                >
                  <Link
                    className="paginate_button previous disabled"
                    to="/order-list"
                  >
                    Previous
                  </Link>
                  <span>
                    <Link to="/order-list" className="paginate_button"></Link>
                  </span>
                  <Link className="paginate_button next" to="/order-list">
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

export default DefaultMatchLeaderboard;
