const tabs = document.querySelectorAll('.js-tabmenu li');
const tabcontent = document.querySelectorAll('.js-tabcontent');
const caracteristicas = document.querySelector('.caracteristicas');
const divDentroDeCaracteristicas = caracteristicas.querySelector('div');



tabs.forEach((itemmenu, index) => {
    console.log(itemmenu);
    itemmenu.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove a classe 'ativo' de todos os elementos
        tabs.forEach((tab) => {
            tab.classList.remove('ativo');
        });

        // Adiciona a classe 'ativo' ao elemento clicado
        itemmenu.classList.add('ativo');

        // Lógica para aplicar estilos diferentes para cada elemento
        switch (index) {
            case 0:
                divDentroDeCaracteristicas.style.background = 'linear-gradient(135deg, #a10000, #5f5c5c)';
                break;
            case 1:
                divDentroDeCaracteristicas.style.background = 'linear-gradient(135deg, #0000a1, #5c5c5f)';
                break;
            case 2:
                // Adicione estilos para o terceiro item aqui
                divDentroDeCaracteristicas.style.background = 'linear-gradient(135deg, #036c00, #5c5c5f)';
                break;
            case 3:
                // Adicione estilos para o quarto item aqui
                divDentroDeCaracteristicas.style.background = 'linear-gradient(135deg, #f5e100, #5c5c5f)';
                break;
            default:
                break;
        }
    });
});

tabs[0].click();