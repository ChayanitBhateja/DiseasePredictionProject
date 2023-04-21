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
  const [loginAs, setLoginAs] = useState("Patient");

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
    if (loginAs === "Patient") {
      login(email, password)
        .then((response) => {
          console.log(response)
          saveTokenInLocalStorage(response.data.value.token, response.data.data.name, response.data.data.email);
          props.history.push("/patients-home");


        })
        .catch((error) => {
          console.log(error, "Login error");
          // setApiError(error.response);
        });
    }
    if (loginAs === "Doctor") {
      login(email, password)
        .then((response) => {
          saveTokenInLocalStorage(response.data.data.token);
          // props.history.push("/user-management");
          console.log("dddddddddddd");
          localStorage.setItem("login-as", "Doctor");
        })
        .catch((error) => {
          console.log(error.response, "Login error");
          setApiError(error.response);
        });
    }
    if (loginAs === "Admin") {
      login(email, password)
        .then((response) => {
          saveTokenInLocalStorage(response.data.value.token);
          // props.history.push("/user-management");
          console.log("aaaaaaaaaaaa");
          localStorage.setItem("login-as", "Admin");
        })
        .catch((error) => {
          console.log(error.response, "Login error");
          setApiError(error.response);
        });
    }
  }
  useEffect(() => {
    console.log(props.history, "history");
  }, []);
  return (
    <div className="login-form-bx">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-7 box-skew d-flex">
            <div>
              <div className="authincation-content">
                <div className="d-flex justify-content-center">
                  <select
                    id="cars"
                    className="mx-auto"
                    onClick={(e) => setLoginAs(e.target.value)}
                  >
                    <option value="Patient">Patient</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                <div className="mb-4">
                  {loginAs === "Patient" && <h3>Patient</h3>}
                  {loginAs === "Doctor" && <h3>Doctor</h3>}
                  {loginAs === "Admin" && <h3>Admin</h3>}

                  <h3 className="mb-1 font-w600">
                    Welcome to Disease Prediction
                  </h3>
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
                      minLength={6}
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
                <div className="new-account mt-2">
                  <p className="text-white">
                    Don't have an account?{" "}
                    <Link className="text-black" to="./page-register">
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-5 d-flex box-skew1">
            <div className="inner-content align-self-center">
              <h1 className="text-white">Disease Prediction</h1>
              {/* <Link to="/dashboard" className="login-logo">
                <img src={logo1} alt="" className="logo-icon mr-2" />
                <img src={sportex} alt="" className="logo-text ml-1" />
              </Link> */}
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
