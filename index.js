const fs = require('fs');
const path = require('path');
const program = require('commander');
const glob = require('glob');
const eml = require('eml');

program
    .version('0.0.1-alpha', '-v, --version')
    .option('-i, --input <file ...>', 'Input EML file')
    .option('-o, --output [file ...]', 'Output HTML file')
    .parse(process.argv);

glob(program.input, null, function(err, paths) {
    paths.forEach(function(filePath) {
        const extension = path.extname(filePath);
        const dirname = path.dirname(filePath);
        const basename = path.basename(filePath, extension);
        const emlFile = fs.readFileSync(filePath, 'utf8');
        const html = eml(emlFile);

        fs.writeFileSync(dirname + '/' + basename + '.html', html, 'utf8');
    });
});
