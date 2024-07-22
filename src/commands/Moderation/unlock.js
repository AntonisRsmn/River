const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, ChannelType } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("unlock")
  .setDescription("Unlock a given channel.")
  .setDefaultMemberPermissions(PermissionFlagsBits.ManageChannels)
  .addChannelOption(option =>
      option.setName("channel")
      .setDescription("The channel to unlock.")
      .addChannelTypes(ChannelType.GuildText)
      .setRequired(true)
  ),

  run: (client, interaction) => {
    const { guild, options } = interaction;

        const channel = options.getChannel("channel");

        const errEmbed = new EmbedBuilder()
        .setDescription(`The channel ***${channel}*** is already unlocked.`)
        .setColor("#FF0000")

        if (channel.permissionsFor(guild.id).has("SendMessages"))
        return interaction.reply({
            embeds: [errEmbed],
            ephemeral: true
        })

        channel.permissionOverwrites.create(interaction.guild.id, { SendMessages: null })

        const embed = new EmbedBuilder()
        .setDescription(`The channel ***${channel}*** has been unlocked`)
        .setColor("#FFFFFE")
        .setFooter({
            text: `By ${interaction.user.username}`,
            iconURL: interaction.user.displayAvatarURL(),
          })

    return interaction.reply({ embeds: [embed] });
  },
};