const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Latency of the bot."),

  run: (client, interaction) => {
    const embed = new EmbedBuilder()
    .setTitle("Pong!")
    .setDescription(`${Math.round(client.ws.ping)}ms.`)
    .setColor(0xFFFFFE)
    .setFooter({
      text: `By ${interaction.user.username}`,
      iconURL: interaction.user.displayAvatarURL(),
    })
    .setTimestamp();

    return interaction.reply({ embeds: [embed] });
  },
};
