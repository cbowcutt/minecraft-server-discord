const { default: Axios } = require('axios');
const config = JSON.parse(require('fs').readFileSync('./discord.config.json').toString());
// const Discord = require('discord.js');
const baseUri = 'https://discord.com/api/v6';
module.exports = {
    channel(_id) {
        return {
            id: _id,
            message(_content) {
                let _url = `${baseUri}/channels/${this.id}/messages`;
                console.log(_url);
                return Axios.request({method: "post", url: _url, data: {
                    content: _content,
                    
                }})
            }
        }
    },
    notifyPlayerHasJoined(player) {
        Axios.request({url: process.env.MINECRAFT_DISCORD_WEBHOOK_URL, data: { content: `:pick: :pick: :pick: \n${player} has started crafting`}, method: 'post'}).then(r => response = r)

    },

    notifyPlayerHasLeft(player) {
        Axios.request({url: config.MINECRAFT_DISCORD_WEBHOOK_URL, data: { content: `:wave: :wave: :wave: \n ${player} has stopped crafting` }, method: 'post'}).then(r => response = r)

    }
}