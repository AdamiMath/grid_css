const tabs = document.querySelectorAll('.js-tabmenu li');
const tabcontent = document.querySelectorAll('.js-tabcontent');
<<<<<<< HEAD

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
=======
const caracteristicas = document.querySelector('.caracteristicas');
const divDentroDeCaracteristicas = caracteristicas.querySelector('div');

function ativatab(index){
    tabcontent.forEach((section) => {
        section.classList.remove('ativo');
    });

    tabcontent[index].classList.add('ativo');
    tabcontent[0].classList.contains('ativo') ? divDentroDeCaracteristicas.style.background = 'red' : console.log('');
    tabcontent[1].classList.contains('ativo') ? divDentroDeCaracteristicas.style.background = 'blue' : console.log('');
    tabcontent[2].classList.contains('ativo') ? divDentroDeCaracteristicas.style.background = 'green' : console.log('');
    tabcontent[3].classList.contains('ativo') ? divDentroDeCaracteristicas.style.background = 'yellow   ' : console.log('');


}

tabs.forEach((itemmenu, index)=>{
    itemmenu.addEventListener('click', (e) => {
        e.preventDefault();
        ativatab(index);
    })
})


>>>>>>> cb4e1acd69d7efd981b7f2c849ecb9b789963573
