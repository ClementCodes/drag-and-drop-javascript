/** @format */

let base = document.querySelector(".base");
const premiereCase = document.getElementById("premiere-case");
const boxs = document.querySelectorAll(".case");
const destroy = document.querySelector(".destroy");
const allCases = [];
const choix = [];
let phtoEnCours;
for (let i = 0; i < boxs.length; i++) {
  allCases.push(boxs[i]);
}
allCases.push(destroy);
let indexPhoto = 1;

base.style.backgroundImage = `url(https://loremflickr.com/320/240?random=${indexPhoto})`;
phtoEnCours = `url(https://loremflickr.com/320/240?random=${indexPhoto})`;

function nvBase() {
  const newBase = document.createElement("div");
  newBase.setAttribute("class", "base");
  newBase.setAttribute("draggable", "true");

  indexPhoto++;
  newBase.style.backgroundImage = `url(https://loremflickr.com/320/240?random=${indexPhoto})`;
  phtoEnCours = `url(https://loremflickr.com/320/240?random=${indexPhoto})`;
  premiereCase.appendChild(newBase);
  base = newBase;
}

for (const vide of allCases) {
  vide.addEventListener("dragover", dragover);
  vide.addEventListener("dragenter", dragEnter);
  vide.addEventListener("drop", dragDrop);
}

function dragDrop() {
  if (this.id === "premiere-case") {
    return;
  }

  //Destroy

  if (this.id === "destroy") {
    base.remove();
    nvBase();
    return;
  }

  //Verouillage

  this.removeEventListener("drop", dragDrop);
  this.removeEventListener("drop", dragEnter);
  this.removeEventListener("drop", dragover);
  this.appendChild(base);

  this.childNodes[0].setAttribute("draggable", false);
  nvBase();
  choix.push(phtoEnCours);
  if (choix.length === 3) {
    setTimeout(() => {
      alert("selection terminée");
    }, 200);
  }
}
function dragEnter(e) {
  e.preventDefault();
}

function dragover(e) {
  e.preventDefault();
}
