import { MessageEmbed } from 'discord.js';

export interface IEmbedMessage {
  MakeEmbedMessage(userName: string): Promise<MessageEmbed>;
}
