let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes !*`, m)
        global.db.data.users[m.sender].money = 9999999999
        global.db.data.users[m.sender].limit = 9999999999
        global.db.data.users[m.sender].level = 9999999999
        global.db.data.users[m.sender].exp = 9999999999
}
handler.help = ['cheat']
handler.tags = ['game']
handler.command = /^(cheat)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

module.exports = handler
