const ft = document.querySelector('.flashing-thing');
let ftb = 0;

setInterval(() => {
    ft.style.display = ftb ? 'block' : 'none';

    if (ftb) ftb = 0;
    else ftb = 1;
}, 600);