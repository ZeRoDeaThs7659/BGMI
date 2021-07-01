var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "BATTLEGROUNDS MOBILE INDIA",
assets : {
large_image : "Image",
large_text : "BATTLEGROUNDS MOBILE INDIA" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "JOIN OUR SERVER" , url : "https://www.discord.gg/utcofficial"},{label : "YOUTUBE CHANNEL",url : "https://youtube.com/channel/UCldnelRyhKu0m0QtULBlfNQ"}]
}
})
})
client.login({ clientId : "860121441574977536" }).catch(console.error);
