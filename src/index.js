require("dotenv/config");

const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");
const eventHandler = require("./handlers/eventHandler");

const client = new Client ({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

eventHandler(client);

client.on("messageCreate", (message) => {
    const embed = new EmbedBuilder()
        .addFields(
            { name: " ", value: "👀 Need assistance ?", inline: true },
            { name: " ", value: "🤖 Use </help:1084950800398303267> or join our [Support Server](https://discord.gg/JDDSbxKDne)", inline: true },
        )
        .setColor(0xFFFFFE)
        .setTimestamp()
  
    if (message.author.bot) return;

    if (message.content.includes("@here") || message.content.includes("@everyone") || message.type == "REPLY") return;

    if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
        message.channel.send({embeds: [embed],});
    }
});

client.login(process.env.TOKEN);