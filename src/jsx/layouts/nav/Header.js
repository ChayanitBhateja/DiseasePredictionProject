import React, { useState } from "react";

import { Link } from "react-router-dom";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Image
import profile from "../../../images/profile/pic1.jpg";
import avatar from "../../../images/avatar/1.jpg";
import { Dropdown } from "react-bootstrap";
import LogoutPage from "./Logout";
import ChangePassword from "../../components/ChangePassword";

const Header = ({ onNote }) => {
  const [changePasswordShow, setChangePasswordShow] = useState(false);

  const onFullScreen = () => {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  };

  return (
    <>
      <ChangePassword
        show={changePasswordShow}
        close={() => setChangePasswordShow(false)}
      />
      <div className="header" style={{ zIndex: "5" }}>
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                <div className="search_bar dropdown show">
                  <div className="dropdown-menu p-0 m-0 show">
                    <form>
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Search Here"
                        aria-label="Search"
                      />
                    </form>
                  </div>
                  <span
                    className="search_icon p-3 c-pointer"
                    data-toggle="dropdown"
                  >
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.7871 22.7761L17.9548 16.9437C19.5193 15.145 20.4665 12.7982 20.4665 10.2333C20.4665 4.58714 15.8741 0 10.2333 0C4.58714 0 0 4.59246 0 10.2333C0 15.8741 4.59246 20.4665 10.2333 20.4665C12.7982 20.4665 15.145 19.5193 16.9437 17.9548L22.7761 23.7871C22.9144 23.9255 23.1007 24 23.2816 24C23.4625 24 23.6488 23.9308 23.7871 23.7871C24.0639 23.5104 24.0639 23.0528 23.7871 22.7761ZM1.43149 10.2333C1.43149 5.38004 5.38004 1.43681 10.2279 1.43681C15.0812 1.43681 19.0244 5.38537 19.0244 10.2333C19.0244 15.0812 15.0812 19.035 10.2279 19.035C5.38004 19.035 1.43149 15.0865 1.43149 10.2333Z"
                        fill="#A4A4A4"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <ul className="navbar-nav header-right">
                <Dropdown
                  as="li"
                  className="nav-item dropdown notification_dropdown cursor-pointer"
                  onClick={() => onFullScreen()}
                >
                  <Dropdown.Toggle
                    as="a"
                    variant=""
                    className="nav-link dz-fullscreen primary i-false c-pointer"
                    to=""
                  >
                    <svg
                      id="Capa_1"
                      enableBackground="new 0 0 482.239 482.239"
                      height={22}
                      viewBox="0 0 482.239 482.239"
                      width={22}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m0 17.223v120.56h34.446v-103.337h103.337v-34.446h-120.56c-9.52 0-17.223 7.703-17.223 17.223z"
                        fill
                      />
                      <path
                        d="m465.016 0h-120.56v34.446h103.337v103.337h34.446v-120.56c0-9.52-7.703-17.223-17.223-17.223z"
                        fill
                      />
                      <path
                        d="m447.793 447.793h-103.337v34.446h120.56c9.52 0 17.223-7.703 17.223-17.223v-120.56h-34.446z"
                        fill
                      />
                      <path
                        d="m34.446 344.456h-34.446v120.56c0 9.52 7.703 17.223 17.223 17.223h120.56v-34.446h-103.337z"
                        fill
                      />
                    </svg>
                  </Dropdown.Toggle>
                </Dropdown>

                <Dropdown as="li" className="nav-item dropdown header-profile">
                  <Dropdown.Toggle
                    variant=""
                    as="a"
                    className="i-false c-pointer nav-link"
                    to=""
                    role="button"
                    data-toggle="dropdown"
                  >
                    <div className="header-info">
                      <span>
                        <strong>Admin</strong>
                      </span>
                    </div>
                    <img src={profile} width={20} alt="" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    align="right"
                    className="dropdown-menu dropdown-menu-right"
                  >
                    <p
                      className="dropdown-item ai-icon"
                      onClick={() => setChangePasswordShow(true)}
                    >
                      <svg
                        id="icon-user1"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-primary"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx={12} cy={7} r={4} />
                      </svg>
                      <span className="ml-2">Change Password </span>
                    </p>

                    <LogoutPage />
                  </Dropdown.Menu>
                </Dropdown>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
