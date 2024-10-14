module.exports.config = {
    name: "song", 
  version: "1.0.0", 
  permission: 0,
  credits: "ARIF-BABU",
  description: "example",
  prefix: true,
  category: "Media", 
  usages: "user", 
  cooldowns: 5,
  dependencies: {
                "ytdl-core":"",
    "simple-youtube-api":""
        }
};

module.exports.run = async ({ api, event }) => {
  const axios = require("axios");
  const fs = require("fs-extra");
  const playdl = require("play-dl");
  const request = require("request");
  const yts = require("yt-search");
 
  const input = event.body;
  const text = input.substring(12);
  const data = input.split(" ");
 
  if (data.length < 2) {
    return api.sendMessage("Please put a song", event.threadID);
  }
 
  data.shift();
  const song = data.join(" ");
 
  try {
    api.sendMessage(`Finding "${song}". Please wait...`, event.threadID);
 
    const searchResults = await yts(song);
    if (!searchResults.videos.length) {
      return api.sendMessage("Error: Invalid request.", event.threadID, event.messageID);
    }
 
    const video = searchResults.videos[0];
    const videoUrl = video.url;
 
    const stream = await playdl.stream(videoUrl);
 
    const fileName = `${event.senderID}.mp3`;
    const filePath = __dirname + `/cache/${fileName}`;
 
    const fileStream = fs.createWriteStream(filePath);
    stream.stream.pipe(fileStream);
 
    fileStream.on('finish', () => {
      console.info('[DOWNLOADER] Downloaded');
 
      if (fs.statSync(filePath).size > 26214400) {
        fs.unlinkSync(filePath);
        return api.sendMessage('[ERR] The file could not be sent because it is larger than 25MB.', event.threadID);
      }
 
      const message = {
        body: `Here's your music, enjoy!🥰\n\nTitle: ${video.title}\nArtist: ${video.author.name}`,
        attachment: fs.createReadStream(filePath)
      };
 
      api.sendMessage(message, event.threadID, () => {
        fs.unlinkSync(filePath);
      });
    });
 
  } catch (error) {
    console.error('[ERROR]', error);
    api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
};
