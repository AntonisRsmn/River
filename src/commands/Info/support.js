const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("support")
  .setDescription("River™ Support Server."),

  run: (client, interaction) => {
    const embed = new EmbedBuilder()
        .setTitle(`***River™ Support***`)
        .setColor("#fffffe")
        .setTimestamp()
        .setDescription("Need some help join [Here](https://discord.gg/qYA3gMrQ45)")
        .setFooter({
            text: `By ${interaction.user.username}`,
            iconURL: interaction.user.displayAvatarURL(),
          })

    return interaction.reply({ embeds: [embed] });
  },
};
