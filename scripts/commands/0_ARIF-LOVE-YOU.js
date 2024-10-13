const fs = require("fs");
module.exports.config = {
  name: "love you",
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
  if (event.body.indexOf("i love you")==0 || event.body.indexOf("i love")==0 || event.body.indexOf("I LOVE YOU")==0 || event.body.indexOf("love")==0 || event.body.indexOf("Love")==0 || event.body.indexOf("LOVE")==0) {
    var msg = {
        body: "𝑰 𝑳𝑶𝑽𝑬 𝒀𝑶𝑼 𝑻𝑶𝑶 𝑴𝑬𝑹𝑰 𝑱𝑨𝑨𝑵 🙈",
        attachment: fs.createReadStream(__dirname + `/noprefix/LOVE-YOU.gif`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("❤️‍🩹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
