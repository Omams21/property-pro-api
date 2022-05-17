const jwt = require('jsonwebtoken');

export function validateEmail(email) {
  if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}

export const assignToken = (user) => {
  const token = jwt.sign({ user }, process.env.TOKEN_KEY, {
    expiresIn: '1hr'
  });
  return token;
};
