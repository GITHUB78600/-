const fs = require("fs");
module.exports.config = {
  name: "good night",
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
  if (event.body.indexOf("good night")==0 || event.body.indexOf("Good night")==0 || event.body.indexOf("night")==0 || event.body.indexOf("Night")==0 || event.body.indexOf("GOOD NIGHT")==0 || event.body.indexOf("gn")==0) {
    var msg = {
        body: "𝐆𝐎𝐎𝐃 𝐍𝐈𝐆𝐇𝐓 😴 𝐒𝐖𝐄𝐄𝐓 𝐃𝐑𝐄𝐀𝐌 😇",
        attachment: fs.createReadStream(__dirname + `/noprefix/NIGHT.gif`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("❤️‍🩹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
