let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix, command }) => {
heum = await fetch(`https://api-alc.herokuapp.com/api/nsfw/yaoi?&apikey=ConfuMods`)
json = await heum.buffer()
conn.sendButtonImg(m.chat, json, '*Disfrutalo!!*', 'â¢ðð®ðð¸ð¼ð¶ð²ð¬ - ððð£', 'ðSIGUIENTEð', `${usedPrefix + command}`, m, false)}
handler.command = /^(yaoi)$/i
handler.admin = true
module.exports = handler
