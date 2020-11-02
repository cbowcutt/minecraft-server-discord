const { default: Axios } = require('axios');
const config = require('../discord.config.json');
let Axios = require('axios');
const baseUri = 'https://discord.com/api';
module.exports = {
    channel(_id) {
        return {
            id: _id,
            message(_content) {
                Axios.request({url: `${baseUri}/channels/${id}/messages`, data: {
                    content: _content
                }})
            }
        }

    }
}