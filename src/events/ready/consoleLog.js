const { client, ActivityType } = require("discord.js");
require("colors");

module.exports = (client) => {
    console.log(`[INFO] ${client.user.username} Is online`.white);

    setInterval(() => {
        const act = [
            { name: `@${client.user.username}`, type: ActivityType.Listening },
            { name: `${client.guilds.cache.size} Servers`, type: ActivityType.Watching },
        ];

        var random = act[Math.floor(Math.random() * act.length)];
        client.user.setPresence({
            activities: [random]
        })
    }, 1000 * 10);
};