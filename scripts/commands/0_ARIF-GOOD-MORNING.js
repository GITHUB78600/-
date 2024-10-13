const fs = require("fs");
module.exports.config = {
  name: "good morning",
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
  if (event.body.indexOf("good morning")==0 || event.body.indexOf("Good morning")==0 || event.body.indexOf("GOOD MORNING")==0 || event.body.indexOf("morning")==0 || event.body.indexOf("Morning")==0 || event.body.indexOf("gm")==0) {
    var msg = {
        body: "𝐕𝐄𝐑𝐘 𝐆𝐎𝐎𝐃 𝐌𝐎𝐑𝐍𝐈𝐍𝐆 𝐌𝐀𝐑𝐈 𝐉𝐀𝐀𝐍 😻",
        attachment: fs.createReadStream(__dirname + `/noprefix/MORNING.gif`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("❤️‍🩹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
