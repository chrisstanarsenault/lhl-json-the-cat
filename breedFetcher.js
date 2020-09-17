breed = process.argv.splice(2)[0];

const request = require("request");

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
  (error, res, body) => {
    if (!error) {
      let data = JSON.parse(body)[0];
      if (!data) {
        console.log("Breed does not exist!");
      } else {
        console.log(data.description);
      }
    } else {
      console.log(error);
    }
  }
);
