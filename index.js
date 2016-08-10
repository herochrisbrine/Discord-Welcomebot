let config = require("./config.json");
let Eris = require("eris");
let c = new Eris.Client(config.token);

c.on("guildMemberAdd", (guild, member) => {
    c.createMessage(guild.defaultChannel.id, `Welcome to the server, ${member.user.mention}!`);
})

c.connect();
