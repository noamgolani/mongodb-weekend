import express from "express";
import path from 'path';

const homeRoute = express.Router();

import { home } from "../controllers/homeController.js";

import { validateId } from '../middlewares/validator.js';

homeRoute.get("/", home);
homeRoute.get("/:id",validateId, home);

homeRoute.use("/public", express.static(path.resolve("./public")));

export default homeRoute;
