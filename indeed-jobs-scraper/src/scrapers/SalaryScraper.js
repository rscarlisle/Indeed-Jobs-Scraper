module.exports = class SalaryScraper {
  scrape(url) {
    return fetch(url)
      .then(response => response.text())
      .then(html => {
        // DOM PARSING AND SCRAPING HERE
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        let averageSalary = doc.getElementsByClassName('cmp-sal-salary');
        averageSalary = averageSalary[0].innerText
        return averageSalary;
        }
      )
      .catch(err => {
        alert('catch error msg: ' + err)
      });
}
}
