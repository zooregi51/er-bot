import { MessageEmbed } from 'discord.js';
import { IEmbedMessage } from './embedmessage.interface';
import { ICommand } from './command.interface';

export class EmbedMsg implements IEmbedMessage {
  constructor(private cmd: ICommand) {}

  blue = '#0099ff';

  async MakeEmbedMessage(userName: string): Promise<MessageEmbed> {
    const embedMsg = new MessageEmbed().setColor(this.blue).setTitle(userName);
    const userNum = await this.cmd.getUserNum(userName);
    const userStats = await this.cmd.getUserStats(userNum, 5);

    return embedMsg;
  }
}

const embedMsg = new MessageEmbed()
  .setColor('#0099ff')
  .setTitle('샘플 메시지에용')
  .setURL('https://velog.io')
  .setAuthor('Binary Yoon')
  .setThumbnail('썸네일')
  .addField('이 둘은', '필드 내용')
  .addField('다른 라인에', '필드 내용')
  .addField('요 둘은', '필드 내용', true)
  .addField('같은 라인에', '필드 내용', true)
  .setImage('이미지');
