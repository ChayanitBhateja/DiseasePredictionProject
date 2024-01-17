// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';
// import { user } from '../../services/AuthService';

// let socket;
// const ChatList = () => {
//     const [message, setMessage] = useState('');
//     const token = localStorage.getItem("userDetails");
//     const URLString = "http://localhost:5000"
//     console.log(message, "kkkkkk")
//     useEffect(() => {
//         // const socket = io('http://localhost:5000'); // Replace with your server URL

//         // Event handlers
//         socket = io(URLString, {
//             query: { token },
//         });

//         //

//         // Clean up on component unmount
//         return () => {
//             socket.disconnect();
//         };
//     }, []);

//     useEffect(() => {
//         // const socket = io('http://localhost:3000');

//         socket.on('receiveMessage', (data) => {
//             console.log('Received message:', data);
//         });

//         socket.on('disconnect', () => {
//             console.log('Disconnected from Socket.IO server');
//         });
//     }, []);

//     const sendMessage = () => {
//         socket.emit('sendMessage', { message, sender: user._id, receiver: user.doctor });
//         setMessage('');
//     };

//     return (
//         <div>
//             {/* Your component's content */}
//             <h1>hello</h1>
//             <div>
//                 <input
//                     type="text"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                 />
//                 <button onClick={sendMessage}>Send</button>
//             </div>
//         </div>

//     );
// };

// export default ChatList;

// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// const MyComponent = () => {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const socket = io('http://localhost:3000');

//     socket.on('message', (data) => {
//       console.log('Received message:', data);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   const sendMessage = () => {
//     const socket = io('http://localhost:3000');
//     socket.emit('message', message);
//     setMessage('');
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// };

// export default MyComponent;

import React, { useState, useRef, useEffect, Fragment } from "react";

import { Dropdown } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import {
  deleteDocument,
  getPatientEditProfile,
} from "../../services/AuthService";
import { Card, Button, Tab, Nav } from "react-bootstrap";

import UploadDocument from "../components/UploadDocument";

const ChatList = () => {
  const [changePasswordShow, setChangePasswordShow] = useState(false);

  const [users, setUsers] = useState([]);

  const svg1 = (
    <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect x="0" y="0" width="24" height="24"></rect>
        <circle fill="#000000" cx="5" cy="12" r="2"></circle>
        <circle fill="#000000" cx="12" cy="12" r="2"></circle>
        <circle fill="#000000" cx="19" cy="12" r="2"></circle>
      </g>
    </svg>
  );
  const notifyTopRight = () => {
    toast.success("✅ Deleted successfully!", {
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

  function patient() {
    getPatientEditProfile().then((response) => {
      console.log(response, "all doctor");
      setUsers(response.data.data.reports);
    });
  }

  useEffect(() => {
    patient();
  }, []);
  const deleteUserByIndex = (index) => {
    // Make a copy of the users array
    const updatedUsers = [...users];

    // Remove the user at the specified index
    const deletedUser = updatedUsers.splice(index, 1)[0];

    // Update the state with the modified array
    setUsers(updatedUsers);

    deleteDocument(updatedUsers)
      .then((res) => {
        console.log(res, "dddd");
        notifyTopRight();
        patient();
      })
      .catch((error) => {
        console.log(error);
      });

    // Store the deleted user in the deletedUsers state
  };
  const saveImageToLocalPC = (imageUrl, imageName) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = imageName;
    link.click();
  };
  return (
    <Fragment>
      <UploadDocument
        show={changePasswordShow}
        close={() => setChangePasswordShow(false)}
        table={patient}
      />

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
      <div className="page-titles">
        <h4>Document List</h4>
      </div>
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center flex-column flex-sm-row">
          <Dropdown
            as="li"
            className="nav-item dropdown header-profile bg-primary p-2 text-white"
            style={{ borderRadius: "10px" }}
          >
            <Dropdown.Toggle
              variant=""
              as="a"
              className="i-false c-pointer nav-link text-white"
              to=""
              role="button"
              data-toggle="dropdown"
            >
              <div className="header-info ">
                <span>
                  <strong>Document</strong>
                </span>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu
              align="right"
              className="dropdown-menu dropdown-menu-right"
            >
              <p
                className="dropdown-item ai-icon"
                onClick={() => setChangePasswordShow(true)}
                style={{ cursor: "pointer" }}
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
                <span className="ml-2">Upload Document </span>
              </p>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <div id="order_list" className="dataTables_wrapper no-footer">
                  <table
                    id="example5"
                    className="display mb-4  dataTable no-footer w-100 "
                    style={{ minWidth: 845 }}
                    role="grid"
                    aria-describedby="example5_info"
                  >
                    <thead>
                      <tr role="row">
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Customer Name: activate to sort column ascending"
                          style={{ width: "85.3333px" }}
                        >
                          Photo
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Customer Name: activate to sort column ascending"
                          style={{ width: "85.3333px" }}
                        >
                          Type
                        </th>

                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="example5"
                          rowSpan={1}
                          colSpan={1}
                          style={{ width: "150.3333px" }}
                        ></th>
                      </tr>
                    </thead>

                    <tbody>
                      {users?.map((item, index) => (
                        <tr key={item._id} role="row" className="odd">
                          {/* <td>
                            <img
                              src={`http://localhost:5000/${item}`}
                              style={{ height: "60px", width: "60px" }}
                            />
                          </td> */}
                          <td>
                            <a
                              href={`http://localhost:5000/${item}`}
                              download={`document_${index + 1}.png`}
                              target="_blank"
                            >
                              <img
                                src={`http://localhost:5000/${item}`}
                                style={{
                                  height: "60px",
                                  width: "60px",
                                  cursor: "pointer",
                                }}
                                alt={`Document ${index + 1}`}
                              />
                            </a>
                          </td>
                          {/* <td>
                            <img
                              src={`http://localhost:5000/${item}`}
                              style={{
                                height: "60px",
                                width: "60px",
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                saveImageToLocalPC(
                                  `http://localhost:5000/${item}`,
                                  "image.jpg"
                                )
                              }
                            />
                          </td> */}

                          <td>Document</td>

                          <td>
                            <Dropdown>
                              <Dropdown.Toggle
                                variant="info light"
                                className="light sharp btn btn-info i-false"
                              >
                                {svg1}
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                <Dropdown.Item
                                  //   onClick={() => {
                                  //     deleteDoctorByAdmin(item._id);
                                  //   }}
                                  onClick={() => deleteUserByIndex(index)}
                                >
                                  Delete
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default ChatList;
