const { SlashCommandBuilder, EmbedBuilder, ComponentType, ActionRowBuilder, StringSelectMenuBuilder, Client, Discord, } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help-info")
    .setDescription("Get a list of all the Info commands from Ryvex."),

  run: (client, interaction) => {

    const embed = new EmbedBuilder()
    .setTitle("Info Commands")
    .setFields(
      { name: "/botinfo", value: "Get information about the bot.", inline: true },
      { name: "/doante", value: "Support Ryvex by donating.", inline: true },
      { name: "/ping", value: "Latency of the bot.", inline: true },
      { name: "/poll", value: "Create a poll and send it to a certai channel.", inline: true },
      { name: "/support", value: "Ryvex™ Support Server.", inline: true },
      { name: "/uptime", value: "Shows the uptime of the bot.", inline: true },
      { name: "/userinfo", value: "Get information about a member.", inline: true },
      { name: "/webiste", value: "Ryvex Website.", inline: true },
  )
    .setColor(0xFFFFFE)
    .setFooter({
      text: `By ${interaction.user.username}`,
      iconURL: interaction.user.displayAvatarURL(),
    })
    .setTimestamp();

    return interaction.reply({ embeds: [embed] });
  },
};
