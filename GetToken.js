module.exports = async function getAuthToken(clientID, clientSecret, baseUri) {
    // baseUri ends with a slash
    var fetch = require("node-fetch");
    const { URLSearchParams } = require("url");
    var party = require("./GetPartyById");

    var myHeaders = new fetch.Headers();
    myHeaders.append("content-type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "password");
    urlencoded.append("username", clientID); // the client ID you registered with iMIS
    urlencoded.append("password", clientSecret); // the client secret you registered with iMIS

    var requestOptions = {
        method: "post",
        headers: myHeaders,
        body: urlencoded,
        redirect: "follow",
    };

    var endpoint = "token";
    var fetchUrl = baseUri + endpoint;

    var accessToken = "";

    try {
        var response = await fetch(fetchUrl, requestOptions);
        var result = await response.json();
        accessToken = result.access_token;
    } catch (error) {
        console.log(error);
    }

    party(accessToken, "55fab524-9e8f-4c81-8057-01ae34eb447a", baseUri); // the string is the contact key for the Party you want to access
};
