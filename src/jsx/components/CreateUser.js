// import React, { useState } from "react";
// import { Row, Card, Col, Button, Modal, Container } from "react-bootstrap";
// import { changePasswoard, createUserTipper } from "../../services/AuthService";
// import { ToastContainer, toast } from "react-toastify";
// import { country } from "./Countery";
// import AWS from "aws-sdk";
// import addPhoto from "../pages/test";

// export default function CreateUser({ show, close, table }) {
//   let errorsObj = { userName: "", email: "", phoneNumber: "" };
//   const [errors, setErrors] = useState(errorsObj);

//   const [countryCode, setCountryCode] = useState("+91");

//   const [profileImage, setProfileImage] = useState();
//   const albumName = "profileImages";
//   // console.log(profileImage, "image select");
//   const [userType, setUserType] = useState("user");

//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   // const [countryCode, setCountryCode] = useState("");
//   const [apiError, setApiError] = useState("");
//   const [imgLocation, setImgLocation] = useState("");
//   // console.log(imgLocation, "imgjjkjkjk");
//   const notifyTopRight = () => {
//     toast.success("✅ Create user successfully !", {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });
//   };
//   const notifyError = () => {
//     toast.error("❌ Error !", {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//   };

//   function getCountry() {
//     return country.map((country) => {
//       return (
//         <option key={country.name} value={country.dial_code}>
//           {country.dial_code}
//         </option>
//       );
//     });
//   }

//   function onCreatUser(e) {
//     e.preventDefault();
//     let error = false;
//     const errorObj = { ...errorsObj };
//     if (userName === "") {
//       errorObj.userName = "User Name is Required";
//       error = true;
//     }
//     if (email === "") {
//       errorObj.email = "Email is Required";
//       error = true;
//     }
//     if (phoneNumber === "") {
//       errorObj.phoneNumber = "Phone Number is Required";
//       error = true;
//     }

//     setErrors(errorObj);
//     if (error) {
//       return;
//     }

//     addPhoto(profileImage, albumName)
//       .then((response) => {
//         // console.log(response, "s3 api uuuuuuuuuuuuuuuuu");
//         // console.log(response.imageName, "s3 00000000000 response");
//         // setImgLocation(response.Location);
//         // var imageFromAws = ;
//         createUserTipper(
//           userName,
//           email,
//           phoneNumber,
//           userType,
//           countryCode,
//           response.imageName
//         )
//           .then((response) => {
//             console.log(response);

//             setUserName("");
//             setEmail("");
//             setPhoneNumber("");
//             setProfileImage("");
//             close();
//             table();

//             notifyTopRight();
//           })
//           .catch((error) => {
//             console.log(error.response, "error");
//             setApiError(error.response.message);
//             notifyError();
//           });
//       })
//       .catch((error) => {
//         console.log(error, "s3 error");
//       });
//   }
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
//       <Modal className="fade" show={show}>
//         <Modal.Header>
//           <Modal.Title>Create User</Modal.Title>
//           <Button variant="" className="close" onClick={() => close()}>
//             <span>&times;</span>
//           </Button>
//         </Modal.Header>
//         <Modal.Body>
//           {apiError && (
//             <div className="bg-red-300 text-red-900 border border-red-900 p-1 my-2">
//               {apiError}
//             </div>
//           )}
//           <form onSubmit={onCreatUser}>
//             <div className="form-group">
//               <label className="mb-2 ">
//                 <strong className="">User Type</strong>
//               </label>
//               <select
//                 defaultValue="tipper"
//                 name="emailstatus"
//                 className="form-control"
//                 onClick={(e) => setUserType(e.target.value)}
//               >
//                 {" "}
//                 <option value="user">Better</option>
//                 <option value="tipper">Tipper</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label className="mb-2 ">
//                 <strong className="">Profile Image</strong>
//               </label>
//               <input
//                 type="file"
//                 className="form-control"
//                 onChange={(e) => setProfileImage(e.target.files[0])}
//                 accept="image/png, image/gif, image/jpeg, image/jpg, image/svg"
//               />
//             </div>

//             <div className="form-group">
//               <label className="mb-2 ">
//                 <strong className="">User Name</strong>
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={userName}
//                 onChange={(e) => setUserName(e.target.value)}
//               />
//               {errors.userName && (
//                 <div className="text-danger fs-12">{errors.userName}</div>
//               )}
//             </div>
//             <div className="form-group">
//               <label className="mb-2 ">
//                 <strong className="">Email </strong>
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               {errors.email && (
//                 <div className="text-danger fs-12">{errors.email}</div>
//               )}
//             </div>
//             <div className="form-group">
//               <label className="mb-2 ">
//                 <strong className="">Phone Number </strong>
//               </label>

//               <div className="d-flex ">
//                 <div className="col-3 number p-0">
//                   <select
//                     defaultValue="+91"
//                     className="form-control"
//                     aria-label="Floating label select example"
//                     onClick={(e) => setCountryCode(e.target.value)}
//                   >
//                     <option value="+91">+91</option>
//                     {getCountry()}
//                   </select>

//                   <div className="dropdown-container"></div>
//                 </div>
//                 <div className="col-9 p-0">
//                   <input
//                     type="number"
//                     className="form-control"
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                   />
//                 </div>
//               </div>
//               {errors.phoneNumber && (
//                 <div className="text-danger fs-12">{errors.phoneNumber}</div>
//               )}
//             </div>

//             <div className="mt-4">
//               <button type="submit" className="btn btn-primary mr-3 ">
//                 Save
//               </button>
//               <button
//                 type="button"
//                 onClick={() => close()}
//                 className="btn btn-danger "
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }
