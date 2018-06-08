import { createServer } from 'http';

import app from './app';

// create server
const server = createServer(app);

// listen to port and console status
server.listen(app.get('port'), app.get('hostname'), (err: Error) => {
    if (err) {
        console.log(err.message); // you can output err.stack
        return;
    }

    const getHostAddress = server.address().address;

    console.log('Web Server running at http://%s:%s', getHostAddress, app.get('port'));

    // console.log('App Views Dir:', app.get('views'));
    // console.log('App Static Files Dir:', app.get('static files'));

    console.log('\npress Ctrl-C to terminate.');
});


