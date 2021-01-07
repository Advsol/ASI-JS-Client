# ASI-JS-Client

## Set Up iMIS 
In iMIS Professional, go to Settings > Contacts > Client applications. Add a new client application with a client ID, a client secret, and the fully qualified address of the server you will be running the client from, including the port if applicable. (http(s)://yourservername.com:port)

## Set Up a Server 
In the LocalServer.js file, make sure you set up the server to run at the address you registered with iMIS.

## Set Up Your Secrets
Create a file, here called "secrets.js", in the same folder as AsiJsClient.js. Put the name of this file in the .gitignore file if you're using git so that it is not uploaded to a public repository. Define your client ID, client secret, and the base URL of the iMIS instance you will be querying. (https://myimisinstance.com/) Make sure you add this line to the end of the secrets.js file: 

`module.exports = { baseUri, clientID, clientSecret };`

## Set Up Your Endpoint(s)
In the file now called "GetPartyById.js" set up the endpoint you want to query. This will probably start with "api/"; make sure that it doesn't start with a "/". This file is currently set up to do a GET on the endpoint. To do a POST or a PUT, you'll need to have the body defined as a JSON object and change the method in the requestOptions object.

## Run the Script
Make sure you have node installed. To run the script as written, from a command prompt in the same directory (folder) as AsiJsClient.js, run
`node AsiJsClient.js`

