import React, { useState, useRef, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const PoolingStatisticsTable = () => {
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
                      Question Title
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
                      Start Date
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "89.3333px" }}
                    >
                      End Date
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
                      Options 1
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "89.3333px" }}
                    >
                      Options 2
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "89.3333px" }}
                    >
                      Options 3
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "89.3333px" }}
                    >
                      Options 4
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "89.3333px" }}
                    >
                      Options 5
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "89.3333px" }}
                    >
                      Over All Count
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row"   >
                    <td>463</td>
                    <td>Predict the match winnwr?</td>
                    <td>Insia vs England</td>
                    <td>10/1/2023</td>
                    <td>20/02/2023</td>
                    <td>Active</td>
                    <td>2 india</td>
                    <td>1 England</td>
                    <td> - </td>
                    <td> - </td>
                    <td> - </td>
                    <td> 5</td>
                  </tr>
                  <tr role="row"   >
                    <td>463</td>
                    <td>Predict the match winnwr?</td>
                    <td>Insia vs England</td>
                    <td>10/1/2023</td>
                    <td>20/02/2023</td>
                    <td>Active</td>
                    <td>2 india</td>
                    <td>1 England</td>
                    <td> - </td>
                    <td> - </td>
                    <td> - </td>
                    <td> 5</td>
                  </tr>
                  <tr role="row"   >
                    <td>463</td>
                    <td>Predict the match winnwr?</td>
                    <td>Insia vs England</td>
                    <td>10/1/2023</td>
                    <td>20/02/2023</td>
                    <td>Active</td>
                    <td>2 india</td>
                    <td>1 England</td>
                    <td> - </td>
                    <td> - </td>
                    <td> - </td>
                    <td> 5</td>
                  </tr>
                  <tr role="row"   >
                    <td>463</td>
                    <td>Predict the match winnwr?</td>
                    <td>Insia vs England</td>
                    <td>10/1/2023</td>
                    <td>20/02/2023</td>
                    <td>Active</td>
                    <td>2 india</td>
                    <td>1 England</td>
                    <td> - </td>
                    <td> - </td>
                    <td> - </td>
                    <td> 5</td>
                  </tr>
                  <tr role="row"   >
                    <td>463</td>
                    <td>Predict the match winnwr?</td>
                    <td>Insia vs England</td>
                    <td>10/1/2023</td>
                    <td>20/02/2023</td>
                    <td>Active</td>
                    <td>2 india</td>
                    <td>1 England</td>
                    <td> - </td>
                    <td> - </td>
                    <td> - </td>
                    <td> 5</td>
                  </tr>
                  <tr role="row"   >
                    <td>463</td>
                    <td>Predict the match winnwr?</td>
                    <td>Insia vs England</td>
                    <td>10/1/2023</td>
                    <td>20/02/2023</td>
                    <td>Active</td>
                    <td>2 india</td>
                    <td>1 England</td>
                    <td> - </td>
                    <td> - </td>
                    <td> - </td>
                    <td> 5</td>
                  </tr>
                  <tr role="row"   >
                    <td>463</td>
                    <td>Predict the match winnwr?</td>
                    <td>Insia vs England</td>
                    <td>10/1/2023</td>
                    <td>20/02/2023</td>
                    <td>Active</td>
                    <td>2 india</td>
                    <td>1 England</td>
                    <td> - </td>
                    <td> - </td>
                    <td> - </td>
                    <td> 5</td>
                  </tr>
                  <tr role="row"   >
                    <td>463</td>
                    <td>Predict the match winnwr?</td>
                    <td>Insia vs England</td>
                    <td>10/1/2023</td>
                    <td>20/02/2023</td>
                    <td>Active</td>
                    <td>2 india</td>
                    <td>1 England</td>
                    <td> - </td>
                    <td> - </td>
                    <td> - </td>
                    <td> 5</td>
                  </tr>
                  <tr role="row"   >
                    <td>463</td>
                    <td>Predict the match winnwr?</td>
                    <td>Insia vs England</td>
                    <td>10/1/2023</td>
                    <td>20/02/2023</td>
                    <td>Active</td>
                    <td>2 india</td>
                    <td>1 England</td>
                    <td> - </td>
                    <td> - </td>
                    <td> - </td>
                    <td> 5</td>
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

export default PoolingStatisticsTable;
