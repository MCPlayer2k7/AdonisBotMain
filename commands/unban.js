exports.run = (guild, message, args) => {
  const reason = args.slice(1).join(' ');
  guild.unbanReason = reason;
  guild.unbanAuth = message.author;
  const user = args[0];
  const modlog = guild.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (reason.length < 1) return message.reply('You must supply a reason for the unban.');
  if (!user) return message.reply('You must supply a User Resolvable, such as a user id.').catch(console.error);
  message.guild.unban(user);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'Unbans the user.',
  usage: 'unban [mention] [reason]'
};
