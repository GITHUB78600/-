const fs = require("fs");
module.exports.config = {
  name: "rose",
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
  if (event.body.indexOf("rose")==0 || event.body.indexOf("Rose")==0 || event.body.indexOf("ROSE")==0 || event.body.indexOf("ROse")==0 || event.body.indexOf("🌹")==0 || event.body.indexOf("🥀")==0) {
    var msg = {
        body: "🌹𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐑𝐎𝐒𝐄 𝐋𝐎🌹",
        attachment: fs.createReadStream(__dirname + `/noprefix/ROSE.gif`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("❤️‍🩹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }     
