import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import mongoose from 'mongoose';
import { join } from 'path';

import { logger, errorHandler, normalizePort } from './config/helper';

class App {
    // initialize express app
    public app: express.Application;

    constructor() {
        require('dotenv').config();
        this.app = express();
        this.setMiddleware();
        this.configureMiddleware();
        this.routing();
    }

    // mongoose

    // set middleware
    private setMiddleware() {
        this.app.enable('trust proxy');
        this.app.set('port', normalizePort(process.env.PORT));
        this.app.set('node_env', process.env.NODE_ENV); // change process.env.NODE_ENV to production in webpack.config
        this.app.set('views', join(__dirname, '../../../views'));
        this.app.set('static files', join(__dirname, '../../../public'));
        this.app.set('hostname', process.env.LOCALHOST);
    }

    // configure middleware
    private configureMiddleware() {
        this.app.use(helmet()); // secure your app with helmet
        // use favicon
        // app.use(favicon(join(__dirname, 'public', 'img/MEN_logo.png')));
        // serving static files: HTML files, images, fonts, css and so on
        this.app.use(express.static(this.app.get('static files')));
        this.app.use(express.static(this.app.get('views')));
        // body-parser
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({
            extended: true,
        }));
        // cookie parser
        this.app.use(cookieParser());
        // session
        this.app.use(session({
            secret: process.env.SECRET_KEY as string,
            name: process.env.SESSION_NAME as string,
            saveUninitialized: true, // create session until something stored
            resave: false, // don't save session if unmodified
            cookie: { maxAge: 300000 }, // 60000 milliseconds = 1 minute, 300000 is 5 minutes
        }));
        // Middleware: configure our app to handle CORS requests
        this.app.use(cors());

        console.log('NODE_ENV:', this.app.get('node_env'));
        // development or production
        if (process.env.NODE_ENV === 'production') {
            this.app.use(compression());
            console.log('Welcome to production');
        }

        if (process.env.NODE_ENV === 'development') {
            this.app.use(logger());
        }
    }

    private routing() {
        // test a route
        this.app.get('/', (req: express.Request, res: express.Response) => {
            res.send('hello world, welcome to Express/Node.js!');
        });

        // various routes

        // 404 route

        // 500 error handling
        this.app.use(errorHandler());
    }
}

export default new App().app;
