const fs = require("fs");
module.exports.config = {
  name: "THANK YOU",
  version: "2.0.0",
  permission: 0,
  credits: "arif",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("welcome")==0 || (event.body.indexOf("Welcome")==0 || (event.body.indexOf("WELCOME")==0 || (event.body.indexOf("wl")==0)))) {
                var msg = {
                                body: "धन्यवाद 🙂🖐️"
    }
                        api.sendMessage(msg, threadID, messageID);
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

}
