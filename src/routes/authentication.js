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
import { uploadImageController } from '../controllers/uploadImageController';
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
 *        "firstName" :"helllooh",
 *        "lastName" : "Ogun-MODO",
 *        "phoneNumber" : "08140370855",
 *        "email":"emmanuellaogun0095@gmail.com",
 *        "password": mavenmodo
 *      }
 */

/**
 * @swagger
 * /signup:
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
<<<<<<< HEAD
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXJyZW50VXNlciI6eyJpc0Jhbm5lZCI6MCwicGxhbiI6IlNpbHZlciIsImFjdGl2ZSI6ZmFsc2UsImlzQWRtaW4iOjAsImlkIjo1LCJ1c2VybmFtZSI6InRlc3RlciIsImZ1bGxOYW1lIjoiTmFzaXJ1IE9sYSIsImVtYWlsIjoibmFzaXJ1QGdtYWlsLmNvbSIsInVzZXJJZCI6NX0sImV4cCI6MTUxNTI1ODY4NywiaWF0IjoxNTE1MTcyMjg3fQ.1cISJjOboFY1zxqKEIZFpBJTSawG7BkMG6iGdhMxxGU"
 *         }
=======
 *          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXJyZW50
 VXNlciI6eyJpc0Jhbm5lZCI6MCwicGxhbiI6IlNpbHZlciIsImFjdGl2ZS
 I6ZmFsc2UsImlzQWRtaW4iOjAsImlkIjo1LCJ1c2VybmFtZSI6I
 nRlc3RlciIsImZ1bGxOYW1lIjoiTmFzaXJ1IE9sYSIsImVtYW
 lsIjoibmFzaXJ1QGdtYWlsLmNvbSIsInVzZXJJZCI6NX0sIm
 V4cCI6MTUxNTI1ODY4NywiaWF0IjoxNTE1MTcyMjg3fQ.1cISJjOboFY1zxqKEIZFpBJTSawG7BkMG6iGdhMxxGU"
 *        }
>>>>>>> 598187eb269a80c02186e2ccd1cd4200011fffcf
 *       400:
 *         description: Bad Username, Password or Email
 *       500:
 *         description: Internal server error
 */
<<<<<<< HEAD
authenticationRouter.post('/signup', validateUserSignup, Agentsignup);
=======
authenticationRouter.post('/signup', Agentsignup);
>>>>>>> 598187eb269a80c02186e2ccd1cd4200011fffcf

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
 *       "email":"emmanuellaogun0095@gmail.com",
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
<<<<<<< HEAD
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXJyZW50VXNlciI6eyJpc0Jhbm5lZCI6MCwicGxhbiI6IlNpbHZlciIsImFjdGl2ZSI6ZmFsc2UsImlzQWRtaW4iOjAsImlkIjo1LCJ1c2VybmFtZSI6InRlc3RlciIsImZ1bGxOYW1lIjoiTmFzaXJ1IE9sYSIsImVtYWlsIjoibmFzaXJ1QGdtYWlsLmNvbSIsInVzZXJJZCI6NX0sImV4cCI6MTUxNTI1ODY4NywiaWF0IjoxNTE1MTcyMjg3fQ.1cISJjOboFY1zxqKEIZFpBJTSawG7BkMG6iGdhMxxGU"
=======
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
 .eyJjdXJyZW50VXNlciI6eyJpc0Jhbm5lZCI6MCwicGxhbiI6
 IlNpbHZlciIsImFjdGl2ZSI6ZmFsc2UsImlzQWRtaW4iOjAsI
 mlkIjo1LCJ1c2VybmFtZSI6InRlc3RlciIsImZ1bGxOYW1lIj
 oiTmFzaXJ1IE9sYSIsImVtYWlsIjoibmFzaXJ1QGdtYWlsLmN
 vbSIsInVzZXJJZCI6NX0sImV4cCI6MTUxNTI1ODY4NywiaWF0Ijo
 xNTE1MTcyMjg3fQ.1cISJjOboFY1zxqKEIZFpBJTSawG7BkMG6iGdhMxxGU"
>>>>>>> 598187eb269a80c02186e2ccd1cd4200011fffcf
 *         }
 *       400:
 *         description: Bad Username, Password or Email
 *       500:
 *         description: Internal server error
 */
authenticationRouter.post('/login', agentLogin);

/**
 * @swagger
 * definitions:
 *   Properties:
 *     properties:
 *       image:
 *         type: string
 *       title:
 *         type: string
 *       price:
 *          type: string
 *       status:
 *         type: string
 *       address:
 *         type: string
 *       city:
 *         type: string
 *       neigbourhood:
 *         type: string
 *       LGA:
 *         type: string
 *       ZIP:
 *         type: string
 *       numberOfBaths:
 *         type: string
 *       numberOfBed:
 *         type: string
 *       landSize: string
 *     example: {
 *       "image": game.png,
 *       "title": "duplex",
 *       "price": "200000000",
 *       "address": "abudu abayomi street",
 *       "city": "lagos",
 *       "neigbourhood": "ojodu berger",
 *       "LGA": "ikeja",
 *       "ZIP": "11011",
 *       "numberOfBaths": "3",
 *       "numberofbed": "4",
 *       "landSize": "4000"
 *     }
 */

/**
 * @swagger
 * /agent/properties:
 *   post:
 *     tags:
 *       - Property Details
 *     description: Add a new property to the database
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: properties
 *         description: property object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Properties'
 *       - name: Authorization
 *         in: header
 *         description: an authentication header
 *         required: true
 *         type: string
 *     responses:
 *       201:
 *         description: property uploaded successfully
 *       400:
 *         description: Bad input supplied
 *       500:
 *         description: Internal server error
 */
<<<<<<< HEAD
authenticationRouter.post(
  '/agent/properties',
  checkToken,
  validatePropertyInput,
  createProperty
);
=======
authenticationRouter.post('/agent/properties', checkToken, createProperty);
// validatePropertyInput,
authenticationRouter.post('/upload', uploadImageController);
>>>>>>> 598187eb269a80c02186e2ccd1cd4200011fffcf

/**
 * @swagger
 * /properties:
 *   get:
 *     tags:
 *       - Property Details
 *     description: retrive all properties from database
 *     produces:
 *       - application/json
 *     parameters:
 *         schema:
 *           $ref: '#/definitions/Properties'
 *           type: object
 *     responses:
 *       200:
 *         description: property uploaded successfully
 *         example: [{
 *          "image": game.png,
 *          "title": "duplex",
 *          "price": "200000000",
 *          "address": "abudu abayomi street",
 *          "city": "lagos",
 *          "neigbourhood": "ojodu berger",
 *          "LGA": "ikeja",
 *          "ZIP": "11011",
 *          "numberOfBaths": "3",
 *          "numberofbed": "4",
 *          "landSize": "4000"
 *        } ]
 *       400:
 *         description: Bad input supplied
 *       500:
 *         description: Internal server error
 */
authenticationRouter.get('/properties', getAllProperties);

/**
 * @swagger
 * /property/{id}:
 *   get:
 *     tags:
 *       - Property Details
 *     description: retrive all properties from database
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of property
 *         in: path
 *         type: integer
 *         require: true
 *     responses:
 *       200:
 *         description: property uploaded successfully
 *         example: {
 *          "image": game.png,
 *          "title": "duplex",
 *          "price": "200000000",
 *          "address": "abudu abayomi street",
 *          "city": "lagos",
 *          "neigbourhood": "ojodu berger",
 *          "LGA": "ikeja",
 *          "ZIP": "11011",
 *          "numberOfBaths": "3",
 *          "numberofbed": "4",
 *          "landSize": "4000"
 *         }
 *       400:
 *         description: Bad input supplied
 *       500:
 *         description: Internal server error
 */
authenticationRouter.get('/property/:id', getPropertyById);
/**
 * @swagger
 * /agent/property/{id}:
 *   get:
 *     tags:
 *       - Property Details
 *     description: retrive selected property from database
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of property
 *         in: path
 *         type: integer
 *         require: true
 *       - name: authorization
 *         in: header
 *         type: string
 *     responses:
 *       200:
 *         description: property uploaded successfully
 *         example: {
 *          "image": game.png,
 *          "title": "duplex",
 *          "price": "200000000",
 *          "address": "abudu abayomi street",
 *          "city": "lagos",
 *          "neigbourhood": "ojodu berger",
 *          "LGA": "ikeja",
 *          "ZIP": "11011",
 *          "numberOfBaths": "3",
 *          "numberofbed": "4",
 *          "landSize": "4000"
 *         }
 *       400:
 *         description: Bad input supplied
 *       500:
 *         description: Internal server error
 */
<<<<<<< HEAD
authenticationRouter.get('/agent/property/:id', checkToken, getAgentProperties);
=======
authenticationRouter.get('/agent/property', checkToken, getAgentProperties);
>>>>>>> 598187eb269a80c02186e2ccd1cd4200011fffcf
/**
 * @swagger
 * /property/{id}:
 *   put:
 *     tags:
 *       - Property Details
 *     description: update edited property in database
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of property
 *         in: path
 *         type: integer
 *         require: true
 *       - name: property
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Properties'
 *           type: object
 *       - name: authorization
 *         in: header
 *         type: string
 *     responses:
 *       200:
 *         description: property uploaded successfully
 *         example: {
 *          "image": game.png,
 *          "title": "duplex",
 *          "price": "200000000",
 *          "address": "abudu abayomi street",
 *          "city": "lagos",
 *          "neigbourhood": "ojodu berger",
 *          "LGA": "ikeja",
 *          "ZIP": "11011",
 *          "numberOfBaths": "3",
 *          "numberofbed": "4",
 *          "landSize": "4000"
 *         }
 *       400:
 *         description: Bad input supplied
 *       500:
 *         description: Internal server error
 */
<<<<<<< HEAD
authenticationRouter.put('/property/:id', checkToken, editProperty);
=======
authenticationRouter.put('/agent/property/:id', checkToken, editProperty);
>>>>>>> 598187eb269a80c02186e2ccd1cd4200011fffcf
/**
 * @swagger
 * /property/{id}:
 *   delete:
 *     tags:
 *       - Property Details
 *     description: delete selected property from database
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: id of property
 *         in: path
 *         type: integer
 *         require: true
 *         schema:
 *           $ref: '#/definitions/Properties'
 *           type: object
 *       - name: authorization
 *         in: header
 *         type: string
 *     responses:
 *       200:
 *         description: property deleted successfully
 *       400:
 *         description: Bad input supplied
 *       500:
 *         description: Internal server error
 */
<<<<<<< HEAD
authenticationRouter.delete('/property/:id', checkToken, deleteProperty);
=======
authenticationRouter.delete('/agent/property/:id', checkToken, deleteProperty);
>>>>>>> 598187eb269a80c02186e2ccd1cd4200011fffcf

export default authenticationRouter;
