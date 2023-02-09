import React, { useState, useRef, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import { Badge, Dropdown } from "react-bootstrap";
import { Row, Col, Card, Button, Tab, Nav } from "react-bootstrap";
import CreateBanner from "./CreateBanner";
import { bannerTable, deleteBannerData } from "../../services/AuthService";
import { AWS_BANNER_PHOTO_BASE_URL, AWS_PHOTO_BASE_URL } from "../pages/test";
import { ToastContainer, toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import EditBanner from "./EditBanner";

const ActiveBannerImageTable = () => {
  const [createBanner, setCreateBanner] = useState(false);
  const [bannerData, setBannerData] = useState([]);
  const [pageCount, setpageCount] = useState(1);
  const [pageNumber, setPageNumber] = useState(0);
  const [bannerId, setBannerId] = useState();
  const [editBannerModal, setEditBannerModal] = useState(false);
  const svg1 = (
    <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect x="0" y="0" width="24" height="24"></rect>
        <circle fill="#000000" cx="5" cy="12" r="2"></circle>
        <circle fill="#000000" cx="12" cy="12" r="2"></circle>
        <circle fill="#000000" cx="19" cy="12" r="2"></circle>
      </g>
    </svg>
  );
  let limit = 6;

  const notifyTopRight = () => {
    toast.success("✅ Banner successfully deleted !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  function deleteBanner(id) {
    deleteBannerData(id).then((response) => {
      bannerTable(limit, pageNumber).then((response) => {
        setBannerData(response.data.data.banners);
      });
      notifyTopRight();
    });
  }
  const handlePageClick = async (data) => {
    let currentPage = data.selected;
    setPageNumber(currentPage);
  };
  useEffect(() => {
    // setLoader(true);
    bannerTable(limit, pageNumber).then((response) => {
      setBannerData(response.data.data.banners);
      const total = response.data.data.count;
      setpageCount(Math.ceil(total / limit));
    });
  }, [pageNumber]);
  return (
    <Fragment>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <CreateBanner
        show={createBanner}
        close={() => setCreateBanner(false)}
        table={() =>
          bannerTable(limit, pageNumber).then((response) => {
            setBannerData(response.data.data.banners);
          })
        }
      />
      <EditBanner
        show={editBannerModal}
        close={() => setEditBannerModal(false)}
        table={() =>
          bannerTable(limit, pageNumber).then((response) => {
            setBannerData(response.data.data.banners);
          })
        }
        id={bannerId}
      />
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center flex-column flex-sm-row">
          <div>
            <Card.Title>Promo Banner</Card.Title>
          </div>
          <div>
            <Button
              className=""
              variant="outline-primary"
              onClick={() => setCreateBanner(true)}
            >
              Create Banner Image
            </Button>
          </div>
        </Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <div id="order_list" className="dataTables_wrapper no-footer">
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
                          Title
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
                          Banner Type
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: "98.6667px" }}
                        >
                          Banner Image
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: "68px" }}
                        >
                          Banner URL
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: "68px" }}
                        >
                          Status
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: "68px" }}
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {bannerData.map((item) => (
                        <tr key={item._id} role="row" className=" ">
                          <td>{item.title}</td>
                          <td>{item.type}</td>
                          <td>
                            {" "}
                            <img
                              src={AWS_BANNER_PHOTO_BASE_URL + item.image}
                              style={{ height: "60px", width: "60px" }}
                            />
                          </td>
                          <td>{item.url}</td>
                          <td>
                            {item.isActive === true ? (
                              <Badge variant="success light">Active</Badge>
                            ) : (
                              <Badge variant="danger light">Block</Badge>
                            )}
                          </td>
                          <td>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="info light"
                                className="light sharp btn btn-info i-false"
                              >
                                {svg1}
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item
                                  onClick={() => {
                                    setBannerId(item._id);
                                    setEditBannerModal(true);
                                  }}
                                >
                                  Edit
                                </Dropdown.Item>

                                <Dropdown.Item
                                  onClick={() => {
                                    deleteBanner(item._id);
                                  }}
                                >
                                  Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {pageCount > 1 && (
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              pageCount={pageCount}
              // marginPagesDisplayed={2}
              // pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              activeClassName={"active"}
              forcePage={pageNumber}
            />
          )}
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default ActiveBannerImageTable;
