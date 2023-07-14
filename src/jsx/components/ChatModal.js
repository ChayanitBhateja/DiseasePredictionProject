import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { Row, Card, Col, Button, Modal, Container } from "react-bootstrap";
import {
  getAdminProfile,
  getDoctorEditProfile,
  getPatientEditProfile,
} from "../../services/AuthService";
import { ToastContainer, toast } from "react-toastify";
let socket;

export default function ChatModal({ show, close, patientId }) {
  const [message, setMessage] = useState();
  const [aa, setAa] = useState([]);
  // const [arrMessage, setArrMessage] = useState((arr) => arr.concat(message))
  const [senderId, setSenderId] = useState("");
  const [find, setFind] = useState("");

  const [reciveMessage, setReciveMessage] = useState([]);
  console.log(reciveMessage, "iiiiiii");
  let messages = [];
  messages.concat(message);

  const loginAs = localStorage.getItem("loginAs");
  console.log(messages, "messages");
  const token = localStorage.getItem("userDetails");
  const URLString = "http://localhost:5000";
  console.log(message, "kkkkkk");
  useEffect(() => {
    if (loginAs === "Patient") {
      getPatientEditProfile()
        .then((response) => {
          console.log(response, "edit profile pppppget");
          setSenderId(response.data.data._id);
        })
        .catch((error) => {
          console.log(error, "edit profile get");
        });
    }
    if (loginAs === "Doctor") {
      getDoctorEditProfile()
        .then((response) => {
          console.log(response, "edit profile dddddget");
          setSenderId(response.data.data._id);
        })
        .catch((error) => {
          console.log(error, "edit profile get");
        });
    }
    if (loginAs === "Admin") {
      getAdminProfile()
        .then((response) => {
          console.log(response, "edit profile dddddget admin");
          setSenderId(response.data.data._id);
        })
        .catch((error) => {
          console.log(error, "edit profile get");
        });
    }
  }, [loginAs]);
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

    socket.on("receiveMessage", (data) => {
      console.log("Received messagessssss:", data);
      // messages.push(data)
      setReciveMessage((arr) => arr.concat(JSON.stringify(data)));
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from Socket.IO server");
    });
  }, []);

  const sendMessage = () => {
    console.log(senderId, "senderId");
    setFind("sender");
    const obj = { message, sender: senderId };
    console.log(obj, "9999999");
    setReciveMessage((arr) => arr.concat(JSON.stringify(obj)));
    socket.emit("sendMessage", {
      message,
      sender: senderId,
      receiver: patientId,
    });
    console.log(patientId, "reciver");
    setMessage("");
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
          <div>
            <div
              style={{
                border: "1px solid ",
                padding: "15px",
                height: "600px",
                overflowY: "auto",
              }}
            >
              {/* {reciveMessage?.map((item, i) => (
                <div
                  key={i}
                  style={{
                    textAlign: "left",
                    backgroundColor: "#F0F2F5",
                    width: "fit-content",
                    borderRadius: "10px",

                    padding: "5px",
                    color: "#000",
                    marginRight: "auto",
                    wordBreak: "break-word",
                    marginBottom: "8px",
                  }}
                >
                  <p className="mb-0">{item}</p>
                </div>
              ))} */}
              {/* <div style={{ display: "flex", flexDirection: "column" }}>
                {aa?.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      textAlign: "end",
                      backgroundColor: "rgb(55, 62, 76)",
                      width: "fit-content",
                      borderRadius: "10px",

                      padding: "5px",
                      color: "#fff",
                      marginLeft: "auto",
                      wordBreak: "break-word",
                      marginBottom: "8px",
                    }}
                    className="text-end"
                  >
                    <p className="m-0">{item}</p>
                  </div>
                ))}

             
              </div> */}
              {reciveMessage.map((message, index) => {
                console.log(message, "messssssoooooooo");
                const isSender =
                  JSON.stringify(JSON.parse(message)?.sender) ===
                  JSON.stringify(senderId);
                console.log(isSender, "kkkkkkk");
                const messageContainerStyle = {
                  backgroundColor: isSender ? "rgb(55, 62, 76)" : "#F0F2F5",
                  color: isSender ? "#ffffff" : "#212529",
                  borderRadius: "10px",
                  padding: "5px 10px",
                  alignSelf: isSender ? "flex-end" : "flex-start",
                  textAlign: isSender ? "right" : "left",
                  marginRight: isSender ? 0 : "auto",
                  marginLeft: isSender ? "auto" : "0",
                  marginBottom: "10px",
                  maxWidth: "fit-content",
                  wordBreak: "break-word",
                };

                return (
                  <div
                    key={index}
                    style={{
                      alignSelf: isSender ? "flex-end" : "flex-start",
                    }}
                  >
                    <p style={messageContainerStyle}>
                      {JSON.parse(message)?.message}
                    </p>
                  </div>
                );
              })}
            </div>
            <input
              style={{ border: "1px solid ", padding: "15px" }}
              type="text"
              className="form-control mt-4 "
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <div className="mt-4">
              <button
                type="button"
                onClick={sendMessage}
                className="btn btn-primary mr-3 "
              >
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

// export default function ChatModal({ show, close, patientId }) {
//   const [message, setMessage] = useState("");
//   const [senderId, setSenderId] = useState("");
//   const [receiveMessages, setReceiveMessages] = useState([]);
//   const [sentMessages, setSentMessages] = useState([]);
//   const [socket, setSocket] = useState(null);
//   const chatContainerRef = useRef(null);

//   const loginAs = localStorage.getItem("loginAs");
//   const token = localStorage.getItem("userDetails");
//   const URLString = "http://localhost:5000";

//   useEffect(() => {
//     if (loginAs === "Patient") {
//       getPatientEditProfile()
//         .then((response) => {
//           console.log(response, "edit profile get");
//         })
//         .catch((error) => {
//           console.log(error, "edit profile get");
//         });
//     }
//     if (loginAs === "Doctor") {
//       getDoctorEditProfile()
//         .then((response) => {
//           console.log(response, "edit profile get");
//         })
//         .catch((error) => {
//           console.log(error, "edit profile get");
//         });
//     }
//   }, [loginAs]);

//   useEffect(() => {
//     const newSocket = io(URLString, {
//       query: { token },
//     });

//     setSocket(newSocket);

//     return () => {
//       newSocket.disconnect();
//     };
//   }, [token]);

//   useEffect(() => {
//     if (socket) {
//       socket.on("receiveMessage", (data) => {
//         setReceiveMessages((messages) => [...messages, data.message]);
//       });

//       socket.on("disconnect", () => {
//         console.log("Disconnected from Socket.IO server");
//       });
//     }
//   }, [socket]);

//   const sendMessage = () => {
//     socket.emit("sendMessage", {
//       message,
//       sender: senderId,
//       receiver: patientId,
//     });
//     setSentMessages((messages) => [...messages, message]);
//     setMessage("");
//   };

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop =
//         chatContainerRef.current.scrollHeight;
//     }
//   }, [receiveMessages, sentMessages]);

//   //   return (
//   //     <>
//   //       <ToastContainer
//   //         position="top-right"
//   //         autoClose={5000}
//   //         hideProgressBar={false}
//   //         newestOnTop
//   //         closeOnClick
//   //         rtl={false}
//   //         pauseOnFocusLoss
//   //         draggable
//   //         pauseOnHover
//   //       />
//   //       <Modal className="fade" size="md" show={show}>
//   //         <Modal.Header>
//   //           <Modal.Title>Chat with user</Modal.Title>
//   //           <Button variant="" className="close" onClick={close}>
//   //             <span>&times;</span>
//   //           </Button>
//   //         </Modal.Header>
//   //         <Modal.Body>
//   //           <div>
//   //             <div
//   //               ref={chatContainerRef}
//   //               style={{
//   //                 border: "1px solid",
//   //                 padding: "15px",
//   //                 height: "600px",
//   //                 overflowY: "auto",
//   //               }}
//   //             >
//   //               {[...sentMessages, ...receiveMessages].map((message, index) => (
//   //                 <div
//   //                   key={index}
//   //                   style={{
//   //                     textAlign: message.sender === senderId ? "end" : "start",
//   //                     marginBottom: "10px",
//   //                   }}
//   //                 >
//   //                   <p
//   //                     style={{
//   //                       backgroundColor:
//   //                         message.sender === senderId ? "#007bff" : "#f8f9fa",
//   //                       color:
//   //                         message.sender === senderId ? "#ffffff" : "#212529",
//   //                       borderRadius: "5px",
//   //                       padding: "5px 10px",
//   //                       maxWidth: "80%",
//   //                       alignSelf:
//   //                         message.sender === senderId ? "flex-end" : "flex-start",
//   //                     }}
//   //                   >
//   //                     {message}
//   //                   </p>
//   //                 </div>
//   //               ))}
//   //             </div>
//   //             <input
//   //               style={{ border: "1px solid", padding: "15px" }}
//   //               type="text"
//   //               className="form-control mt-4"
//   //               value={message}
//   //               onChange={(e) => setMessage(e.target.value)}
//   //             />

//   //             <div className="mt-4">
//   //               <button
//   //                 type="button"
//   //                 onClick={sendMessage}
//   //                 className="btn btn-primary mr-3"
//   //               >
//   //                 Send
//   //               </button>
//   //               <button type="button" onClick={close} className="btn btn-danger">
//   //                 Close
//   //               </button>
//   //             </div>
//   //           </div>
//   //         </Modal.Body>
//   //       </Modal>
//   //     </>
//   //   );

//   return (
//     <>
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//       <Modal className="fade" size="md" show={show}>
//         <Modal.Header>
//           <Modal.Title>Chat with user</Modal.Title>
//           <Button variant="" className="close" onClick={close}>
//             <span>&times;</span>
//           </Button>
//         </Modal.Header>
//         <Modal.Body>
//           <div>
//             <div
//               ref={chatContainerRef}
//               style={{
//                 border: "1px solid",
//                 padding: "15px",
//                 height: "600px",
//                 overflowY: "auto",
//                 display: "flex",
//                 flexDirection: "column",
//               }}
//             >
//               {[...sentMessages, ...receiveMessages].map((message, index) => {
//                 const isSender = message?.sender === senderId;
//                 const messageContainerStyle = {
//                   backgroundColor: isSender ? "#007bff" : "#f8f9fa",
//                   color: isSender ? "#ffffff" : "#212529",
//                   borderRadius: "5px",
//                   padding: "5px 10px",
//                   alignSelf: isSender ? "flex-end" : "flex-start",
//                   marginBottom: "10px",
//                   maxWidth: "80%",
//                 };

//                 return (
//                   <div
//                     key={index}
//                     style={{ alignSelf: isSender ? "flex-end" : "flex-start" }}
//                   >
//                     <p style={messageContainerStyle}>{message}</p>
//                   </div>
//                 );
//               })}
//             </div>
//             <input
//               style={{ border: "1px solid", padding: "15px" }}
//               type="text"
//               className="form-control mt-4"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />

//             <div className="mt-4">
//               <button
//                 type="button"
//                 onClick={sendMessage}
//                 className="btn btn-primary mr-3"
//               >
//                 Send
//               </button>
//               <button type="button" onClick={close} className="btn btn-danger">
//                 Close
//               </button>
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }
