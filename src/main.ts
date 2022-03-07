import * as Discord from 'discord.js';
import dotenv from 'dotenv';
import { Command } from './service/command';
import { EmbedMsg } from './service/embedmessage';

dotenv.config();

export class DiscordBot {
  client = new Discord.Client();
  cmd = new Command();
  EmbedMsg = new EmbedMsg(this.cmd);

  prefix = '!';

  bot() {
    this.client.login(process.env.BOT_TOKEN);
    this.client.on('ready', () => {
      console.log('Bot is online');
    });
    this.client.on('message', async (message) => {
      if (message.content.startsWith(this.prefix)) {
        const msgArr = message.content.substring(this.prefix.length).split(' ');
        const requestCommand = msgArr[0];
        const userName = msgArr[1];

        switch (requestCommand) {
          case '프로필':
            const userNum = this.cmd.getUserNum(userName);
            this.cmd.getUserStats(await userNum, 5);
            break;
        }
      }
    });
  }
}

const dsbot = new DiscordBot();
dsbot.bot();
