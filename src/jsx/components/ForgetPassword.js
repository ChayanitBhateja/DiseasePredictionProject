

import React, { useState } from "react";
import { Row, Card, Col, Button, Modal, Container } from "react-bootstrap";
import { changePasswoard, changePasswoardAdmin, changePasswoardDoc, doctorForgetPasswordApi, userForgetPasswordApi } from "../../services/AuthService";
import { ToastContainer, toast } from "react-toastify";

export default function ForgetPassword({ show, close, loginAs }) {
    const [email, setEmail] = useState("");
    let errorsObj = { email: "" };
    const [errors, setErrors] = useState(errorsObj);
    const [apiError, setApiError] = useState("");
    console.log(loginAs)
    const notifyTopRight = () => {
        toast.success("✅ send message successfully !", {
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
    function onChangePasswoard(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (email === "") {
            errorObj.oldPassword = "email is Required";
            error = true;
        }

        setErrors(errorObj);
        if (error) {
            return;
        }

        // dispatch(loadingToggleAction(true));
        // dispatch(loginAction(email, password, props.history));
        if (loginAs === "Patient") {
            userForgetPasswordApi(email)
                .then((response) => {
                    console.log(response);


                    setEmail("");
                    close();
                    notifyTopRight();
                })
                .catch((error) => {
                    console.log(error.response, "change passwoard error changePasswoard");
                    if (error.response.data.statusCode === 400) {
                        notifyError(error.response.data.message);
                    }
                    if (error.response.data.statusCode === 401) {
                        notifyError(error.response.data.message);
                    }
                    if (error.response.status === 500) {

                        setEmail("");
                        close();
                        notifyTopRight();
                        // notifyError(error.response.data.message);
                    }
                    setApiError(error.response.message);

                });
        }

        if (loginAs === "Doctor") {
            doctorForgetPasswordApi(email)
                .then((response) => {
                    console.log(response);

                    setEmail("");
                    close();
                    notifyTopRight();
                })
                .catch((error) => {
                    console.log(error.response, "change passwoard error changePasswoard");
                    if (error.response.data.statusCode === 400) {
                        notifyError(error.response.data.message);
                    }
                    if (error.response.data.statusCode === 401) {
                        notifyError(error.response.data.message);
                    }
                    if (error.response.status === 500) {

                        setEmail("");
                        close();
                        notifyTopRight();
                        // notifyError(error.response.data.message);
                    }
                    setApiError(error.response.message);

                });
        }

    }
    return (
        <>
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
            <Modal className="fade" show={show}>
                <Modal.Header>
                    <Modal.Title>Forget Password</Modal.Title>
                    <Button variant="" className="close" onClick={() => close()}>
                        <span>&times;</span>
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    {apiError && (
                        <div className="bg-red-300 text-red-900 border border-red-900 p-1 my-2">
                            {apiError}
                        </div>
                    )}
                    <form onSubmit={onChangePasswoard}>
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

                        <div className="mt-4">
                            <button type="submit" className="btn btn-primary mr-3 ">
                                Send
                            </button>
                            <button
                                type="button"
                                onClick={() => close()}
                                className="btn btn-danger "
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

