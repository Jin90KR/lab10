var openBtn = document.getElementById("openbutton");
var whatsYourName = prompt("What is your name?");
var openModal = document.getElementById("openmodal");
var modalName = document.getElementById("modalname");
var modalClose = document.getElementById("modalclose")

console.log(whatsYourName);

if (whatsYourName.length > 4){
    openBtn.classList.add('showbutton');
}

openBtn.addEventListener('click', ()=>{
    openModal.classList.add('showmodal')
})

modalClose.addEventListener('click', ()=>{
    openModal.classList.remove('showmodal')
})

modalName.textContent = "당신의 이름은  " + whatsYourName + "  입니다 Coding Hakdang에 오신 것을 환영합니다."
