const tabs = document.querySelectorAll('.js-tabmenu li');
const tabcontent = document.querySelectorAll('.js-tabcontent');
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


