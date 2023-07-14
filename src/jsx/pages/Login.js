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
import {
  login,
  loginAdmin,
  loginDoctor,
  saveTokenInLocalStorage,
  saveTokenInLocalStorageDoc,
} from "../../services/AuthService";
import sportex from "../../images/img/SportEx.svg";
import logo1 from "../../images/img/Vector.png";
import { ToastContainer, toast } from "react-toastify";
import ForgetPassword from "../components/ForgetPassword";

function Login(props) {
  const [email, setEmail] = useState();
  let errorsObj = { email: "", password: "" };
  const [errors, setErrors] = useState(errorsObj);
  const [password, setPassword] = useState();
  // const dispatch = useDispatch();

  const [apiError, setApiError] = useState();
  const [loginAs, setLoginAs] = useState("Patient");
  const [forgetPasswordShow, setForgetPasswordShow] = useState(false);

  const notifyError = (value) => {
    toast.error(`❌ Error ${value}!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
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
          console.log(response);
          // saveTokenInLocalStorage(response.data.value.token, response.data.data.name, response.data.data.email);
          localStorage.setItem("userDetails", response.data.value.token);
          localStorage.setItem("loginAs", "Patient");
          localStorage.setItem("name", response.data.data.name);
          localStorage.setItem("email", response.data.data.email);

          props.history.push("/patients-home");
          window.location.reload();
        })
        .catch((error) => {
          if (error.response.data.statusCode === 400) {
            notifyError(error.response.data.message);
          }
          if (error.response.data.statusCode === 401) {
            notifyError(error.response.data.message);
          }
          if (error.response.data.statusCode === 500) {
            notifyError(error.response.data.message);
          }
          setApiError(error.response.message);
        });
    }
    if (loginAs === "Doctor") {
      loginDoctor(email, password)
        .then((respocnse) => {
          // saveTokenInLocalStorageDoc(response.data.data.token);
          localStorage.setItem("userDetails", respocnse.data.value.token);
          localStorage.setItem("loginAs", "Doctor");
          localStorage.setItem("name", respocnse.data.data.name);
          localStorage.setItem("email", respocnse.data.data.email);
          props.history.push("/patient-list");

          window.location.reload();
          console.log(respocnse);
        })
        .catch((error) => {
          if (error.response.data.statusCode === 400) {
            notifyError(error.response.data.message);
          }
          if (error.response.data.statusCode === 401) {
            notifyError(error.response.data.message);
          }
          if (error.response.data.statusCode === 500) {
            notifyError(error.response.data.message);
          }
          setApiError(error.response.message);
        });
    }
    if (loginAs === "Admin") {
      loginAdmin(email, password)
        .then((response) => {
          console.log(response);
          localStorage.setItem("loginAs", "Admin");
          localStorage.setItem("userDetails", response.data.value.token);
          props.history.push("/admin-home");
          window.location.reload();
        })
        .catch((error) => {
          console.log(error.response, "change passwoard error changePasswoard");
          if (error.response.data.statusCode === 400) {
            notifyError(error.response.data.message);
          }
          if (error.response.data.statusCode === 401) {
            notifyError(error.response.data.message);
          }
          if (error.response.data.statusCode === 500) {
            notifyError(error.response.data.message);
          }
          setApiError(error.response.message);
        });
    }
  }
  useEffect(() => {
    console.log(props.history, "history");
  }, []);
  return (
    <div className="login-form-bx">
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
      <ForgetPassword
        show={forgetPasswordShow}
        close={() => setForgetPasswordShow(false)}
        loginAs={loginAs}
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-7 box-skew d-flex">
            <div>
              <div className="authincation-content">
                <div className="d-flex justify-content-center mb-4">
                  {/* <select
                    id="cars"
                    className="mx-auto"
                    onClick={(e) => setLoginAs(e.target.value)}
                  >
                    <option value="Patient">Patient</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Admin">Admin</option>
                  </select> */}

                  <div className="radiobutton d-flex justify-content-between align-items-center">
                    <div
                      style={{ flexGrow: 1 }}
                      className="radiobutton d-flex justify-content-between align-items-center"
                    >
                      <label className="mb-0">
                        <strong>Patient </strong>
                      </label>
                      <input
                        type="radio"
                        name="flexRadioDefault"
                        value="Patient"
                        onChange={(e) => setLoginAs(e.target.value)}
                        checked={loginAs === "Patient" ? "checked" : ""}
                        required
                      />
                    </div>
                    <div
                      style={{ flexGrow: 1 }}
                      className="radiobutton d-flex justify-content-between align-items-center ml-4"
                    >
                      <label className="mb-0">
                        <strong>Doctor</strong>
                      </label>
                      <input
                        type="radio"
                        name="flexRadioDefault"
                        value="Doctor"
                        onChange={(e) => setLoginAs(e.target.value)}
                        required
                      />
                    </div>
                    <div
                      style={{ flexGrow: 1 }}
                      className="radiobutton d-flex justify-content-between align-items-center ml-4"
                    >
                      <label className="mb-0">
                        <strong>Admin</strong>
                      </label>
                      <input
                        type="radio"
                        name="flexRadioDefault"
                        value="Admin"
                        onChange={(e) => setLoginAs(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  {loginAs === "Patient" && <h3>Patient</h3>}
                  {loginAs === "Doctor" && <h3>Doctor</h3>}
                  {loginAs === "Admin" && <h3>Admin</h3>}

                  <h3 className="mb-1 font-w600" style={{ fontSize: "21px" }}>
                    Welcome to Heart Disease Prediction
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
                      required
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
                      required
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
                  <div className="d-flex align-items-center justify-content-between">
                    <p className="text-white">
                      <Link className="text-black" to="./page-register">
                        Sign up
                      </Link>
                    </p>
                    {(loginAs === "Patient" || loginAs === "Doctor") && (
                      <p
                        style={{ cursor: "pointer" }}
                        onClick={() => setForgetPasswordShow(true)}
                      >
                        Forget Passwoard
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-5 d-flex box-skew1">
            <div className="inner-content align-self-center">
              <h2 className="text-white"> Heart Disease Prediction</h2>
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
