const { div, table, tr, th, td, tbody, thead } = require('elementx');

module.exports = function Widget(companyName, jobs, averageSalary) {

    let myTable = div({ class: 'Widget' },
        table({ border: 1 },
            thead(
                tr(
                    th({ colspan: 2}, 'Company: ' + companyName)
                ),
                tr(
                    th({ colspan: 2}, 'Average salary is: ' + averageSalary)
                ),
                tr(
                    th('Title'),
                    th('City')
                )  
            ),
            tbody(
                jobs.map(key => {                
                   return tr(
                        td(key.title),
                        td(key.city)
                    )
                }) 
            )
        )
    );
    return myTable;
}
