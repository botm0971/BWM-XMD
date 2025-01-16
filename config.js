const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW4+qOhj9L33V2SIXEZNJTkVUxLt4PdkPBQoUpGApqEz87zvMJTM5yZ7MeWt6Wd/qWuv7XgBNSY4tfAe9F5AxUiKO6yW/Zxj0QL/wfcxAE3iII9AD1sJXdu3hYn0r9u3tYtOhfXaOG2I55fdjN9339ZZxjBTFEbfP4NEEWeGcifsN4G7sBIYjblRfwCs+WwatSDS6t0kbcbEceefFTd+XR01cn7vP4FEjIsIIDYwsxAlm6Gzh+xIR9jP6d33TbocymeaCGIbz5NK40nJOT33MlNt4jZbEmumuOAmk9Gf0073LzrBYw0OWiNV5atLKWOWXbU66k7I4Lr32hkseGt1uqzf6OQko9kwPU074/ce6ywPXThaNU9bvTgfL5VZPTl27kLFcJrt0oxR5l6naciIP4tnPiOfyegwpxsJSPW1H6X2/Q160n8ZyJutKxM1EPKxPEbp2ou5X4kv2kZX4/+gem7bARHprVVkQyP1pmkj2VkmdbeuWz4wq1og/PDriCY9/qHtoj41qaln3W2qMFSSUu1lDX0+k3XDXQZZUefd47layI0X5J33EC/Ydy9K2K0eQoJB19zN5frcDeHASIZ03DMVWJBXGPjbS68nqQPuwJZM1XcDBObqmwy0saHQI1TiepofKXJXmLI1OAd+3Btfn1x/F+G56oNd+NAHDAck5Q5yktN4TpU4TIK/cYJdh/iov8KN5KiuGFp2MHO7Gg8txql0mw7SVNS7VZmzZxzEqumZC/PgZNEHGUhfnOfbGJOcpu89wnqMA56D37+8moPjG34yry0ntJvAJy/mWFtk5Rd6Hqx+HyHXTgvLNnbp6vcAM9ITPbcw5oUFe61hQxNyQlFgPEc9Bz0fnHD+awMMlcXGNByYuzIZBHth4JCB89IThlC1gTTlM6dsVv+N7voc6T56K0ZPsYu/JwYL0pDkq1iQkSKKigSYg7z1Tv/mrhZCJraVq+hcdtS/t+cSy1VNhDaLovS/etMcMe6DHWYGbwEFuXGR2GmP6De7seirie1kuDkYc+GwgUWsd241jpw+/4L55Cnovn3NKT70azzqJs81gpoAmSF4jSOqfa7IqalJHkIRuT/sn/3WtZURZ9otiXqO+S17f9zBH5JyDHtDNQyloxsAwnSybXkcjaARQD2pNPyz6yPpblipSdjQ5rmjQxzejJbeiMvRZ/1KJQ2zA+aqAcKyONkXfeM3Sf0FAD2R9z8XeRUUJR4dVGPpqi3X2hVg1JjsX7je2ySdHx1G4Od857VEnyZXTohJaRdDF+4vewIKnTlOKlhMWrY54oFsR1OFzXe0tKl+LxcgwI2MN+fi6CNXFpqUJ3QXchJ7v+vCmIc/cEuXQUU3q6noL+dvFBeON3DhuKS3QeNcyLv2bMyZLKEwrq8JiVQ7hexe+ToHz+/Qlr/3x8h4sn+DXYUZRbdD31nxNuPBofkF4H45/SVHflVmjxJOZIsNDvl42lrIqHzpXlGvhIYSD7TSA/cYtZsF6Ah6P302QnRH3U5aAHkDUYynxQBOcUc7hZ5PaJME5R0kGem1VUgVZacvtxx9qigOU2gcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

