import * as Discord from 'discord.js';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const client = new Discord.Client();
const prefix = '!';

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
  console.log('Bot is online');
});

client.on('message', async (message: Discord.Message) => {
  if (message.content === '안녕' && !message.author.bot) {
    message.reply('안녕');
  }
});

client.on('message', async (message: Discord.Message) => {
  if (message.content.startsWith(prefix)) {
    const msgArr = message.content.substring(prefix.length).split(' ');
    const command = msgArr[0];

    switch (msgArr[0]) {
      case '닉네임':
        const userName = msgArr[1];
        const headers = {
          accept: 'application/json',
          'x-api-key': process.env.API_KEY!,
        };
        await axios
          .get(
            encodeURI(
              process.env.BASE_URL + '/v1/user/nickname?query=' + userName,
            ),
            {
              headers,
            },
          )
          .then(function (result) {
            console.log(result.data);
          })
          .catch(function (result) {
            console.log(result.data);
          });
    }
  }
});
