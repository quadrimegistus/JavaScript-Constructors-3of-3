const axios = require("axios");
const fs = require("fs");

const TV = function() {
  const divider = "\n------------------------------------------------------------\n\n";
  this.findShow = (show) => {
    const URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
    axios.get(URL).then(function(response) {
          const jsonData = response.data;
          const showData = [
               "Show: " + jsonData.name,
               "Genre(s): " + jsonData.genres.join(", "),
               "Rating: " + jsonData.rating.average,
               "Network: " + jsonData.network.name,
               "Summary: " + jsonData.summary
          ].join("\n\n");
          fs.appendFile("log.txt", showData + divider, (err) => {
               if (err) throw err;
               });
          });
     };
  this.findActor = (actor) => {
    const URL = "http://api.tvmaze.com/search/people?q=" + actor;
    axios.get(URL).then(function(response) {
          const jsonData = response.data[0];
          const actorData = [
               'Name: '+jsonData.person.name,
               'Birthday: '+jsonData.person.birthday,
               'Gender: '+jsonData.person.gender,
               'Country: '+jsonData.person.country.name,
               'URL: '+jsonData.person.url
          ].join("\n\n");
          fs.appendFile("log.txt", actorData + divider, (err) => {
               if (err) throw err;
               });
          });
     };
};

module.exports = TV;