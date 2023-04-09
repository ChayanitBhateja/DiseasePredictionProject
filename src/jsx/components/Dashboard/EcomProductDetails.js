import React from "react";
import { Link } from "react-router-dom";

// images
import image01 from "../../../images/product/1.jpg";
import image02 from "../../../images/tab/1.jpg";
import image03 from "../../../images/tab/2.jpg";
import image04 from "../../../images/tab/3.jpg";
import image05 from "../../../images/tab/4.jpg";

const EcomProductDetails = () => {
   return (
      <>
         <div className="row page-titles mx-0">
            <div className="col-sm-6 p-md-0">
               <div className="welcome-text">
                  <h4>Hi, welcome back!</h4>
                  <p className="mb-0">Your business dashboard template</p>
               </div>
            </div>
            <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
               <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                     <Link to="">Layout</Link>
                  </li>
                  <li className="breadcrumb-item active">
                     <Link to="">Blank</Link>
                  </li>
               </ol>
            </div>
         </div>
         <div className="row">
            <div className="col-lg-12">
               <div className="card">
                  <div className="card-body">
                     <div className="row">
                        <div className="col-xl-3 ">
                           {/* Tab panes */}
                           <div className="tab-content">
                              <div
                                 role="tabpanel"
                                 className="tab-pane fade show active"
                                 id="first"
                              >
                                 <img
                                    className="img-fluid"
                                    src={image01}
                                    alt=""
                                 />
                              </div>
                              <div
                                 role="tabpanel"
                                 className="tab-pane fade"
                                 id="second"
                              >
                                 <img
                                    className="img-fluid"
                                    src="images/product/2.jpg"
                                    alt=""
                                 />
                              </div>
                              <div
                                 role="tabpanel"
                                 className="tab-pane fade"
                                 id="third"
                              >
                                 <img
                                    className="img-fluid"
                                    src="images/product/3.jpg"
                                    alt=""
                                 />
                              </div>
                              <div
                                 role="tabpanel"
                                 className="tab-pane fade"
                                 id="for"
                              >
                                 <img
                                    className="img-fluid"
                                    src="images/product/4.jpg"
                                    alt=""
                                 />
                              </div>
                           </div>
                           <div className="tab-slide-content new-arrival-product mb-4 mb-xl-0">
                              {/* Nav tabs */}
                              <ul
                                 className="nav slide-item-list mt-3"
                                 role="tablist"
                              >
                                 <li role="presentation" className="show">
                                    <Link
                                       href="#first"
                                       role="tab"
                                       data-toggle="tab"
                                    >
                                       <img
                                          className="img-fluid"
                                          src={image02}
                                          alt=""
                                          width={50}
                                       />
                                    </Link>
                                 </li>
                                 <li role="presentation">
                                    <Link
                                       href="#second"
                                       role="tab"
                                       data-toggle="tab"
                                    >
                                       <img
                                          className="img-fluid"
                                          src={image03}
                                          alt=""
                                          width={50}
                                       />
                                    </Link>
                                 </li>
                                 <li role="presentation">
                                    <Link
                                       href="#third"
                                       role="tab"
                                       data-toggle="tab"
                                    >
                                       <img
                                          className="img-fluid"
                                          src={image04}
                                          alt=""
                                          width={50}
                                       />
                                    </Link>
                                 </li>
                                 <li role="presentation">
                                    <Link
                                       href="#for"
                                       role="tab"
                                       data-toggle="tab"
                                    >
                                       <img
                                          className="img-fluid"
                                          src={image05}
                                          alt=""
                                          width={50}
                                       />
                                    </Link>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        {/*Tab slider End*/}
                        <div className="col-xl-9 col-sm-12">
                           <div className="product-detail-content">
                              {/*Product details*/}
                              <div className="new-arrival-content pr">
                                 <h4>Solid Women's V-neck Dark T-Shirt</h4>
                                 <div className="star-rating mb-2">
                                    <ul className="produtct-detail-tag">
                                       <li>
                                          <i className="fa fa-star" />
                                       </li>
                                       <li>
                                          <i className="fa fa-star" />
                                       </li>
                                       <li>
                                          <i className="fa fa-star" />
                                       </li>
                                       <li>
                                          <i className="fa fa-star" />
                                       </li>
                                       <li>
                                          <i className="fa fa-star" />
                                       </li>
                                    </ul>
                                    <span className="review-text">
                                       (34 reviews) /
                                    </span>
                                    <Link className="product-review" href="#">
                                       Write a review?
                                    </Link>
                                 </div>
                                 <p className="price">$320.00</p>
                                 <p>
                                    Availability:
                                    <span className="item">
                                       In stock
                                       <i className="fa fa-shopping-basket" />
                                    </span>
                                 </p>
                                 <p>
                                    Product code:
                                    <span className="item">0405689</span>
                                 </p>
                                 <p>
                                    Brand: <span className="item">Lee</span>
                                 </p>
                                 <p>
                                    Product tags:&nbsp;&nbsp;
                                    <span className="badge badge-success light">
                                       bags
                                    </span>
                                    <span className="badge badge-success light">
                                       clothes
                                    </span>
                                    <span className="badge badge-success light">
                                       shoes
                                    </span>
                                    <span className="badge badge-success light">
                                       dresses
                                    </span>
                                 </p>
                                 <p className="text-content">
                                    There are many variations of passages of
                                    Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by
                                    injected humour, or randomised words which
                                    don't look even slightly believable. If you
                                    are going to use a passage of Lorem Ipsum,
                                    you need to be sure there isn't anything
                                    embarrassing.
                                 </p>
                                 <div className="filtaring-area my-3">
                                    <div className="size-filter">
                                       <h4 className="m-b-15">Select size</h4>
                                       <div
                                          className="btn-group"
                                          data-toggle="buttons"
                                       >
                                          <label className="btn btn-outline-primary light btn-sm">
                                             <input
                                                type="radio"
                                                className="position-absolute invisible"
                                                name="options"
                                                id="option5"
                                             />
                                             XS
                                          </label>
                                          <label className="btn btn-outline-primary light btn-sm">
                                             <input
                                                type="radio"
                                                className="position-absolute invisible"
                                                name="options"
                                                id="option1"
                                                defaultChecked
                                             />
                                             SM
                                          </label>
                                          <label className="btn btn-outline-primary light btn-sm">
                                             <input
                                                type="radio"
                                                className="position-absolute invisible"
                                                name="options"
                                                id="option2"
                                             />
                                             MD
                                          </label>
                                          <label className="btn btn-outline-primary light btn-sm">
                                             <input
                                                type="radio"
                                                className="position-absolute invisible"
                                                name="options"
                                                id="option3"
                                             />
                                             LG
                                          </label>
                                          <label className="btn btn-outline-primary light btn-sm">
                                             <input
                                                type="radio"
                                                className="position-absolute invisible"
                                                name="options"
                                                id="option4"
                                             />
                                             XL
                                          </label>
                                       </div>
                                    </div>
                                 </div>
                                 {/*Quantity start*/}
                                 <div className="col-2 px-0">
                                    <input
                                       type="number"
                                       name="num"
                                       className="form-control input-btn input-number"
                                       defaultValue={1}
                                    />
                                 </div>
                                 {/*Quanatity End*/}
                                 <div className="shopping-cart mt-3">
                                    <Link
                                       className="btn btn-primary btn-lg"
                                       href="#"
                                    >
                                       <i className="fa fa-shopping-basket mr-2" />
                                       Add to cart
                                    </Link>
                                 </div>
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

export default EcomProductDetails;
