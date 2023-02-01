import React, { useState, useRef, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import PoolingOption from "./PoolingOption";

const ViewPoolingTable = () => {
  const [optionModal, setOptionModal] = useState(false);
  return (
    <Fragment>
      <PoolingOption show={optionModal} close={() => setOptionModal(false)} />
      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <div id="order_list" className="dataTables_wrapper no-footer">
              <table
                id="example5"
                className="display mb-4 dataTable no-footer w-100 "
                style={{ minWidth: 845 }}
                role="grid"
                aria-describedby="example5_info"
              >
                <thead>
                  <tr role="row">
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Date: activate to sort column ascending"
                      style={{ width: "250.6667px" }}
                    >
                      Question Title
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "200.6667px" }}
                    >
                      Match Name
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "50px" }}
                    >
                      Start Date
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "50.3333px" }}
                    >
                      End Date
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "50.3333px" }}
                    >
                      Status
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "50.3333px" }}
                    >
                      Options
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "50.3333px" }}
                    >
                      Created
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "50.3333px" }}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" className="odd">
                    <td>Predict the match winnwr?</td>
                    <td>Insia vs England</td>
                    <td>10/1/2023</td>
                    <td>20/02/2023</td>
                    <td>Active</td>

                    <td>
                      <span
                        className="btn btn-sm light btn-warning"
                        onClick={() => setOptionModal(true)}
                      >
                        View
                      </span>
                    </td>
                    <td>10/1/2023</td>

                    <td>
                      <span className="btn btn-sm light btn-warning">Edit</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ViewPoolingTable;
