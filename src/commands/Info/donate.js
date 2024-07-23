const { SlashCommandBuilder, EmbedBuilder, Client } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("donate")
    .setDescription("Support Ryvex by donating."),

  run: (client, interaction) => {
    const embed = new EmbedBuilder()
        .setTitle(`***Donate***`)
        .setColor("#fffffe")
        .setTimestamp()
        .setDescription("Consider [Donating](https://www.paypal.me/RusmanAntonis) to help me make Ryvex better for everyone Thanks.")
        .setFooter({
            text: `By ${interaction.user.username}`,
            iconURL: interaction.user.displayAvatarURL(),
          })

    return interaction.reply({ embeds: [embed] });
  },
};
