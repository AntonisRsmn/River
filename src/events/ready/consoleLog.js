const { client, ActivityType } = require("discord.js");
const mongoose = require("mongoose");
const mongoURL = process.env.MONGO_URL;
require("colors");

module.exports = async (client) => {
  console.log(`[INFO] ${client.user.username} Is online`.white);

  if (!mongoURL) return;
  mongoose.set("strictQuery", true);
  if (await mongoose.connect(mongoURL)) {
    console.log(`[INFO] Connected to the database`.green);
  }

  setInterval(() => {
    const act = [
      { name: `@${client.user.username}`, type: ActivityType.Listening },
      {
        name: `${client.guilds.cache.size} Servers`,
        type: ActivityType.Watching,
      },
    ];

    var random = act[Math.floor(Math.random() * act.length)];
    client.user.setPresence({
      activities: [random],
    });
  }, 1000 * 10);

};
