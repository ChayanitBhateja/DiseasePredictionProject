import React from "react";
import { Row, Col, Card, Tab, Nav } from "react-bootstrap";
import ActiveBannerImageTable from "../components/ActiveBannerImageTable";
import DefaultMatchLeaderboard from "../components/DefaultMatchLeaderboard";
import PoolingStatisticsTable from "../components/PoolingStatisticsTable";
import UserManagementTable from "../components/UserManagementTable";
import ViewBannerImageTable from "../components/ViewBannerImageTable";
import ViewMatchLeaderboardeTable from "../components/ViewMatchLeaderboardeTable";
import ViewPoolingTable from "../components/ViewPoolingTable";
import ViewTipperTable from "../components/ViewTipperTable";

export default function MatchLeaderboard() {
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title>Match Leaderboard</Card.Title>
        </Card.Header>
        <Card.Body>
          <Tab.Container defaultActiveKey="defaultmatch">
            <Nav as="ul" className="nav-pills mb-4 light">
              <Nav.Item as="li">
                <Nav.Link eventKey="defaultmatch">
                  Default match Leaderboard
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="creatematch">
                  Create match Leaderboard
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="viewmatch">View match Leaderboard</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="pt-4">
              <Tab.Pane eventKey="defaultmatch">
                <form>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Match Event</strong>
                        </label>
                        <select name="emailstatus" className="form-control">
                          <option value="selectall">Select All</option>
                          <option value="leaderboard">Leaderboard</option>
                          <option value="bet">Betting Board</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Match</strong>
                        </label>
                        <select name="emailstatus" className="form-control">
                          <option value="selectall">Select All</option>
                          <option value="leaderboard">option 1</option>
                          <option value="bet">option 2</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mb-5">
                    <button type="submit" className="btn btn-primary mr-3 ">
                      Search
                    </button>
                    <button type="submit" className="btn btn-primary ">
                      Reset
                    </button>
                  </div>
                </form>
                <DefaultMatchLeaderboard />
              </Tab.Pane>
              <Tab.Pane eventKey="creatematch">
                <form>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Event Type</strong>
                        </label>
                        <select name="emailstatus" className="form-control">
                          <option value="selectall">Select All</option>
                          <option value="leaderboard">Leaderboard</option>
                          <option value="bet">Betting Board</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Match</strong>
                        </label>
                        <select name="emailstatus" className="form-control">
                          <option value="selectall">Select All</option>
                          <option value="leaderboard">option 1</option>
                          <option value="bet">option 2</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Reward Name</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Creation Type</strong>
                        </label>
                        <select name="emailstatus" className="form-control">
                          <option value="single">Single</option>
                          <option value="range">Range</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Rank</strong>
                        </label>
                        <input type="number" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Reward</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Reward Price</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Price Type</strong>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Reward Image</strong>
                        </label>
                        <input type="file" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Gold Coin</strong>
                        </label>
                        <input type="type" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Description</strong>
                        </label>
                        <textarea
                          type="text"
                          className="form-control"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="mb-5">
                    <button type="submit" className="btn btn-primary mr-3 ">
                      Create
                    </button>
                    <button type="submit" className="btn btn-primary ">
                      Reset
                    </button>
                  </div>
                </form>
              </Tab.Pane>
              <Tab.Pane eventKey="viewmatch">
                <form>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Event Type</strong>
                        </label>
                        <select name="emailstatus" className="form-control">
                          <option value="selectall">Select All</option>
                          <option value="leaderboard">Leaderboard</option>
                          <option value="bet">Betting Board</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Match</strong>
                        </label>
                        <select name="emailstatus" className="form-control">
                          <option value="selectall">Select All</option>
                          <option value="leaderboard">option 1</option>
                          <option value="bet">option 2</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">Start Date</strong>
                        </label>
                        <input type="date" className="form-control" />
                      </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                      <div className="form-group">
                        <label className="mb-2 ">
                          <strong className="">End Date</strong>
                        </label>
                        <input type="date" className="form-control" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <button type="submit" className="btn btn-primary mr-3 ">
                      Search
                    </button>
                    <button type="submit" className="btn btn-primary ">
                      Reset
                    </button>
                  </div>
                </form>
                <ViewMatchLeaderboardeTable />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Card.Body>
      </Card>
    </>
  );
}
