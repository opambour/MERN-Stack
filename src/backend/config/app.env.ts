import path from 'path';

export default {
    NODE_ENV: 'development', // production or development
    PORT: 3000,
    VIEWS: path.join(__dirname, '../../../views'),
    STATIC_FILES: path.join(__dirname, '../../../public'),
    VIEW_ENGINE: 'njk',
    LOCALHOST: '127.0.0.1',
    DB_URI: 'mongodb://127.0.0.1:27017/learning_react_db',
    SECRET_KEY: 'TKRv0IJs&HYqrvagQ&!F!%V]Ww/4KiVs$s,<<MX',
    SESSION_NAME: 'learningReactSessionName',
};
