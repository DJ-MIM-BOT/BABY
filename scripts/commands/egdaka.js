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
      const url = "https://drive.google.com/drive/folders/1-Sbh2sy-CIv0_YKKPHs7xIpG9rJg4t8g";
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
