import express from 'express';

import { agentLogin, Agentsignup, } from '../controllers/agent';

import {
  agentProperties, allProperties, createProperty, deleteProperty, editProperty, getPropertyById
} from '../controllers/propertyEndpoints/propertyendpoint';
import { checkToken } from '../middleware/auth';

import { validatePropertyInput, validateUserSignup } from '../middleware/middleware';

const authenticationRouter = express.Router();

authenticationRouter.post('/signup', validateUserSignup, Agentsignup);
authenticationRouter.post('/login', agentLogin);
authenticationRouter.get('/properties', allProperties);
authenticationRouter.get('/property/:id', getPropertyById);
authenticationRouter.post('/agent/properties', checkToken, validatePropertyInput, createProperty);
authenticationRouter.get('/agent/properties/:id', checkToken, agentProperties);
authenticationRouter.put('/property/:id', checkToken, editProperty);
authenticationRouter.delete('/property/:id', checkToken, deleteProperty);

export default authenticationRouter;
