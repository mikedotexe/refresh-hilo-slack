module.exports = function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'Hello, ' + userName + '!',
  };

  console.log('req');
  console.log(req.body);
  var channel = req.body.channel_id;
  console.log(channel);
  var bodyText = req.body.text;
  console.log(bodyText);

  var postM = {
    token : process.env.BOT1,
    channel : channel,
    text : ':front-train:' + bodyText,
    as_user : true,
    username : 'refresh-bot-1',
  }

  var request = require('request');

  // console.log(postM);
  // var postTEST = {
  //   token : 'process.env.BOT1',
  //   channel : 'req.body.channel_id',
  //   text : ':front-train:' + 'req.body.text',
  //   as_user : 'true',
  //   username : 'refresh-bot-1',
  // }

  // process.stdout.write('ftftft');

  // Lets configure and request
  request({
      url: 'https://slack.com/api/chat.postMessage', //URL to hit
      // qs: {from: 'blog example', time: +new Date()}, //Query string data
      qs: postM,
      method: 'GET',
      //Lets post the following key/values as form
      // json: postM,
  }, function(error, response, body){
      if(error) {
          console.log("error:");
          console.log(error);
      } else {
          console.log("response code:");
          console.log(response.statusCode);
          console.log("response body:");
          console.log(body);
      }
  });

  // avoid infinite loop
  if (userName !== 'slackbot') {
    // return res.status(200).json(req);
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
}