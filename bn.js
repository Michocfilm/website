const hamicon = document.getElementById('hamicon')
const menu = document.getElementById('menu')
const social = document.getElementById('social')
const Social = document.getElementById('Social')
const email = document.getElementById('email')
const Email = document.getElementById('Email')
const github = document.getElementById('github')
const Github = document.getElementById('Github')

hamicon.addEventListener("click",()=>{

    if (menu.style.display === "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block"
    }
    
})

function myFunction(hammenu) {
    hammenu.classList.toggle("change");
}

social.addEventListener("click",()=>{
    alert("You are about to leave this website page.")
})

Social.addEventListener("click",()=>{
    alert("You are about to leave this website page.")
})

email.addEventListener("click",()=>{
    alert("You are about to leave this website page.")
})

Email.addEventListener("click",()=>{
    alert("You are about to leave this website page.")
})

github.addEventListener("click",()=>{
    alert("You are about to leave this website page.")
})

Github.addEventListener("click",()=>{
    alert("You are about to leave this website page.")
})