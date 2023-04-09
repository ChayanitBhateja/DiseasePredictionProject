import React from "react";
import { Link } from "react-router-dom";
//import Rating from "@material-ui/lab/Rating";
import { Dropdown, Tab, Nav } from "react-bootstrap";
import CountUp from "react-countup";

//Image
import ic_stat3 from "../../.././images/svg/ic_stat3.svg";
import pic1 from "../../.././images/dish/pic1.jpg";
import pic2 from "../../.././images/dish/pic2.jpg";
import pic3 from "../../.././images/dish/pic3.jpg";
import pic4 from "../../.././images/dish/pic4.jpg";
import pic5 from "../../.././images/dish/pic5.jpg";

import OrderChart from "../davur/analytics/OrdersChart";

const Analytics = () => {
  return (
    <>
      <div className="form-head d-flex mb-3 align-items-start">
        <div className="mr-auto d-none d-lg-block">
          <h2 className="text-black font-w600 mb-0">Analytics</h2>
          <p className="mb-0">
            Here is your restaurant summary with graph view
          </p>
        </div>
        <Dropdown className="dropdown custom-dropdown">
          <Dropdown.Toggle className="i-false btn btn-sm btn-primary light d-flex align-items-center svg-btn">
            <svg
              width={28}
              height={28}
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M22.4281 2.856H21.8681V1.428C21.8681 0.56 21.2801 0 20.4401 0C19.6001 0 19.0121 0.56 19.0121 1.428V2.856H9.71606V1.428C9.71606 0.56 9.15606 0 8.28806 0C7.42006 0 6.86006 0.56 6.86006 1.428V2.856H5.57206C2.85606 2.856 0.560059 5.152 0.560059 7.868V23.016C0.560059 25.732 2.85606 28.028 5.57206 28.028H22.4281C25.1441 28.028 27.4401 25.732 27.4401 23.016V7.868C27.4401 5.152 25.1441 2.856 22.4281 2.856ZM5.57206 5.712H22.4281C23.5761 5.712 24.5841 6.72 24.5841 7.868V9.856H3.41606V7.868C3.41606 6.72 4.42406 5.712 5.57206 5.712ZM22.4281 25.144H5.57206C4.42406 25.144 3.41606 24.136 3.41606 22.988V12.712H24.5561V22.988C24.5841 24.136 23.5761 25.144 22.4281 25.144Z"
                  fill="#2F4CDD"
                />
              </g>
            </svg>
            <div className="text-left ml-3">
              <span className="d-block fs-16">Filter Periode</span>
              <small className="d-block fs-13">4 June 2020 - 4 July 2020</small>
            </div>
            <i className="fa fa-angle-down scale5 ml-3" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu-right">
            <Dropdown.Item className="dropdown-item" to="#">
              4 June 2020 - 4 July 2020
            </Dropdown.Item>
            <Dropdown.Item className="dropdown-item" to="#">
              5 july 2020 - 4 Aug 2020
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="row">
        <div className="col-xl-6 col-xxl-6 col-lg-12 col-lg-9 col-md-12">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header border-0 pb-0 d-sm-flex d-block">
                  <div>
                    <h4 className="card-title mb-1">Chart Orders</h4>
                    <small className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur
                    </small>
                  </div>
                  <Dropdown className="dropdown mt-3 mt-sm-0">
                    <Dropdown.Toggle
                      type="button"
                      className="btn btn-primary dropdown-toggle light fs-14"
                      aria-expanded="false"
                    >
                      Weekly
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                      <Dropdown.Item className="dropdown-item" to="#">
                        Daily
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" to="#">
                        Weekly
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" to="#">
                        Monthly
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="card-body revenue-chart px-3">
                  <div className="d-flex align-items-end pl-3">
                    <div className="mr-4">
                      <h3 className="font-w600 mb-0">
                        <img
                          src={ic_stat3}
                          height={22}
                          width={22}
                          className="mr-2 mb-1"
                          alt="ic_stat3"
                        />
                        <span className="counter">
                          <CountUp start={0} end={257} duration={5} />
                        </span>
                        k
                      </h3>
                      <small className="text-dark fs-14">Total Sales</small>
                    </div>
                    <div>
                      <h3 className="font-w600 mb-0">
                        <img
                          src={ic_stat3}
                          height={22}
                          width={22}
                          className="mr-2 mb-1"
                          alt="ic_stat3"
                        />
                        <span className="counter">
                          <CountUp start={0} end={1245} duration={5} />
                        </span>
                        k
                      </h3>
                      <small className="text-dark fs-14">
                        Avg. Sales per day
                      </small>
                    </div>
                  </div>
                  {/* <div id="chartBar" /> */}
                  <OrderChart />
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <Tab.Container defaultActiveKey="monthly">
                <div className="card">
                  <div className="card-header border-0 pb-0 d-sm-flex d-block">
                    <div>
                      <h4 className="card-title mb-1">Most Favorites Items</h4>
                      <small className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur
                      </small>
                    </div>
                    <div className="card-action card-tabs">
                      <Nav as="ul" className="nav nav-tabs" role="tablist">
                        <Nav.Item className="nav-item">
                          <Nav.Link
                            className="nav-link"
                            data-toggle="tab"
                            to="#monthly"
                            role="tab"
                            eventKey="monthly"
                          >
                            Monthly
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item">
                          <Nav.Link
                            className="nav-link"
                            data-toggle="tab"
                            to="#weekly1"
                            role="tab"
                            eventKey="weekly"
                          >
                            Weekly
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item">
                          <Nav.Link
                            className="nav-link"
                            data-toggle="tab"
                            to="#today1"
                            role="tab"
                            eventKey="today"
                          >
                            Today
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                  </div>
                  <Tab.Content>
                    <div className="card-body tab-content pb-0">
                      <Tab.Pane eventKey="monthly">
                        <div className="row">
                          <div className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5">
                            <div className="media mb-4">
                              <Link to="ecom-product-detail">
                                <img
                                  src={pic5}
                                  style={{ width: "100%" }}
                                  className="rounded"
                                  alt="pic5"
                                />
                              </Link>
                            </div>
                            <div className="info">
                              <h5 className="mb-3">
                                <Link
                                  className="text-black"
                                  to="ecom-product-detail"
                                >
                                  Meidum Spicy Spagethi Italiano
                                </Link>
                              </h5>
                              <div className="star-review fs-14 mb-3">
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-gray"></i>
                                <i className="fa fa-star  text-gray"></i>
                                <span className="ml-3 text-dark">
                                  451 reviews
                                </span>
                              </div>{" "}
                              <Link
                                to="#"
                                className="btn btn-primary light btn-sm btn-rounded px-4"
                              >
                                <i className="fa fa-heart-o mr-2 scale5 " />{" "}
                                <strong>256k</strong> Like it
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5">
                            <div className="media mb-4">
                              <Link to="ecom-product-detail">
                                <img
                                  src={pic4}
                                  style={{ width: "100%" }}
                                  className="rounded"
                                  alt="pic4"
                                />
                              </Link>
                            </div>
                            <div className="info">
                              <h5 className="text-black mb-3">
                                <Link
                                  className="text-black"
                                  to="ecom-product-detail"
                                >
                                  Pizza Meal for Kids (Small size)
                                </Link>
                              </h5>
                              <div className="star-review fs-14 mb-3">
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-gray"></i>
                                <i className="fa fa-star  text-gray"></i>
                                <span className="ml-3 text-dark">
                                  451 reviews
                                </span>
                              </div>{" "}
                              <Link
                                to="#"
                                className="btn btn-primary light btn-sm btn-rounded px-4"
                              >
                                <i className="fa fa-heart-o mr-2 scale5 " />{" "}
                                <strong>256k</strong> Like it
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5">
                            <div className="media mb-4">
                              <Link to="ecom-product-detail">
                                <img
                                  src={pic3}
                                  style={{ width: "100%" }}
                                  className="rounded"
                                  alt="pic3"
                                />
                              </Link>
                            </div>
                            <div className="info">
                              <h5 className="text-black mb-3">
                                <Link
                                  className="text-black"
                                  to="ecom-product-detail"
                                >
                                  Meidum Spicy Spagethi Italiano
                                </Link>
                              </h5>
                              <div className="star-review fs-14 mb-3">
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-gray"></i>
                                <i className="fa fa-star  text-gray"></i>
                                <span className="ml-3 text-dark">
                                  451 reviews
                                </span>
                              </div>{" "}
                              <Link
                                to="#"
                                className="btn btn-primary light btn-sm btn-rounded px-4"
                              >
                                <i className="fa fa-heart-o mr-2 scale5 " />{" "}
                                <strong>256k</strong> Like it
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5">
                            <div className="media mb-4">
                              <Link to="ecom-product-detail">
                                <img
                                  src={pic2}
                                  style={{ width: "100%" }}
                                  className="rounded"
                                  alt="pic2"
                                />
                              </Link>
                            </div>
                            <div className="info">
                              <h5 className="text-black mb-3">
                                <Link
                                  className="text-black"
                                  to="ecom-product-detail"
                                >
                                  Medium Spicy Pizza with Kemangi Leaf
                                </Link>
                              </h5>
                              <div className="star-review fs-14 mb-3">
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-gray"></i>
                                <i className="fa fa-star  text-gray"></i>
                                <span className="ml-3 text-dark">
                                  451 reviews
                                </span>
                              </div>{" "}
                              <Link
                                to="#"
                                className="btn btn-primary light btn-sm btn-rounded px-4"
                              >
                                <i className="fa fa-heart-o mr-2 scale5 " />{" "}
                                <strong>256k</strong> Like it
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5">
                            <div className="media mb-4">
                              <Link to="ecom-product-detail">
                                <img
                                  src={pic1}
                                  style={{ width: "100%" }}
                                  className="rounded"
                                  alt="pic1"
                                />
                              </Link>
                            </div>
                            <div className="info">
                              <h5 className="text-black mb-3">
                                <Link
                                  className="text-black"
                                  to="ecom-product-detail"
                                >
                                  Tuna soup spinach with himalaya salt
                                </Link>
                              </h5>
                              <div className="star-review fs-14 mb-3">
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-gray"></i>
                                <i className="fa fa-star  text-gray"></i>
                                <span className="ml-3 text-dark">
                                  451 reviews
                                </span>
                              </div>{" "}
                              <Link
                                to="#"
                                className="btn btn-primary light btn-sm btn-rounded px-4"
                              >
                                <i className="fa fa-heart-o mr-2 scale5 " />{" "}
                                <strong>256k</strong> Like it
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5">
                            <div className="media mb-4">
                              <Link to="ecom-product-detail">
                                <img
                                  src={pic5}
                                  style={{ width: "100%" }}
                                  className="rounded"
                                  alt="pic5"
                                />
                              </Link>
                            </div>
                            <div className="info">
                              <h5 className="text-black mb-3">
                                <Link
                                  className="text-black"
                                  to="ecom-product-detail"
                                >
                                  Tuna soup spinach with himalaya salt
                                </Link>
                              </h5>
                              <div className="star-review fs-14 mb-3">
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-gray"></i>
                                <i className="fa fa-star  text-gray"></i>
                                <span className="ml-3 text-dark">
                                  451 reviews
                                </span>
                              </div>{" "}
                              <Link
                                to="#"
                                className="btn btn-primary light btn-sm btn-rounded px-4"
                              >
                                <i className="fa fa-heart-o mr-2 scale5 " />{" "}
                                <strong>256k</strong> Like it
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="weekly">
                        <div className="row">
                          <div className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5">
                            <div className="media mb-4">
                              <Link to="ecom-product-detail">
                                <img
                                  src={pic5}
                                  style={{ width: "100%" }}
                                  className="rounded"
                                  alt="pic5"
                                />
                              </Link>
                            </div>
                            <div className="info">
                              <h5 className="text-black mb-3">
                                <Link
                                  className="text-black"
                                  to="ecom-product-detail"
                                >
                                  Meidum Spicy Spagethi Italiano
                                </Link>
                              </h5>
                              <div className="star-review fs-14 mb-3">
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-gray"></i>
                                <i className="fa fa-star  text-gray"></i>
                                <span className="ml-3 text-dark">
                                  451 reviews
                                </span>
                              </div>{" "}
                              <Link
                                to="#"
                                className="btn btn-primary light btn-sm btn-rounded px-4"
                              >
                                <i className="fa fa-heart-o mr-2 scale5 " />{" "}
                                <strong>256k</strong> Like it
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5">
                            <div className="media mb-4">
                              <Link to="ecom-product-detail">
                                <img
                                  src={pic4}
                                  style={{ width: "100%" }}
                                  className="rounded"
                                  alt="pic4"
                                />
                              </Link>
                            </div>
                            <div className="info">
                              <h5 className="text-black mb-3">
                                <Link
                                  className="text-black"
                                  to="ecom-product-detail"
                                >
                                  Pizza Meal for Kids (Small size)
                                </Link>
                              </h5>
                              <div className="star-review fs-14 mb-3">
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-gray"></i>
                                <i className="fa fa-star  text-gray"></i>
                                <span className="ml-3 text-dark">
                                  451 reviews
                                </span>
                              </div>{" "}
                              <Link
                                to="#"
                                className="btn btn-primary light btn-sm btn-rounded px-4"
                              >
                                <i className="fa fa-heart-o mr-2 scale5 " />{" "}
                                <strong>256k</strong> Like it
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5">
                            <div className="media mb-4">
                              <Link to="ecom-product-detail">
                                <img
                                  src={pic3}
                                  style={{ width: "100%" }}
                                  className="rounded"
                                  alt="pic3"
                                />
                              </Link>
                            </div>
                            <div className="info">
                              <h5 className="text-black mb-3">
                                <Link
                                  className="text-black"
                                  to="ecom-product-detail"
                                >
                                  Meidum Spicy Spagethi Italiano
                                </Link>
                              </h5>
                              <div className="star-review fs-14 mb-3">
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-gray"></i>
                                <i className="fa fa-star  text-gray"></i>
                                <span className="ml-3 text-dark">
                                  451 reviews
                                </span>
                              </div>{" "}
                              <Link
                                to="#"
                                className="btn btn-primary light btn-sm btn-rounded px-4"
                              >
                                <i className="fa fa-heart-o mr-2 scale5 " />{" "}
                                <strong>256k</strong> Like it
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5">
                            <div className="media mb-4">
                              <Link to="ecom-product-detail">
                                <img
                                  src={pic2}
                                  style={{ width: "100%" }}
                                  className="rounded"
                                  alt="pic2"
                                />
                              </Link>
                            </div>
                            <div className="info">
                              <h5 className="text-black mb-3">
                                <Link
                                  className="text-black"
                                  to="ecom-product-detail"
                                >
                                  Tuna soup spinach with himalaya salt
                                </Link>
                              </h5>
                              <div className="star-review fs-14 mb-3">
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-gray"></i>
                                <i className="fa fa-star  text-gray"></i>
                                <span className="ml-3 text-dark">
                                  451 reviews
                                </span>
                              </div>{" "}
                              <Link
                                to="#"
                                className="btn btn-primary light btn-sm btn-rounded px-4"
                              >
                                <i className="fa fa-heart-o mr-2 scale5 " />{" "}
                                <strong>256k</strong> Like it
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="today">
                        <div className="row">
                          <div className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5">
                            <div className="media mb-4">
                              <Link to="ecom-product-detail">
                                <img
                                  src={pic4}
                                  style={{ width: "100%" }}
                                  className="rounded"
                                  alt="pic4"
                                />
                              </Link>
                            </div>
                            <div className="info">
                              <h5 className="text-black mb-3">
                                <Link
                                  className="text-black"
                                  to="ecom-product-detail"
                                >
                                  Tuna soup spinach with himalaya salt
                                </Link>
                              </h5>
                              <div className="star-review fs-14 mb-3">
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-gray"></i>
                                <i className="fa fa-star  text-gray"></i>
                                <span className="ml-3 text-dark">
                                  451 reviews
                                </span>
                              </div>{" "}
                              <Link
                                to="#"
                                className="btn btn-primary light btn-sm btn-rounded px-4"
                              >
                                <i className="fa fa-heart-o mr-2 scale5 " />{" "}
                                <strong>256k</strong> Like it
                              </Link>
                            </div>
                          </div>
                          <div className="col-md-4 col-xl-4 col-xxl-6 col-sm-6 mb-5">
                            <div className="media mb-4">
                              <Link to="ecom-product-detail">
                                <img
                                  src={pic2}
                                  style={{ width: "100%" }}
                                  className="rounded"
                                  alt="pic2"
                                />
                              </Link>
                            </div>
                            <div className="info">
                              <h5 className="text-black mb-3">
                                <Link
                                  className="text-black"
                                  to="ecom-product-detail"
                                >
                                  Medium Spicy Pizza with Kemangi Leaf
                                </Link>
                              </h5>
                              <div className="star-review fs-14 mb-3">
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-orange"></i>
                                <i className="fa fa-star mr-1 text-gray"></i>
                                <i className="fa fa-star  text-gray"></i>
                                <span className="ml-3 text-dark">
                                  451 reviews
                                </span>
                              </div>{" "}
                              <Link
                                to="#"
                                className="btn btn-primary light btn-sm btn-rounded px-4"
                              >
                                <i className="fa fa-heart-o mr-2 scale5 " />{" "}
                                <strong>256k</strong> Like it
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                    </div>
                  </Tab.Content>
                  <div className="card-footer border-0 pt-0 text-center">
                    <Link to="#" className="btn-link">
                      View more <i className="fa fa-angle-down ml-2 scale-2" />
                    </Link>
                  </div>
                </div>
              </Tab.Container>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-xxl-6 col-lg-12  col-lg-9 col-md-12">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header border-0 pb-0 d-sm-flex d-block">
                  <div>
                    <h4 className="card-title mb-1">Trending Items</h4>
                    <small className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur
                    </small>
                  </div>
                  <Dropdown className="dropdown mt-3 mt-sm-0">
                    <Dropdown.Toggle
                      type="button"
                      className="btn btn-primary dropdown-toggle light fs-14"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Weekly
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                      <Dropdown.Item className="dropdown-item" to="#">
                        Daily
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" to="#">
                        Weekly
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" to="#">
                        Monthly
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="card-body p-0 pt-3">
                  <div className="media items-list-1">
                    <span className="number col-1 px-0 align-self-center">
                      #1
                    </span>
                    <Link to="ecom-product-detail">
                      <img
                        className="img-fluid rounded mr-3"
                        width={85}
                        src={pic1}
                        alt="DexignZone"
                      />
                    </Link>
                    <div className="media-body col-sm-4 col-6 col-xxl-5 px-0">
                      <h5 className="mt-0 mb-3">
                        <Link className="text-black" to="ecom-product-detail">
                          Tuna soup spinach with himalaya salt
                        </Link>
                      </h5>
                      <small className="font-w500">
                        <strong className="text-secondary mr-2">$12.56</strong>{" "}
                        <Link className="text-primary" to="#">
                          PIZZA
                        </Link>
                      </small>
                    </div>
                    <div className="media-footer ml-auto col-3 px-0 d-flex align-self-center align-items-center">
                      <div className="mr-3">
                        <span
                          className="peity-success"
                          data-style="width:100%;"
                        >
                          0,2,1,4
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-0 font-w600 text-black">524</h3>
                        <span className="fs-14">Sales (12%)</span>
                      </div>
                    </div>
                  </div>
                  <div className="media items-list-1">
                    <span className="number col-1 px-0 align-self-center">
                      #2
                    </span>
                    <Link to="ecom-product-detail">
                      <img
                        className="img-fluid rounded mr-3"
                        width={85}
                        src={pic2}
                        alt="DexignZone"
                      />
                    </Link>
                    <div className="media-body col-sm-4 col-6 col-xxl-5 px-0">
                      <h5 className="mt-0 mb-3 text-black">
                        <Link className="text-black" to="ecom-product-detail">
                          Tuna soup spinach with himalaya salt
                        </Link>
                      </h5>
                      <small className="font-w500">
                        <strong className="text-secondary mr-2">$12.56</strong>{" "}
                        <Link className="text-primary" to="#">
                          JUICE
                        </Link>
                      </small>
                    </div>
                    <div className="media-footer ml-auto col-3 px-0 d-flex align-self-center align-items-center">
                      <div className="mr-3">
                        <span className="peity-danger" data-style="width:100%;">
                          4,1,2,0
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-0 font-w600 text-black">215</h3>
                        <span className="fs-14">Sales (12%)</span>
                      </div>
                    </div>
                  </div>
                  <div className="media items-list-1">
                    <span className="number col-1 px-0 align-self-center">
                      #3
                    </span>
                    <Link to="ecom-product-detail">
                      <img
                        className="img-fluid rounded mr-3"
                        width={85}
                        src={pic3}
                        alt="DexignZone"
                      />
                    </Link>
                    <div className="media-body col-sm-4 col-6 col-xxl-5 px-0">
                      <h5 className="mt-0 mb-3 text-black">
                        <Link className="text-black" to="ecom-product-detail">
                          Chicken curry special with cucumber
                        </Link>
                      </h5>
                      <small className="font-w500">
                        <strong className="text-secondary mr-2">$12.56</strong>{" "}
                        <Link className="text-primary" to="#">
                          PIZZA
                        </Link>
                      </small>
                    </div>
                    <div className="media-footer ml-auto col-3 px-0 d-flex align-self-center align-items-center">
                      <div className="mr-3">
                        <span
                          className="peity-success"
                          data-style="width:100%;"
                        >
                          0,2,1,4
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-0 font-w600 text-black">524</h3>
                        <span className="fs-14">Sales (12%)</span>
                      </div>
                    </div>
                  </div>
                  <div className="media items-list-1">
                    <span className="number col-1 px-0 align-self-center">
                      #4
                    </span>
                    <Link to="ecom-product-detail">
                      <img
                        className="img-fluid rounded mr-3"
                        width={85}
                        src={pic4}
                        alt="DexignZone"
                      />
                    </Link>
                    <div className="media-body col-sm-4 col-6 col-xxl-5 px-0">
                      <h5 className="mt-0 mb-3 text-black">
                        <Link className="text-black" to="ecom-product-detail">
                          Watermelon juice with ice
                        </Link>
                      </h5>
                      <small className="font-w500">
                        <strong className="text-secondary mr-2">$12.56</strong>{" "}
                        <Link className="text-primary" to="#">
                          PIZZA
                        </Link>
                      </small>
                    </div>
                    <div className="media-footer ml-auto col-3 px-0 d-flex align-self-center align-items-center">
                      <div className="mr-3">
                        <span
                          className="peity-success"
                          data-style="width:100%;"
                        >
                          0,2,1,4
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-0 font-w600 text-black">76</h3>
                        <span className="fs-14">Sales (12%)</span>
                      </div>
                    </div>
                  </div>
                  <div className="media items-list-1">
                    <span className="number col-1 px-0 align-self-center">
                      #5
                    </span>
                    <Link to="ecom-product-detail">
                      <img
                        className="img-fluid rounded mr-3"
                        width={85}
                        src={pic5}
                        alt="DexignZone"
                      />
                    </Link>
                    <div className="media-body col-sm-4 col-6 col-xxl-5 px-0">
                      <h5 className="mt-0 mb-3 text-black">
                        <Link className="text-black" to="ecom-product-detail">
                          Tuna soup spinach with himalaya salt
                        </Link>
                      </h5>
                      <small className="font-w500">
                        <strong className="text-secondary mr-2">$12.56</strong>{" "}
                        <Link className="text-primary" to="#">
                          BURGER
                        </Link>
                      </small>
                    </div>
                    <div className="media-footer ml-auto col-3 px-0 d-flex align-self-center align-items-center">
                      <div className="mr-3">
                        <span className="peity-danger" data-style="width:100%;">
                          4,1,2,0
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-0 font-w600 text-black">180</h3>
                        <span className="fs-14">Sales (12%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <Tab.Container defaultActiveKey="monthly">
                <div className="card">
                  <div className="card-header border-0 pb-0 d-sm-flex d-block">
                    <div>
                      <h4 className="card-title mb-1">Most Selling Items</h4>
                      <small className="mb-0">
                        Lorem ipsum dolor sit amet, consectetur
                      </small>
                    </div>
                    <div className="card-action card-tabs mt-3 mt-sm-0">
                      <Nav as="ul" className="nav nav-tabs" role="tablist">
                        <Nav.Item className="nav-item">
                          <Nav.Link
                            className="nav-link"
                            data-toggle="tab"
                            to="#weekly"
                            role="tab"
                            eventKey="monthly"
                          >
                            Monthly
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item">
                          <Nav.Link
                            className="nav-link"
                            data-toggle="tab"
                            to="#weekly"
                            role="tab"
                            eventKey="weekly"
                          >
                            Weekly
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item">
                          <Nav.Link
                            className="nav-link"
                            data-toggle="tab"
                            to="#today"
                            role="tab"
                            eventKey="today"
                          >
                            Today
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </div>
                  </div>
                  <div className="card-body tab-content">
                    <Tab.Content>
                      <Tab.Pane eventKey="monthly">
                        <div className="media mb-4 items-list-2">
                          <Link to="ecom-product-detail">
                            <img
                              className="img-fluid rounded mr-3"
                              width={85}
                              src={pic5}
                              alt="DexignZone"
                            />
                          </Link>
                          <div className="media-body col-6 px-0">
                            <h5 className="mt-0 mb-1">
                              <Link
                                className="text-black"
                                to="ecom-product-detail"
                              >
                                Meidum Spicy Spagethi Italiano
                              </Link>
                            </h5>
                            <small className="font-w500 mb-3">
                              <Link className="text-primary" to="#">
                                {" "}
                                BURGER
                              </Link>
                            </small>
                            <span className="text-secondary mr-2 fo" />
                            <ul className="fs-14 list-inline">
                              <li className="mr-3">Serves for 4 Person</li>
                              <li>24mins</li>
                            </ul>
                          </div>
                          <div className="media-footer align-self-center ml-auto d-block align-items-center d-sm-flex">
                            <h3 className="mb-0 font-w600 text-secondary">
                              $12.56
                            </h3>
                            <Dropdown className="dropdown ml-3 ">
                              <Dropdown.Toggle
                                variant=""
                                type="button"
                                className="btn btn-secondary sharp tp-btn-light i-false"
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
                                    <circle
                                      fill="#000000"
                                      cx={5}
                                      cy={12}
                                      r={2}
                                    />
                                    <circle
                                      fill="#000000"
                                      cx={12}
                                      cy={12}
                                      r={2}
                                    />
                                    <circle
                                      fill="#000000"
                                      cx={19}
                                      cy={12}
                                      r={2}
                                    />
                                  </g>
                                </svg>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                <Dropdown.Item className="dropdown-item" to="#">
                                  Edit
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item" to="#">
                                  Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                        <div className="media mb-4 items-list-2">
                          <Link to="ecom-product-detail">
                            <img
                              className="img-fluid rounded mr-3"
                              width={85}
                              src={pic4}
                              alt="DexignZone"
                            />
                          </Link>
                          <div className="media-body col-6 px-0">
                            <h5 className="mt-0 mb-1">
                              <Link
                                className="text-black"
                                to="ecom-product-detail"
                              >
                                Pizza Meal for Kids (Small size)
                              </Link>
                            </h5>
                            <small className="font-w500 mb-3">
                              <Link className="text-primary" to="#">
                                {" "}
                                PIZZA
                              </Link>
                            </small>
                            <span className="text-secondary mr-2 fo" />
                            <ul className="fs-14 list-inline">
                              <li className="mr-3">Serves for 4 Person</li>
                              <li>24mins</li>
                            </ul>
                          </div>
                          <div className="media-footer align-self-center ml-auto d-block align-items-center d-sm-flex">
                            <h3 className="mb-0 font-w600 text-secondary">
                              $5.67
                            </h3>
                            <Dropdown className="dropdown ml-3 ">
                              <Dropdown.Toggle
                                type="button"
                                variant=""
                                className="btn btn-secondary sharp tp-btn-light i-false"
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
                                    <circle
                                      fill="#000000"
                                      cx={5}
                                      cy={12}
                                      r={2}
                                    />
                                    <circle
                                      fill="#000000"
                                      cx={12}
                                      cy={12}
                                      r={2}
                                    />
                                    <circle
                                      fill="#000000"
                                      cx={19}
                                      cy={12}
                                      r={2}
                                    />
                                  </g>
                                </svg>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                <Dropdown.Item className="dropdown-item" to="#">
                                  Edit
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item" to="#">
                                  Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                        <div className="media mb-4 items-list-2">
                          <Link to="ecom-product-detail">
                            <img
                              className="img-fluid rounded mr-3"
                              width={85}
                              src={pic3}
                              alt="DexignZone"
                            />
                          </Link>
                          <div className="media-body col-6 px-0">
                            <h5 className="mt-0 mb-1">
                              <Link
                                className="text-black"
                                to="ecom-product-detail"
                              >
                                Medium Spicy Pizza with Kemangi Leaf
                              </Link>
                            </h5>
                            <small className="font-w500 mb-3">
                              <Link className="text-primary" to="#">
                                {" "}
                                JUICE
                              </Link>
                            </small>
                            <span className="text-secondary mr-2 fo" />
                            <ul className="fs-14 list-inline">
                              <li className="mr-3">Serves for 4 Person</li>
                              <li>24mins</li>
                            </ul>
                          </div>
                          <div className="media-footer align-self-center ml-auto d-block align-items-center d-sm-flex">
                            <h3 className="mb-0 font-w600 text-secondary">
                              $11.21
                            </h3>
                            <Dropdown className="dropdown ml-3 ">
                              <Dropdown.Toggle
                                variant=""
                                type="button"
                                className="btn btn-secondary sharp tp-btn-light i-false"
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
                                    <circle
                                      fill="#000000"
                                      cx={5}
                                      cy={12}
                                      r={2}
                                    />
                                    <circle
                                      fill="#000000"
                                      cx={12}
                                      cy={12}
                                      r={2}
                                    />
                                    <circle
                                      fill="#000000"
                                      cx={19}
                                      cy={12}
                                      r={2}
                                    />
                                  </g>
                                </svg>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                <Dropdown.Item className="dropdown-item" to="#">
                                  Edit
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item" to="#">
                                  Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                        <div className="media mb-4 items-list-2">
                          <Link to="ecom-product-detail">
                            <img
                              className="img-fluid rounded mr-3"
                              width={85}
                              src={pic2}
                              alt="DexignZone"
                            />
                          </Link>
                          <div className="media-body col-6 px-0">
                            <h5 className="mt-0 mb-1">
                              <Link
                                className="text-black"
                                to="ecom-product-detail"
                              >
                                Tuna soup spinach with himalaya salt
                              </Link>
                            </h5>
                            <small className="font-w500 mb-3">
                              <Link className="text-primary" to="#">
                                {" "}
                                PIZZA
                              </Link>
                            </small>
                            <span className="text-secondary mr-2 fo" />
                            <ul className="fs-14 list-inline">
                              <li className="mr-3">Serves for 4 Person</li>
                              <li>24mins</li>
                            </ul>
                          </div>
                          <div className="media-footer align-self-center ml-auto d-block align-items-center d-sm-flex">
                            <h3 className="mb-0 font-w600 text-secondary">
                              $8.15
                            </h3>
                            <Dropdown className="dropdown ml-3 ">
                              <Dropdown.Toggle
                                variant=""
                                type="button"
                                className="btn btn-secondary sharp tp-btn-light i-false"
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
                                    <circle
                                      fill="#000000"
                                      cx={5}
                                      cy={12}
                                      r={2}
                                    />
                                    <circle
                                      fill="#000000"
                                      cx={12}
                                      cy={12}
                                      r={2}
                                    />
                                    <circle
                                      fill="#000000"
                                      cx={19}
                                      cy={12}
                                      r={2}
                                    />
                                  </g>
                                </svg>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                <Dropdown.Item className="dropdown-item" to="#">
                                  Edit
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item" to="#">
                                  Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                        <div className="media items-list-2">
                          <Link to="ecom-product-detail">
                            <img
                              className="img-fluid rounded mr-3"
                              width={85}
                              src={pic1}
                              alt="DexignZone"
                            />
                          </Link>
                          <div className="media-body col-6 px-0">
                            <h5 className="mt-0 mb-1">
                              <Link
                                className="text-black"
                                to="ecom-product-detail"
                              >
                                Watermelon juice with ice
                              </Link>
                            </h5>
                            <small className="font-w500 mb-3">
                              <Link className="text-primary" to="#">
                                BURGER
                              </Link>
                            </small>
                            <span className="text-secondary mr-2 fo" />
                            <ul className="fs-14 list-inline">
                              <li className="mr-3">Serves for 4 Person</li>
                              <li>24mins</li>
                            </ul>
                          </div>
                          <div className="media-footer align-self-center ml-auto d-block align-items-center d-sm-flex">
                            <h3 className="mb-0 font-w600 text-secondary">
                              $5.67
                            </h3>
                            <Dropdown className="dropdown ml-3 ">
                              <Dropdown.Toggle
                                type="button"
                                className="btn btn-secondary sharp tp-btn-light i-false"
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
                                    <circle
                                      fill="#000000"
                                      cx={5}
                                      cy={12}
                                      r={2}
                                    />
                                    <circle
                                      fill="#000000"
                                      cx={12}
                                      cy={12}
                                      r={2}
                                    />
                                    <circle
                                      fill="#000000"
                                      cx={19}
                                      cy={12}
                                      r={2}
                                    />
                                  </g>
                                </svg>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                <Dropdown.Item className="dropdown-item" to="#">
                                  Edit
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item" to="#">
                                  Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="weekly">
                        <div className="media mb-4 items-list-2">
                          <Link to="ecom-product-detail">
                            <img
                              className="img-fluid rounded mr-3"
                              width={85}
                              src={pic3}
                              alt="DexignZone"
                            />
                          </Link>
                          <div className="media-body col-6 px-0">
                            <h5 className="mt-0 mb-1">
                              <Link
                                className="text-black"
                                to="ecom-product-detail"
                              >
                                Pizza Meal for Kids (Small size)
                              </Link>
                            </h5>
                            <small className="font-w500 mb-3">
                              <Link className="text-primary" to="#">
                                BURGER
                              </Link>
                            </small>
                            <span className="text-secondary mr-2 fo" />
                            <ul className="fs-14 list-inline">
                              <li className="mr-3">Serves for 4 Person</li>
                              <li>24mins</li>
                            </ul>
                          </div>
                          <div className="media-footer align-self-center ml-auto d-block align-items-center d-sm-flex">
                            <h3 className="mb-0 font-w600 text-secondary">
                              $11.21
                            </h3>
                            <Dropdown className="dropdown ml-3 ">
                              <Dropdown.Toggle
                                variant=""
                                type="button"
                                className="btn btn-secondary sharp tp-btn-light i-false"
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
                                    <circle
                                      fill="#000000"
                                      cx={5}
                                      cy={12}
                                      r={2}
                                    />
                                    <circle
                                      fill="#000000"
                                      cx={12}
                                      cy={12}
                                      r={2}
                                    />
                                    <circle
                                      fill="#000000"
                                      cx={19}
                                      cy={12}
                                      r={2}
                                    />
                                  </g>
                                </svg>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                <Dropdown.Item className="dropdown-item" to="#">
                                  Edit
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item" to="#">
                                  Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                        <div className="media mb-4 items-list-2">
                          <Link to="ecom-product-detail">
                            <img
                              className="img-fluid rounded mr-3"
                              width={85}
                              src={pic2}
                              alt="DexignZone"
                            />
                          </Link>
                          <div className="media-body col-6 px-0">
                            <h5 className="mt-0 mb-1">
                              <Link
                                className="text-black"
                                to="ecom-product-detail"
                              >
                                Meidum Spicy Spagethi Italiano
                              </Link>
                            </h5>
                            <small className="font-w500 mb-3">
                              <Link className="text-primary" to="#">
                                PIZZA
                              </Link>
                            </small>
                            <span className="text-secondary mr-2 fo" />
                            <ul className="fs-14 list-inline">
                              <li className="mr-3">Serves for 4 Person</li>
                              <li>24mins</li>
                            </ul>
                          </div>
                          <div className="media-footer align-self-center ml-auto d-block align-items-center d-sm-flex">
                            <h3 className="mb-0 font-w600 text-secondary">
                              $8.15
                            </h3>
                            <Dropdown className="dropdown ml-3 ">
                              <Dropdown.Toggle
                                variant=""
                                type="button"
                                className="btn btn-secondary sharp tp-btn-light i-false"
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
                                    <circle
                                      fill="#000000"
                                      cx={5}
                                      cy={12}
                                      r={2}
                                    />
                                    <circle
                                      fill="#000000"
                                      cx={12}
                                      cy={12}
                                      r={2}
                                    />
                                    <circle
                                      fill="#000000"
                                      cx={19}
                                      cy={12}
                                      r={2}
                                    />
                                  </g>
                                </svg>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                <Dropdown.Item className="dropdown-item" to="#">
                                  Edit
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item" to="#">
                                  Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                        <div className="media items-list-2">
                          <Link to="ecom-product-detail">
                            <img
                              className="img-fluid rounded mr-3"
                              width={85}
                              src={pic1}
                              alt="DexignZone"
                            />
                          </Link>
                          <div className="media-body col-6 px-0">
                            <h5 className="mt-0 mb-1">
                              <Link
                                className="text-black"
                                to="ecom-product-detail"
                              >
                                Tuna soup spinach with himalaya salt
                              </Link>
                            </h5>
                            <small className="font-w500 mb-3">
                              <Link className="text-primary" to="#">
                                {" "}
                                JUICE
                              </Link>
                            </small>
                            <span className="text-secondary mr-2 fo" />
                            <ul className="fs-14 list-inline">
                              <li className="mr-3">Serves for 4 Person</li>
                              <li>24mins</li>
                            </ul>
                          </div>
                          <div className="media-footer align-self-center ml-auto d-block align-items-center d-sm-flex">
                            <h3 className="mb-0 font-w600 text-secondary">
                              $5.67
                            </h3>
                            <Dropdown className="dropdown ml-3 ">
                              <Dropdown.Toggle
                                variant=""
                                type="button"
                                className="btn btn-secondary sharp tp-btn-light i-false"
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
                                    <circle
                                      fill="#000000"
                                      cx={5}
                                      cy={12}
                                      r={2}
                                    />
                                    <circle
                                      fill="#000000"
                                      cx={12}
                                      cy={12}
                                      r={2}
                                    />
                                    <circle
                                      fill="#000000"
                                      cx={19}
                                      cy={12}
                                      r={2}
                                    />
                                  </g>
                                </svg>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                <Dropdown.Item className="dropdown-item" to="#">
                                  Edit
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item" to="#">
                                  Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="today">
                        <div className="media mb-4 items-list-2">
                          <Link to="ecom-product-detail">
                            <img
                              className="img-fluid rounded mr-3"
                              width={85}
                              src={pic2}
                              alt="DexignZone"
                            />
                          </Link>
                          <div className="media-body col-6 px-0">
                            <h5 className="mt-0 mb-1">
                              <Link
                                className="text-black"
                                to="ecom-product-detail"
                              >
                                Tuna soup spinach with himalaya salt
                              </Link>
                            </h5>
                            <small className="font-w500 mb-3">
                              <Link className="text-primary" to="#">
                                {" "}
                                JUICE
                              </Link>
                            </small>
                            <span className="text-secondary mr-2 fo" />
                            <ul className="fs-14 list-inline">
                              <li className="mr-3">Serves for 4 Person</li>
                              <li>24mins</li>
                            </ul>
                          </div>
                          <div className="media-footer align-self-center ml-auto d-block align-items-center d-sm-flex">
                            <h3 className="mb-0 font-w600 text-secondary">
                              $8.15
                            </h3>
                            <Dropdown className="dropdown ml-3 ">
                              <Dropdown.Toggle
                                type="button"
                                variant=""
                                className="btn btn-secondary sharp tp-btn-light i-false"
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
                                    <circle
                                      fill="#000000"
                                      cx={5}
                                      cy={12}
                                      r={2}
                                    />
                                    <circle
                                      fill="#000000"
                                      cx={12}
                                      cy={12}
                                      r={2}
                                    />
                                    <circle
                                      fill="#000000"
                                      cx={19}
                                      cy={12}
                                      r={2}
                                    />
                                  </g>
                                </svg>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                <Dropdown.Item className="dropdown-item" to="#">
                                  Edit
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item" to="#">
                                  Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                        <div className="media items-list-2">
                          <Link to="ecom-product-detail">
                            <img
                              className="img-fluid rounded mr-3"
                              width={85}
                              src={pic1}
                              alt="DexignZone"
                            />
                          </Link>
                          <div className="media-body col-6 px-0">
                            <h5 className="mt-0 mb-1">
                              <Link
                                className="text-black"
                                to="ecom-product-detail"
                              >
                                Watermelon juice with ice
                              </Link>
                            </h5>
                            <small className="font-w500 mb-3">
                              <Link className="text-primary" to="#">
                                PIZZA
                              </Link>
                            </small>
                            <span className="text-secondary mr-2 fo" />
                            <ul className="fs-14 list-inline">
                              <li className="mr-3">Serves for 4 Person</li>
                              <li>24mins</li>
                            </ul>
                          </div>
                          <div className="media-footer align-self-center ml-auto d-block align-items-center d-sm-flex">
                            <h3 className="mb-0 font-w600 text-secondary">
                              $5.67
                            </h3>
                            <Dropdown className="dropdown ml-3 ">
                              <Dropdown.Toggle
                                type="button"
                                className="btn i-false btn-secondary sharp tp-btn-light Most Selling ItemsMost Selling Itemslse"
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
                                    <circle
                                      fill="#000000"
                                      cx={5}
                                      cy={12}
                                      r={2}
                                    />
                                    <circle
                                      fill="#000000"
                                      cx={12}
                                      cy={12}
                                      r={2}
                                    />
                                    <circle
                                      fill="#000000"
                                      cx={19}
                                      cy={12}
                                      r={2}
                                    />
                                  </g>
                                </svg>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                <Dropdown.Item className="dropdown-item" to="#">
                                  Edit
                                </Dropdown.Item>
                                <Dropdown.Item className="dropdown-item" to="#">
                                  Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </div>
                        </div>
                      </Tab.Pane>
                      <div className="card-footer border-0 pt-0 text-center mt-4">
                        <Link to="#" className="btn-link">
                          View more
                          <i className="fa fa-angle-down ml-2 scale-2" />
                        </Link>
                      </div>
                    </Tab.Content>
                  </div>
                </div>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
