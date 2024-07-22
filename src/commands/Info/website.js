const { SlashCommandBuilder, EmbedBuilder, Client } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("website")
  .setDescription("Ryvex Website."),

  run: (client, interaction) => {
    const embed = new EmbedBuilder()
        .setTitle(`***Ryvex Website***`)
        .setColor("#fffffe")
        .setTimestamp()
        .setDescription("Check out our [Website](https://ryvex.xyz)")
        .setFooter({
            text: `By ${interaction.user.username}`,
            iconURL: interaction.user.displayAvatarURL(),
          })

    return interaction.reply({ embeds: [embed] });
  },
};
