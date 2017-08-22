  const { div, p, h1, h2, ul, li, table, tr, th, td } = require('elementx');
  // const buildHtml = require('./builder.js');

module.exports = class OnlineJobBoardPageScraper {
  scrape(url, targetDiv='#root') {
    fetch(url)
    .then(response => {
      return response.text();
    })
    .then(afterResponse => {
        // Extract info from the page
        // console.log('afterResponse', afterResponse);
        const content = this.extract(afterResponse);
        // console.log('content', content);
        // console.log('hi')
        // Create the HTML with elementx
        const widget = this.buildHtml(content);
        // console.log('widget', widget);

        // this code needs to be moved
        const target = document.querySelector(targetDiv);
        target.appendChild(widget);
      })
    .catch(err => err);
  };

  extract(html) {
    // content extraction
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    // returns a HTMLDocument, which also is a Document.

    const pageTitle = doc.title;
    // console.log('pageTitle', pageTitle);
    // This is supposed to get the links, but it doesn't work perfectly
    const jobTitleHtml = doc.querySelector('.jobtitle');
    // console.log('jobTitleHtml', jobTitleHtml);

    const companyInformation = doc.querySelector('.jobtitle ~ div.sjcl');
    const companyCity = companyInformation.querySelector('.location').innerText;
    const companyName = doc.querySelector('.company a').innerText
    // console.log('companyInformation', companyInformation);
    // console.log('companyCity', companyCity);
    
    const contentObject = {
      title: doc.title.split('|')[0],
      description: 'A widget of jobs',
      job: jobTitleHtml.innerText, // strip out any HTML by using innerHTML
      city: companyCity,
      companyName
    };
    // console.log('contentObject', contentObject)
    return contentObject;
  }

// document.querySelector('.entity-icon-react img').src -- returns:
// "https://logo.clearbit.com/www.adobe.com"


  //  something like this in index.js

  // onlineBoardscraper.scrape().then(resultObj => {
  //   buildHTML(resultObj)
  //   paysaScraper.scrape(resultObj.companyName)
  // })



  buildHtml(obj) {
    // Create a list of job titles
    // console.log('obj', obj);
    // console.log('obj.jobs', obj.jobs);
    // console.log('obj.jobs', obj.jobs);
    // console.log('obj.jobs[0]', obj.jobs[0]);
    // console.log('obj.jobs[0].innerText', obj.jobs[0].innerText);
    
    const jobTitle = li(`${obj.job} - ${obj.city}`);

    // obj.jobs.forEach(job => {
    //   // Push elementx `<li>` elements into the `jobListItems`
    //   jobListItems.push(li(job.innerText));

  // Build the HTML
  const htmlData = table({ style:"width:100%"},
    tr(
      th('Average salary is: ', obj.averageSalary
      )
    ),
    tr(
      td(obj.title, 'Job titles'
      ),
      td(obj.city, 'City'
      ),
      td(obj.salary, 'Salary'
      )
    )
  )
    // Build the HTML -- original code
    // const htmlData = div({ class: 'widget' },
    //   h1(obj.title),
    //   div(obj.description),
    //   div(obj.companyName),
    //   ul(
    //     jobTitle // The list of job titles
    //     )
    //   );

    // return htmlData;

  }
}