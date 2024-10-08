const { Client, SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("add-role")
  .setDescription("Add a role to a member.")
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
  .addUserOption(option =>
      option.setName("target")
      .setDescription("User to add the role.")
      .setRequired(true)
  )
  .addRoleOption(option =>
      option.setName("role")
      .setDescription("Role to add to the member.")
      .setRequired(true)
  )

  .toJSON(),
  userPermissions: [PermissionFlagsBits.Administrator],
  botPermissions: [PermissionFlagsBits.BanMembers],

  run: async (client, interaction) => {
    const user = interaction.options.getUser("target");
        const role = interaction.options.getRole("role");
        const member = await interaction.guild.members.fetch(user.id);

        if (member.roles.cache.has(role.id)) {
            const embed = new EmbedBuilder()
            .setColor("fffffe")
            .setDescription(`User ${user} already has the role ${role}.`)
            .setFooter({
                text: `By ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL(),
              })
            .setTimestamp()
            await interaction.reply({ embeds: [embed], ephemeral: true })
            return;
        }

        try {
            await interaction.guild.members.cache.get(user.id).roles.add(role)
            const embed = new EmbedBuilder()
            .setColor("fffffe")
            .setDescription(`Succesfully added role ${role} to ${user}.`)
            .setFooter({
                text: `By ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL(),
              })
            .setTimestamp()

            await interaction.reply({ embeds: [embed], ephemeral: true })
        } catch (error) {
            console.error(error)
            const embed = new EmbedBuilder()
            .setColor("fffffe")
            .setFooter({
                text: `By ${interaction.user.username}`,
                iconURL: interaction.user.displayAvatarURL(),
              })
            .setTimestamp()
            .setDescription(`Faild to add role ${role} to user ${user}.`)

    return interaction.reply({ embeds: [embed] });

    }
  },
};
