# Webpack 4 & Babel 7 with React 16 Starter Kit

# MERN Workflow

##  FLow with Babel and React

1. Install @babel/preset-flow and flow-bin
        > npm install -D @babel/preset-flow flow-bin

2. Add preset-flow to .babelrc
        {
            presets: [
                 ["@babel/preset-flow"]
            ]
         }

3. Add flow to your package.json scripts as:
    "flow": "flow"

4. Initialize flow:
Flow requires an empty flowconfig...To create flow config, issue this command in your console under the project's  root:
        > npm run flow init

5. Start Flow background process:
        > npm run flow or npm run flow status

## FLow Code:

For each file that you have flagged with // @flow, you now have the full power of Flow and its type-checking available to you. Here is an example Flow file:

// @flow
        function add(x: ?number, y: ?number): string {
            if (x && y) {
                return x + y;
            }

            return `${x} and ${y} should be numbers`;
        }

**Version #:** 1.0.0
