var server = require("./LocalServer.js");
var authorize = require("./GetToken.js");
var secrets = require("./secrets.js"); // Do not commit this file to source control. It contains sensitive information

async function sleep() {
    await setTimeout(() => {}, 20000);
}

server();
sleep().finally(); // just a pause to allow the server to get started

authorize(secrets.clientID, secrets.clientSecret, secrets.baseUri) // all action takes place in GetToken.js
    .catch((error) => console.log("error: ", error))
    .finally();

sleep().finally();
