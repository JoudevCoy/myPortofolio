//BAGIAN JQUERY
$(document).ready(function(){
  $(".hamburger-nav").bind("click", () => {
    $(".hamburger-nav").toggleClass("btnNav-active");
  });
  $("html").css("scroll-behavior", "smooth");
});

//BAGIAN JAVASCRIPT

var navbar = document.querySelector('.bar'),
btnNav = document.querySelector('.hamburger-nav');

btnNav.addEventListener("click", () => {
  navbar.classList.toggle("nav-active");
  navbar.style.transition = "all .3s ease";
});

let darkToggle = document.querySelector(".darkmodeToggle"),
tampilanGelap = document.querySelector(".darkDisplay");


darkToggle.addEventListener("click", function(){
  tampilanGelap.classList.toggle("tampilanGelap");
  darkmodeUI.classList.toggle("darkUi");
});

//FUNGSI PENGIRIMAN PESAN***++++----___
let btnSend = document.querySelector(".btn-send");
let msgText, msgName;

msgText = document.querySelector(".textArea");
msgName = document.querySelector(".input-nama");
btnSend.addEventListener("click", send);
function send(){
  location.href = "https://wa.me/628977962089?text=Pesan dari " + msgName.value + " yang tertulis:* " + msgText.value + " *";
}
