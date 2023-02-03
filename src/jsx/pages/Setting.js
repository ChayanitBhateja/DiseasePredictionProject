import React, { useState } from "react";
import { Row, Col, Card, Tab, Nav } from "react-bootstrap";
import ActiveBannerImageTable from "../components/ActiveBannerImageTable";
import PoolingStatisticsTable from "../components/PoolingStatisticsTable";
import UserManagementTable from "../components/UserManagementTable";
import ViewBannerImageTable from "../components/ViewBannerImageTable";
import ViewBetRangeTable from "../components/ViewBetRangeTable";
import ViewPoolingTable from "../components/ViewPoolingTable";
import Form from "react-bootstrap/Form";
import Switch from "react-switch";
export default function Setting() {
  const [checked, setChecked] = useState(true);

  const handleChange = (value) => {
    setChecked(!value);
  };
  const label = { inputProps: { "aria-label": "Color switch demo" } };
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title>Setting</Card.Title>
        </Card.Header>
        <Card.Body>
          <Tab.Container defaultActiveKey="bitrange">
            <Nav as="ul" className="nav-pills mb-4 light">
              <Nav.Item as="li">
                <Nav.Link eventKey="bitrange">Bet Range</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="maintence">Maintence</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="loginbonusamount">
                  Login Bonus Amount
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="pt-4">
              <Tab.Pane eventKey="bitrange">
                <form>
                  <div className="row">
                    <div className="row form-group col-12 col-md-6 col-lg-3">
                      <div className="col-6">
                        <label className="">
                          <strong className="">Range of Bets</strong>
                        </label>
                      </div>
                      <div className="col-3">
                        <label className="">
                          <strong className="">Auto</strong>
                        </label>
                      </div>
                      <div className="col-3">
                        <label className="">
                          <strong className="">Manual</strong>
                        </label>
                      </div>

                      <div className="col-6">
                        <label className="">
                          <strong className="">1 to 5000</strong>
                        </label>
                      </div>
                      <div className="col-3">
                        <div className="radio ">
                          <label>
                            <input type="radio" name="optradio" />
                          </label>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="radio ">
                          <label>
                            <input type="radio" name="optradio" />
                          </label>
                        </div>
                      </div>
                      <div className="col-6">
                        <label className="">
                          <strong className="">5001 to 20000</strong>
                        </label>
                      </div>
                      <div className="col-3">
                        <div className="radio ">
                          <label>
                            <input type="radio" name="5001" />
                          </label>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="radio ">
                          <label>
                            <input type="radio" name="5001" />
                          </label>
                        </div>
                      </div>

                      <div className="col-6">
                        <label className="">
                          <strong className="">20001 to 80000</strong>
                        </label>
                      </div>
                      <div className="col-3">
                        <div className="radio ">
                          <label>
                            <input type="radio" name="20001" />
                          </label>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="radio ">
                          <label>
                            <input type="radio" name="20001" />
                          </label>
                        </div>
                      </div>

                      <div className="col-6">
                        <label className="">
                          <strong className="">80001 to 100000</strong>
                        </label>
                      </div>
                      <div className="col-3">
                        <div className="radio ">
                          <label>
                            <input type="radio" name="80001" />
                          </label>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="radio ">
                          <label>
                            <input type="radio" name="80001" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <button type="submit" className="btn btn-primary mr-3 ">
                      Submit
                    </button>
                    <button type="submit" className="btn btn-primary ">
                      Cancel
                    </button>
                  </div>

                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Minimum Range</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Maximum Range</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className=""> Bet Type</strong>
                        </label>
                        <select name="status" className="form-control">
                          <option value="option1">Auto</option>
                          <option value="option2">Manual</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
                <ViewBetRangeTable />
              </Tab.Pane>
              <Tab.Pane eventKey="maintence">
                <form>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Transaction Password</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <button type="submit" className="btn btn-primary mr-3 ">
                      Submit
                    </button>
                    <button type="submit" className="btn btn-primary ">
                      Cancel
                    </button>
                  </div>
                </form>
                <form>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Maintence Message</strong>
                        </label>
                        <textarea
                          type="text"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Maintence Mode</strong>
                        </label>
                        <div>
                          <Switch
                            checked={checked}
                            onChange={() => handleChange(checked)}
                            inputProps={{ "aria-label": "Color switch demo" }}
                            color="warning"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </Tab.Pane>
              <Tab.Pane eventKey="loginbonusamount">
                <form>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Coin Type</strong>
                        </label>
                        <select name="status" className="form-control">
                          <option value="gold">Gold</option>
                          <option value="dimond">Dimond</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">
                            New User Login Bonus Value
                          </strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Coin Type</strong>
                        </label>
                        <select name="status" className="form-control">
                          <option value="gold">Gold</option>
                          <option value="dimond">Dimond</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">
                            Email Verification Bonus Value
                          </strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Coin Type</strong>
                        </label>
                        <select name="status" className="form-control">
                          <option value="gold">Gold</option>
                          <option value="dimond">Dimond</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Daily Login Bonus Value</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Coin Type</strong>
                        </label>
                        <select name="status" className="form-control">
                          <option value="gold">Gold</option>
                          <option value="dimond">Dimond</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">
                            Wee kly Login Bonus Value
                          </strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Coin Type</strong>
                        </label>
                        <select name="status" className="form-control">
                          <option value="gold">Gold</option>
                          <option value="dimond">Dimond</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">
                            Monthly Login Bonus Value
                          </strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <button type="submit" className="btn btn-primary mr-3 ">
                      Submit
                    </button>
                    <button type="submit" className="btn btn-primary ">
                      Cancel
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
