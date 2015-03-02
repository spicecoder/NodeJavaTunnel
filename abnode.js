var os=require('os');
var net=require('net');

var networkInterfaces=os.networkInterfaces();

var port = 9081;
var count = 1;
var msgi =" UCLdata= ";
fs = require('fs') ;
    fs.readFile('c:\\temp\\UCL.txt', 'utf8', function (err,msg) {
  if (err) {
    return console.log(err);
  }
  console.log("fileread:"+ msg);
  msgi = msg;
});
function callback_server_connection(socket){
    var remoteAddress = socket.remoteAddress;
    var remotePort = socket.remotePort;
	
    socket.setNoDelay(true);
    console.log("connected: ", remoteAddress, " : ", remotePort);
    
     
	
	
	/*  var msg = 		"<FlightDetails>>\n" +
    				 "<FlightNo> QF350 "   +
    				 "<Segment>\n "+ "Del-HK"+
    				 "<dateOfJourney>\n" + "1042015  " +
    				"<breakfast_menu>\n" +
    				                    "<food>\n" +
    				                    "<name>Belgian Waffles</name>\n" +
    				                    "<price>$5.95</price>\n" +
    				                    "<description>\n" +
    				                    "Two of our famous Belgian Waffles with plenty of real maple syrup\n" +
    				                    "</description>\n" +
    				                    "<calories>650</calories>\n" +
    				                    "</food>\n" +
    				                    "<food>\n" +
    				                    "<name>Strawberry Belgian Waffles</name>\n" +
    				                    "<price>$7.95</price>\n" +
    				                    "<description>\n" +
    				                    "Light Belgian waffles covered with strawberries and whipped cream\n" +
    				                    "</description>\n" +
    				                    "<calories>900</calories>\n" +
    				                    "</food>\n" +
    				    "</breakfast_menu>\n" +
    				   "</dateOfJourney>\n" +              
    				  "</Segment>\n"+
    				 "</FlightNo>" +
    				  "</FlightDetails>" ; */
		
    count++; 

    socket.end(msgi);
    
    socket.on('data', function (data) {
        console.log(data.toString());
    });
    
    socket.on('end', function () {
        console.log("ended: ", remoteAddress, " : ", remotePort);
    });
}

console.log("Node js for responding UCLs");
 

console.log("node.js net server is waiting:");
for (var interface in networkInterfaces) {

    networkInterfaces[interface].forEach(function(details){
        
        if ((details.family=='IPv4') && !details.internal) {
            console.log(interface, details.address);  
        }
    });
}

console.log("port: ", port);

var netServer = net.createServer(callback_server_connection);
netServer.listen(port);


