import express from "express";
import { Server as IOServer } from "socket.io";
import __dirname from "./utils";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import passport from "passport";

import indexRouter from "./routes/indexRouter.js";
import loginRouter from "./routes/loginRouter.js";
import logoutRouter from "./routes/logoutRouter.js";
import productTestFakerRouter from "./routes/productTestFakerRouter.js";
import registerRouter from "./routes/registerRouter.js";
import infoProcessRouter from "./routes/infoProcessRouter.js";
import randomsRouter from "./routes/randomsRouter.js";

import productsIoController from "./controllers/products-ioController.js";
import messagesIoController from "./controllers/messages-ioController.js";

import config from "./config";