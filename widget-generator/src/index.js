const OnlineJobBoardPageScraper = require('./scrapers/OnlineJobBoardPageScraper');
// const scraper = new OnlineJobBoardPageScraper();
// console.log(onlineboard.scrape("http://localhost:5000/sources/front-end-web-developer.htm"))

addEventListener('DOMContentLoaded', main);

function main() {
  const scraper = new OnlineJobBoardPageScraper();
  scraper.scrape('http://localhost:5000/sources/front-end-web-developer.htm', '#root');

  // const $root = document.querySelector('#root');
  // const $app = null; // <== Your dynamically generated DOM element goes here
  // $root.appendChild($app);
}

