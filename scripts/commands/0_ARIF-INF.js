module.exports.config = {
  name: "inf",
  version: "1.0.1", 
  permssion: 0,
  credits: "★ARIF-BABU★",
  prefix:true,
  description: "Admin and Bot info.",
  category: "...",
  cooldowns: 1,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【hh:mm:ss】");
var link = ["https://i.imgur.com/rPI3r1C.jpg", 

            "https://i.imgur.com/e9dOGP3.jpg",

            "https://i.imgur.com/lmnkobJ.jpg"];

var callback = () => api.sendMessage({body:`•—»✨𝐀𝐝𝐦𝐢𝐧 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺
 •┄┅════❁🌺❁════┅┄•
 [ 1 ]  𒁍 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : 𝐀𝐫𝐢𝐟 𝐁𝐚𝐛𝐮
 [ 2 ]  𒁍 𝐁𝐨𝐭 𝐀𝐝𝐦𝐢𝐧 : 𝐓𝐡𝐢𝐬 𝐑𝐨𝐛𝐨𝐭

•┄┅══❁CONCATET❁══┅┄• 

[ 3 ]  𒁍 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐏𝐚𝐠𝐞 : https://www.facebook.com/profile.php?id=61553634015672&mibextid=kFxxJD

•┄┅═══❁🌺❁═══┅┄•\n🌺✨𝐎𝐭𝐡𝐞𝐫𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧✨🌺\n •┄┅═══❁🌺❁═══┅┄•

TYPE /help

[ 4 ]  𒁍 𝐁𝐨𝐭 𝐍𝐚𝐦𝐞 : ${global.config.BOTNAME}
[ 5 ]  𒁍 𝐁𝐨𝐭 𝐏𝐫𝐞𝐟𝐢𝐱 : ${global.config.PREFIX}

•—»✨ 𝐔𝐩𝐭𝐢𝐦𝐞

[ 6 ]  𒁍 𝐓𝐨𝐝𝐚𝐲 𝐈𝐬 𝐓𝐢𝐦𝐞 : ${juswa} 
[ 7 ]  𒁍 𝐁𝐨𝐭 𝐈𝐬 𝐑𝐮𝐧𝐧𝐢𝐧𝐠 ${hours}:${minutes}:${seconds}.

[ 8 ]  𒁍 𝐓𝐡𝐚𝐧𝐤𝐬 𝐅𝐨𝐫 𝐔𝐬𝐢𝐧𝐠 ༄🌺\n｢♥️｣${global.config.BOTNAME}｢😌｣`,attachment: fs.createReadStream(__dirname + "/cache/cyber.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/cyber.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/cyber.jpg")).on("close",() => callback());
   };
