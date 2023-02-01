import axios from "axios";
import swal from "sweetalert";
import { loginConfirmedAction, logout } from "../store/actions/AuthActions";
const baseApiUrl = "https://api.sportex.club";
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

  return axios.post(`${baseApiUrl}/admin/auth/login`, postData);
}
export function changePasswoard(oldPassword, newPassword) {
  const data = localStorage.getItem("userDetails");
  const myHeaders = {
    Authorization: `Bearer ${data}`,
  };
  console.log(newPassword, oldPassword, " user change passwoard");
  const postData = {
    newPassword,
    oldPassword,
    // returnSecureToken: true,
  };

  return axios.put(`${baseApiUrl}/admin/auth/changePassword`, postData, {
    headers: myHeaders,
  });
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
  console.log(
    userName,
    email,
    phoneNumber,
    userType,
    countryCode,
    profileImage,
    userId,
    "createuser edit "
  );
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
  console.log(limit, pageNumber, "lllllll2222 limit");
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

export function saveTokenInLocalStorage(tokenDetails) {
  // tokenDetails.expireDate = new Date(
  //   new Date().getTime() + tokenDetails.expiresIn * 1000
  // );
  localStorage.setItem("userDetails", tokenDetails);
}

export function runLogoutTimer(dispatch, timer, history) {
  setTimeout(() => {
    dispatch(logout(history));
  }, timer);
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
