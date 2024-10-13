module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "★𝐌𝟗𝐇𝟒𝐌𝐌𝟒𝐃-𝐁𝟒𝐃𝟗𝐋★",
 description: "Listen events Notify bot or group member with random gif/photo/video"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "being kicked by the administrator";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`সরি 𝐎𝐌𝐎𝐑 𝐀𝐋𝐕𝐈 বস ${name} ব্লক করছে তাই এড করতে পারলাম না😞😞  \n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐎𝐌𝐎𝐑 𝐀𝐋𝐕𝐈 -----❖----:( `, event.threadID)
   } else api.sendMessage(`𝐎𝐌𝐎𝐑 𝐀𝐋𝐕𝐈 BoSS, ${name} নিব নেওয়া আইডি টা পুনরায় এড করতে সফল্য! \n✢━━━━━━━━━━━━━━━✢\n ----❖----- 𝐎𝐌𝐎𝐑 𝐀𝐋𝐕𝐈 -----❖----`,

 event.threadID);
  })
 }
                     }
