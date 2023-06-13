const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    console.log(err);
    next(err);
  });
};

const paginationOptions = (page, limit) => {
  return { sort: { _id: -1 }, skip: page * limit, limit: limit, lean: true };
};

const pick = (object, keys) => {
  return keys.reduce((obj, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      // eslint-disable-next-line no-param-reassign
      obj[key] = object[key];
    }
    return obj;
  }, {});
};

const probability = () => {
  const min = 70;
  const max = 95;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
};

module.exports = {
  catchAsync,
  paginationOptions,
  pick,
  probability,
};
