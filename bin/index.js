#!/usr/bin/env node

const clear = require('clear');
const figlet = require('figlet');
const chalk = require('chalk');

const main = require('./../lib/main');

clear();

console.log(
    chalk.blackBright(
        figlet.textSync('Tracker', {
            width: 50,
            whitespaceBreak: true
        })
    )
);

main.init();