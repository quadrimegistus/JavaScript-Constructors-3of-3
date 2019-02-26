const axios = require("axios");
const fs = require("fs");

// Create the TV constructor
const TV = function() {
  // divider will be used as a spacer between the tv data we print in log.txt
  const divider = "\n------------------------------------------------------------\n\n";

  // findShow takes in the name of a tv show and searches the tvmaze API
  this.findShow = (show) => {
    const URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

    axios.get(URL).then(function(response) {
      // Place the response.data into a variable, jsonData.
      const jsonData = response.data;

      // showData ends up being the string containing the show data we will print to the console
      const showData = [
        "Show: " + jsonData.name,
        "Genre(s): " + jsonData.genres.join(", "),
        "Rating: " + jsonData.rating.average,
        "Network: " + jsonData.network.name,
        "Summary: " + jsonData.summary
      ].join("\n\n");

      // Append showData and the divider to log.txt, print showData to the console
      fs.appendFile("log.txt", showData + divider, (err) => {
        if (err) throw err;
        console.log(showData);
      });
    });
  };

  // findActor takes in the name of an actor to search for
  this.findActor = (actor) => {
    const URL = "http://api.tvmaze.com/search/people?q=" + actor;

    axios.get(URL).then(function(response) {
      // Grab the first index of the response array, access the object at the `person` key and store it in a variable.
      const jsonData = response.data[0].person;
      // actorData ends up being the string containing the show data we will print to the console
      const actorData = [
        "Name: " + jsonData.name,
        "Birthday: " + jsonData.birthday,
        "Gender: " + jsonData.gender,
        "Country: " + jsonData.country.name,
        "URL: " + jsonData.url
      ].join("\n\n");

      // Append actorData and the divider to log.txt, print showData to the console
      fs.appendFile("log.txt", actorData + divider, (err) => {
        if (err) throw err;
        console.log(actorData);
      });
    });
  };
};

module.exports = TV;
