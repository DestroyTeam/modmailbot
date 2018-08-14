const Eris = require('eris');
const config = require('./config');

const bot = new Eris.CommandClient(config.token, {}, {
  prefix: config.prefix,
  ignoreSelf: true,
  ignoreBots: true,
  defaultHelpCommand: false,
  getAllUsers: true,
  defaultCommandOptions: {
    caseInsensitive: true,
  },
});

bot.login("process.en.TOKEN")

module.exports = bot;
