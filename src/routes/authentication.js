import express from 'express';

import { agentLogin, Agentsignup, } from '../controllers/agent';

import { validateUserSignup } from '../middleware';

const authenticationRouter = express.Router();

authenticationRouter.post('/signup', validateUserSignup, Agentsignup);
authenticationRouter.post('/login', agentLogin);

export default authenticationRouter;
