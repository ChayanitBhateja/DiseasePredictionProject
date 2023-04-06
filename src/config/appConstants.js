const Joi = require("joi");
const { objectId } = require("../validations/custom.validation");

const TOKEN_TYPE = {
  ACCESS: "access",
  REFRESH: "refresh",
  RESET_PASSWORD: "resetPassword",
  VERIFY_EMAIL: "verifyEmail",
};

const USER_ROLE={
  DOCTOR:"Doctor",
  PATIENT:"Patient"
}

const GENDER_TYPE={
  MALE:"Male",
  FEMALE:"Female"
}

const USER_TYPE = {
  ADMIN: "Admin",
  USER: "User",
  DOCTOR:"Doctor"
};

const DEVICE_TYPE = {
  IOS: "Ios",
  ANDROID: "Android",
  WEB: "Web",
};

const BANNER_STATUS = {
  PENDING: "pending",
  ACCEPTED: "accepted",
  REJECTED: "rejected",
};

const DEALS_SERVICE = {
  RESTAURANTS: "Restaurants",
  BARS: "Bars",
  CANNABIS: "Cannabis",
  NIGHTLIFE: "Nightlife",
  SHOPPING: "Shopping",
  BEAUTY_SPA: "Beauty & Spas",
  ARTS_ENTERTAINMENT: "Arts & Entertainment",
  ACTIVE_LIFE: "Active Life",
  AUTOMOTIVE: "Automotive",
  HOTELS: "Hotels",
  BABY_KIDS: "Baby & Kids",
  PETS: "Pets",
  SPORTS_FITNESS: "Sports & Fitness",
  ELECTRONICS: "Electronics",
  WOMEN_CLOTHHING: "Women's Clothing",
  MEN_CLOTHING: "Mens Clothing",
};

const BANNER_TYPE = {
  PROMOTED: "Promoted",
  CASUAL: "Casual",
};
const PUSH_NOTIFICATION_STATUS = {
  ENABLE: "Enable",
  DISABLE: "Disable",
};

const NOTIFICATION_STATUS = {
  ENABLE: "Enable",
  DISABLE: "Disable",
};

const JOI = {
  EMAIL: Joi.string().email().lowercase().trim().required(),
  PASSWORD: Joi.string().min(6).required(),
  PHONENUMBER: Joi.string()
    .max(10)
    .min(10)
    .message("Please enter a valid phone number"),
  LIMIT: Joi.number().default(10),
  PAGE: Joi.number().default(0),
  OBJECTID: Joi.string().custom(objectId).required(),
  DEVICE_TYPE: Joi.string()
    .valid(...Object.values(DEVICE_TYPE))
    .required(),
  USER_TYPE: Joi.string().valid(USER_TYPE.USER, USER_TYPE.ADMIN).required(),
};

const SKILL_LEVEL = {
  BASIC: 0,
  ASTUTE: 1,
  EXPERT: 2,
};

const WORK_LOCATION = {
  REMOTE: "remote",
  WORk_LOCATION: "work",
};

const ASSIGNMENT_STATUS = {
  DRAFT: "draft",
  PROPOSED: "proposed",
  IN_PROCESS: "inProcess",
  COMPLETED: "completed",
};

const REQUEST_STATUS = {
  RECEIVED: "received",
  PROPOSED: "proposed",
  REJECDED: "rejected",
};

const SUCCESS_MESSAGES = {
  SUCCESS: "Success",
  LOGOUT: "Your are successfully logged out",
  USER_SUCCESS: "User Created successfully",
  USER_PASSWORD: "Password changed successfully",
  CONTACT_US: "Report sent successfully",
  USER_LOCATION: "Location Updated Successfully",
  USER_DETAIL: "User Detail",

};

const UPDATED_MESSAGES = {
  SUCCESS: "Success",
  LOGOUT: "Your are successfully logged out",
  USER_SUCCESS: "User Created successfully",
  USER_PASSWORD: "Password changed successfully",
  CONTACT_US: "Report sent successfully",
  USER_LOCATION: "Location Updated Successfully",
  NOTIFICATION_EDITED: "Notification Upadted Successfully",
  USER_UPDATED: "User Profile Updated Sucessfully",
  MENUITEM_UPDATED: "Menuitem Updated Successfully",
};

const ERROR_MESSAGES = {
  USER_CREDENTIAL: "Pease Check Your Parameter",
  NOT_FOUND: "Not found",
  VALIDATION_FAILED: "Validation Failed, Kindly check your parameters",
  SERVER_ERROR: "Something went wrong, Please try again.",
  AUTHENTICATION_FAILED: "Please authenticate",
  UNAUTHORIZED: "You are not authorized to perform this action",
  EMAIL_ALREADY_EXIST: "This email already exist. Please try with other email",
  EMAIL_NOT_FOUND: "Email not found",
  ACCOUNT_NOT_EXIST: "Account does not exist",
  WRONG_PASSWORD: "Password is Incorrect",
  ACCOUNT_DELETED: "Your account has been deleted by Admin",
  ACCOUNT_BLOCKED: "Your account has been blocked by Admin",
  USER_NOT_FOUND: "User not found",
  SKILL_ALREADY_EXIST: "Skill already exist with this name.",
  WRONG_PASSWORD: "Password is Incorrect",
  DATA_NOT_EXISTS: "Data not exists",
  USER_ALREADY_EXIST: "User Already Exists",
  CONTACTUS_EMAIL_USER: "Please enter your registered email",
  USER_NAME_EXISTS: "User name already exists",
  VERIFY_USER: "Verify your email before login",
  USER_VERIFIED: "This Email already verified",
  USER_OLD_PASSWORD:'New Password should not be same as old Password',
  USER_REPORT:"You can not perform this action",
  USER_NAME_EXISTS:"User Name Already Exits",
};

const STATUS_CODES = {
  SUCCESS: 200,
  CREATED: 201,
  ACTION_PENDING: 202,
  ACTION_COMPLETE: 204,

  VALIDATION_FAILED: 400,
  ACTION_FAILED: 400,
  AUTH_FAILED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  UNPROCESSABLE: 422,
  TOO_MANY_REQUESTS: 429,

  ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
};

const socialMedia = {
  TRUE: "true",
  FALSE: "false",
};
const SOCIAL_LOGIN = {
  GOOGLEID: "GoogleId",
  FACEBOOKID: "FacebookId",
  APPLEID: "AppleId",
};

const DELETE_MASSAGES = {
  USER_DELETED: "User Deleted Successfully",
  STORE_DELETED: "Store Deleted Sucessfully",
  NOTIFICATION_DELETED: "Notification Deleted Successfully",
  MENUITEM_DELETED: "Menuitem Deleted Successfully",
  ADMIN_DELETED_USER: "Admin Deleted User Successfully",
  ADMIN_BLOCKED_USER:"Admin Blocked User Successfully",
  ADMIN_UNBLOCKED_USER:"Admin Unblocked User Successfully",
  ADMIN_DELETED_REVIEW:"Admin Deleted Review Successfully"
};
const POLICY_TYPE = {
  PRIVACY: "privacy",
  COOCKIE: "cookie",
  AGREEGMENT: "agreement",
  WEB_CONDITIONS:"conditions"
};

module.exports = {
  BANNER_TYPE,
  BANNER_STATUS,
  PUSH_NOTIFICATION_STATUS,
  NOTIFICATION_STATUS,
  DEALS_SERVICE,
  DELETE_MASSAGES,
  TOKEN_TYPE,
  USER_TYPE,
  JOI,
  DEVICE_TYPE,
  SKILL_LEVEL,
  WORK_LOCATION,
  ASSIGNMENT_STATUS,
  REQUEST_STATUS,
  SUCCESS_MESSAGES,
  ERROR_MESSAGES,
  STATUS_CODES,
  UPDATED_MESSAGES,
  SOCIAL_LOGIN,
  POLICY_TYPE,
  GENDER_TYPE,
  USER_ROLE
};


