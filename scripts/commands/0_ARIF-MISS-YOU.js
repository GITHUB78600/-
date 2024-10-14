const fs = require("fs");
module.exports.config = {
  name: "miss you",
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
  if (event.body.indexOf("i miss you")==0 || event.body.indexOf("I miss you")==0 || event.body.indexOf("Miss")==0 || event.body.indexOf("MISS")==0 || event.body.indexOf("miss you")==0 || event.body.indexOf("miss")==0 || event.body.indexOf("MISS YOU")==0) {
    var msg = {
        body: "𝐈 𝐌𝐈𝐒𝐒 𝐘𝐎𝐔 𝐓𝐎 𝐌𝐀𝐑𝐈 𝐉𝐀𝐀𝐍 😇",
        attachment: fs.createReadStream(__dirname + `/noprefix/MISS-YOU.gif`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("❤️‍🩹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
