const jwt = require('jsonwebtoken');

export const validateEmail = (email) => {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

export const assignToken = (user) => {
  const token = jwt.sign({ user }, process.env.TOKEN_KEY, {
    expiresIn: '9hr',
  });
  console.log(token);
  return token;
};
