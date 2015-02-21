 
var fs = require('fs');
var xmldoc = require('xmldoc/lib/xmldoc');
 
 
var xml = "<author><name>looooooong value</name></author>";
console.log("My document: \n" + new xmldoc.XmlDocument(xml).toString( ))




