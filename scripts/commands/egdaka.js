const axios = require("axios");

module.exports = {
  config: {
    name: "Farhan",
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
    const triggerWords = ["oi", "Farhan", "@─꯭─⃝͎̽Dɜ⃨⃔v̷ɪ͢l F⃪̌͢ʌ⃪𝆭͜͡ʀ͢ʜ͢ʌ⃪𝆭͜͡ɳ⃪ ▁▁▁╱╱😈⚔️👿", "@─꯭─⃝͎̽Dɜ⃨⃔v̷ɪ͢l F⃪̌͢ʌ⃪𝆭͜͡ʀ͢ʜ͢ʌ⃪𝆭͜͡ɳ⃪ ▁▁▁╱╱😈⚔️👿"];

    if (triggerWords.some(word => lowerBody.startsWith(word))) {
      const url = "https://i.imgur.com/yzrr9FL.mp4";
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
