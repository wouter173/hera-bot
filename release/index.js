"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pixal_1 = require("pixal");
var config_1 = require("./config");
var ping_1 = require("./commands/ping");
var client = new pixal_1.Client(process.env.token, config_1.config);
client.setPresence({ status: 'online', type: 'WATCHING', name: 'Hera' });
client.addCommands([new pixal_1.help(), new ping_1.ping()]);
