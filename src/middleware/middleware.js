import { validateEmail } from '../utils/helper';

export const validateUserSignup = (req, res, next) => {
  const errorList = [];

  if (!req.body.firstName || req.body.firstName.length < 5) {
    errorList.push({
      message: 'First name should be a minimum of 5 characters',
    });
  }

  if (!req.body.lastName || req.body.lastName.length < 5) {
    errorList.push({
      message: 'Last name should be a minimum of 5 characters',
    });
  }

  if (!req.body.phoneNumber || req.body.phoneNumber.length !== 11) {
    errorList.push({ message: 'Phone number should be  11 numbers' });
  }

  if (!req.body.email || !validateEmail(req.body.email)) {
    errorList.push({ message: 'please insert a valid email address' });
  }
  if (!req.body.password || req.body.password.length < 8) {
    errorList.push({ message: 'password should be a minimum of 8 characters' });
  }
  console.log(errorList);
  if (errorList.length === 0) {
    next();
  } else {
    res.status(400).json({ message: errorList });
  }
};
export const validatePropertyInput = (req, res, next) => {
  const {
    image, title, address, landSize, numberOfBeds, numberOfBaths, neigbourhood, price
  } = req.body;
  if (image === '') {
    res.status(400).send('image of property must be uploaded');
  }
  if (title === '') {
    res.status(400).send('Input the title of the property');
  }
  if (address === '') {
    res.status(400).send('Input the address of the property ');
  }
  if (landSize === '') {
    res.status(400).send('Input size of land');
  }
  if (numberOfBeds === '') {
    res.status(400).send('input number of beds');
  }
  if (numberOfBaths === '') {
    res.status(400).send('Input number of baths');
  }
  if (neigbourhood === '') {
    res.status(400).send('Input neigbourhood');
  }
  if (price === '') {
    res.status(400).send('Input property price');
  }
  next();
};
