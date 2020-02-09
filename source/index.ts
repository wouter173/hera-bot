import { Client, help } from 'pixal';
import { config } from './config';
import { ping } from './commands/ping';

const client = new Client(process.env.token!, config!); 
client.setPresence({ status: 'online', type: 'WATCHING', name: 'Hera' });
client.addCommands([new help(), new ping()]);
