  module.exports = function buildHtml(obj) {
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