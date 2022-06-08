import dotenv from 'dotenv';
import Model from '../models/model';
import { assignToken } from '../utils/helper';

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
  const isEmail = await agentModel.select('*', ` where email = '${email}' `);

  try {
    if (isEmail.rowCount < 1) {
      const data = await agentModel.insertWithReturn(columns, values);
      const {id} = data.rows[0];
      const newUser = {
        id, firstName, lastName, email
      };

      const token = assignToken(newUser);
      return res
        .status(201)
        .send({
          user: newUser,
          token,
          message: 'Account created successfully'
        });
    }
    return res.status(401).send({ message: 'Account already exist' });
  } catch (err) {
    return res.status(400).json({ message: err.stack });
  }
};

export const agentLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const validEmail = await agentModel.select(
      '*',
      ` WHERE  email = '${email}' `
    );
    if (!validEmail.rows.length) { return res.status(400).json({ messages: 'Invalid email or password 1' }); }
    const validPassword = await bcrypt.compare(
      password,
      validEmail.rows[0].password
    );
    if (!validPassword) { return res.status(400).json({ message: 'Invalid email or password' }); }
    const user = { email };
    const token = assignToken(user);
    return res
      .status(201)
      .send({ ...user, token, message: 'Logged in Successfully' });
  } catch (err) {
    return res.status(400).json({ message: err.stack });
  }
};
