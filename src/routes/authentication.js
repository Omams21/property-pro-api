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

/**
 * @swagger
 * definitions:
 *   Register:
 *     properties:
 *       username:
 *         type: string
 *       fullName:
 *         type: string
 *       email:
 *         type: string
 *       password:
 *         type: string
 *     example: {
 *        "fullName": Abdulrasaq Nasirudeen,
 *       "email": dealwap@dealwap.com,
 *       "password": mavenmodo
 *      }
 */

/**
 * @swagger
 * /users/signup:
 *   post:
 *     tags:
 *       - Users & Authentication
 *     description: Register/Signs up a User
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Register'
 *     responses:
 *       201:
 *         description: Successfully created
 *         example: {
 *           "message": "Signed up successfully",
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXJyZW50VXNlciI6eyJpc0Jhbm5lZCI6MCwicGxhbiI6IlNpbHZlciIsImFjdGl2ZSI6ZmFsc2UsImlzQWRtaW4iOjAsImlkIjo1LCJ1c2VybmFtZSI6InRlc3RlciIsImZ1bGxOYW1lIjoiTmFzaXJ1IE9sYSIsImVtYWlsIjoibmFzaXJ1QGdtYWlsLmNvbSIsInVzZXJJZCI6NX0sImV4cCI6MTUxNTI1ODY4NywiaWF0IjoxNTE1MTcyMjg3fQ.1cISJjOboFY1zxqKEIZFpBJTSawG7BkMG6iGdhMxxGU"
 *         }
 *       400:
 *         description: Bad Username, Password or Email
 *       500:
 *         description: Internal server error
 */
authenticationRouter.post('/signup', validateUserSignup, Agentsignup);

/**
 * @swagger
 * definitions:
 *   Login:
 *     properties:
 *       email:
 *         type: string
 *       password:
 *         type: string
 *     example: {
 *       "email": dealwap@dealwap.com,
 *       "password": mavenmodo
 *      }
 */

/**
 * @swagger
 * /login:
 *   post:
 *     tags:
 *       - Users & Authentication
 *     description: Login a User
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Login'
 *     responses:
 *       201:
 *         description: Successfully created
 *         example: {
 *           "message": "Signed up successfully",
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXJyZW50VXNlciI6eyJpc0Jhbm5lZCI6MCwicGxhbiI6IlNpbHZlciIsImFjdGl2ZSI6ZmFsc2UsImlzQWRtaW4iOjAsImlkIjo1LCJ1c2VybmFtZSI6InRlc3RlciIsImZ1bGxOYW1lIjoiTmFzaXJ1IE9sYSIsImVtYWlsIjoibmFzaXJ1QGdtYWlsLmNvbSIsInVzZXJJZCI6NX0sImV4cCI6MTUxNTI1ODY4NywiaWF0IjoxNTE1MTcyMjg3fQ.1cISJjOboFY1zxqKEIZFpBJTSawG7BkMG6iGdhMxxGU"
 *         }
 *       400:
 *         description: Bad Username, Password or Email
 *       500:
 *         description: Internal server error
 */
authenticationRouter.post('/login', agentLogin);
authenticationRouter.get('/properties', getAllProperties);
authenticationRouter.get('/property/:id', getPropertyById);
authenticationRouter.post('/agent/property', checkToken, validatePropertyInput, createProperty);
authenticationRouter.get('/agent/property/:id', checkToken, getAgentProperties);
authenticationRouter.put('/property/:id', checkToken, editProperty);
authenticationRouter.delete('/property/:id', checkToken, deleteProperty);

export default authenticationRouter;
