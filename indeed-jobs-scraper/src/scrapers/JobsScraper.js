module.exports = class JobsScraper {
  scrape(url) {
    return fetch(url)
      .then(response => response.text())
      .then(html => {
        let jobs = [];
        // DOM PARSING AND SCRAPING HERE
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        let result = doc.querySelectorAll('.result')
        for (let i = 0; i < result.length; i++) {
          let x = result[i];
          let jobTitle = x.querySelector('.jobtitle').innerText;
          let companyCity = x.querySelector('.location').innerText;
          let job = {
            title: jobTitle,
            city: companyCity
          }
          jobs.push(job);
        }
        return jobs        
      }
    )
  }
}

