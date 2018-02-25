#!/usr/bin/env node

var fs = require('fs');
var program = require('commander');
var eml = require('eml');

program
    .version('0.0.1-alpha', '-v, --version')
    .option('-i, --input <file ...>', 'Input EML file')
    .option('-o, --output <file ...>', 'Output HTML file')
    .parse(process.argv);

const emlFile = fs.readFileSync(program.input, 'utf8');
const html = eml.parse(emlFile);

fs.writeFileSync(program.output, html, 'utf8');