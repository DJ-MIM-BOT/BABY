const axios = require("axios");

module.exports = {
  config: {
    name: "@everyone",
    version: "1.0.2",
    prefix: false,
    permission: 0,
    credits: "Farhan",
    description: "Fun",
    category: "no prefix",
    usages: "🙋‍♂️",
    cooldowns: 5,
  },

  handleEvent: async function ({ api, event }) {
    const { threadID, messageID, body } = event;
    if (!body) return;

    const lowerBody = body.toLowerCase();
    const triggerWords = ["oi", "oii", "@কে'ট'বে'রি ত্যা'হ", "@everyone"];

    if (triggerWords.some(word => lowerBody.startsWith(word))) {
      const url = "https://drive.google.com/uc?export=download&id=1PIv7Vkwr6EgV27qL0D6CL7fKF8XBlznD";
      const res = await axios.get(url, { responseType: "stream" });

      const msg = {
        body: "~ ডাকো কেনো গো, আমি আছি তো এখানে..!✋🥀",
        attachment: res.data
      };

      api.sendMessage(msg, threadID, messageID);
      api.setMessageReaction("😇", messageID, () => {}, true);
    }
  },

  start: function () {}
};
