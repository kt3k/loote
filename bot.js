#! /usr/bin/env node

var irc = require('irc');

var botName = 'lootebot';
var botUserName = 'lootebot_';
var botRealName = 'lootebot IRC Bot';

var server = 'chat.freenode.net';
var channels = ['#kt3k_test', '#kt3k_hack'];

console.log('connecting to ' + server + ' ...');

var bot = new irc.Client(server, botName, {
  userName: botUserName,
  realName: botRealName,
  channels: channels,
});

bot.on('registered', function (message) {
  console.log('connected');
});

bot.on('message', function (nick, to, text, message) {
  if (nick != botName) {
    bot.say(to, nick + ' said "' + text + '"');
    console.log(nick);
    console.log(to);
    console.log(text);
  }
});
