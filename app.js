// Test out APIs here

//TWILIO
//
require('dotenv').config();
var twilio = require('twilio');


// Create a new REST API client to make authenticated requests against the
// twilio back end

var client = new twilio('AC624824e1cc11d85555a22c3eb448cfd3','4a89b86619b9186a7cb69126ca4482cd');


// Pass in parameters to the REST API using an object literal notation. The
// REST client will handle authentication and response serialzation for you.
client.messages.create({
    to:'+9179637036',
    from:'+2014290593',
    body:'ahoy hoy! Testing Twilio and node.js'
}, function(error, message) {
    // The HTTP request to Twilio will run asynchronously. This callback
    // function will be called when a response is received from Twilio
    // The "error" variable will contain error information, if any.
    // If the request was successful, this value will be "falsy"
    if (!error) {
        // The second argument to the callback will contain the information
        // sent back by Twilio for the request. In this case, it is the
        // information about the text messsage you just sent:
        console.log('Success! The SID for this SMS message is:');
        console.log(message.sid);

        console.log('Message sent on:');
        console.log(message.dateCreated);
    } else {
        console.log('Oops! There was an error.');
    }
  })


// //Initialize a REST client in a single line:
// var client = require('twilio')('TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN');
//
// // Use this convenient shorthand to send an SMS:
// client.sendSms({
//     to:'YOUR_PHONE',
//     from:'TWILIO_NUMBER',
//     body:'ahoy hoy! Testing Twilio and node.js'
// }, function(error, message) {
//     if (!error) {
//         console.log('Success! The SID for this SMS message is:');
//         console.log(message.sid);
//         console.log('Message sent on:');
//         console.log(message.dateCreated);
//     } else {
//         console.log('Oops! There was an error.');
//     }
// });
// // Require the twilio and HTTP modules
// var twilio = require('twilio'),
//     http = require('http');
//
// // Create an HTTP server, listening on port 1337, that
// // will respond with a TwiML XML document
// http.createServer(function (req, res) {
//     // Create a TwiML response
//     var resp = new twilio.twiml.VoiceResponse();
//
//     // The TwiML response object will have functions on it that correspond
//     // to TwiML "verbs" and "nouns". This example uses the "Say" verb.
//     // Passing in a string argument sets the content of the XML tag.
//     // Passing in an object literal sets attributes on the XML tag.
//     resp.say({voice:'woman'}, 'ahoy hoy! Testing Twilio and node.js');
//
//     //Render the TwiML document using "toString"
//     res.writeHead(200, {
//         'Content-Type':'text/xml'
//     });
//     res.end(resp.toString());
//
// }).listen(1337);
//
// console.log('Visit http://localhost:1337/ in your browser to see your TwiML document!');
