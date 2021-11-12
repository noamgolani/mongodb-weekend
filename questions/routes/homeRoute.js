import express from 'express';

const homeRoute = express.Router();

import { home } from '../controllers/homeController.js';

homeRoute.get('/',home);

export default homeRoute;
