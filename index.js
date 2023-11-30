const tabs = document.querySelectorAll('.js-tabmenu li');
const tabcontent = document.querySelectorAll('.js-tabcontent');
tabcontent[0].classList.add('ativo');
const caracteristicas = document.querySelector('.caracteristicas');
const divDentroDeCaracteristicas = caracteristicas.querySelector('div');

function ativatab(index){
    tabcontent.forEach((section, i) => {
        section.classList.remove('ativo');
    });

    tabcontent[index].classList.add('ativo');

    if(tabcontent[1].classList.contains('ativo')){
        divDentroDeCaracteristicas.style.background = 'linear-gradient(135deg, #0000a1, #5f5c5c)';

    }


}

tabs.forEach((itemmenu, index)=>{
    itemmenu.addEventListener('click', (e) => {
        e.preventDefault();
        ativatab(index);
    })
})




function Pessoa(nome, altura){
    this.nome = nome;
    this.altura =  altura;
}

const matheus = new Pessoa('matheus', 1,74);
