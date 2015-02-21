var parseString = require('xml2js').parseString;
var processors = require ('xml2js/lib/processors');
 
var xml = "<root>Hello xml2js!</root>"
xml = processors.stripPrefix(xml);

 
parseString(xml, function (err, result) {
    console.dir(result);
}) ;