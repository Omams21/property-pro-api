import jwt from 'jsonwebtoken';

export const checkToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).send({ message: 'Access Denied' });
  }
  try {
    const decodeToken = jwt.verify(token, process.env.TOKEN_KEY);
    req.user = decodeToken;
    console.log(req.user);
    next();
  } catch (err) {
    res.status(400).json({ message: 'Token not valid' });
  }
};
