const fs = require("fs");
module.exports.config = {
  name: "assalamualaikum",
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
  if (event.body.indexOf("assalamualaikum")==0 || event.body.indexOf("Assalamualaikum")==0 || event.body.indexOf("ASSALAMUALAIKUM")==0 || event.body.indexOf("aSSALAMUALAIKUM")==0 || event.body.indexOf("assalam")==0 || event.body.indexOf("ASSALAM")==0) {
    var msg = {
        body: "𝐖𝐀𝐋𝐀𝐈𝐊𝐔𝐌 𝐀𝐒𝐒𝐀𝐋𝐀𝐌 𝐖𝐀 𝐑𝐀𝐇𝐌𝐀𝐓𝐔𝐋𝐋𝐀𝐇𝐈 𝐁𝐀𝐑𝐀𝐊𝐀𝐓𝐔𝐇 🤗💫",
        attachment: fs.createReadStream(__dirname + `/noprefix/assalamualaikum.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("❤️‍🩹", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
