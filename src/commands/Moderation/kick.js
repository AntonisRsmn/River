const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kick a member from the guild.")
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers)
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("member to be kicked.")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option.setName("reason").setDescription("Reason for the kick.")
    )

    .toJSON(),
  userPermissions: [PermissionFlagsBits.KickMembers],
  botPermissions: [PermissionFlagsBits.KickMembers],

  run: async (client, interaction) => {
    const { channel, options } = interaction;

    const user = options.getUser("target");
    const reason = options.getString("reason") || "No reason provided";

    const member = await interaction.guild.members.fetch(user.id);

    const errEmbed = new EmbedBuilder()
      .setDescription(`You can't take action on ${user.username} since they have similar or higher role.`)
      .setColor("#FF0000");

    if (
      member.roles.highest.position >= interaction.member.roles.highest.position
    )
      return interaction.reply({ embeds: [errEmbed], ephemeral: true });

    await member.kick({ reason });

    const embed = new EmbedBuilder()
      .setTitle("Kicked Succesfully")
      .addFields(
        { name: "Member: ", value: `${user}`},
        { name: "Member's ID: ", value: `${user.id}` },
        { name: "Reason: ", value: `${reason}` },
      )
      .setColor("#FFFFFE")
      .setFooter({
         text: `By ${interaction.user.username}`,
         iconURL: interaction.user.displayAvatarURL(),
       })
      .setTimestamp();

    return interaction.reply({ embeds: [embed], ephemeral: true });
  },
};