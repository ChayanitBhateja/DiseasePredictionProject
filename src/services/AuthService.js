import axios from "axios";
import swal from "sweetalert";
import { loginConfirmedAction, logout } from "../store/actions/AuthActions";
// const baseApiUrl = "https://api.sportex.club";
const baseApiUrl = "http://localhost:5000";

export function signUp(email, password) {
  //axios call

  const postData = {
    email,
    password,
    returnSecureToken: true,
  };

  return axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD3RPAp3nuETDn9OQimqn_YF6zdzqWITII`,
    postData
  );
}

export function login(email, password) {
  const postData = {
    email,
    password,
    // returnSecureToken: true,
  };
  const myHeaders = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Headers": "privatekey",
  };

  return axios.post(`${baseApiUrl}/user/auth/login`, postData);
}
export function loginDoctor(email, password) {
  const postData = {
    email,
    password,
    // returnSecureToken: true,
  };
  const myHeaders = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Headers": "privatekey",
  };

  return axios.post(`${baseApiUrl}/doctor/auth/login`, postData);
}
export function loginAdmin(email, password) {
  const postData = {
    email,
    password,
    // returnSecureToken: true,
  };
  const myHeaders = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Headers": "privatekey",
  };

  return axios.post(`${baseApiUrl}/admin/auth/login`, postData);
}
export function createUserTipper(
  userName,
  email,
  phoneNumber,
  userType,
  countryCode,
  profileImage
) {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  console.log(
    userName,
    email,
    phoneNumber,
    userType,
    countryCode,
    profileImage,
    "createuser llll"
  );
  const postData = {
    userName,
    email,
    phoneNumber,
    userType,
    countryCode,
    profileImage,
    // returnSecureToken: true,
  };

  return axios.post(`${baseApiUrl}/admin/user`, postData, {
    headers: myHeaders,
  });
}

export function editUserTipper(
  userName,
  email,
  phoneNumber,
  userType,
  countryCode,
  profileImage,
  userId
) {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  console.log(profileImage, "createuser edit ");
  const postData = {
    userName,
    email,
    phoneNumber,
    userType,
    countryCode,
    profileImage,
    userId,
    // returnSecureToken: true,
  };

  return axios.put(`${baseApiUrl}/admin/user`, postData, {
    headers: myHeaders,
  });
}
export function user(
  userName,
  email,
  phoneNumber,
  userType,
  createDate,
  limit,
  pageNumber
) {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.get(
    `${baseApiUrl}/admin/user/list?page=${pageNumber}&email=${email}&createdDate=${createDate}&phoneNumber=${phoneNumber}&userType=${userType}&userName=${userName}&limit=${limit}`,
    {
      headers: myHeaders,
    }
  );
}
export function deleteUser(id, userType) {
  console.log(id, userType, "auth delete user");
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.delete(
    `${baseApiUrl}/admin/user?userId=${id}&userType=${userType}`,

    {
      headers: myHeaders,
    }
  );
}
export function blockUser(userId, userType) {
  console.log(userId, userType, "auth block user");
  const data = localStorage.getItem("userDetails");
  const postData = {
    userId,
    userType,

    // returnSecureToken: true,
  };
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.put(`${baseApiUrl}/admin/user/blockUnblock`, postData, {
    headers: myHeaders,
  });
}
export function userById(id, userType) {
  console.log(id, userType, "ioioio");
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.get(
    `${baseApiUrl}/admin/user?userId=${id}&userType=${userType}`,
    {
      headers: myHeaders,
    }
  );
}

export function createBannerApi(title, type, image, url) {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  console.log(image, " banner create authservice");
  const postData = {
    title,
    type,
    image,
    url,
    // returnSecureToken: true,
  };

  return axios.post(`${baseApiUrl}/admin/banner`, postData, {
    headers: myHeaders,
  });
}
export function editBannerApi(title, type, image, url, bannerId) {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  console.log(image, " banner create authservice");
  const postData = {
    title,
    type,
    image,
    url,
    bannerId,
    // returnSecureToken: true,
  };

  return axios.put(`${baseApiUrl}/admin/banner`, postData, {
    headers: myHeaders,
  });
}

export function bannerTable(limit, page) {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.get(
    `${baseApiUrl}/admin/banner/list?page=${page}&limit=${limit}`,
    {
      headers: myHeaders,
    }
  );
}
export function deleteBannerData(id) {
  console.log(id, "auth delete banner");
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.delete(
    `${baseApiUrl}/admin/banner?bannerId=${id}`,

    {
      headers: myHeaders,
    }
  );
}
export function formatError(errorResponse) {
  switch (errorResponse.error.message) {
    case "EMAIL_EXISTS":
      //return 'Email already exists';
      swal("Oops", "Email already exists", "error");
      break;
    case "EMAIL_NOT_FOUND":
      //return 'Email not found';
      swal("Oops", "Email not found", "error", { button: "Try Again!" });
      break;
    case "INVALID_PASSWORD":
      //return 'Invalid Password';
      swal("Oops", "Invalid Password", "error", { button: "Try Again!" });
      break;
    case "USER_DISABLED":
      return "User Disabled";

    default:
      return "";
  }
}
export function bannerById(id) {
  console.log(id, "banner by id api auth file");
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.get(`${baseApiUrl}/admin/banner?bannerId=${id}`, {
    headers: myHeaders,
  });
}

export function patientHomeApi(search) {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.get(`${baseApiUrl}/user/doctor/doctorList?search=${search}`, {
    headers: myHeaders,
  });
}
export function consultDoctor(doctorId) {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  const postData = {
    doctorId,
    // returnSecureToken: true,
  };

  return axios.post(`${baseApiUrl}/user/doctor/consult`, postData, {
    headers: myHeaders,
  });
}
export function removeDoctor(doctorId) {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  const postData = {
    doctorId,
    // returnSecureToken: true,
  };

  return axios.put(`${baseApiUrl}/user/doctor/removeDoctor`, postData, {
    headers: myHeaders,
  });
}
export function removePatient(patientId) {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  const postData = {
    patientId,
    // returnSecureToken: true,
  };

  return axios.put(`${baseApiUrl}/doctor/patient/removePatient`, postData, {
    headers: myHeaders,
  });
}
export function changePasswoard(oldPassword, newPassword) {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  const postData = {
    newPassword,
    oldPassword,
    // returnSecureToken: true,
  };

  return axios.put(`${baseApiUrl}/user/profile/changePassword`, postData, {
    headers: myHeaders,
  });
}
export function changePasswoardDoc(oldPassword, newPassword) {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  const postData = {
    newPassword,
    oldPassword,
    // returnSecureToken: true,
  };

  return axios.put(`${baseApiUrl}/doctor/profile/changePassword`, postData, {
    headers: myHeaders,
  });
}
export function changePasswoardAdmin(oldPassword, newPassword) {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  const postData = {
    newPassword,
    oldPassword,
    // returnSecureToken: true,
  };

  return axios.put(`${baseApiUrl}/admin/auth/changePassword`, postData, {
    headers: myHeaders,
  });
}
export function sendPrediction(patientId, prediction, probability) {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  const postData = {
    patientId,
    prediction,
    probability,
    // returnSecureToken: true,
  };

  return axios.post(`${baseApiUrl}/doctor/patient/sendPrediction`, postData, {
    headers: myHeaders,
  });
}
export function editProfileApi(name, email, file) {
  const data = localStorage.getItem("userDetails");
  const form = new FormData();
  form.append("name", name);
  form.append("email", email);
  form.append("file", file);

  // const postData = {
  //   name, email, file
  //   // returnSecureToken: true,
  // };

  // return axios.put(`${baseApiUrl}/user/profile/edit`, postData, {
  //   headers: myHeaders,
  // });
  return axios({
    // timeout: 1000*6,
    method: "put",
    url: `${baseApiUrl}/user/profile/edit`,
    data: form,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${data}`,
    },
  });
}
export function editProfileDocApi(name, email, file) {
  const data = localStorage.getItem("userDetails");
  const form = new FormData();
  form.append("name", name);
  form.append("email", email);
  form.append("file", file);

  // const postData = {
  //   name, email, file
  //   // returnSecureToken: true,
  // };

  // return axios.put(`${baseApiUrl}/user/profile/edit`, postData, {
  //   headers: myHeaders,
  // });
  return axios({
    // timeout: 1000*6,
    method: "put",
    url: `${baseApiUrl}/doctor/profile/edit`,
    data: form,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${data}`,
    },
  });
}
// export function importFile(file) {
//   console.log(file, " data........");
//   const token = localStorage.getItem("userDetails");
//   const form = new FormData();
//   form.append("excel", file);
//   console.log(form, "after append");
//   return axios({
//     // timeout: 1000*6,
//     method: "post",
//     url: `${baseUrl}/admin/store/addStoreData`,
//     data: form,
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Bearer ${token}`,
//     },
//   });

// }

export function userDocumentUpload(file) {
  const data = localStorage.getItem("userDetails");
  const form = new FormData();

  form.append("file", file);

  return axios({
    // timeout: 1000*6,
    method: "post",
    url: `${baseApiUrl}/user/profile/upload`,
    data: form,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${data}`,
    },
  });
}
export function doctorDocumentUpload(file) {
  const data = localStorage.getItem("userDetails");
  const form = new FormData();

  form.append("file", file);

  return axios({
    // timeout: 1000*6,
    method: "post",
    url: `${baseApiUrl}/doctor/profile/upload`,
    data: form,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${data}`,
    },
  });
}
export function getAllDoctor(search, limit, page) {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.get(
    `${baseApiUrl}/admin/doctor/getAll?search=${search}&limit=${limit}&page=${page}`,
    {
      headers: myHeaders,
    }
  );
}
export function getAllPatient(search, limit, pageNumber) {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.get(
    `${baseApiUrl}/admin/patient/patientList?search=${search}&limit=${limit}&page=${pageNumber}`,
    {
      headers: myHeaders,
    }
  );
}

export function doctorDetail(id) {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.get(`${baseApiUrl}/admin/doctor/Details?id=${id}`, {
    headers: myHeaders,
  });
}

export function predictionApi(
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
) {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.post(
    `${baseApiUrl}/doctor/patient/predict?age=${age}&sex=${sex}&cp=${cp}&trtbps=${trtbps}&chol=${chol}&fbs=${fbs}&restecg=${restecg}&thalachh=${thalachh}&exng=${exng}&oldpeak=${oldpeak}&slp=${slp}&caa=${caa}&thall=${thall}`
  );
}
export function patientDetailApi(id) {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.get(`${baseApiUrl}/admin/patient/detail?patientId=${id}`, {
    headers: myHeaders,
  });
}
export function patientDetailApiForDoc(id) {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.get(
    `${baseApiUrl}/doctor/patient/patientProfile?patientId=${id}`,
    {
      headers: myHeaders,
    }
  );
}
export function approveDoctor(id) {
  const data = localStorage.getItem("userDetails");
  const postData = {
    id,

    // returnSecureToken: true,
  };
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.post(`${baseApiUrl}/admin/doctor/approve`, postData, {
    headers: myHeaders,
  });
}
export function deleteDoctor(id) {
  const data = localStorage.getItem("userDetails");

  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.delete(`${baseApiUrl}/admin/doctor/delete?id=${id}`, {
    headers: myHeaders,
  });
}
export function deletePatient(id) {
  const data = localStorage.getItem("userDetails");

  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.delete(`${baseApiUrl}/admin/patient/delete?patientId=${id}`, {
    headers: myHeaders,
  });
}

export function adminBlockDoctor(id, toggle) {
  const data = localStorage.getItem("userDetails");
  const postData = {
    id,
    toggle,

    // returnSecureToken: true,
  };
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.post(`${baseApiUrl}/admin/doctor/block`, postData, {
    headers: myHeaders,
  });
}

export function adminBlockPatient(patientId, toggle) {
  const data = localStorage.getItem("userDetails");
  const postData = {
    patientId,
    toggle,

    // returnSecureToken: true,
  };
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.post(`${baseApiUrl}/admin/patient/block`, postData, {
    headers: myHeaders,
  });
}
export function getAllRequestPatient() {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.get(`${baseApiUrl}/doctor/patient/patientRequests`, {
    headers: myHeaders,
  });
}

export function getAllAcceptedPatient(search, limit, pageNumber) {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.get(
    `${baseApiUrl}/doctor/patient/list?search=${search}&page=${pageNumber}&limit=${limit}`,
    {
      headers: myHeaders,
    }
  );
}
export function getAllOtherPatient(search, limit, pageNumber) {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.get(
    `${baseApiUrl}/doctor/patient/patientList?search=${search}&page=${pageNumber}&limit=${limit}`,
    {
      headers: myHeaders,
    }
  );
}
export function getAdminDashboard() {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.get(`${baseApiUrl}/admin/auth/dashboard`, {
    headers: myHeaders,
  });
}
export function patientsResponseApi(patientId, response) {
  const data = localStorage.getItem("userDetails");
  const postData = {
    patientId,
    response,

    // returnSecureToken: true,
  };
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.post(`${baseApiUrl}/doctor/patient/response`, postData, {
    headers: myHeaders,
  });
}
export function signUpPatient(name, email, password) {
  const postData = {
    name,
    email,
    password,
    // returnSecureToken: true,
  };
  const myHeaders = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Headers": "privatekey",
  };

  return axios.post(`${baseApiUrl}/user/auth/signUp`, postData);
}
export function signUpDoc(name, email, password, specialist) {
  const postData = {
    name,
    email,
    password,
    specialist,
    // returnSecureToken: true,
  };
  const myHeaders = {
    "Content-Type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Headers": "privatekey",
  };

  return axios.post(`${baseApiUrl}/doctor/auth/signUp`, postData);
}
export function saveTokenInLocalStorage(tokenDetails, name, email) {
  // tokenDetails.expireDate = new Date(
  //   new Date().getTime() + tokenDetails.expiresIn * 1000
  // );
  localStorage.setItem("userDetails", tokenDetails);
  localStorage.setItem("loginAs", "Patient");
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
}
export function saveTokenInLocalStorageDoc(tokenDetails, name, email) {
  // tokenDetails.expireDate = new Date(
  //   new Date().getTime() + tokenDetails.expiresIn * 1000
  // );
  localStorage.setItem("userDetails", tokenDetails);
  localStorage.setItem("loginAs", "Doctor");
  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
}

export function getPatientEditProfile() {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.get(`${baseApiUrl}/user/profile/`, {
    headers: myHeaders,
  });
}

export function getDoctorEditProfile() {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  return axios.get(`${baseApiUrl}/doctor/profile/`, {
    headers: myHeaders,
  });
}
export function runLogoutTimer(dispatch, timer, history) {
  setTimeout(() => {
    dispatch(logout(history));
  }, timer);
}

export function userForgetPasswordApi(email) {
  const data = localStorage.getItem("userDetails");
  // const myHeaders = {
  //   Authorization: `Bearer ${data}`,
  // };
  const postData = {
    email,

    // returnSecureToken: true,
  };

  return axios.post(
    `${baseApiUrl}/user/auth/forgotPassword`,
    postData
    // ,

    // {
    //   headers: myHeaders,
    // }
  );
}

export function doctorForgetPasswordApi(email) {
  const data = localStorage.getItem("userDetails");
  // const myHeaders = {
  //   Authorization: `Bearer ${data}`,
  // };
  const postData = {
    email,

    // returnSecureToken: true,
  };

  return axios.post(
    `${baseApiUrl}/doctor/auth/forgotPassword`,
    postData
    // ,

    // {
    //   headers: myHeaders,
    // }
  );
}
export function adminChangePasswoard(password, doctorId) {
  console.log(" mmmm");
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  const postData = {
    doctorId,
    password,
    // returnSecureToken: true,
  };

  return axios.post(`${baseApiUrl}/admin/doctor/changePassword`, postData, {
    headers: myHeaders,
  });
}
export function adminChangePasswoardPatient(password, patientId) {
  console.log(" mmmm");
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  const postData = {
    patientId,
    password,
    // returnSecureToken: true,
  };

  return axios.post(`${baseApiUrl}/admin/patient/changePassword`, postData, {
    headers: myHeaders,
  });
}

export function checkAutoLogin(dispatch, history) {
  // const tokenDetailsString = localStorage.getItem("userDetails");
  // let tokenDetails = "";
  // if (!tokenDetailsString) {
  //   dispatch(logout(history));
  //   return;
  // }
  // tokenDetails = JSON.parse(tokenDetailsString);
  // let expireDate = new Date(tokenDetails.expireDate);
  // let todaysDate = new Date();
  // if (todaysDate > expireDate) {
  //   dispatch(logout(history));
  //   return;
  // }
  // dispatch(loginConfirmedAction(tokenDetails));
  // const timer = expireDate.getTime() - todaysDate.getTime();
  // runLogoutTimer(dispatch, timer, history);
}
