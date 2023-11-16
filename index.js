const tabs = document.querySelectorAll('.js-tabmenu li');
const tabcontent = document.querySelectorAll('.js-tabcontent');
tabcontent[0].classList.add('ativo');

function ativatab(index){
    tabcontent.forEach((section) => {
        section.classList.remove('ativo');
    })
    tabcontent[index].classList.add('ativo');
}

tabs.forEach((itemmenu, index)=>{
    itemmenu.addEventListener('click', (e) => {
        e.preventDefault();
        ativatab(index);
    } )
})