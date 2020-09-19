const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, res, body) => {
      if (!error) {
        let data = JSON.parse(body)[0];
        if (!data) {
          callback("Breed does not exist!");
        } else {
          callback(null, data.description.trim());
        }
      } else {
        callback(error);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
