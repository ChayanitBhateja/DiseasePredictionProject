
import React, { useState } from "react";
import { Row, Card, Col, Button, Modal, Container } from "react-bootstrap";
import { changePasswoard, changePasswoardAdmin } from "../../services/AuthService";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export default function DeleteProfile({ show, close }, props) {

    const notifyTopRight = () => {
        toast.success("✅ Change password successfully !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };
    const notifyError = () => {
        toast.error("❌ Error !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    const baseApiUrl = "http://localhost:5000";
    function onDelete() {

        const data = localStorage.getItem("userDetails");

        // window.location.reload();

        const myHeaders = {
            Authorization: `Bearer ${data}`,
        };
        const login = localStorage.getItem("loginAs")
        if (login === "Patient") {
            console.log("llllll")



            const data = localStorage.getItem("userDetails");

            var myHeadersa = new Headers();
            myHeadersa.append("Authorization", `Bearer ${data}`);

            var formdata = new FormData();

            var requestOptions = {
                method: 'DELETE',
                headers: myHeadersa,
                body: formdata,
                redirect: 'follow'
            };

            fetch(`${baseApiUrl}/user/auth/delete`, requestOptions)
                .then(response => {
                    response.text()
                    localStorage.clear();
                    close();
                    window.location.reload();
                }
                )
                .then(result => console.log(result))
                .catch(error => {
                    console.log('error', error)
                    notifyError();
                }
                );

            // axios
            //     .delete(
            //         `${baseApiUrl}/user/auth/delete`,
            //         { test: "" },
            //         {
            //             headers: myHeaders,
            //         }
            //     )
            //     .then(() => {
            //         close()
            //         localStorage.clear();

            //         props.history.push("/login");
            //         window.location.reload();

            //     })
            //     .catch(() => {
            //         console.log("api error");
            //         notifyError();
            //     });
        }
        if (login === "Doctor") {

            const data = localStorage.getItem("userDetails");

            var myHeadersa = new Headers();
            myHeadersa.append("Authorization", `Bearer ${data}`);

            var formdata = new FormData();

            var requestOptions = {
                method: 'DELETE',
                headers: myHeadersa,
                body: formdata,
                redirect: 'follow'
            };

            fetch(`${baseApiUrl}/doctor/auth/delete`, requestOptions)
                .then(response => {
                    response.text()
                    localStorage.clear();
                    close()
                    window.location.reload();
                }
                )
                .then(result => console.log(result))
                .catch(error => {
                    console.log('error', error)
                    notifyError();
                }
                );

            // axios
            //     .delete(
            //         `${baseApiUrl}/doctor/auth/delete`,
            //         { test: "" },
            //         {
            //             headers: myHeaders,
            //         }
            //     )
            //     .then(() => {
            //         localStorage.clear();

            //         props.history.push("/login");
            //         window.location.reload();

            //     })
            //     .catch(() => {
            //         console.log("api error");
            //         notifyError();
            //     });

            console.log(axios, "kkkkk")

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
                    <Modal.Title>DElete Profile</Modal.Title>
                    <Button variant="" className="close" onClick={() => close()}>
                        <span>&times;</span>
                    </Button>
                </Modal.Header>
                <Modal.Body>

                    <form >
                        <h3>Are you sure! you want to delete your profile</h3>

                        <div className="mt-4">
                            <button type="button" onClick={onDelete} className="btn btn-primary mr-3 ">
                                Save
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
