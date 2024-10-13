const fs = require("fs");
module.exports.config = {
  name: "khana",
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
  if (event.body.indexOf("khana")==0 || event.body.indexOf("Khana")==0 || event.body.indexOf("KHANA")==0 || event.body.indexOf("lunch")==0 || event.body.indexOf("dinner")==0 || event.body.indexOf("kha lo")==0) {
    var msg = {
        body: "𝐘𝐀 𝐋𝐎 𝐁𝐀𝐁𝐔 𝐊𝐇𝐀𝐍𝐀 𝐊𝐇𝐀 𝐋𝐎 😁",
        attachment: fs.createReadStream(__dirname + `/noprefix/KHANA.gif`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("❤️‍🩹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
