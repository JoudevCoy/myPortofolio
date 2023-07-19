if (window.innerWidth >= 600 || window.innerHeight <= 600){
  alert("not respond");
} else {
  loadScreen();
}

function loadScreen(){
  $(".loading-screen").css({"display":"block","opacity":1});
  setTimeout(function() {
    $(".loading-screen").css("display", "none");
  }, 6000);
}