const { Client, ActivityType } = require("discord.js");

module.exports = async (client) => {

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