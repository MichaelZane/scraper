const axios = require('axios');
const express = require('express');
const cheerio = require('cheerio');
const PORT = 8000
const app = express();

const url = 'https://www.theguardian.com/us';

axios (url)
  .then(res => {
    const $ = cheerio.load(res.data);
    const articles = [];
    $('.fc-item__title').each((i, el) => {
      const title = $(el).text();
      const link = $(el).find('a').attr('href');
      const article = {
        title,
        link,

      };
      articles.push(article);
    });
    console.log(articles);
  })
  .catch(err => {
    console.log(err);
  })


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})

