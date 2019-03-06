const dinosaurs = [
    {
        dinoType: 't-rex',
        name: 'wrex'
    },
    {
        dinoType: 'stegosaurus',
        name: 'steve'
    },
    {
        dinoType: 'velociraptor',
        name: 'Ted',
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
    for (let i = 0; i < dinosaurs.length; i++) {
        domstring += `<div class="dinosaur">`
        domstring += `<h3>${dinosaurs[i].dinoType}</h3>`;
        domstring += `<p>${dinosaurs[i].name}</p>`
        domstring += `</div>`
    }
    printToDom('dino-barn', domstring)
};


const init = () => {
    buildDinosaurs();
};

init();