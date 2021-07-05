var item = document.querySelector(".item");
const pholders = document.querySelectorAll(".placeholder");

//console.log(pholders);

for (const pholder of pholders) {
  pholder.addEventListener("dragover", dragover);
  pholder.addEventListener("dragenter", dragenter);
  pholder.addEventListener("dragleave", dragleave);
  pholder.addEventListener("drop", dragdrop);
}
item.addEventListener("dragstart", dragstart);
item.addEventListener("dragend", dragend);

function dragstart(event) {
  event.target.classList.add("hold");
  setTimeout(() => {
    event.target.classList.add("hide");
  }, 0);
}

function dragend(event) {
  event.target.classList.remove("hold", "hide");
}

function dragover(event) {
  //console.log("dragover");
  event.preventDefault();
}

function dragenter(event) {
  //console.log("dragenter");
  event.target.classList.add("hovered");
}

function dragleave(event) {
  //console.log("dragleave");
  event.target.classList.remove("hovered");
}

function dragdrop(event) {
  checkForTargetClass(event.target.classList);
  event.target.classList.remove("hovered");

  event.target.append(item);
}

function checkForTargetClass(aClass) {
  if (aClass.contains("one")) {
    item.innerHTML = "Начало";
    item.classList.remove("progress", "done", "start");
    item.classList.add("start");
    //console.log(item.classList);
  }
  if (aClass.contains("two")) {
    item.innerHTML = "Продожение";
    item.classList.remove("progress", "done", "start");
    item.classList.add("progress");
    //console.log(item.classList);
  }
  if (aClass.contains("three")) {
    item.innerHTML = "Окончание";
    item.classList.remove("progress", "done", "start");
    item.classList.add("done");
    //console.log(item.classList);
  }
}
