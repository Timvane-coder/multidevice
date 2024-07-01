const { alpha, commands } = require("./plugins");
let config = require("../config");
const axios = require("axios");
const util  = require("util");
const { yta, ytv, ytsdl } = require("./ytdl");
const { runtime, clockString } = require("./runtime");
const {
  getBuffer,
  decodeJid,
  parseJid,
  parsedJid,
  getJson,
  isIgUrl,
  isUrl,
  validateQuality,
  fromMe,
  getUrl,
  qrcode,
  secondsToDHMS,
  formatBytes,
  sleep,
  AddMp3Meta,
  Bitly,
  isNumber,
  getRandom,
  toAudio,
  readQr,
  getLyrics,
  isAdmin,
} = require("./functions");
const {
  tiktokdl,
  twitter,
  photoleap,
  fbdown,
  igdl,
  stream2buffer,
  searchYT,
  downloadMp3,
  downloadMp4,
  TTS,
  TRT,
  getYTInfo,
} = require("./scrapper");
const { serialize, downloadMedia } = require("./serialize");
const Greetings = require("./Greetings");

async function weather(m, match) {
  const text = match;
  if (!text) return await m.reply("*_need a location_*");
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=tr`;
  try {
    const response = await axios(url);
    const json = response.data;
    if (response.status === 200)
      return await m.reply( `*climate of* ${text} is\n\n🌄 *ᴛᴇᴍᴘᴇʀᴀᴛᴜʀᴇ:-* ${json.main.temp_max}\n💖 *ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ:-* ${json.weather[0].description}\n☀ *ʜᴜᴍɪᴅɪᴛʏ:-* ${json.main.humidity}\n💨 *ᴡɪɴᴅ:-* ${json.wind.speed}m/s\n🎇 *ᴄʟᴏᴜᴅ:-* ${json.clouds.all}\n`);
  } catch(e) {
    console.log(e)
    return await m.reply("_*no data found for this location*_");
  }
}

async function IMDB(apiUrl, message, m) {
  try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      const ratings = Array.isArray(data.Ratings) ? data.Ratings : [];
      let mess = `📽️ *Title:* ${data.Title}\n🗓️ *Year:* ${data.Year}\n📛 *Rated:* ${data.Rated}\n📅 *Released:* ${data.Released}\n⏳ *Runtime:* ${data.Runtime}\n🎭 *Genre:* ${data.Genre}\n🎬 *Director:* ${data.Director}\n🎭 *Actors:* ${data.Actors}\n📝 *Plot:* ${data.Plot}\n🗣️ *Language:* ${data.Language}\n🌍 *Country:* ${data.Country}\n🏆 *Awards:* ${data.Awards}\n⭐ *Ratings:* ${ratings.map(rating => `${rating.Source}: ${rating.Value}`).join(', ')}\n💰 *BoxOffice:* ${data.BoxOffice}`;
      return await message.reply(mess);
  } catch (error) {
      console.error('Error:', error);
  }
}

const addSpace = (num, width) => {
  const numString = num.toString();
  const spacesToAdd = Math.max(0, width - numString.length);
  return ' '.repeat(spacesToAdd) + numString;
};

module.exports = {
  toAudio,
  IMDB,
  runtime,
  clockString,
  isPrivate: config.WORK_TYPE.toLowerCase() === "private",
  PREFIX:
  !config.HANDLERS || config.HANDLERS == "false" || config.HANDLERS == "null"
    ? ""
    : config.HANDLERS.includes("[") && config.HANDLERS.includes("]")
      ? config.HANDLERS[2]
      : config.HANDLERS.trim(),
  weather,
  Greetings,
  extractUrlsFromString: function extractUrlsFromString(text) {
    if (!text) return false;
    const regexp =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()'@:%_\+.~#?!&//=]*)/gi;
    let urls = text.match(regexp);
    if (urls) {
      return urls;
    } else {
      return false;
    }
  },
  isAdmin,
  serialize,
  getLyrics,
  errorHandler: errorHandler = (message, error) => {
    console.log("ERROR:", error);
    const text = util.format(error);
    if(config.ERR_REPORT){
      message.sendMessage('265990117051@s.whatsapp.net', text);
    }
    message.sendMessage(message.client.user.id, text);
  },
  readQr,
  downloadMedia,
  Function: alpha,
  alpha,
  commands,
  getBuffer,
  decodeJid,
  parseJid,
  parsedJid,
  getJson,
  isIgUrl,
  isUrl,
  getUrl,
  qrcode,
  secondsToDHMS,
  formatBytes,
  tiktokdl,
  twitter,
  photoleap,
  fbdown,
  igdl,
  stream2buffer,
  searchYT,
  downloadMp3,
  downloadMp4,
  TTS,
  TRT,
  getYTInfo,
  sleep,
  config,
  AddMp3Meta,
  Bitly,
  isNumber,
  getRandom,
  yta,
  ytv,
  addSpace,
  validateQuality,
  fromMe,
  ytsdl
};
