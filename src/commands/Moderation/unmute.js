<<<<<<< HEAD
const { Client, SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("unmute")
  .setDescription("Unmute a member from the guild.")
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
  .addUserOption(option => 
      option.setName("target")
          .setDescription("member to be unmute.")
          .setRequired(true)
  ),
=======
const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require("discord.js");
const ms = require("ms");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("unmute")
    .setDescription("Unmute a member from the guild.")
    .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
    .addUserOption((option) =>
      option
        .setName("target")
        .setDescription("member to be unmute.")
        .setRequired(true)
    )

    .toJSON(),
  userPermissions: [PermissionFlagsBits.ModerateMembers],
  botPermissions: [PermissionFlagsBits.BanMembers],
>>>>>>> 681dba4d3042040a22577064ac039d00214cc7f0

  run: async (client, interaction) => {
    const { guild, options } = interaction;

<<<<<<< HEAD
        const user = options.getUser("target");
        const member = guild.members.cache.get(user.id);

        const errEmbed = new EmbedBuilder()
            .setDescription("Something went wrong")
            .setColor(0xfffffe)

        const embed = new EmbedBuilder()
            .setTitle("**Unmuted**")
            .setDescription(`Succesfully Unuted ${user}.`)
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
  },
};
=======
    const user = options.getUser("target");
    const member = guild.members.cache.get(user.id);

    const errEmbed = new EmbedBuilder()
      .setDescription("Something went wrong")
      .setColor(0xfffffe);

    const embed = new EmbedBuilder()
      .setTitle("**Unmuted**")
      .setDescription(`Succesfully Unuted ${user}.`)
      .setColor(0xfffffe)
      .setTimestamp();

    if (
      member.roles.highest.position >= interaction.member.roles.highest.position
    )
      return interaction.reply({ embeds: [errEmbed], ephemeral: true });

    try {
      await member.timeout(null);

      return interaction.reply({ embeds: [embed], ephemeral: true });
    } catch (err) {
      console.log(err);
    }
  },
};
>>>>>>> 681dba4d3042040a22577064ac039d00214cc7f0
