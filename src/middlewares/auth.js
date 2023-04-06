const passport = require("passport");
const {
  USER_TYPE,
  ERROR_MESSAGES,
  STATUS_CODES,
} = require("../config/appConstants");
const { AuthFailedError } = require("../utils/errors");

const verifyCallback =
  (req, resolve, reject, role) => async (err, token, info) => {
    if (err || info || !token) {
      return reject(new AuthFailedError());
    }

    if (role && token.role != role) {
      return reject(
        new AuthFailedError(
          ERROR_MESSAGES.UNAUTHORIZED,
          STATUS_CODES.AUTH_FAILED
        )
      );
    }

    

    if (token.role === USER_TYPE.ADMIN && !token.admin) {
      return reject(new AuthFailedError());
    }
    if (token.role === USER_TYPE.USER && !token.user) {
      return reject(new AuthFailedError());
    }
    if (token.role === USER_TYPE.DOCTOR && !token.doctor) {
      return reject(new AuthFailedError());
    }
    // if (token.role === USER_TYPE.WORK_SEEKER && !token.user.workSeeker) {
    //   return reject(new AuthFailedError());
    // }

    // if (token.role === USER_TYPE.WORK_PROVIDER) {
    //   if (!token.user.workProvider) {
    //     return reject(new AuthFailedError());
    //   }
    // if (token.user.workProvider.isDeleted) {
    //   return reject(
    //     new AuthFailedError(
    //       ERROR_MESSAGES.ACCOUNT_DELETED,
    //       STATUS_CODES.ACTION_FAILED
    //     )
    //   );
    // }
    //   if (token.user.workProvider.isBlocked) {
    //     return reject(
    //       new AuthFailedError(
    //         ERROR_MESSAGES.ACCOUNT_BLOCKED,
    //         STATUS_CODES.ACTION_FAILED
    //       )
    //     );
    //   }
    // }
    // if (token.role === USER_TYPE.USER) {
    //   // console.log(token.user.isVerified)
    //   if (!token.user.isVerified && req.url !== "/verifyEmail") {
    //     return reject(
    //       new AuthFailedError(
    //         ERROR_MESSAGES.VERIFY_USER,
    //         STATUS_CODES.ACTION_FAILED
    //       )
    //     );
    //   }
    //   // if (!token.user.isVerified) {
    //   //   return reject(
    //   //     new AuthFailedError(
    //   //       ERROR_MESSAGES.VERIFY_USER,
    //   //       STATUS_CODES.ACTION_FAILED
    //   //     )
    //   //   );
    //   // }
    // }
    if (token.role === USER_TYPE.USER) {
      if (token.user.isDeleted) {
        return reject(
          new AuthFailedError(
            ERROR_MESSAGES.ACCOUNT_DELETED,
            STATUS_CODES.ACTION_FAILED
          )
        );
      }
      if (token.user.isBlocked) {
        return reject(
          new AuthFailedError(
            ERROR_MESSAGES.ACCOUNT_BLOCKED,
            STATUS_CODES.AUTH_FAILED
          )
        );
      }
    }

    if (token.role === USER_TYPE.ADMIN) {
      if (token.admin.isDeleted) {
        return reject(
          new AuthFailedError(
            ERROR_MESSAGES.ACCOUNT_DELETED,
            STATUS_CODES.ACTION_FAILED
          )
        );
      }
      if (token.admin.isBlocked) {
        return reject(
          new AuthFailedError(
            ERROR_MESSAGES.ACCOUNT_BLOCKED,
            STATUS_CODES.ACTION_FAILED
          )
        );
      }
    }

    if (token.role === USER_TYPE.DOCTOR) {
      if (token.doctor.isDeleted) {
        return reject(
          new AuthFailedError(
            ERROR_MESSAGES.ACCOUNT_DELETED,
            STATUS_CODES.ACTION_FAILED
          )
        );
      }
      if (token.doctor.isBlocked) {
        return reject(
          new AuthFailedError(
            ERROR_MESSAGES.ACCOUNT_BLOCKED,
            STATUS_CODES.ACTION_FAILED
          )
        );
      }
    }

    req.token = token;

    return resolve();
  };

// const auth = (role) => async (req, res, next) => {
//   return new Promise((resolve, reject) => {
//     passport.authenticate(
//       "jwt",
//       { session: false },
//       verifyCallback(req, resolve, reject, role)
//     )(req, res, next);
//   })
//     .then(() => next())
//     .catch((err) => next(err));
// };

const auth=(role) => async(req,res,next)=>{

  if (!role) {
    if (req.headers.authorization && req.headers.authorization != "Bearer") {
      return new Promise((resolve, reject) => {
        passport.authenticate(
          "jwt",
          { session: false },
          verifyCallback(req, resolve, reject, role)
        )(req, res, next);
      })
        .then(() => next())
        .catch((err) => next(err));
    } else {
      return new Promise((resolve, reject) => {
        resolve();
      })
        .then(() => next())
        .catch((err) => next(err));
    }
  }
  if (role == "Admin" || role == "User" || role =="Doctor") {
    return new Promise((resolve, reject) => {
      passport.authenticate(
        "jwt",
        { session: false },
        verifyCallback(req, resolve, reject, role)
      )(req, res, next);
    })
      .then(() => next())
      .catch((err) => next(err));
  }

}

module.exports = auth;
