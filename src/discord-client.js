const { default: Axios } = require('axios');
const config = JSON.parse(require('fs').readFileSync('./discord.config.json').toString());
// const Discord = require('discord.js');
const baseUri = 'https://discord.com/api/v6';
module.exports = {
    token() {
        let _url = `${baseUri}/oauth2/token`;
        console.log(_url);
        Axios.request({method: "post", url: _url, params: {
            client_id: config.client_id,
            client_secret: config.client_secret,
            grant_type: 'authorization_code',
            redirect_uri: 'http://minecraft.hamsternet.net/oauth2/token',
            scope: 'webhook.incoming'
        }}).then(res => console.log(res)).catch(error => console.log(error))
    },
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
        Axios.request({url: config.webhook_url, data: { content: `${player} has started crafting :pick:`}, method: 'post'}).then(r => response = r)

    }
}