const Discord = require('discord.js');
const bot = new Discord.Client();
const RichEmbed = new Discord.RichEmbed();
var fs = require('fs');

// -->COMMANDS<--

bot.on('guildMemberAdd',member =>{
    member.send('**:fire: Krallığımızın Bir Üyesi Olmak İstermisin ? :fire:**\n **:gem: Sunucumuzda kesinlikle torpil vb. olmamaktadır. :gem:**\n **:trophy: Yetki Alımarımız Vardır :trophy:**\n **:first_place: Sunucumuza da özel level sistemi. :first_place:**\n **:call_me: Sunucumuza katılıp eğlencemize eşlik edebilirsiniz. :call_me:**\n **:mailbox: Sunucumuzun sınırsız davet linki: https://discord.gg/mYwAzsX\n **https://cdn.discordapp.com/attachments/465548811721244685/541441804155879444/giphy.gif**\n ');

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);

});


bot.on('guildMemberRemove', member=>{
    member.send('**:fire: Krallığımızın Bir Üyesi Olmak İstermisin ? :fire:**\n **:gem: Sunucumuzda kesinlikle torpil vb. olmamaktadır. :gem:**\n **:trophy: Yetki Alımarımız Vardır :trophy:**\n **:first_place: Sunucumuza da özel level sistemi. :first_place:**\n **:call_me: Sunucumuza katılıp eğlencemize eşlik edebilirsiniz. :call_me:**\n **:mailbox: Sunucumuzun sınırsız davet linki: https://discord.gg/mYwAzsX\n **https://cdn.discordapp.com/attachments/465548811721244685/541441804155879444/giphy.gif**\n ');

    //member.guild.defaultChannel.sendmessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);

   
});



bot.on('ready',()=> {
console.log('Mase');

});

bot.login(process.env.BOT_TOKEN);
