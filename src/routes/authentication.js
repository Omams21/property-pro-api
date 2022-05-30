import express from 'express';

import { agentLogin, Agentsignup } from '../controllers/agent';

import {
  createProperty,
  deleteProperty,
  editProperty,
  getAgentProperties,
  getAllProperties,
  getPropertyById,
} from '../controllers/propertyEndpoints/propertyendpoint';
import { checkToken } from '../middleware/auth';

import {
  validatePropertyInput,
  validateUserSignup,
} from '../middleware/middleware';

const authenticationRouter = express.Router();

authenticationRouter.post('/signup', validateUserSignup, Agentsignup);
authenticationRouter.post('/login', agentLogin);
authenticationRouter.get('/properties', getAllProperties);
authenticationRouter.get('/property/:id', getPropertyById);
authenticationRouter.post('/agent/property', checkToken, validatePropertyInput, createProperty);
authenticationRouter.get('/agent/property/:id', checkToken, getAgentProperties);
authenticationRouter.put('/property/:id', checkToken, editProperty);
authenticationRouter.delete('/property/:id', checkToken, deleteProperty);

export default authenticationRouter;
