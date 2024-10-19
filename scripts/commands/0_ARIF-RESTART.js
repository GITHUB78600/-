module.exports.config = {
  name: "restart",
  version: "7.0.0",
  permission: 2,
  credits: "RYUKO",
  prefix: false,
  description: "MADE BY ARIF BABU",
  category: "admin",
  usages: "restart",
  cooldowns: 5,
  dependencies: {
    "process": ""
  }
};

module.exports.run = async ({ api, event, args }) => {
        const { threadID, messageID } = event;
        return api.sendMessage(`दो मिनट रुको RESTART.. कर रहा हूँ 😉`, threadID, () => process.exit(1));
}
