const express = require('express');
const argv = require('yargs').argv;
const app = module.exports = express();
const port = (argv.port) ? argv.port : 3000;
const bodyParser = require('body-parser');

// Static content
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.text({type:'text/plain'}));

// Express globals
app.locals = {
  'port' : port,
  'host' : 'localhost'
};

app.get('/', (request, response) => {
  response.send();
});

app.post('/', (request, response) => {
  response.send();
});

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});
