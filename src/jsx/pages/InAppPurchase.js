import React, { useState, useRef, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Row, Col, Card, Button, Tab, Nav } from "react-bootstrap";
import CreatePackege from "../components/CreatePackege";

const InAppPurchase = () => {
  const [createPackege, setCreatepackege] = useState(false);
  // Active data

  // use effect

  return (
    <Fragment>
      <CreatePackege
        show={createPackege}
        close={() => setCreatepackege(false)}
      />
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center flex-column flex-sm-row">
          <div>
            <Card.Title>In App Purchase</Card.Title>
          </div>
          <div>
            <Button
              className=""
              variant="outline-primary"
              onClick={() => setCreatepackege(true)}
            >
              Create Packages
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col-12">
              <div>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="form-group">
                      <label className="mb-2 ">
                        <strong className="">Package</strong>
                      </label>
                      <select
                        defaultValue="tipper"
                        name="emailstatus"
                        className="form-control"
                        // onClick={(e) => setUserType(e.target.value)}
                      >
                        <option value="user">option 1</option>
                        <option value="tipper">option 2</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="form-group">
                      <label className="mb-2 ">
                        <strong className="">Status</strong>
                      </label>
                      <select
                        defaultValue="tipper"
                        name="emailstatus"
                        className="form-control"
                        // onClick={(e) => setUserType(e.target.value)}
                      >
                        <option value="user">option 1</option>
                        <option value="tipper">option 2</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <button
                    className="btn btn-primary mr-3 "
                    // onClick={() => user()}
                  >
                    Search
                  </button>
                  <button type="submit" className="btn btn-primary ">
                    Clear
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="table-responsive">
                    <div
                      id="order_lis"
                      className="dataTables_wrapper no-footer"
                    >
                      <table
                        id="example5"
                        className="display mb-4  dataTable no-footer w-100 "
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
                              style={{ width: "74.6667px" }}
                            >
                              Package
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="example5"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "150.6667px" }}
                            >
                              Plan Name
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="example5"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "50px" }}
                            >
                              Image
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="example5"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "50.3333px" }}
                            >
                              Source Amount
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="example5"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "50.3333px" }}
                            >
                              Converted Amount
                            </th>

                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="example5"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "50.3333px" }}
                            >
                              Device Type
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="example5"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "50.3333px" }}
                            >
                              Create At
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="example5"
                              rowSpan={1}
                              colSpan={1}
                              style={{ width: "50.3333px" }}
                            >
                              Updated At
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
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row">
                            <td>Diamonds to Gold </td>
                            <td>50000 gold to 50 Diamonds</td>
                            <td>Image</td>
                            <td>5.00</td>

                            <td>500000</td>
                            <td>IOS Web</td>
                            <td> 10/02/2022</td>
                            <td> 10/02/2022</td>
                            <td>Active</td>
                            <td>
                              <span className="btn btn-sm light btn-warning">
                                Edit
                              </span>
                            </td>
                          </tr>
                          <tr role="row">
                            <td>Diamonds to Gold </td>
                            <td>50000 gold to 50 Diamonds</td>
                            <td>Image</td>
                            <td>5.00</td>

                            <td>500000</td>
                            <td>IOS Web</td>
                            <td> 10/02/2022</td>
                            <td> 10/02/2022</td>
                            <td>Active</td>
                            <td>
                              <span className="btn btn-sm light btn-warning">
                                Edit
                              </span>
                            </td>
                          </tr>
                          <tr role="row">
                            <td>Diamonds to Gold </td>
                            <td>50000 gold to 50 Diamonds</td>
                            <td>Image</td>
                            <td>5.00</td>

                            <td>500000</td>
                            <td>IOS Web</td>
                            <td> 10/02/2022</td>
                            <td> 10/02/2022</td>
                            <td>Active</td>
                            <td>
                              <span className="btn btn-sm light btn-warning">
                                Edit
                              </span>
                            </td>
                          </tr>
                          <tr role="row">
                            <td>Diamonds to Gold </td>
                            <td>50000 gold to 50 Diamonds</td>
                            <td>Image</td>
                            <td>5.00</td>

                            <td>500000</td>
                            <td>IOS Web</td>
                            <td> 10/02/2022</td>
                            <td> 10/02/2022</td>
                            <td>Active</td>
                            <td>
                              <span className="btn btn-sm light btn-warning">
                                Edit
                              </span>
                            </td>
                          </tr>
                          <tr role="row">
                            <td>Diamonds to Gold </td>
                            <td>50000 gold to 50 Diamonds</td>
                            <td>Image</td>
                            <td>5.00</td>

                            <td>500000</td>
                            <td>IOS Web</td>
                            <td> 10/02/2022</td>
                            <td> 10/02/2022</td>
                            <td>Active</td>
                            <td>
                              <span className="btn btn-sm light btn-warning">
                                Edit
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card card-info">
                  <div
                    className="card-header"
                    style={{ background: "#tranparent" }}
                  >
                    <h3 className="card-title">Listings</h3>
                    <div className="card-tools">
                      <div>
                        {orderChanged && (
                          <button
                            className="btn btn-secondary mr-3 fw-bold"
                            onClick={() => {
                              sortMatch();
                            }}
                          >
                            Save Change Order
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  {loader ? (
                    <MyLoader />
                  ) : (
                    <div className="card-body table-responsive p-0">
                      <DragDropContext onDragEnd={handleDrop}>
                        <table className="table table-hover text-nowrap">
                          <thead>
                            <tr>
                              <th></th>
                              <th></th>
                              <th></th>
                              <th>Type</th>
                              <th></th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <Droppable droppableId="droppable-1">
                            {(provider) => (
                              <tbody
                                ref={provider.innerRef}
                                {...provider.droppableProps}
                              >
                                {featuredMatchList?.map((m, index) => (
                                  <Draggable
                                    key={m._id}
                                    draggableId={m._id}
                                    index={index}
                                  >
                                    {(provider) => (
                                      <tr
                                        {...provider.draggableProps}
                                        ref={provider.innerRef}
                                      >
                                        <td {...provider.dragHandleProps}>
                                          <img
                                            style={{
                                              width: "30px",
                                              height: "30px",
                                            }}
                                            src={
                                              m?.teama?.logo_url
                                                ? m?.teama?.logo_url
                                                : m?.offerId?.image
                                            }
                                          />
                                          &nbsp;&nbsp;
                                          {m?.teama?.name}
                                        </td>
                                        <td {...provider.dragHandleProps}>
                                          {m?.teamb?.logo_url ? (
                                            <img
                                              style={{
                                                width: "30px",
                                                height: "30px",
                                                marginRight: "6px",
                                              }}
                                              src={m?.teamb?.logo_url}
                                            />
                                          ) : (
                                            ""
                                          )}
                                          {m?.teamb?.name
                                            ? m?.teamb?.name
                                            : m?.offerId?.title}
                                        </td>
                                        <td {...provider.dragHandleProps}>
                                          {m?.competition?.title ? (
                                            m?.competition?.title
                                          ) : (
                                            <a
                                              href={m?.offerId?.webLink}
                                              target="_blank"
                                            >
                                              {" "}
                                              <button className=" btn btn-primary">
                                                Visit
                                              </button>
                                            </a>
                                          )}
                                        </td>
                                        <td {...provider.dragHandleProps}>
                                          {m?.status_str === "Live"
                                            ? "Live"
                                            : m?.status_str === "Scheduled"
                                            ? "Upcoming"
                                            : m?.status_str === "Completed"
                                            ? "Recent"
                                            : m?.status_str === "Cancelled"
                                            ? "Recent"
                                            : m?.offerId?.type}
                                        </td>
                                        <td {...provider.dragHandleProps}>
                                          {m?.status_note
                                            ? m?.status_note
                                            : m?.status_str
                                            ? m?.status_str
                                            : m?.offerId?.description}
                                        </td>
                                        <td>
                                          <i
                                            className="nav-icon fas "
                                            type="button"
                                            title="Delete"
                                          >
                                            <AiOutlineDelete
                                              onClick={() => {
                                                {
                                                  m?.match_id
                                                    ? setId(m?.match_id)
                                                    : deleteOffer(
                                                        m?.offerId?._id
                                                      );
                                                }
                                              }}
                                              style={{
                                                width: "22px",
                                                height: "0%",
                                              }}
                                            />
                                          </i>
                                        </td>
                                      </tr>
                                    )}
                                  </Draggable>
                                ))}
                              </tbody>
                            )}
                          </Droppable>
                        </table>
                      </DragDropContext>
                    </div>
                  )}
                  {featuredMatchList?.length === 0 && !loader ? (
                    <div className="justify-content-center d-flex my-5">
                      No Data
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div> */}
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default InAppPurchase;
