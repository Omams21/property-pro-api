import jwt from 'jsonwebtoken';

export const checkToken = (req, res, next) => {
  console.log(req);
  const token = req.headers.authorization;
  console.log('===============>', token);
  if (!token) {
    res.status(401).send({ message: 'Access Denied' });
  }
  try {
    const decodeToken = jwt.verify(token, process.env.TOKEN_KEY);
    console.log(decodeToken);
    req.user = decodeToken;
    // console.log(req.user);
    next();
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'Token not valid' });
  }
};
