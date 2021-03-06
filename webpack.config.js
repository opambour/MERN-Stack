const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const backendConfiguration = { // backend will use typescript
    target: 'node',
    // target: "webworker", // WebWorker
    // target: "node", // Node.js via require
    // target: "async-node", // Node.js via fs and vm
    // target: "node-webkit", // nw.js
    // target: "electron-main", // electron, main process
    // target: "electron-renderer", // electron, renderer process
    // mode: 'production',
    devtool: 'source-map',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.js', '.ts']
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000, // refresh and watch every second
        ignored: /node_modules/
    },
    entry: {
        'backend/server': './src/backend/server.ts'
    },
    output: {
        filename: '[name].build.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            // .ts .tsx configuration
            {
                test: /\.(ts|js)$/,
                include: [
                    path.resolve(__dirname, 'src/backend')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: [
                    'cache-loader',
                    'tslint-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true // either happyPackMode or transpileOnly. One at a time
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // Webpack plugin that runs typescript type checker on a separate process
        new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
        new webpack.WatchIgnorePlugin([/\.(js|jsx)$/, /\.d\.ts$/]),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development') // change it to production when ready
        })
    ],
};

const frontendConfiguration = { // frontend will use es6 jsx & react
    target: 'web',
    devtool: 'source-map',
    resolve: {
        // Add `.ts`, `.jsx`, '.js' and '.es6' as a resolvable extension.
        extensions: ['.js', '.jsx', '.es6']
    },
    watch: true, // Watch the filesystem for changes
    watchOptions: { // The polling interval for watching (also enable polling)
        aggregateTimeout: 300,
        poll: 1000, // refresh and watch every second
        ignored: /node_modules/
    },
    entry: {
        'frontend/app': './src/frontend/app.jsx'
    },
    output: {
        filename: '[name].build.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            // js and jsx rules
            {
                test: /\.(js|jsx)?$/,
                include: [
                    path.resolve(__dirname, 'src/frontend')
                ],
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: [
                    'cache-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-flow', '@babel/preset-react'],
                            plugins: ['@babel/plugin-transform-runtime']
                        }
                    },
                    'eslint-loader'
                ],
                enforce: 'pre',
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public/views'),
        compress: true,
        watchContentBase: true,
        watchOptions: {
            poll: true
        },
        hot: true,
        port: 9000,
        index: 'index.html'
    },
    plugins: [
        // A webpack plugin to remove/clean your build folder(s) before building
        new CleanWebpackPlugin(['dist/frontend'], {
            // options
            verbose: true,
            dry: false
        }),
        /** HMR allows all kinds of modules to be updated at runtime without the need for a full refresh.
         ** HMR is not intended for use in production.
         */
        new webpack.HotModuleReplacementPlugin({
            // Options...
            title: 'Dev: Hot Module Replacement...'
        }),
        // The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles.
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/frontend/index.html'
        })
    ]
};

// export
module.exports = [backendConfiguration, frontendConfiguration];
