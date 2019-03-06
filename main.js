const dinosaurs = [
    {
        dinoType: 't-rex',
    },
    {
        dinoType: 'stegosaurus',
    },
    {
        dinoType: 'velociraptor',
    }
];

// loop over dinosars 
// build up a domstring
// print domstring to the dom

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}

const buildDinosaurs = () => {
    let domstring = '';
    for (let i = 0; i < dinosaurs.length; i++) {
        domstring += `<h3>${dinosaurs[i].dinoType}</h3>`;
    }
    printToDom('dino-barn', domstring)
};


const init = () => {
    buildDinosaurs();
};

init();