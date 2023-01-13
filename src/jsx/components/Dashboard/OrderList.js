import React, { useState, useRef, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const OrderList = () => {
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
      <div className="form-head d-flex mb-3 align-items-start">
        <div className="mr-auto d-none d-lg-block">
          <h2 className="text-black font-w600 mb-0">Orders</h2>
          <p className="mb-0">Here is your order list data</p>
        </div>
        <Dropdown className="dropdown custom-dropdown">
          <Dropdown.Toggle
            variant=""
            className="i-false  btn btn-primary light d-flex align-items-center svg-btn"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <svg
              width={16}
              className="scale5"
              height={16}
              viewBox="0 0 22 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.16647 27.9558C9.25682 27.9856 9.34946 28.0001 9.44106 28.0001C9.71269 28.0001 9.97541 27.8732 10.1437 27.6467L21.5954 12.2248C21.7926 11.9594 21.8232 11.6055 21.6746 11.31C21.526 11.0146 21.2236 10.8282 20.893 10.8282H13.1053V0.874999C13.1053 0.495358 12.8606 0.15903 12.4993 0.042327C12.1381 -0.0743215 11.7428 0.0551786 11.5207 0.363124L0.397278 15.7849C0.205106 16.0514 0.178364 16.403 0.327989 16.6954C0.477614 16.9878 0.77845 17.1718 1.10696 17.1718H8.56622V27.125C8.56622 27.5024 8.80816 27.8373 9.16647 27.9558ZM2.81693 15.4218L11.3553 3.58389V11.7032C11.3553 12.1865 11.7471 12.5782 12.2303 12.5782H19.1533L10.3162 24.479V16.2968C10.3162 15.8136 9.92444 15.4218 9.44122 15.4218H2.81693Z"
                fill="#2F4CDD"
              />
            </svg>
            <span className="fs-16 ml-3">All Status</span>
            <i className="fa fa-angle-down scale5 ml-3" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
            <Dropdown.Item className="dropdown-item" >
              2020
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-item" >
              2019
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-item" >
              2018
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-item" >
              2017
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-item" >
              2016
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="dropdown custom-dropdown ml-3">
          <Dropdown.Toggle
            variant=""
            className="i-false  btn btn-primary light d-flex align-items-center svg-btn"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <svg
              width={16}
              height={16}
              className="scale5"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.4281 2.856H21.8681V1.428C21.8681 0.56 21.2801 0 20.4401 0C19.6001 0 19.0121 0.56 19.0121 1.428V2.856H9.71606V1.428C9.71606 0.56 9.15606 0 8.28806 0C7.42006 0 6.86006 0.56 6.86006 1.428V2.856H5.57206C2.85606 2.856 0.560059 5.152 0.560059 7.868V23.016C0.560059 25.732 2.85606 28.028 5.57206 28.028H22.4281C25.1441 28.028 27.4401 25.732 27.4401 23.016V7.868C27.4401 5.152 25.1441 2.856 22.4281 2.856ZM5.57206 5.712H22.4281C23.5761 5.712 24.5841 6.72 24.5841 7.868V9.856H3.41606V7.868C3.41606 6.72 4.42406 5.712 5.57206 5.712ZM22.4281 25.144H5.57206C4.42406 25.144 3.41606 24.136 3.41606 22.988V12.712H24.5561V22.988C24.5841 24.136 23.5761 25.144 22.4281 25.144Z"
                fill="#2F4CDD"
              />
            </svg>
            <span className="fs-16 ml-3">Today</span>
            <i className="fa fa-angle-down scale5 ml-3" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
            <Dropdown.Item className="dropdown-item" >
              Monday
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-item" >
              Tuesday
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-item" >
              Wednesday
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-item" >
              Thursday
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-item" >
              Friday
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-item" >
              Saturday
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-item" >
              Sunday
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
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
                      Order ID
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
                      Date
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
                      Customer Name
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "98.6667px" }}
                    >
                      Location
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: 68 }}
                    >
                      Amount
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      style={{ width: "89.3333px" }}
                    >
                      Status Order
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label=": activate to sort column ascending"
                      style={{ width: 24 }}
                    />
                  </tr>
                </thead>
                <tbody>
                  <tr role="row" className="odd">
                    <td className="sorting_1">#4546563</td>
                    <td>26 March 2020, 12:42 AM</td>
                    <td>Roberto Carlo</td>
                    <td>544 Manor Road London</td>
                    <td>$34.41</td>
                    <td>
                      <span className="btn btn-sm light btn-warning">
                        New Order
                      </span>
                    </td>
                    <td>
                      <Dropdown className="dropdown ml-auto text-right">
                        <Dropdown.Toggle
                          variant=""
                          className="i-false p-0 btn-link"
                          data-toggle="dropdown"
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <circle fill="#000000" cx={5} cy={12} r={2} />
                              <circle fill="#000000" cx={12} cy={12} r={2} />
                              <circle fill="#000000" cx={19} cy={12} r={2} />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item className="dropdown-item" >
                            <i className="las la-check-square scale5 text-primary mr-2" />{" "}
                            Accept Order
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" >
                            <i className="las la-times-circle scale5 text-danger mr-2" />{" "}
                            Reject Order
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="even">
                    <td className="sorting_1">#4546563</td>
                    <td>26 March 2020, 12:42 AM</td>
                    <td>Roberto Carlo</td>
                    <td>544 Manor Road London</td>
                    <td>$34.41</td>
                    <td>
                      <span className="btn btn-sm light btn-warning">
                        New Order
                      </span>
                    </td>
                    <td>
                      <Dropdown className="dropdown ml-auto text-right">
                        <Dropdown.Toggle
                          variant=""
                          className="i-false p-0 btn-link"
                          data-toggle="dropdown"
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <circle fill="#000000" cx={5} cy={12} r={2} />
                              <circle fill="#000000" cx={12} cy={12} r={2} />
                              <circle fill="#000000" cx={19} cy={12} r={2} />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item className="dropdown-item" >
                            <i className="las la-check-square scale5 text-primary mr-2" />{" "}
                            Accept Order
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" >
                            <i className="las la-times-circle scale5 text-danger mr-2" />{" "}
                            Reject Order
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="odd">
                    <td className="sorting_1">#4546563</td>
                    <td>26 March 2020, 12:42 AM</td>
                    <td>Roberto Carlo</td>
                    <td>544 Manor Road London</td>
                    <td>$34.41</td>
                    <td>
                      <span className="btn btn-sm light btn-warning">
                        New Order
                      </span>
                    </td>
                    <td>
                      <Dropdown className="dropdown ml-auto text-right">
                        <Dropdown.Toggle
                          variant=""
                          className="i-false p-0 btn-link"
                          data-toggle="dropdown"
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <circle fill="#000000" cx={5} cy={12} r={2} />
                              <circle fill="#000000" cx={12} cy={12} r={2} />
                              <circle fill="#000000" cx={19} cy={12} r={2} />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item className="dropdown-item" >
                            <i className="las la-check-square scale5 text-primary mr-2" />{" "}
                            Accept Order
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" >
                            <i className="las la-times-circle scale5 text-danger mr-2" />{" "}
                            Reject Order
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="even">
                    <td className="sorting_1">#5552351</td>
                    <td>26 March 2020, 12:42 AM</td>
                    <td>James WItcwicky</td>
                    <td>Corner Street 5th London</td>
                    <td>$164.52</td>
                    <td>
                      <span className="btn btn-sm light btn-warning fs-16">
                        New Order
                      </span>
                    </td>
                    <td>
                      <Dropdown className="dropdown ml-auto text-right">
                        <Dropdown.Toggle
                          variant=""
                          className="i-false p-0 btn-link"
                          data-toggle="dropdown"
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <circle fill="#000000" cx={5} cy={12} r={2} />
                              <circle fill="#000000" cx={12} cy={12} r={2} />
                              <circle fill="#000000" cx={19} cy={12} r={2} />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item className="dropdown-item" >
                            <i className="las la-check-square scale5 text-primary mr-2" />{" "}
                            Accept Order
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" >
                            <i className="las la-times-circle scale5 text-danger mr-2" />{" "}
                            Reject Order
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="odd">
                    <td className="sorting_1">#5552351</td>
                    <td>26 March 2020, 12:42 AM</td>
                    <td>Emilia Johanson</td>
                    <td>67 St. John’s Road London</td>
                    <td>$251.16</td>
                    <td>
                      <span className="btn btn-sm light btn-primary">
                        On Delivery
                      </span>
                    </td>
                    <td>
                      <Dropdown className="dropdown ml-auto text-right">
                        <Dropdown.Toggle
                          variant=""
                          className="i-false p-0 btn-link"
                          data-toggle="dropdown"
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <circle fill="#000000" cx={5} cy={12} r={2} />
                              <circle fill="#000000" cx={12} cy={12} r={2} />
                              <circle fill="#000000" cx={19} cy={12} r={2} />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item className="dropdown-item" >
                            <i className="las la-check-square scale5 text-primary mr-2" />{" "}
                            Accept Order
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" >
                            <i className="las la-times-circle scale5 text-danger mr-2" />{" "}
                            Reject Order
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="even">
                    <td className="sorting_1">#5552351</td>
                    <td>26 March 2020, 12:42 AM</td>
                    <td>Jessica Wong</td>
                    <td>11 Church Road London</td>
                    <td>$24.17</td>
                    <td>
                      <span className="btn btn-sm light btn-warning">
                        New Order
                      </span>
                    </td>
                    <td>
                      <Dropdown className="dropdown ml-auto text-right">
                        <Dropdown.Toggle
                          variant=""
                          className="i-false p-0 btn-link"
                          data-toggle="dropdown"
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <circle fill="#000000" cx={5} cy={12} r={2} />
                              <circle fill="#000000" cx={12} cy={12} r={2} />
                              <circle fill="#000000" cx={19} cy={12} r={2} />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item className="dropdown-item" >
                            <i className="las la-check-square scale5 text-primary mr-2" />{" "}
                            Accept Order
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" >
                            <i className="las la-times-circle scale5 text-danger mr-2" />{" "}
                            Reject Order
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="odd">
                    <td className="sorting_1">#5552351</td>
                    <td>26 March 2020, 12:42 AM</td>
                    <td>Olivia Shine</td>
                    <td>35 Station Road London</td>
                    <td>$82.46</td>
                    <td>
                      <span className="btn btn-sm light btn-success">
                        Delivered
                      </span>
                    </td>
                    <td>
                      <Dropdown className="dropdown ml-auto text-right">
                        <Dropdown.Toggle
                          variant=""
                          className="i-false p-0 btn-link"
                          data-toggle="dropdown"
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <circle fill="#000000" cx={5} cy={12} r={2} />
                              <circle fill="#000000" cx={12} cy={12} r={2} />
                              <circle fill="#000000" cx={19} cy={12} r={2} />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item className="dropdown-item" >
                            <i className="las la-check-square scale5 text-primary mr-2" />{" "}
                            Accept Order
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" >
                            <i className="las la-times-circle scale5 text-danger mr-2" />{" "}
                            Reject Order
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="even">
                    <td className="sorting_1">#5552351</td>
                    <td>26 March 2020, 12:42 AM</td>
                    <td>James WItcwicky</td>
                    <td>Corner Street 5th London</td>
                    <td>$164.52</td>
                    <td>
                      <span className="btn btn-sm light btn-warning fs-16">
                        New Order
                      </span>
                    </td>
                    <td>
                      <Dropdown className="dropdown ml-auto text-right">
                        <Dropdown.Toggle
                          variant=""
                          className="i-false p-0 btn-link"
                          data-toggle="dropdown"
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <circle fill="#000000" cx={5} cy={12} r={2} />
                              <circle fill="#000000" cx={12} cy={12} r={2} />
                              <circle fill="#000000" cx={19} cy={12} r={2} />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item className="dropdown-item" >
                            <i className="las la-check-square scale5 text-primary mr-2" />{" "}
                            Accept Order
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" >
                            <i className="las la-times-circle scale5 text-danger mr-2" />{" "}
                            Reject Order
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="odd">
                    <td className="sorting_1">#5552351</td>
                    <td>26 March 2020, 12:42 AM</td>
                    <td>Emilia Johanson</td>
                    <td>67 St. John’s Road London</td>
                    <td>$251.16</td>
                    <td>
                      <span className="btn btn-sm light btn-primary">
                        On Delivery
                      </span>
                    </td>
                    <td>
                      <Dropdown className="dropdown ml-auto text-right">
                        <Dropdown.Toggle
                          variant=""
                          className="i-false p-0 btn-link"
                          data-toggle="dropdown"
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <circle fill="#000000" cx={5} cy={12} r={2} />
                              <circle fill="#000000" cx={12} cy={12} r={2} />
                              <circle fill="#000000" cx={19} cy={12} r={2} />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item className="dropdown-item" >
                            <i className="las la-check-square scale5 text-primary mr-2" />{" "}
                            Accept Order
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" >
                            <i className="las la-times-circle scale5 text-danger mr-2" />{" "}
                            Reject Order
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr role="row" className="even">
                    <td className="sorting_1">#5552351</td>
                    <td>26 March 2020, 12:42 AM</td>
                    <td>Jessica Wong</td>
                    <td>11 Church Road London</td>
                    <td>$24.17</td>
                    <td>
                      <span className="btn btn-sm light btn-warning">
                        New Order
                      </span>
                    </td>
                    <td>
                      <Dropdown className="dropdown ml-auto text-right">
                        <Dropdown.Toggle
                          variant=""
                          className="i-false p-0 btn-link"
                          data-toggle="dropdown"
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            version="1.1"
                          >
                            <g
                              stroke="none"
                              strokeWidth={1}
                              fill="none"
                              fillRule="evenodd"
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <circle fill="#000000" cx={5} cy={12} r={2} />
                              <circle fill="#000000" cx={12} cy={12} r={2} />
                              <circle fill="#000000" cx={19} cy={12} r={2} />
                            </g>
                          </svg>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                          <Dropdown.Item className="dropdown-item" >
                            <i className="las la-check-square scale5 text-primary mr-2" />{" "}
                            Accept Order
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" >
                            <i className="las la-times-circle scale5 text-danger mr-2" />{" "}
                            Reject Order
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
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

export default OrderList;
