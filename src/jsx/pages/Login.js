import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import {
//   loadingToggleAction,
//   loginAction,
// } from "../../store/actions/AuthActions";

//
import logo from "../../images/logo.png";
import logotext from "../../images/logo-text-white.png";
import { login, saveTokenInLocalStorage } from "../../services/AuthService";
import sportex from "../../images/img/SportEx.svg";
import logo1 from "../../images/img/Vector.png";

function Login(props) {
  const [email, setEmail] = useState();
  let errorsObj = { email: "", password: "" };
  const [errors, setErrors] = useState(errorsObj);
  const [password, setPassword] = useState();
  // const dispatch = useDispatch();

  const [apiError, setApiError] = useState();

  function onLogin(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    if (email === "") {
      errorObj.email = "Email is Required";
      error = true;
    }
    if (password === "") {
      errorObj.password = "Password is Required";
      error = true;
    }
    setErrors(errorObj);
    if (error) {
      return;
    }
    // dispatch(loadingToggleAction(true));
    // dispatch(loginAction(email, password, props.history));
    login(email, password)
      .then((response) => {
        saveTokenInLocalStorage(response.data.data.token);
        props.history.push("/user-management");
      })
      .catch((error) => {
        console.log(error.response, "Login error");
        setApiError(error.response);
      });
  }
  useEffect(() => {
    console.log(props.history, "history");
  }, []);
  return (
    <div className="login-form-bx">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-7 box-skew d-flex">
            <div className="authincation-content">
              <div className="mb-4">
                <h3 className="mb-1 font-w600">Welcome to SportEx</h3>
              </div>
              {apiError && (
                <div className="bg-red-300 text-red-900 border border-red-900 p-1 my-2">
                  {apiError}
                </div>
              )}
              {props.successMessage && (
                <div className="bg-green-300 text-green-900 border border-green-900 p-1 my-2">
                  {props.successMessage}
                </div>
              )}
              <form onSubmit={onLogin}>
                <div className="form-group">
                  <label className="mb-2 ">
                    <strong className="">Email</strong>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && (
                    <div className="text-danger fs-12">{errors.email}</div>
                  )}
                </div>
                <div className="form-group">
                  <label className="mb-2 ">
                    <strong className="">Password</strong>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <div className="text-danger fs-12">{errors.password}</div>
                  )}
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-block">
                    Login In
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 col-md-5 d-flex box-skew1">
            <div className="inner-content align-self-center">
              <Link to="/dashboard" className="login-logo">
                <img src={logo1} alt="" className="logo-icon mr-2" />
                <img src={sportex} alt="" className="logo-text ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
    successMessage: state.auth.successMessage,
    showLoading: state.auth.showLoading,
  };
};
export default connect(mapStateToProps)(Login);
