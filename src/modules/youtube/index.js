const ytdl = require("ytdl-core");

module.exports = async (url) => {
  const info = await ytdl.getInfo(url);
  const format = info.formats.find((x) => x.audioCodec && x.videoCodec);
  if (!format) {
    throw "No format found for youtube video";
  }
  console.log("format.url", format);
  return format.url;
};
