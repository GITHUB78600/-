const fs = require("fs");
module.exports.config = {
  name: "kiss",
  version: "1.0.1",
  permssion: 0,
  credits: "ARIF BABU", 
  prefix : true,
  description: "noprefix gif",
  category: "no prefix",
  usages: "bye",
  cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("kiss")==0 || event.body.indexOf("Kiss")==0 || event.body.indexOf("KISS")==0 || event.body.indexOf("kiss me")==0 || event.body.indexOf("kiss do")==0 || event.body.indexOf("kiss you")==0) {
    var msg = {
        body: "𝑰 𝑲𝑰𝑺𝑺 𝒀𝑶𝑼 𝑻𝑶𝑶 𝑩𝑨𝑩𝒀 💋🙊💞",
        attachment: fs.createReadStream(__dirname + `/noprefix/KISS-YOU.gif`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("❤️‍🩹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  
