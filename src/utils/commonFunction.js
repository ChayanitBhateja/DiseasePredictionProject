const successMessage = (code, data) => {
  return { statusCode: code, message: "success", data };
};

const successMessageWithoutData = (code, message) => {
  return { statusCode: code, message: message };
};
const formatUser = (userData) => {
  if (userData.length) {
    userData.forEach((data) => {
      delete data.__v;
      delete data.password;
      delete data.createdAt;
      delete data.updatedAt;
      delete data.customerId;
      delete data.location;
      delete data.dealId;
      delete data.isPushNotification;
      delete data.isVerified;
      delete data.socialId;
      delete userData.dealPurchaseId;
      delete userData.favouriteStore;
      delete userData.favouriteStores;
      delete userData.recentlyView;
    });
  } else {
    delete userData.__v;
    delete userData.password;
    delete userData.role;
    delete userData.document;
    delete userData.createdAt;
    delete userData.updatedAt;
    delete userData.jobTitle;
    delete userData.__v;
    delete userData.password;
    delete userData.location;
    delete userData.isPushNotification;
    delete userData.isVerified;
    delete userData.socialId;
    delete userData.dealPurchaseId;
    delete userData.favouriteStore;
    delete userData.favouriteStores;
    delete userData.recentlyView;
    if (!userData.profilePic) {
      delete userData.profilePic;
    }
  }
  return userData;
};

const formatDoctor = (userData) => {
  delete userData.__v;
  delete userData.password;

  return userData;
};

module.exports = {
  successMessageWithoutData,
  successMessage,
  formatUser,
  formatDoctor,
};
