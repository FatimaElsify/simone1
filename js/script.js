'use strict';
let openDrop = document.getElementById('openDrop');
let closeDrop =document.getElementById('closeDrop');
let dropLink =document.getElementById('dropLinks');
function drop(){
    openDrop.classList.add('hide');
    closeDrop.classList.remove('hide');
    dropLink.classList.remove('hide')
};
function close(){
    openDrop.classList.remove('hide');
    closeDrop.classList.add('hide');
    dropLink.classList.add('hide')
};
openDrop.addEventListener('click',drop );
closeDrop.addEventListener('click',close );
let btnHire = document.querySelector('.btnHire');
function colorBtn(){
    btnHire.style.backgroundColor="blue";
    btnHire.style.borderColor ="blue";
    btnHire.style.color="white";
    
    
};
let descBtn =document.querySelector('.description');
let col1 = document.querySelector('.colA');

let iconX=document.querySelector('.closeX');
let img=document.querySelectorAll('.img');

function open(){
    descBtn.classList.remove('hide');

    

    
};
function closeX(){
    descBtn.classList.add('hide');
    
};
col1.addEventListener('click', open);
iconX.addEventListener('click',closeX)

// function hoverBtn(){
//     btnHire.style.backgroundColor="blue";
//     btnHire.style.borderColor ="blue";
//     btnHire.style.color="white";
    

// };

btnHire.addEventListener("click",colorBtn);


