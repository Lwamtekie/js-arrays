const assignments = [
    {
        title: 'product cards',
        topic: 'HTML/CSS'
        dueDate: '03/05/2019'
        notes: 'use flexbox'
        assignmentsurl: 'www.google.com'
    },
    {
        title: 'numbers',
        topic: 'JS'
        dueDate: '05/04/2019'
        notes: 'use flexbox'
        assignmentsurl: 'www.google.com'
    },
    {
        title: 'web',
        topic: 'Html/css'
        dueDate: '05/06/2019'
        notes: 'use flexbox'
        assignmentsurl: 'www.google.com'
    }
   {
        title: 'homework'
       topic: 'js'
       dueDate: '07/04/2019'
       notes: 'use flexbox'
       assignmentsurl: 'www.google.com'

    }
   {
        title: 'test'
    topic: 'js'
    dueDate: '08/05/2019'
    notes: 'use flexbox'
    assignmentsurl: 'www.google.com'






    }

];

// loop over dinosars 
// build up a domstring
// print domstring to the dom

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const buildDinosaurs = () => {
    let domstring = '';
    for (let i = 0; i < assignments.length; i++) {
        domstring += `<div class="assignments">`
        domstring += `<h3>${assignments[i].title}</h3>`;
        domstring += `<p>${assignments[i].name}</p>`
        domstring += `</div>`
    }
    printToDom('dino-barn', domstring)
};


const init = () => {
    buildAssignments();
};






const assignments = [
    {
        title: 'products cards',
        dueDate: '03/05/2019' 
      topic: 'HTML/CSS',
        notes: 'use flexbox',
        assignmentsurl: 'www.google.com',
    }
];
// total of assignments
// buildAssignmentsCards -loop over assignments and make a domstring 
// reuse the printToDom functions to display the domstring 

init();
const 