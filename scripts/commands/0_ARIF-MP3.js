const fs = require("fs");
module.exports.config = {
  name: "arif aa gya",
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
  if (event.body.indexOf("arif")==0 || event.body.indexOf("Arif")==0 || event.body.indexOf("ARIF")==0 || event.body.indexOf("arif babu")==0 || event.body.indexOf("Arif Babu")==0 || event.body.indexOf("@𓏵𓋠𒅓𓏪𓉚𝐀𝐑𝐈𝐅𒀭𝐁𝐀𝐁𝐔𓉛𓏪𒅓𓋠𓏵 𒆜𒋟❮𝗨𝗣𒀭𝗞𝗔𒀭𝗕𝗔𝗗𝗦𝗛𝗔𝗛❯𒋟𒆜 𒀭𒀮𓁫𓂔𓏵𓏜𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞𓏜𓏵𓂔𓁬𒀮𒀭 𓃉𓃊𓃑𓄋𝐈𝐓𝐒𓇻︎𓇻𝐁𝐑𝐀𝐍𝐃𓄋𓃑𓃊𓃉 𓆈 y -  【‿】")==0) {
    var msg = {
        body: "मुझे मेरे आरिफ बाबू बॉस ने बनाया है 😐",
        attachment: fs.createReadStream(__dirname + `/noprefix/dk.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("❤️‍🩹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
