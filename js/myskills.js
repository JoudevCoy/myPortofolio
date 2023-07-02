//bagian myskills
const skillList = document.getElementById("skill-tech-list");

//bagian kemampuan
const skillDevList = document.getElementById("skill-dev-list");

//myskills
var mySkill = [
  {
    "skill": " HTML",
    "percent": 95.00
  },
  {
    "skill": " CSS",
    "percent": 83.19
  },
  {
    "skill": " Javascript",
    "percent": 32.02
  },
  {
    "skill": " Node Js",
    "percent": 5.77
  },
  {
    "skill": " SCSS",
    "percent": 37.01
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
    "info": " Intermediate"
  }
]


// bagian myskills
var skills = 0;
for (skills in mySkill){
  var skillContent = `
    <li class="fadeleft-hidden delay-200">
      <p class="skill-name">${mySkill[skills].skill}</p>
      <div class="skill-percent" style="width:${Math.floor(mySkill[skills].percent)}%"><span class="darkText">${Math.floor(mySkill[skills].percent)}%</span></div>
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