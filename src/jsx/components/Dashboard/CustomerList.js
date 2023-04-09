import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const CustomerList = () => {
  const [data, setData] = useState(
    document.querySelectorAll("#customerList_1 tbody tr")
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
    setData(document.querySelectorAll("#coustomer_table tbody tr"));
    //chackboxFun();
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
  //const chackbox = document.querySelectorAll(".sorting_1 input");
  //const motherChackBox = document.querySelector(".sorting_asc input");
  // console.log(document.querySelectorAll(".sorting_1 input")[0].checked);
  /* const chackboxFun = (type) => {
    for (let i = 0; i < chackbox.length; i++) {
      const element = chackbox[i];
      if (type === "all") {
        if (motherChackBox.checked) {
          element.checked = true;
        } else {
          element.checked = false;
        }
      } else {
        if (!element.checked) {
          motherChackBox.checked = false;
          break;
        } else {
          motherChackBox.checked = true;
        }
      }
    }
  }; */
  return (
    <>
      <div className="form-head d-flex mb-3 align-items-start">
        <div className="mr-auto d-none d-lg-block">
          <h2 className="text-black font-w600 mb-0">General Customers</h2>
          <p className="mb-0">Here is your general customers list data</p>
        </div>
        <Dropdown className="dropdown custom-dropdown">
          <Dropdown.Toggle
            variant=""
            className="btn btn-primary i-false  light d-flex align-items-center svg-btn"
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
            <span className="fs-16 ml-3">Filter</span>
            <i className="fa fa-angle-down scale5 ml-3" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
            <Link to={"#"} className="dropdown-item">
              2020
            </Link>
            <Link to={"#"} className="dropdown-item">
              2019
            </Link>
            <Link to={"#"} className="dropdown-item">
              2018
            </Link>
            <Link to={"#"} className="dropdown-item" >
              2017
            </Link>
            <Link to={"#"} className="dropdown-item" >
              2016
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <div id="coustomer_table" className="dataTables_wrapper no-footer">
              <table
                id="example5"
                className="display mb-4 dataTablesCard dataTable no-footer w-100"
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
                      aria-label="Customer ID: activate to sort column descending"
                      style={{ width: "84.6667px" }}
                    >
                      Customer ID
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Join Date: activate to sort column ascending"
                      style={{ width: 82 }}
                    >
                      Join Date
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Customer Name: activate to sort column ascending"
                      style={{ width: "84.6667px" }}
                    >
                      Customer Name
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Location: activate to sort column ascending"
                      style={{ width: 104 }}
                    >
                      Location
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Total Spent: activate to sort column ascending"
                      style={{ width: 58 }}
                    >
                      Total Spent
                    </th>
                    <th
                      className="sorting"
                      tabIndex={0}
                      aria-controls="example5"
                      rowSpan={1}
                      colSpan={1}
                      aria-label="Last Order: activate to sort column ascending"
                      style={{ width: 74 }}
                    >
                      Last Order
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
                      <span className="btn btn-sm light btn-secondary fs-16">
                        $34.41
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
                          <Dropdown.Item className="dropdown-item">
                            View Detail
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item">
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item">
                            Delete
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
                      <span className="btn btn-sm light btn-secondary fs-16">
                        $34.41
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
                            View Detail
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" >
                            Delete
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
                      <span className="btn btn-sm light btn-secondary fs-16">
                        $34.41
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
                          <Dropdown.Item className="dropdown-item">
                            View Detail
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item">
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item">
                            Delete
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
                      <span className="btn btn-sm light btn-secondary fs-16">
                        $34.41
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
                          <Dropdown.Item className="dropdown-item">
                            View Detail
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item">
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item">
                            Delete
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
                      <span className="btn btn-sm light btn-secondary fs-16">
                        $70.00
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
                          <Dropdown.Item className="dropdown-item">
                            View Detail
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item">
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item">
                            Delete
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
                      <span className="btn btn-sm light btn-secondary fs-16">
                        $34.41
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
                          <Dropdown.Item className="dropdown-item">
                            View Detail
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item">
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item">
                            Delete
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
                      <span className="btn btn-sm light btn-secondary fs-16">
                        $50.50
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
                          <Dropdown.Item className="dropdown-item">
                            View Detail
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item">
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item">
                            Delete
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
                      <span className="btn btn-sm light btn-secondary fs-16">
                        $34.41
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
                          <Dropdown.Item className="dropdown-item">
                            View Detail
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item">
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item">
                            Delete
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
                      <span className="btn btn-sm light btn-secondary fs-16">
                        $70.00
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
                          <Dropdown.Item className="dropdown-item">
                            View Detail
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item">
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item">
                            Delete
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
                      <span className="btn btn-sm light btn-secondary fs-16">
                        $34.41
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
                          <Dropdown.Item className="dropdown-item">
                            View Detail
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item">
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item">
                            Delete
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
                    to="/general-customers"
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
                        to="/general-customers"
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
                    to="/general-customers"
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
    </>
  );
};

export default CustomerList;
