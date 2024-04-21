const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Latency of the bot.")

    .toJSON(),
    userPermissions: [PermissionFlagsBits.ManageMessages],
    botPermissions: [PermissionFlagsBits.Connect],

    run: (client, interaction) => {

        const embed = new EmbedBuilder()
        .setTitle("Ping")
        .setDescription(`${Math.round(client.ws.ping)}ms`)
        .setColor("#fffffe")
        .setFooter({ 
            text: `by ${interaction.user.username}`,
            iconURL: interaction.user.displayAvatarURL(), 
        })
        .setTimestamp();

        return interaction.reply({ embeds: [embed] });
    },
};