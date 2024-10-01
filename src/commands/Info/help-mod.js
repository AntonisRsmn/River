const { SlashCommandBuilder, EmbedBuilder, ComponentType, ActionRowBuilder, StringSelectMenuBuilder, Client, Discord, } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help-mod")
    .setDescription("Get a list of all the Mod commands from Ryvex."),

  run: (client, interaction) => {

    const embed = new EmbedBuilder()
    .setTitle("Mod Commands")
    .setFields(
        { name: "/add-role", value: "Add a role to a member.", inline: true },
        { name: "/ban", value: "Ban a member from the guild.", inline: true },
        { name: "/clear", value: "clear up to 99 messages from a target or channel.", inline: true },
        { name: "/kick", value: "Kick a member from the guild.", inline: true },
        { name: "/lock", value: "Lock a given channel.", inline: true },
        { name: "/mute", value: "Mute a member from the guild.", inline: true },
        { name: "/remove-role", value: "Remove a role from a member.", inline: true },
        { name: "/remove-timeout", value: "Remove timeout from a member of the guild.", inline: true },
        { name: "/timeout", value: "Timeout a member from the guild.", inline: true },
        { name: "/unban", value: "Unban a member from the guild.", inline: true },
        { name: "/unlock", value: "Unlock a given channel.", inline: true },
        { name: "/unmute", value: "Unmute a member from the guild.", inline: true },
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
