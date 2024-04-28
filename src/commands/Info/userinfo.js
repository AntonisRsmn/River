const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user-info")
    .setDescription("Get information about a member.")
    .addUserOption(option =>
        option.setName("user")
        .setDescription("User to get info.")
        .setRequired(false)
        ),

  run: async (client, interaction) => {
      const { options } = interaction;
      const user = options.getUser("user") || interaction.user;
      const member = await interaction.guild.members.cache.get(user.id);
      const icon = member.displayAvatarURL();
      const nick = member.nickname || "None";
      
      const embed = new EmbedBuilder()
        .setColor(0xFFFFFE)
        .setThumbnail(icon)
        .addFields(
          { name: "Name: ", value: `${user.username}`, inline: false },
          { name: "Roles: ", value: `${member.roles.cache.map(r => r).join(` ` )}`, inline: false },
          { name: "Nickname: ", value: `${nick}`, inline: true },
          { name: "ID: ", value: `${user.id}`, inline: true },
          { name: "Joined Server: ", value: `<t:${parseInt(member.joinedAt / 1000)}:R>`, inline: true },
          { name: "Joined Discord: ", value: `<t:${parseInt(member.user.createdAt / 1000)}:R>`, inline: true },
        )
        .setFooter({
          text: `By ${interaction.user.username}`,
          iconURL: interaction.user.displayAvatarURL(),
        })
        .setTimestamp()

    return interaction.reply({ embeds: [embed] });
  },
};
