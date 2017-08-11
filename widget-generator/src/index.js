const OnlineJobBoardPageScraper = require('./scrapers/OnlineJobBoardPageScraper');
// const scraper = new OnlineJobBoardPageScraper();
// console.log(onlineboard.scrape("http://localhost:5000/sources/front-end-web-developer.htm"))

  addEventListener('DOMContentLoaded', main);

function main() {

  document.getElementById("myBtn").addEventListener("click", function(e){
      console.log('here!!')
      e.preventDefault();
      const passUrl = document.getElementById("myUrl").value;
      console.log(passUrl)
      const scraper = new OnlineJobBoardPageScraper();
      scraper.scrape(passUrl, '#root');
  });

  // const scraper = new OnlineJobBoardPageScraper();
  // scraper.scrape('http://localhost:5000/sources/front-end-web-developer.htm', '#root');

  // scraper.scrape('http://localhost:5000/sources/junior-front-end-web-developer.htm', '#root');
  
  // scraper.scrape('http://localhost:5000/sources/junior-front-end-web-developer.htm', '#root');
  
  // const $root = document.querySelector('#root');
  // const $app = null; // <== dynamically generated DOM element goes here
  // $root.appendChild($app);
}

