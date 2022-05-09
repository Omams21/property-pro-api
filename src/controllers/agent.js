import dotenv from 'dotenv';
import Model from '../../../Desktop/property-pro-api/src/models/model';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const agentModel = new Model('agents');
dotenv.config();

export const Agentsignup = async (req, res) => {
  const {
    firstName, lastName, password, email, phoneNumber
  } = req.body;

  const columns = 'first_name, last_name, password, email, phone_number ';
  const strong = await bcrypt.hash(password, 12);
  const values = `'${firstName}', '${lastName}', '${strong}', '${email}', '${phoneNumber}'`;
  const checkEmail = await agentModel.select('*', ` where email = '${email}' `);

  try {
    if (checkEmail.rowCount < 1) {
      const data = await agentModel.insertWithReturn(columns, values);
      const newUser = { firstName, lastName, email };

      const token = jwt.sign(
        { ...newUser, id: data.rows.id },
        process.env.TOKEN_KEY,
        { expiresIn: '1hr' }
      );
      res
        .status(201)
        .send({
          user: newUser,
          token,
          message: 'Account created successfully',
        });
    }
  } catch (err) {
    res.status(400).json({ message: err.stack });
  }
};

export const agentLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const validEmail = await agentModel.select(
      '*',
      ` WHERE  email = '${email}' `
    );
    if (!validEmail.rows.length) { return res.status(400).json({ messages: 'Validate email or password 1' }); }
    const validPassword = await bcrypt.compare(
      password,
      validEmail.rows[0].password
    );
    if (!validPassword) { return res.status(400).json({ message: 'Validate email or password' }); }
    const user = { email };
    const token = jwt.sign({ user }, process.env.TOKEN_KEY, {
      expiresIn: '1hr',
    });
    return res
      .status(201)
      .send({ ...user, token, message: 'Logged in Successfully' });
  } catch (err) {
    return res.status(400).json({ message: err.stack });
  }
};
