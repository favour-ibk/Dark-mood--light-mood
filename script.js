const moon=document.getElementById('moon');
const sun=document.getElementById('sun');
const cover=document.getElementById('cover');
const page=document.getElementById('content');
const conten=document.getElementById('cont2');
const content=document.getElementById('cont3');


function dark(){
    cover.style.backgroundColor='black';
    cover.style.color='white';
    page.style.backgroundColor='black';
    conten.style.backgroundColor='black';
    content.style.backgroundColor='black';


    moon.style.display='none';
    sun.style.display='block';
    
}

function light(){
    cover.style.backgroundColor='white';
    cover.style.color='black';
    page.style.backgroundColor='blue'
    conten.style.backgroundColor='red';
    content.style.backgroundColor='green';


    moon.style.display='block';
    sun.style.display='none';
}

