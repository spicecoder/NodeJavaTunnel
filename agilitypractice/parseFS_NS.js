var fs = require('fs'),
xml2js = require('xml2js');

var parser = new xml2js.Parser();
var processors = require ('xml2js/lib/processors');
fs.readFile('sampleWithNamespaces.xml', function (err, data) {
    console.log('preparsed:' + data.toString());
	debugger;
	var x1;
   console.log('Returned:' + processors.stripPrefix(data.toString()));
    parser.parseString(data, function (err, result) {
        console.dir(result);
        console.log('Done');
    });
});