const sideMenu=document.querySelector("aside");
const menuBtn=document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler= document.querySelector('.theme-toggler');
const comparaBtn=document.querySelector("#button");


menuBtn.addEventListener('click',()=>{
    sideMenu.style.display= 'block';
})


closeBtn.addEventListener('click',()=>{
    sideMenu.style.display= 'none';
})

//cambio de tema
themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})
//boton comparacion
var spinner=document.querySelector('.spinner');
var text=document.querySelector(".btn-text")
comparaBtn.addEventListener('click',()=>{
    text.style.display='none';
    spinner.style.display= 'block';


})

