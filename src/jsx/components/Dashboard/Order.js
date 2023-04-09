import React from "react";
//Images
import map2 from "../../../images/map-2.png";
import avatar1 from "../../../images/avatar/1.jpg";
import avatar3 from "../../../images/avatar/3.jpg";
import delivery from "../../../images/delivery.png";
import pic1 from "../../../images/dish/pic1.jpg";
import pic2 from "../../../images/dish/pic2.jpg";
import pic3 from "../../../images/dish/pic3.jpg";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const Order = () => {
  return (
    <>
      <div className="form-head d-flex mb-3 align-items-start">
        <div className="mr-auto d-none d-lg-block">
          <h2 className="text-black font-w600 mb-0">Order ID #5552351</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/order" className="text-primary">
                Dashboard
              </Link>
            </li>
            <li className="breadcrumb-item active">
              <Link to="/order">Order Detaills</Link>
            </li>
          </ol>
        </div>
        <Dropdown className="dropdown mb-md-3 mb-2 ml-auto">
          <Dropdown.Toggle
            variant=""
            className="btn btn-success dropdown-toggle"
            data-toggle="dropdown"
          >
            <svg
              width={22}
              className="mr-2"
              height={28}
              viewBox="0 0 22 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.16647 27.9558C9.25682 27.9856 9.34946 28.0001 9.44106 28.0001C9.71269 28.0001 9.97541 27.8732 10.1437 27.6467L21.5954 12.2248C21.7926 11.9594 21.8232 11.6055 21.6746 11.31C21.526 11.0146 21.2236 10.8282 20.893 10.8282H13.1053V0.874999C13.1053 0.495358 12.8606 0.15903 12.4993 0.042327C12.1381 -0.0743215 11.7428 0.0551786 11.5207 0.363124L0.397278 15.7849C0.205106 16.0514 0.178364 16.403 0.327989 16.6954C0.477614 16.9878 0.77845 17.1718 1.10696 17.1718H8.56622V27.125C8.56622 27.5024 8.80816 27.8373 9.16647 27.9558ZM2.81693 15.4218L11.3553 3.58389V11.7032C11.3553 12.1865 11.7471 12.5782 12.2303 12.5782H19.1533L10.3162 24.479V16.2968C10.3162 15.8136 9.92444 15.4218 9.44122 15.4218H2.81693Z"
                fill="#fff"
              />
            </svg>
            <span>ON DELIVERY</span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu dropdown-menu-left">
            <Link className="dropdown-item" to="/order">
              A To Z List
            </Link>
            <Link className="dropdown-item" to="/order">
              Z To A List
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="row">
        <div className="col-xl-3 col-xxl-3 col-lg-12 col-md-12">
          <div className="row">
            <div className="col-xl-12 col-lg-6 ">
              <div className="card h-auto">
                <div className="card-body text-center">
                  <img
                    src={avatar1}
                    width={150}
                    className="rounded-circle mb-4"
                    alt="avatar1"
                  />
                  <h4 className="mb-3 text-black font-w600">James Witwitcky</h4>
                  <Link to="/order" className="btn btn-primary light btn-xs">
                    Customer
                  </Link>
                </div>
                <div className="card bg-secondary sticky mb-0">
                  <div className="card-header border-0 pb-0">
                    <h5 className="card-title text-white mt-2">Note Order</h5>
                  </div>
                  <div className="card-body pt-3">
                    <p className="fs-14 op7 text-white">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                  </div>
                  <div className="card-footer border-0 py-4 bg-warning rounded-xl">
                    <div className="media align-items-center">
                      <img
                        className="mr-3 to=-fluid rounded-circle"
                        width={50}
                        src={delivery}
                        alt="delivery"
                      />
                      <div className="media-body">
                        <h5 className="my-0 text-white">
                          6 The Avenue, <br />
                          London EC50 4GN
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12 col-lg-6">
              <div className="card">
                <div className="card-header border-0 pb-0">
                  <h4 className="card-title">Disease History</h4>
                </div>
                <div className="card-body">
                  <div className="widget-timeline-icon">
                    <ul className="timeline">
                      <li>
                        <div className="icon bg-primary" />
                        <Link className="timeline-panel text-muted" to="/order">
                          <h4 className="mb-2">Order Delivered</h4>
                          <p className="fs-15 mb-0 ">Wait..</p>
                        </Link>
                      </li>
                      <li>
                        <div className="icon bg-primary" />
                        <Link className="timeline-panel text-muted" to="/order">
                          <h4 className="mb-2">On Delivery</h4>
                          <p className="fs-15 mb-0 ">
                            Sat, 23 Jul 2020, 01:24 PM
                          </p>
                        </Link>
                      </li>
                      <li>
                        <div className="icon bg-primary" />
                        <Link className="timeline-panel text-muted" to="/order">
                          <h4 className="mb-2">Payment Success</h4>
                          <p className="fs-15 mb-0 ">
                            Fri, 22 Jul 2020, 10:44 AM
                          </p>
                        </Link>
                      </li>
                      <li>
                        <div className="icon bg-primary" />
                        <Link className="timeline-panel text-muted" to="/order">
                          <h4 className="mb-2">Order Created</h4>
                          <p className="fs-15 mb-0 ">
                            Thu, 21 Jul 2020, 11:49 AM
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-xxl-9 col-lg-12 col-md-12">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body pt-2">
                  <div className="table-responsive ">
                    <table className="table items-table">
                      <tbody>
                        <tr>
                          <th className="my-0 text-black font-w500 fs-20">
                            Items
                          </th>
                          <th
                            style={{ width: "10%" }}
                            className="my-0 text-black font-w500 fs-20"
                          >
                            Qty
                          </th>
                          <th
                            style={{ width: "10%" }}
                            className="my-0 text-black font-w500 fs-20"
                          >
                            Price
                          </th>
                          <th className="my-0 text-black font-w500 fs-20">
                            Total Price
                          </th>
                          <th />
                        </tr>
                        <tr>
                          <td>
                            <div className="media">
                              <Link to="ecom-product-detail.html">
                                <img
                                  className="mr-3 to=-fluid rounded"
                                  width={85}
                                  src={pic1}
                                  alt="pic1"
                                />
                              </Link>
                              <div className="media-body">
                                <small className="mt-0 mb-1 font-w500">
                                  <Link className="text-primary" to="/order">
                                    BURGER
                                  </Link>
                                </small>
                                <h5 className="mt-0 mb-2 mb-4">
                                  <Link
                                    className="text-black"
                                    to="ecom-product-detail.html"
                                  >
                                    Chicken curry special with cucumber
                                  </Link>
                                </h5>
                                <div className="star-review fs-14">
                                  <i className="fa fa-star text-orange" />
                                  <i className="fa fa-star text-orange" />
                                  <i className="fa fa-star text-orange" />
                                  <i className="fa fa-star text-gray" />
                                  <i className="fa fa-star text-gray" />
                                  <span className="ml-3 text-dark">
                                    451 reviews
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h4 className="my-0 text-secondary font-w600">
                              3x
                            </h4>
                          </td>
                          <td>
                            <h4 className="my-0 text-secondary font-w600">
                              $14.99
                            </h4>
                          </td>
                          <td>
                            <h4 className="my-0 text-secondary font-w600">
                              $44.97
                            </h4>
                          </td>
                          <td>
                            <Link
                              to="/order"
                              className="ti-close fs-28 text-danger las la-times-circle"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="media">
                              <Link to="ecom-product-detail.html">
                                <img
                                  className="mr-3 to=-fluid rounded"
                                  width={85}
                                  src={pic2}
                                  alt="pic2"
                                />
                              </Link>
                              <div className="media-body">
                                <small className="mt-0 mb-1 font-w500">
                                  <Link className="text-primary" to="/order">
                                    PIZZA
                                  </Link>
                                </small>
                                <h5 className="mt-0 mb-2 text-black mb-4">
                                  <Link
                                    className="text-black"
                                    to="ecom-product-detail.html"
                                  >
                                    Italiano pizza with garlic
                                  </Link>
                                </h5>
                                <div className="star-review fs-14">
                                  <i className="fa fa-star text-orange" />
                                  <i className="fa fa-star text-orange" />
                                  <i className="fa fa-star text-orange" />
                                  <i className="fa fa-star text-gray" />
                                  <i className="fa fa-star text-gray" />
                                  <span className="ml-3 text-dark">
                                    451 reviews
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h4 className="my-0 text-secondary font-w600">
                              1x
                            </h4>
                          </td>
                          <td>
                            <h4 className="my-0 text-secondary font-w600">
                              $4.12
                            </h4>
                          </td>
                          <td>
                            <h4 className="my-0 text-secondary font-w600">
                              $4.12
                            </h4>
                          </td>
                          <td>
                            <Link
                              to="/order"
                              className="ti-close fs-28 text-danger las la-times-circle"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="media">
                              <Link to="ecom-product-detail.html">
                                <img
                                  className="mr-3 to=-fluid rounded"
                                  width={85}
                                  src={pic3}
                                  alt="pic3"
                                />
                              </Link>
                              <div className="media-body">
                                <small className="mt-0 mb-1 font-w500">
                                  <Link className="text-primary" to="/order">
                                    JUICE
                                  </Link>
                                </small>
                                <h5 className="mt-0 mb-2 text-black mb-4">
                                  <Link
                                    className="text-black"
                                    to="ecom-product-detail.html"
                                  >
                                    Watermelon juice with ice
                                  </Link>
                                </h5>
                                <div className="star-review fs-14">
                                  <i className="fa fa-star text-orange" />
                                  <i className="fa fa-star text-orange" />
                                  <i className="fa fa-star text-orange" />
                                  <i className="fa fa-star text-gray" />
                                  <i className="fa fa-star text-gray" />
                                  <span className="ml-3 text-dark">
                                    451 reviews
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <h4 className="my-0 text-secondary font-w600">
                              2x
                            </h4>
                          </td>
                          <td>
                            <h4 className="my-0 text-secondary font-w600">
                              $15.44
                            </h4>
                          </td>
                          <td>
                            <h4 className="my-0 text-secondary font-w600">
                              $15.44
                            </h4>
                          </td>
                          <td>
                            <Link
                              to="/order"
                              className="ti-close fs-28 text-danger las la-times-circle"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body">
                  <div className="full-map-area mb-4">
                    <img src={map2} alt="map2" />
                    <Link to="/order" className="btn btn-danger btn-xs">
                      View in Fullscreen
                    </Link>
                    <i className="flaticon-381-location-4" />
                  </div>
                  <div className="row mx-0">
                    <div className="media align-items-center col-md-4 col-lg-6 px-0 mb-3 mb-md-0">
                      <img
                        className="mr-3 to=-fluid rounded-circle"
                        width={65}
                        src={avatar3}
                        alt="avatar3"
                      />
                      <div className="media-body">
                        <h4 className="my-0 text-black">Kevin Hobs Jr.</h4>
                        <small>ID 412455</small>
                      </div>
                    </div>
                    <div className="iconbox col-md-4 col-lg-3 mb-3 mb-md-0">
                      <i className="las la-phone" />
                      <small>Telepon</small>
                      <p>+12 345 5662 66</p>
                    </div>
                    <div className="iconbox col-md-4 col-lg-3 mb-md-0">
                      <i className="las la-shipping-fast" />
                      <small>Delivery Time</small>
                      <p>12:52 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
