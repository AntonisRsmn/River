const { Client, SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("remove-timeout")
  .setDescription("Remove timeout from a member of the guild.")
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
  .addUserOption(option => 
      option.setName("target")
          .setDescription("member to remove the timeout.")
          .setRequired(true)
  ),

  run: async (client, interaction) => {
    const { guild, options } = interaction;

        const user = options.getUser("target");
        const member = guild.members.cache.get(user.id);

        const errEmbed = new EmbedBuilder()
            .setDescription("Something went wrong")
            .setColor(0xfffffe)

        const embed = new EmbedBuilder()
            .setTitle("**Timeout**")
            .setDescription(`timeout removed succesfully from ${user}.`)
            .setColor(0xfffffe)
            .setTimestamp();

        if (member.roles.highest.position >= interaction.member.roles.highest.position)
            return interaction.reply({ embeds: [errEmbed], ephemeral: true});

        try {
            await member.timeout(null);

            return interaction.reply({ embeds: [embed], ephemeral: true});
        } catch (err) {
            console.log(err);
        }

    return interaction.reply({ embeds: [embed] });
  },
};
