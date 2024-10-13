const fs = require("fs");
module.exports.config = {
  name: "bye",
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
  if (event.body.indexOf("bye")==0 || event.body.indexOf("Bye")==0 || event.body.indexOf("BYE")==0 || event.body.indexOf("By")==0 || event.body.indexOf("byy")==0) {
    var msg = {
        body: "𝐁𝐘𝐄 𝐁𝐘𝐄 🙋‍♂ 𝐓𝐀𝐊𝐄 𝐂𝐀𝐑𝐄 𝐁𝐀𝐁𝐔 😇",
        attachment: fs.createReadStream(__dirname + `/noprefix/BYE.gif`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("❤️‍🩹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
