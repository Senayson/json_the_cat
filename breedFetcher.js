const request = require('request');

//let breedName = args[0];

const fetchBreedDescription = function(breedName, callback) {
  
  let str = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(str, (error, response, body) => {
    if (error ) {
      callback(new Error('Network failure'), null);
      return;
    } 
    
    const data = JSON.parse(body);
      if (data.length === 0) {
       callback(new Error("No such breed"), null);
       return;
      }
      callback(null, data[0].description);
    
  });
  
};
module.exports = { fetchBreedDescription };