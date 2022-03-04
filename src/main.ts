import * as Discord from 'discord.js';
import dotenv from 'dotenv';
import * as command from './service/command';

dotenv.config();

class Main {
  client = new Discord.Client();
  cmd = new command.Command();
  prefix = '!';

  main() {
    this.client.login(process.env.BOT_TOKEN);
    this.client.on('ready', () => {
      console.log('Bot is online');
    });
    this.client.on('message', (message) => {
      if (message.content.startsWith(this.prefix)) {
        const msgArr = message.content.substring(this.prefix.length).split(' ');
        const request = msgArr[0];
        const userName = msgArr[1];

        switch (request) {
          case '프로필':
            this.cmd.getUserNum(userName);
            break;
        }
      }
    });
  }
}

const main = new Main();
main.main();
