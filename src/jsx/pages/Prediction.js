import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
//import logo from '../../images/logo-full.png'
import {
  loadingToggleAction,
  signupAction,
} from "../../store/actions/AuthActions";
import {
  login,
  predictionApi,
  signUpDoc,
  signUpPatient,
} from "../../services/AuthService";
import { ToastContainer, toast } from "react-toastify";

function Prediction() {
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  console.log(sex, "flexRadioDefault flexRadioDefault");
  const [cp, setCp] = useState("");
  const [trtbps, setTrtbps] = useState("");
  const [chol, setChol] = useState("");
  const [fbs, setFbs] = useState("");
  const [restecg, setRestecg] = useState("");
  const [thalachh, setThalachh] = useState("");
  const [exng, setExng] = useState("");
  const [oldpeak, setOldpeak] = useState("");
  const [slp, setSlp] = useState("");
  const [caa, setCaa] = useState("");
  const [thall, setThall] = useState("");
  const [pridictionData, setPridictionData] = useState();
  const notifyTopRight = () => {
    toast.success("✅ upload document successfully !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
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
  function onSignUp(e) {
    e.preventDefault();
    console.log("first");
    predictionApi(
      age,
      sex,
      cp,
      trtbps,
      chol,
      fbs,
      restecg,
      thalachh,
      exng,
      oldpeak,
      slp,
      caa,
      thall
    )
      .then((response) => {
        console.log(response, "prijjjjjjjj");
        setPridictionData(response.data.data);
        notifyTopRight();
      })
      .catch((error) => {
        console.log(error.response, "prediction arror");
        if (error.response.data.statusCode === 400) {
          notifyError(error.response.data.data);
        }
        if (error.response.data.statusCode === 401) {
          notifyError(error.response.data.message);
        }
        if (error.response.data.statusCode === 500) {
          notifyError(error.response.data.message);
        }
      });
  }
  return (
    <div>
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
      <div className="">
        <div className="">
          <div className="">
            <div className="">
              <div className="d-flex">
                <div className="col-7 card p-3">
                  <div className="">
                    <h4 className=" mb-4 ">Prediction</h4>
                    <form onSubmit={onSignUp} className="row">
                      <div className="col-6">
                        <div className="form-group">
                          <label className="mb-1">
                            <strong>Age</strong>
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                          />
                        </div>

                        {/* <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label class="form-check-label" for="flexRadioDefault2">
    Default checked radio
  </label>
</div> */}

                        <div className="form-group">
                          <label className="mb-1">
                            <strong>Sex</strong>
                          </label>
                          <div className="radiobutton d-flex justify-content-between align-items-center">
                            <div
                              style={{ flexGrow: 1 }}
                              className="radiobutton d-flex justify-content-between align-items-center"
                            >
                              <label className="mb-1">
                                <strong>Male</strong>
                              </label>
                              <input
                                type="radio"
                                name="flexRadioDefault"
                                value={1}
                                onChange={(e) => setSex(e.target.value)}
                                required
                              />
                            </div>
                            <div
                              style={{ flexGrow: 1 }}
                              className="radiobutton d-flex justify-content-between align-items-center ml-4"
                            >
                              <label className="mb-1">
                                <strong>Female</strong>
                              </label>
                              <input
                                type="radio"
                                name="flexRadioDefault"
                                value={0}
                                onChange={(e) => setSex(e.target.value)}
                                required
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="mb-1">
                            <strong>Chol</strong>
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            value={chol}
                            onChange={(e) => setChol(e.target.value)}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label className="mb-1">
                            <strong>Restecg</strong>
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            value={restecg}
                            onChange={(e) => setRestecg(e.target.value)}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label className="mb-1">
                            <strong>Exng</strong>
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            value={exng}
                            onChange={(e) => setExng(e.target.value)}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label className="mb-1">
                            <strong>Slp</strong>
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            value={slp}
                            onChange={(e) => setSlp(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="form-group">
                          <label className="mb-1">
                            <strong>Cp</strong>
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            value={cp}
                            onChange={(e) => setCp(e.target.value)}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label className="mb-1">
                            <strong>Trtbps</strong>
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            value={trtbps}
                            onChange={(e) => setTrtbps(e.target.value)}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label className="mb-1">
                            <strong>Fbs</strong>
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            value={fbs}
                            onChange={(e) => setFbs(e.target.value)}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label className="mb-1">
                            <strong>Thalachh</strong>
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            value={thalachh}
                            onChange={(e) => setThalachh(e.target.value)}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label className="mb-1">
                            <strong>Oldpeak</strong>
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            value={oldpeak}
                            onChange={(e) => setOldpeak(e.target.value)}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label className="mb-1">
                            <strong>Caa</strong>
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            value={caa}
                            onChange={(e) => setCaa(e.target.value)}
                            required
                          />
                        </div>

                        <div className="form-group">
                          <label className="mb-1">
                            <strong>Thall</strong>
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            value={thall}
                            onChange={(e) => setThall(e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="text-center mt-4 col-12">
                        <input
                          type="submit"
                          className="btn btn-primary btn-block"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-5 card p-4">
                  <h3>Prediction of heart attack</h3>
                  <h4>prediction: {pridictionData?.prediction}</h4>
                  <h4>
                    possibility: {pridictionData?.possibility}{" "}
                    {pridictionData?.possibility && <span>%</span>}{" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prediction;
