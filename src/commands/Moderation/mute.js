<<<<<<< HEAD
const { Client, SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require("discord.js");
=======
const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder } = require("discord.js");
>>>>>>> 681dba4d3042040a22577064ac039d00214cc7f0
const ms = require("ms");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("mute")
  .setDescription("Mute a member from the guild.")
  .setDefaultMemberPermissions(PermissionFlagsBits.ModerateMembers)
  .addUserOption(option => 
      option.setName("target")
          .setDescription("member to be mute.")
          .setRequired(true)
  )
  .addStringOption(option => 
      option.setName("time")
          .setDescription("How long should the mute last (Up to 27 days).")
          .setRequired(true)
  )
  .addStringOption(option => 
      option.setName("reason")
          .setDescription("Reason for the mute.")
<<<<<<< HEAD
  ),
=======
  )

    .toJSON(),
  userPermissions: [PermissionFlagsBits.ModerateMembers],
  botPermissions: [PermissionFlagsBits.BanMembers],
>>>>>>> 681dba4d3042040a22577064ac039d00214cc7f0

  run: async (client, interaction) => {
    const { guild, options } = interaction;

        const user = options.getUser("target");
        const member = guild.members.cache.get(user.id);
        const time = options.getString("time");
        const convertedTime = ms(time);
        const reason = options.getString("reason") || 'No reason provided';

        const errEmbed = new EmbedBuilder()
            .setDescription("Something went wrong")
            .setColor(0xfffffe)

        const embed = new EmbedBuilder()
            .setTitle("**Muted**")
            .setDescription(`Succesfully muted ${user}.`)
            .addFields(
                { name: "Reason", value: `${reason}`, inline: true },
                { name: "Duration", value: `${time}`, inline: true }
            )
            .setColor(0xfffffe)
            .setTimestamp();

        if (member.roles.highest.position >= interaction.member.roles.highest.position)
            return interaction.reply({ embeds: [errEmbed], ephemeral: true});

        if (!convertedTime)
            return interaction.reply({ embeds: [errEmbed], ephemeral: true});

<<<<<<< HEAD
=======
        if (convertedTime >= "27d")
            return interaction.reply({ embeds: [errEmbed], ephemeral: true});

>>>>>>> 681dba4d3042040a22577064ac039d00214cc7f0
        try {
            await member.timeout(convertedTime, reason);

            return interaction.reply({ embeds: [embed], ephemeral: true});
        } catch (err) {
            console.log(err);
        }
<<<<<<< HEAD

    return interaction.reply({ embeds: [embed] });
  },
};
=======
  },
};
>>>>>>> 681dba4d3042040a22577064ac039d00214cc7f0
