const { Admin } = require("../models");
const Run = async () => {
  /*-------------------------------------------------------------------------------
   * add admin
   * -----------------------------------------------------------------------------*/
  let password = "$2a$08$8QBeUqrXcf334kMMrDS1euP5nbn00MZpP5Yi4PBucI9MIdASz8qDC";

  let adminDetails = {
    email: "admin@test.com",
    $setOnInsert: { password },
  };
  CreateAdmin(adminDetails);
};

const CreateAdmin = async (adminDetails) => {
  try {
    let adminData = await Admin.findOneAndUpdate(
      { email: adminDetails.email },
      adminDetails,
      { lean: true, upsert: true, new: true }
    );
    console.log("=================");

    return adminData;
  } catch (err) {
    console.log(
      "**********************************************************************",
      err
    );
  }
};

module.exports = Run;
