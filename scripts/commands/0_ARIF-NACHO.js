const fs = require("fs");
module.exports.config = {
  name: "nacho",
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
  if (event.body.indexOf("nacho")==0 || event.body.indexOf("Nacho")==0 || event.body.indexOf("NACHO")==0 || event.body.indexOf("naco")==0 || event.body.indexOf("NACO")==0 || event.body.indexOf("नाचो")==0) {
    var msg = {
        body: "𝐍𝐀𝐂𝐇𝐎 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 𝐍𝐀𝐂𝐇𝐎 🙂🤟 ❜",
        attachment: fs.createReadStream(__dirname + `/noprefix/DANCE.gif`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("❤️‍🩹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
  
