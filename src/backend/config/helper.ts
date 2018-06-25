import { Request, Response, NextFunction } from 'express';

export const logger = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        const timestamp = new Date();
        const ms = timestamp.getMilliseconds();

        console.log(`Logs:: ${req.method} - '${req.originalUrl}' | statusCode: ${res.statusCode} | ${ms} ms -- ${timestamp.toLocaleTimeString()}`);
        next();
    };
};

export const errorHandler = () => {
    if (process.env.NODE_ENV === 'production') {
        return (error: Error, req: Request, res: Response) => {
            res.status(500).send(error.message); // error.message is a outputs a specific error
        };
    }

    if (process.env.NODE_ENV === 'development') {
        return (error: Error, req: Request, res: Response) => {
            // error.message is a outputs a specific error &  error.stack is used for more details in error
            // statusCode 500 is Server Error
            res.status(500).send(`${error.message}\n${error.stack}`);
            console.error(`PATH: ${req.originalUrl} Error: ${error.message}`);
        };
    }
};

export const normalizePort = (port: any) => {
    if (typeof port !== 'number') {
        return parseInt(port, 10) || port as number;
    } else {
        return port;
    }
};

export const asyncAndAwaitPromise = async (dataArgs: any) => {
    return await dataArgs; // the return is a promise
};

// usage
/**
 * asyncAndAwaitPromise(exampleData).then((promiseData) => { console.log(promiseData)}).catch((err) => console.log(err));
 */

// run series of promises: executes an array of Promises
export const promiseDotAll = (...args: Array<any>) => {
    return Promise.all([...args]);
};

// usage
/**
 * promiseDotAll(studentsData, {password: 12345678})
 *  .then((promiseData) => {
 *      console.log('Promise Data 1:', promiseData[0]);
 *      console.log('Promise Data 2:', promiseData[1])})
 *  .catch((err) => console.log(err));
 */

