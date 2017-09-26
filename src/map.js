const https = require("https");
let max = 31;
function extractEmails (text) {
  return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}

while(max > 0 ) {
  var options = {
    host: 'api.github.com',
    path: '/repos/prebid/Prebid.js/pulls?state=closed&page='+max,
    method: 'GET',
    headers: {'user-agent': 'node.js'}
  };

  var request = https.request(options, function(response){
    var body = '';
    response.on("data", function(chunk){
      body += chunk.toString('utf8');
    });

    response.on("end", function(){
      console.log(body);
      var prs = JSON.parse(body);
      if(prs.forEach) {
        prs.forEach(function(pr) {
          let emails = extractEmails(pr.body);
          if(emails != null) {
            console.log(emails);
          }
        });
      }
    });
  });

  request.end();
  max--;
}
