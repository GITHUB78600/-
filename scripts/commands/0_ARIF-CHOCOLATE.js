const fs = require("fs");
module.exports.config = {
  name: "chocolate",
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
  if (event.body.indexOf("chocolate")==0 || event.body.indexOf("Chocolate")==0 || event.body.indexOf("CHOCOLATE")==0 || event.body.indexOf("Chocolates")==0 || event.body.indexOf("cHOCOLATE")==0 || event.body.indexOf("chocolt")==0) {
    var msg = {
        body: "𝐁𝐀𝐁𝐔 𝐂𝐇𝐎𝐂𝐎𝐋𝐀𝐓𝐄 𝐊𝐇𝐀 𝐋𝐎 🍫",
        attachment: fs.createReadStream(__dirname + `/noprefix/CHOCOLATE.jpeg`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("❤️‍🩹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
