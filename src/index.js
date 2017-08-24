const express = require('express');
const argv = require('yargs').argv;
const app = module.exports = express();
const port = (argv.port) ? argv.port : 3000;
const bodyParser = require('body-parser');
const path = __dirname + '/views/';
const router = express.Router();

// Static content
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.text({type:'text/plain'}));

// Express globals
app.locals = {
  'port' : port,
  'host' : 'localhost'
};

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});
