const { div, form, h4, input, label, button } = require('elementx');

const Widget = require('./components/Widget');
const JobsScraper = require('./scrapers/JobsScraper');
const SalaryScraper = require('./scrapers/SalaryScraper');

addEventListener('DOMContentLoaded', loader);

const jobsScraper = new JobsScraper();
const salaryScraper = new SalaryScraper();

function generateIndeedUrl(companyName, jobTitle, location) {
  return encodeURI(`https://www.indeed.com/jobs?as_ttl=${jobTitle}&as_cmp=${companyName}&radius=25&l=${location}&sr=directhire`);
}

function generateIndeedSalaryUrl(companyName, jobTitle, location) {
return encodeURI(`https://www.indeed.com/salaries/${jobTitle}-Salaries,-${location}-CA`);
}

function loader() {
  const myForm = div({class: "container"},
    form({name: "widgetForm"},
      h4("Company Name: "),
      input({ id: "company-name", type:"text", placeholder:"company", value:'Adobe'}),
      h4("Job Title: "),
      input({ id:"job-title", type:"text", paceholder: "jobs", value:'software engineer'}),
      h4("City/Region: "),
      input({ id:"city-region", type:"text", placeholder:"city", value:'San Francisco'}),          
      label("Submit: "),
      button({ id:"myBtn", type:"submit", value:"Submit"}, "Submit")
    )
  )

  document.body.appendChild(myForm);
  document.getElementById('myBtn').addEventListener('click', event => {
  event.preventDefault();
  let inputCompany = document.getElementById('company-name').value;
  let inputJobTitle = document.getElementById('job-title').value;
  let inputCity = document.getElementById('city-region').value;  

  if (input.value === '') {
    return Materialize.toast('Enter company name', 2000);
  }
  inputJobTitle = inputJobTitle.trim()
  inputCity = inputCity.trim()
  main(inputCompany, inputJobTitle, inputCity);
  })  
}

function main(inputCompany, inputJobTitle, inputCity) {
  const $root = document.getElementById('root');
  const companyName = inputCompany;
  const jobTitle = inputJobTitle;
  const location = inputCity;

  // CALL SCRAPERS
  const indeedUrl = generateIndeedUrl(companyName, jobTitle, location);
  const indeedUrlViaProxy = `http://cors-bypass-proxy.axiomlogic.com/${indeedUrl}`;

  const generateIndeedSalaryToUrl = generateIndeedSalaryUrl(companyName, jobTitle, location);
  const indeedSalaryUrlViaProxy = `http://cors-bypass-proxy.axiomlogic.com/${generateIndeedSalaryToUrl}`;
 
  Promise.all([jobsScraper.scrape(indeedUrlViaProxy), salaryScraper.scrape(indeedSalaryUrlViaProxy)]).then(result => {
   $root.appendChild(Widget(companyName, result[0], result[1]));
  })  
};
