module.exports.config = {
    name: "add",
    version: "1.0.0",
    permssion: 0,
    credits: "ARIF-BABU",
    description: "MADE BY ARIF BABU",
    prefix: true,
    category: "Box chat",
    usages: "< link/UID >",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, Threads, Users }) {
const { threadID, messageID } = event;
const axios = require('axios')
const link = args.join(" ")
if(!args[0]) return api.sendMessage('कृपया आईडी लिंक लाओ बाबू 😉🍎', threadID, messageID);
var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
if(link.indexOf(".com/")!==-1) {
    const res = await axios.get(`https://golike.com.vn/func-api.php?user=${link}`);
    var uidUser = res.data.data.uid
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`बाबू इस ग्रुप में पहले से ऐड है 🙄🍎`, threadID, messageID);
    if (err) return api.sendMessage(` Cannot add members to the group`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`हमने ऐड कर दिया है आप अप्रूवल दो 🤦😛`, threadID, messageID);
    else return api.sendMessage(`Add members to the bar group`, threadID, messageID);
    });
    }
  else { 
    var uidUser = args[0] 
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`बाबू इस ग्रुप में पहले से ऐड है 🙄🍎`, threadID, messageID);
    if (err) return api.sendMessage(`Cannot add members to the group`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`हमने ऐड कर दिया है आप अप्रूवल दो 🤦😛`, threadID, messageID);
    else return api.sendMessage(`Add members to the bar group`, threadID, messageID);
    });
  }
}
