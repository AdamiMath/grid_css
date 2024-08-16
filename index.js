const tabs = document.querySelectorAll('.js-tabmenu li');
const tabcontent = document.querySelectorAll('.js-tabcontent');

function ativatab(index) {
    tabcontent.forEach((section, i) => {
        section.classList.toggle('ativo', i === index);
    });

    const activeContent = tabcontent[index];
    const caracteristicas = activeContent.querySelector('.caracteristicas');
    const divDentroDeCaracteristicas = caracteristicas.querySelector('div');

    switch(index) {
        case 0:
            divDentroDeCaracteristicas.style.background = 'red';
            break;
        case 1:
            divDentroDeCaracteristicas.style.background = 'blue';
            break;
        case 2:
            divDentroDeCaracteristicas.style.background = 'green';
            break;
        case 3:
            divDentroDeCaracteristicas.style.background = 'yellow';
            break;
    }
}

tabs.forEach((itemmenu, index) => {
    itemmenu.addEventListener('click', (e) => {
        e.preventDefault();
        ativatab(index);
    });
});
