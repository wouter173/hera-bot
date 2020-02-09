import { Command, Embed } from 'pixal';
import { Message } from 'discord.js';
import { config } from '../config';

export class ping extends Command {
	constructor() {
		super('ping', 'Get the ping of the bot!', 'ping');
	}

	async run(msg: Message) {
		const ping_message: Message = await msg.channel.send(new Embed('Ping', 'Ping?', config.main_color!, msg.author)) as Message;
  	ping_message.edit(new Embed('Ping', `Pong! ${ping_message.createdTimestamp - msg.createdTimestamp}ms`, config.main_color!, msg.author));
	}
}