const { SlashCommandBuilder, EmbedBuilder, Client } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("uptime")
    .setDescription("Shows the uptime of the bot."),

  run: (client, interaction) => {
    const days = Math.floor(client.uptime / 86400000)
        const hours = Math.floor(client.uptime / 3600000) % 24
        const minutes = Math.floor(client.uptime / 600000) % 60
        const seconds = Math.floor(client.uptime / 1000) % 60

        const embed = new EmbedBuilder()
        .setTitle(`***${client.user.username} Uptime***`)
        .setColor("#fffffe")
        .setTimestamp()
        .addFields(
            { name: "Uptime", value: ` \`${days}\` days, \`${hours}\` hours, \`${minutes}\` minutes and \`${seconds}\` seconds.`, inline: true},
        )
        .setFooter({
            text: `By ${interaction.user.username}`,
            iconURL: interaction.user.displayAvatarURL(),
          })

    return interaction.reply({ embeds: [embed] });
  },
};