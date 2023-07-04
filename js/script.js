//BAGIAN JQUERY
$(document).ready(function(){
  $("html").css("scroll-behavior", "smooth");
  $(".hamburger-nav").bind("click", () => {
    $(".hamburger-nav").toggleClass("btnNav-active");
    backNav();
  });
  function backNav(){
    if ($(".bar").hasClass("nav-active")){
      $(".back-nav").addClass("back-nav-active");
    } else {
      $(".back-nav").removeClass("back-nav-active");
    }
  }
  
  $(".back-nav").bind("click", () => {
    $(".bar").removeClass("nav-active");
    $(".hamburger-nav").removeClass("btnNav-active");
    $(".back-nav").removeClass("back-nav-active");
  });
  
});

//BAGIAN JAVASCRIPT

const navbar = document.querySelector(".bar"),
  btnNav = document.querySelector(".hamburger-nav");
  
btnNav.addEventListener("click", () => {
  navbar.classList.toggle("nav-active");
  navbar.style.transition = "transform .3s ease";
});


let darkToggle = document.querySelector(".darkmodeToggle"),
tampilanGelap = document.querySelector(".darkDisplay");


darkToggle.addEventListener("click", function(){
  tampilanGelap.classList.toggle("tampilanGelap");
});

//FUNGSI PENGIRIMAN PESAN***++++----___
let btnSend = document.querySelector(".btn-send");
let msgText, msgName;

msgText = document.querySelector(".textArea");
msgName = document.querySelector(".input-nama");
btnSend.addEventListener("click", send);
function send(){
  window.location.href = "https://wa.me/6287815118956?text=Halo saya " + msgName.value + ": " + msgText.value + " *";
}
