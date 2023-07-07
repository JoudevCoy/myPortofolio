//bagian myskills
const skillList = document.getElementById("skill-tech-list");

//bagian kemampuan
const skillDevList = document.getElementById("skill-dev-list");

//myskills
var mySkill = [
  {
    "skill": "HTML5",
    "tech": "html5"
  },
  {
    "skill": "CSS3",
    "tech": "css3"
  },
  {
    "skill": "Javascript",
    "tech": "js"
  },
  {
    "skill": "NodeJs",
    "tech": "node"
  },
  {
    "skill": "SASS",
    "tech": "sass",
  }
];

// kemampuan
var mySkillDev = [
  {
    "name": " Frontend Developer",
    "info": " Advanced"
  },
  {
    "name": " Backend Developer",
    "info": " Basic"
  },
  {
    "name": " Graphic Design",
    "info": " Basic"
  },
  {
    "name": " UI/UX Design",
    "info": " Basic"
  }
]


// bagian myskills
var skills = 0;
for (skills in mySkill){
  var techIcon = mySkill[skills].tech;
  var skillContent = `
    <li class="fadeleft-hidden delay-200">
      <p class="skill-name"> <i class="fab fa-${techIcon}"></i> ${mySkill[skills].skill}</p>
    </li>
  `;
  $(skillList).append(skillContent);
}


//bagian kemampuan
var skillsDev = 0;
for (skillsDev in mySkillDev){
  var skillDevContent = `
    <li class="faderight-hidden delay-200">
      <p class="skill-dev-name">${mySkillDev[skillsDev].name}</p>
      <p class="skill-dev-info">${mySkillDev[skillsDev].info}</p>
    </li>
  `;
  $(skillDevList).append(skillDevContent);
}