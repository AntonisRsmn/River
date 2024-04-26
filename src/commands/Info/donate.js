const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("donate")
    .setDescription("Support River by donating."),

  run: (client, interaction) => {
    const embed = new EmbedBuilder()
        .setTitle(`***Donate***`)
        .setColor("#fffffe")
        .setTimestamp()
        .setDescription("Consider [Donating](https://www.paypal.me/RusmanAntonios) to help me make River better for everyone Thanks.")
        .setFooter({
            text: `By ${interaction.user.username}`,
            iconURL: interaction.user.displayAvatarURL(),
          })

    return interaction.reply({ embeds: [embed] });
  },
};
