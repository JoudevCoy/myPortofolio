"use strict";

// Javascript

// Navbar Toggle function
const navBtn = document.getElementById("navbar-btn"),
  navBar = document.querySelector("ul.nav-bar");
  
$(navBtn).bind("click", function(e){
  e.preventDefault();
  if($(navBar).hasClass("active")){
    $(navBar).removeClass("active");
    return;
  } else {
    $(navBar).addClass("active");
    return;
  }
});









// Project
const project = document.querySelector(".projects");

fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    if (!data.project){
      console.error("Error: Projects data empty :/", data);
      document.querySelector(".work .projects .loading-box").innerHTML = "Projects Data Empty :/";
      return;
    }
    document.querySelector(".work .projects .loading-box").style.display = "none";
    
    // Nilai Setelah Diambil
    // Project
    for (var i = 0; i < data.project.length; i++){
      const prjData = data.project[i];
      // Data Value
      const dataTitle = prjData.title;
      const dataImg = prjData.thumb;
      const dataDesc = prjData.desc;
      const dataTech = prjData.tech.split(",");
      const dataLink = prjData.link;
      
      // Membuat baru untuk menampilkan data
      const projectBox = document.createElement("div");
      projectBox.classList.add("project");
      const projectInfoBox = document.createElement("div");
      projectInfoBox.classList.add("project-info");
      
      const projectThumb = document.createElement("img");
      projectThumb.src = dataImg;
      projectThumb.classList.add("project-img");
      
      const projectTitle = document.createElement("h1");
      projectTitle.textContent = dataTitle;
      projectTitle.classList.add("project-title");
      
      const projectDesc = document.createElement("p");
      projectDesc.textContent = dataDesc;
      projectDesc.classList.add("project-desc");
      
      const projectTechWrap = document.createElement("ul");
      for (var tI = 0; tI < dataTech.length; tI++){
        const projectTech = document.createElement("li");
        projectTech.textContent = dataTech[tI];
        $(projectTechWrap).append(projectTech);
      }
      
      const projectLink = document.createElement("a");
      projectLink.classList.add("project-link");
      projectLink.textContent = "View";
      projectLink.setAttribute("onclick",`route("${dataLink}")`);
      
      $(projectBox).append(projectThumb);
      $(projectBox).append(projectInfoBox);
      $(projectInfoBox).append(projectTitle);
      $(projectInfoBox).append(projectDesc);
      $(projectInfoBox).append(projectTechWrap);
      $(projectBox).append(projectLink);
      $(project).append(projectBox);
    }
    
    const moreProjectBox = document.createElement("div");
    moreProjectBox.classList.add("more-project-box");
    $(project).append(moreProjectBox);
    moreProjectBox.innerHTML = '<a class="more-project-link" href="https://github.com/JoudevCoy"> More <i class="fas fa-arrow-right"></i></a>';
    
    
    
    
    // Tech
    if (!data.tech){
      console.error("Error: data technologies no found :/", data);
      return;
    }
    
    const techBox = document.querySelector(".skills .tech ul");
    
    for (var i = 0; i < data.tech.length; i++){
      const techList = document.createElement("li");
      techList.textContent = data.tech[i];
      $(techBox).append(techList);
    }
    
    
    
    // Skill
    if (!data.skill){
      console.error("Error: data skill no found :/", data);
      return;
    }
    
    const skillBox = document.querySelector(".skills .skill ul");
    
    for (var i = 0; i < data.skill.length; i++){
      const skillList = document.createElement("li");
      const skillInfo = document.createElement("span");
      skillInfo.textContent = data.skill[i].skill;
      skillList.textContent = data.skill[i].name + ":";
      $(skillList).append(skillInfo)
      $(skillBox).append(skillList);
    }
  })
  .catch((err) => {
    console.error("Error: data.json not found :/", err);
    document.querySelector(".work .projects .loading-box").innerHTML = "Projects Data Not Found :/";
  });










// Form
const nameI = document.querySelector("input#name"),
  msg = document.querySelector("textarea#msg"),
  btnSubmit = document.getElementById("submit-btn"),
  info = document.getElementById("info");

nameI.addEventListener("input", () => {
  if (nameI.value.length > 26){
    nameI.style.color = "#ec4439";
  } else {
    nameI.style.color = "var(--text-color-dark)";
  }
});

info.classList.remove("show");

btnSubmit.addEventListener("click", function(){
  // Validate (x2)
  if (nameI.value == undefined || nameI.value == null || nameI.value == '' ){
    nameI.value = '';
    msg.value = '';
    info.classList.add("show");
    return info.innerText = " Harap masukan nama! ";
  } else
  if (nameI.value == undefined || nameI.value == null || nameI.value == '' ){
    nameI.value = '';
    msg.value = '';
    info.classList.add("show");
    return info.innerText = " Harap masukan pesan! ";
  } else
  if (
    nameI.value == undefined || nameI.value == null || nameI.value == '' &&
    msg.value == undefined || msg.value == null || msg.value == ''
    ){
    nameI.value = '';
    msg.value = '';
    info.classList.add("show");
    return info.innerText = " Harap masukan form dengan benar! ";
  }
  if (nameI.value.length > 26){
    info.classList.add("show");
    info.innerText = " Namamu terlalu panjang! ";
    return;
  }
  
  // If Valid
  var n = nameI.value,
    m = msg.value;
  info.classList.remove("show");
  nameI.value ="";
  msg.value ="";
  window.location.href = `https://wa.me/6287815118956?text=Halo Saya ${ n }. ${ m }`;
  n = ""; m = "";
});



window.addEventListener("DOMContentLoaded", function(){
  // Data Href
  const targetEl = document.querySelectorAll("[data-href]");
  targetEl.forEach((el) => {
    el.onclick = function(){
      let url = this.dataset.href;
      window.location.href = url;
    }
  });
  
});
// Data Href Alternate
function route(url) {
  window.location.href = url;
}








// Loading function
const overlay = document.querySelector("body .overlay"),
  overlayImg = document.querySelector("body .overlay img");

window.addEventListener("DOMContentLoaded", function(){
  setTimeout(function(){
    overlay.style.transition = "backdrop-filter .3s linear";
    overlay.style.backdropFilter = "none";
    overlayImg.style.transform = "translateY(-80%)";
    overlayImg.style.opacity = 0;
    overlayImg.style.filter = "blur(5px)";
    setTimeout(function(){
      overlay.remove();
    }, 1300);
  }, 1300);
});