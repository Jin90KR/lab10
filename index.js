var openBtn = document.getElementById("openbutton");
var whatsYourName = prompt("What is your name?");
var openModal = document.getElementById("openmodal");
var modalName = document.getElementById("modalname");

console.log(whatsYourName);

if (whatsYourName.length > 4){
    openBtn.classList.add('showbutton');
}

openBtn.addEventListener('click', ()=>{
    openModal.classList.add('showmodal')
})

modalName.textContent = whatsYourName
console.log(modalName.textContent)

