const axios = require("axios");
const rp = require("request-promise");
const cheerio = require("cheerio");
const { html } = require("cheerio/lib/static");

const getContent = async (text) => {
  const options = {
    uri: `https://www.google.com/search?q=${text}&sxsrf=ALeKk01B9ITIMtiEuQTIFPrBEZ7dZbV7AQ:1621821855541&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiBgNqcneHwAhVVeX0KHWceDbcQ_AUoAXoECAIQAw&biw=1680&bih=914`,
    transform: function (body) {
      //Khi lấy dữ liệu từ trang thành công nó sẽ tự động parse DOM
      return cheerio.load(body);
    },
  };
  var $ = await rp(options);
  const list = [];
  const imgList = $("img");
  for (let i = 0; i < imgList.length; ++i) {
    const src = $(imgList[i]).attr("src");
    console.log("src", src);
    if (src.search("http") !== -1) {
      list.push();
    }
  }
  console.log(list);
  return list;
};

module.exports = { getContent };
