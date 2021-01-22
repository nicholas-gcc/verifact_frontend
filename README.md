# VeriFact Frontend

## Getting Started

### Install Nodejs

Follow the nodejs instructions to install nodejs: https://nodejs.org/en/download/package-manager/.

#### Install

1. clone repository
2. cd /path/to/project
3. npm install
4. npm start

## Code Formatting

Commenting on a pull request's formatting is no fun for anyone! To avoid wasting time checking formatting, this project uses [Standard.js style formatting](https://standardjs.com/). Please install the linter in your code editor of choice.

## GraphQL

### Relay

Relay needs to precompile files based on our schema and the queries that our app makes. `schema.graphql` is output from our API, see the backend repo for instructions. Relay can watch for changes to our app using the relay compiler:

`relay-compiler --src ./src --schema ./schema.graphql`

The relay compiler can watch files by adding a `--watch` flag to the end of this command. This script is included in `package.json` as a convenience. To watch using that script, simply run `npm run relay -- --watch`. The `--` is a flag to add other flags.
