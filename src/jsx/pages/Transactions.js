import React from "react";
import { Row, Col, Card, Tab, Nav } from "react-bootstrap";
import TransactionSearchTable from "../components/TransactionSearchTable";

export default function Transactions() {
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title>Transactions</Card.Title>
        </Card.Header>
        <Card.Body>
          <Tab.Container defaultActiveKey="TransactionSearch">
            <Nav as="ul" className="nav-pills mb-4 light">
              <Nav.Item as="li">
                <Nav.Link eventKey="TransactionSearch">
                  Transactions Search
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="BitTransactions">Bet Transactions</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="pt-4">
              <Tab.Pane eventKey="TransactionSearch">
                <form>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Username</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Email Id</strong>
                        </label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Reference Number</strong>
                        </label>
                        <input type="number" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Amount</strong>
                        </label>
                        <input type="number" className="form-control" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className=""> Coin Type</strong>
                        </label>
                        <select name="cointype" className="form-control">
                          <option value="all">All</option>
                          <option value="inr">INR</option>
                          <option value="diamond">Diamond</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className=""> Transactions Type</strong>
                        </label>
                        <select
                          name="transactionstype"
                          className="form-control"
                        >
                          <option value="upi">UPI</option>
                          <option value="card">Card</option>
                        </select>{" "}
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className=""> Transactions Status</strong>
                        </label>
                        <select
                          name="transactionsStatus"
                          className="form-control"
                        >
                          <option value="complete">Complete</option>
                          <option value="pending">Pending</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className=""> From</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className=""> To</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>

                  <div className="mb-5">
                    <button type="submit" className="btn btn-primary mr-3 ">
                      Search
                    </button>
                    <button type="submit" className="btn btn-primary ">
                      Clear
                    </button>
                  </div>
                </form>
                <TransactionSearchTable />
              </Tab.Pane>
              <Tab.Pane eventKey="BitTransactions">
                <form>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">User Id</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Photo</strong>
                        </label>
                        <input type="file" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">User Name</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Email Id</strong>
                        </label>
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className=""> Referred By</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className=""> Created By</strong>
                        </label>
                        <input type="date" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Email Status</strong>
                        </label>

                        <select name="emailstatusform" className="form-control">
                          <option value="verified">Verified</option>
                          <option value="unverified">Unverified</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <button type="submit" className="btn btn-primary mr-3 ">
                      Create
                    </button>
                  </div>
                </form>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Card.Body>
      </Card>
    </>
  );
}
