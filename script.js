let home2=document.getElementById("home")
let service2=document.getElementById("service")
let pricing2=document.getElementById("pricing")
let btn=document.getElementById("btn")
let contactUs2=document.getElementById("contactUs")

function home(){
     
    home2.style.cssText += "display:block; transition: .5s";
    service2.style.display="none";
    pricing2.style.display="none";
    contactUs2.style.display="none";

}
function service(){
    home2.style.display="none";
    service2.style.cssText += "display:block; transition: 2s;";
    pricing2.style.display="none";
    contactUs2.style.display="none";
}
function pricing(){
    home2.style.display="none";
    service2.style.display="none";
    pricing2.style.display="block";
    contactUs2.style.display="none";
}

function contactUs(){
    btn.textContent="Sing up"
    home2.style.display="none";
    service2.style.display="none";
    pricing2.style.display="none";
    contactUs2.style.display="block";
}

function submit(){
    alert("Message sended");
}
