const btnArrow = document.querySelectorAll('.arrow-down')
const dropdown = document.querySelectorAll('.dropdown-fechado')
const dropdownContent = document.querySelectorAll('.dropdown-content')

function exibirTexto(index) {
    for (let i = 0; i < dropdownContent.length; i++) {
        if (i === index) {
            if (dropdownContent[i].style.display === 'flex') {
                dropdownContent[i].style.display = 'none';
                dropdown[i].classList.remove('dropdown-aberto');
                dropdown[i].classList.add('dropdown-fechado');
                btnArrow[i].style.transform = 'rotate(0deg)';
            } else {
                dropdownContent[i].style.display = 'flex';
                dropdown[i].classList.add('dropdown-aberto');
                dropdown[i].classList.remove('dropdown-fechado');
                btnArrow[i].style.transform = 'rotate(180deg)';
            }
        } else {
            dropdownContent[i].style.display = 'none';
            dropdown[i].classList.remove('dropdown-aberto');
            dropdown[i].classList.add('dropdown-fechado');
            btnArrow[i].style.transform = 'rotate(0deg)'
        }
    }
}


for (let i = 0; i < btnArrow.length; i++) {

    btnArrow[i].addEventListener('click', () => {
        exibirTexto(i)
    })

}
