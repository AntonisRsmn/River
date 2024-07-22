const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("unban")
  .setDescription("Unban a member from the guild.")
  .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
  .addStringOption(option =>
      option.setName("userid")
      .setDescription("Discord ID of the user you want to unban.")
      .setRequired(true)
  )

    .toJSON(),
  userPermissions: [PermissionFlagsBits.BanMembers],
  botPermissions: [PermissionFlagsBits.BanMembers],

  run: async (client, interaction) => {
    const { options } = interaction;

    const userId = options.getString("userid");

    try {

        await interaction.guild.members.unban(userId);

        const embed = new EmbedBuilder()
            .setTitle("UnBanned Succesfully")
            .addFields(
                { name: "Member's ID: ", value: `${userId}` },
            )
            .setColor("#FFFFFE")
            .setFooter({
                text: `By ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL(),
            })
            .setTimestamp();

        return interaction.reply({ embeds: [embed], ephemeral: true });

    } catch (error) {
        const errEmbed = new EmbedBuilder()
            .setDescription("Please provide a valid member's ID.")
            .setColor("#FF0000");

        return interaction.reply({ embeds: [errEmbed], ephemeral: true });
    }
  },
};