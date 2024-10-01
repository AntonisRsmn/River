const { SlashCommandBuilder, EmbedBuilder, ComponentType, ActionRowBuilder, StringSelectMenuBuilder, Client, Discord, } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help-fun")
    .setDescription("Get a list of all the Fun commands from Ryvex."),

  run: (client, interaction) => {

    const embed = new EmbedBuilder()
    .setTitle("Fun Commands")

    .setFields(
        { name: "/8ball", value: "Answers a yes or no question.", inline: true },
        { name: "/compliments", value: "Gives you nice compliments.", inline: true },
        { name: "/gaymeter", value: " Gay Meter.", inline: true },
        { name: "/meme", value: "Sends some funny memes.", inline: true },
        { name: "/ppmeter", value: "PP Meter.", inline: true },
        { name: "/rps", value: "Play rock paper scissors against the bot.", inline: true },
        { name: "/botinfo", value: "Get information about the bot.", inline: true },
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
