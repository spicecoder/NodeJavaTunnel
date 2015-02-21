var parseString = require('xml2js').parseString;
var processors = require ('xml2js/lib/processors');
 debugger;
var xml = "<cc:root>Hello xml2js </cc:root>"
xml = processors.stripPrefix(xml );

 
parseString(xml, function (err, result) {
    console.dir(result);
}) ;