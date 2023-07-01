

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Row, Card, Col, Button, Modal, Container } from "react-bootstrap";
import { getDoctorEditProfile, getPatientEditProfile } from "../../services/AuthService";
import { ToastContainer, toast } from "react-toastify";
let socket;

export default function ChatModal({ show, close, patientId }) {
    const [message, setMessage] = useState('');
    // const [arrMessage, setArrMessage] = useState((arr) => arr.concat(message))
    const [senderId, setSenderId] = useState('');
    const [reciveMessage, setReciveMessage] = useState([]);
    console.log(reciveMessage, "iiiiiii")
    let messages = [];
    message.concat(message);
    const loginAs = localStorage.getItem("loginAs")
    console.log(loginAs)

    const token = localStorage.getItem("userDetails");
    const URLString = "http://localhost:5000"
    console.log(message, "kkkkkk")
    useEffect(() => {
        if (loginAs === "Patient") {
            getPatientEditProfile().then((response) => {
                console.log(response, "edit profile get")

            }).catch((error) => {
                console.log(error, "edit profile get")
            })
        }
        if (loginAs === "Doctor") {
            getDoctorEditProfile().then((response) => {
                console.log(response, "edit profile get")

            }).catch((error) => {
                console.log(error, "edit profile get")
            })
        }
    }, [loginAs])
    useEffect(() => {
        // const socket = io('http://localhost:5000'); // Replace with your server URL

        // Event handlers
        socket = io(URLString, {
            query: { token },
        });


        // 

        // Clean up on component unmount
        return () => {
            socket.disconnect();
        };
    }, []);
    console.log(reciveMessage, "messssss");

    useEffect(() => {
        // const socket = io('http://localhost:3000');

        socket.on('receiveMessage', (data) => {
            console.log('Received messagessssss:', data);
            messages.push(data)
            setReciveMessage((arr) => arr.concat(data))

        });

        socket.on('disconnect', () => {
            console.log('Disconnected from Socket.IO server');
        });
    }, []);

    const sendMessage = () => {
        socket.emit('sendMessage', { message, sender: senderId, receiver: patientId });
        setMessage('');
    };
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
            <Modal className="fade" size="md" show={show}>
                <Modal.Header>
                    <Modal.Title>Chat with user</Modal.Title>
                    <Button variant="" className="close" onClick={() => close()}>
                        <span>&times;</span>
                    </Button>
                </Modal.Header>
                <Modal.Body>

                    <div >
                        <div style={{ border: "1px solid ", padding: "15px", height: "600px" }}>
                            {reciveMessage?.map((item, i) => (
                                <div key={i}>
                                    <p>{item}</p>
                                </div>
                            ))}
                            {messages?.map((item, i) => (
                                <div key={i} style={{ textAlign: "end" }} className="text-end">
                                    <p>{item}</p>
                                </div>
                            ))}


                        </div>
                        <input
                            style={{ border: "1px solid ", padding: "15px" }}
                            type="text"
                            className="form-control mt-4 "
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}

                        />

                        <div className="mt-4">
                            <button type="button" onClick={sendMessage} className="btn btn-primary mr-3 ">
                                Send
                            </button>
                            <button
                                type="button"
                                onClick={() => close()}
                                className="btn btn-danger "
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
