#!/usr/bin/env node

'use strict';
const program = require('commander');

var ping = require('ping');

var hosts = ['4.2.2.4'];

function isAlive() {
    hosts.forEach(function(host) {
        ping.sys.probe(host, function(isAlive) {
            var msg = isAlive ? 'host ' + host + ' is \x1b[36malive\x1b[0m' : 'host ' + host + ' is dead';
            console.log(msg);
        })
    });
}




program
    .version('0.0.1')
    .option('-s, --server','set custom server to check')
    //.option('-I, --another-input <required>','required user input')
    .action(isAlive);

program.parse(process.argv);