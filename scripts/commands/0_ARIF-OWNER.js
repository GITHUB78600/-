const fs = require("fs");
module.exports.config = {
  name: "owner",
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
  if (event.body.indexOf("owner")==0 || event.body.indexOf("Owner")==0 || event.body.indexOf("OWNER")==0 || event.body.indexOf("bot admin")==0 || event.body.indexOf("Bot admin")==0 || event.body.indexOf("BOT ADMIN")==0) {
    var msg = {
        body: "╭•┄┅═══❁🌺❁═══┅┄•╮\n  💐  ARIF-BABU  💐\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\n\n OWNER ARIF BABU ♥️🙂",
        attachment: fs.createReadStream(__dirname + `/noprefix/OWNER.jpg`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("❤️‍🩹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
