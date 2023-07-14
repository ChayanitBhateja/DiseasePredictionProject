import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

import { login, signUpDoc, signUpPatient } from "../../services/AuthService";
function Register(props) {
  const [email, setEmail] = useState("");
  let errorsObj = {
    email: "",
    password: "",
    userName: "",
    firstName: "",
    surName: "",
    age: "",
    gender: "",
  };
  const [errors, setErrors] = useState(errorsObj);

  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");

  const [loginAs, setLoginAs] = useState("Patient");
  const [specialist, setSpecialist] = useState("");
  const dispatch = useDispatch();

  function onSignUp(e) {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };

    setErrors(errorObj);

    if (error) return;
    if (loginAs === "Patient") {
      signUpPatient(firstName, email, password)
        .then((response) => {
          console.log(response);

          localStorage.setItem("userDetails", response.data.value.token);
          localStorage.setItem("loginAs", "Patient");
          localStorage.setItem("name", response.data.data.name);
          localStorage.setItem("email", response.data.data.email);
          props.history.push("/patients-home");
        })
        .catch((error) => {
          console.log(error, "Login error");
          // setApiError(error.response);
        });
    }
    if (loginAs === "Doctor") {
      signUpDoc(firstName, email, password, specialist)
        .then((response) => {
          // props.history.push("/user-management");
          localStorage.setItem("userDetails", response.data.value.token);
          localStorage.setItem("loginAs", "Doctor");
          localStorage.setItem("name", response.data.data.name);
          localStorage.setItem("email", response.data.data.email);
          props.history.push("/patient-list");
        })
        .catch((error) => {
          console.log(error.response, "Login error");
          // setApiError(error.response);
        });
    }
  }
  useEffect(() => {
    setLoginAs(loginAs);
  }, [loginAs]);
  return (
    <div className="authincation h-100 p-meddle">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <h4 className="text-center mb-4 ">Sign up your account</h4>
                    {props.errorMessage && (
                      <div className="bg-red-300 text-danger border border-red-900 p-1 my-2">
                        {props.errorMessage}
                      </div>
                    )}
                    {props.successMessage && (
                      <div className="bg-green-300 text-danger text-green-900  p-1 my-2">
                        {props.successMessage}
                      </div>
                    )}
                    {/* <select
                      className="mx-auto"
                      onClick={(e) => setLoginAs(e.target.value)}
                    >
                      <option value="Patient">Patient</option>
                      <option value="Doctor">Doctor</option>
                    </select> */}

                    <div className="radiobutton d-flex justify-content-between align-items-center">
                      <div
                        style={{ flexGrow: 1 }}
                        className="radiobutton d-flex justify-content-betwen align-items-center"
                      >
                        <label className="mb-0 mr-3">
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
                        className="radiobutton d-flex justify-conent-between align-items-center ml-4"
                      >
                        <label className="mb-0 mr-3">
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
                    </div>
                    <form onSubmit={onSignUp}>
                      <div className="form-group">
                        <label className="mb-1 mt-3 ">
                          <strong> Name</strong>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label className="mb-1 ">
                          <strong>Email</strong>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="mb-1 ">
                          <strong>Password</strong>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      {loginAs === "Doctor" && (
                        <div className="form-group">
                          <label className="mb-1 ">
                            <strong> Specialist</strong>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            value="Heart"
                            // onChange={(e) => setSpecialist(e.target.value)}
                            // required
                            disabled
                          />
                        </div>
                      )}

                      <div className="text-center mt-4">
                        <input
                          type="submit"
                          className="btn btn-primary btn-block"
                        />
                      </div>
                    </form>
                    <div className="new-account mt-3 ">
                      <p>
                        Already have an account?{" "}
                        <Link className="text-primary" to="/login">
                          Sign in
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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

export default connect(mapStateToProps)(Register);
