
const fs = require("fs");
const chalk = require("chalk")

global.BOT_TOKEN = "7738806686:AAFggzjKB5xEcOq_Tq2Nsp4jx9hwE68rDd8" // create bot here https://t.me/Botfather and get bot token
global.BOT_NAME = "𝐎𝐖𝐀𝐒𝐄𝐓 𝐂𝐑𝐀𝐒𝐇" //your bot name
global.OWNER_NAME = "https://t.me/owaset_cr" //your name with sign @
global.OWNER = ["https://t.me/owaset", "https://t.me/owaset"] // Make sure the username is correct so that the special owner features can be used.
global.DEVELOPER = ["7224688457"] //developer telegram id to operate addprem delprem and listprem
global.pp = 'https://pin.it/5W3wbURdm' //your bot pp


//approval
global.GROUP_ID = -1007224688457; // Replace with your group ID
global.CHANNEL_ID =  -1007224688457; // Replace with your channel ID
global.GROUP_LINK = "https://t.me/owaset_cra"; // Replace with your group link
global.CHANNEL_INVITE_LINK = "https://t.me/owaset_cra"; // Replace with your private channel invite link
global.WHATSAPP_LINK = "https://wa.me/201213773805"; // Replace with your group link
global.YOUTUBE_LINK = "https://youtube.com/@plus_owaset"; // Replace with your youtube link
global.INSTAGRAM_LINK = "https://whatsapp.com/channel/0029iH7R4E35"; // Replace with your ig link

global.owner = global.owner = ['+201213773805'] //owner whatsapp

const {
   english
} = require("./lib");
global.language = english
global.lang = language

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})