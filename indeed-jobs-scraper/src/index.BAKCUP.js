const OnlineJobBoardPageScraper = require('./scrapers/OnlineJobBoardPageScraper');
const scraper = new OnlineJobBoardPageScraper();
const JobTitleScraper = require('./scrapers/JobTitleScraper');
const titleScraper = new JobTitleScraper();
const JobSalaryScraper = require('./scrapers/JobSalaryScraper');
const salaryScraper = new JobSalaryScraper();

addEventListener('DOMContentLoaded', main);

function main() {
  document.getElementById("myBtn").addEventListener("click", function(e){
      // console.log('here!!');
      e.preventDefault();
      const passCompanyName = document.getElementById("company-name").value;
      const passJobTitle = document.getElementById("job-title").value;
      const passCity = document.getElementById("city-region").value;
      // console.log(passUrl);
      scraper.scrape(passUrl, '#root');
  })
}

