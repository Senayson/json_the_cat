const request = require('request');
const args = process.argv.slice(2);

let str = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;

request(str, (error, response, body) => {

  if (error) {
    return console.log('Failed request: ', error);
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    return console.log('Failed request: No such breed');
  }
  console.log(data[0].description);
  console.log(typeof data);
});
