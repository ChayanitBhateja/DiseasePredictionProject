const successMessage = (code, data) => {
  return { statusCode: code, message: "success", data };
};

const successMessageWithoutData = (code, message) => {
  return { statusCode: code, message: message };
};


module.exports = {
  successMessageWithoutData,
  successMessage,
};
