// const { div, p, h1, h2, ul, li } = require('elementx');

// module.exports = class OnlineJobBoardPageScraper {
//   constructor() { }

//   scrape(url, targetDiv='#root') {
//     fetch(url)
//       .then(response => {
//         return response.text();
//       })
//       .then(afterResponse => {
//         // Extract info from the page
//         const content = this.extract(afterResponse);
//         // console.log('hi')
//         // Create the HTML with elementx
//         const widget = this.buildHtml(content);

//         console.log('widget', widget);

//         const target = document.querySelector(targetDiv);
//         target.appendChild(widget);
//       })
//       .catch(err => err);
//   };

//   extract(html) {
//     // content extraction
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(html, "text/html");
//     // returns a HTMLDocument, which also is a Document.

//     const pageTitle = doc.title;
//     // This is supposed to get the links, but it doesn't work perfectly
//     const jobtitles = doc.querySelectorAll('[data-tn-element]');

//     const contentObject = {
//       title: doc.title.split('|')[0],
//       description: 'A widget of jobs',
//       jobs: jobtitles
//     };
// console.log(contentObject)
//     return contentObject;
//   }

//   buildHtml(obj) {
//     console.log('obj', obj);
//     console.log('obj.jobs', obj.jobs);
//     console.log('obj.jobs[0]', obj.jobs[0]);

// console.log('obj.jobs[0].innerText', obj.jobs[0].innerText);
//     // Create a list of job titles
//     const jobTitle = li(obj.innerText);
//     // obj.jobs.forEach(job => {
//     //   // Push elementx `<li>` elements into the `jobListItems`
//     //   jobListItems.push(li(job.innerText));
  

//     // Build the HTML
//     const htmlData = div({ class: 'widget' },
//       h1(obj.title),
//       div(obj.description),
//       ul(
//         jobTitle // The list of job titles
//       )
//     );
//     return(htmlData);
//     }
//   }

  const { div, p, h1, h2, ul, li } = require('elementx');

module.exports = class OnlineJobBoardPageScraper {
  constructor() { }

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
    // console.log('companyInformation', companyInformation);
    // console.log('companyCity', companyCity);
    const contentObject = {
      title: doc.title.split('|')[0],
      description: 'A widget of jobs',
      job: jobTitleHtml.innerText, // strip out any HTML by using innerHTML
      city: companyCity
    };
    // console.log('contentObject', contentObject)
    return contentObject;
  }

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
    const htmlData = div({ class: 'widget' },
      h1(obj.title),
      div(obj.description),
      ul(
        jobTitle // The list of job titles
        )
      );

    return htmlData;

  }
}