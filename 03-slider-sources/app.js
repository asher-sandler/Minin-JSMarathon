const btnUp = document.querySelector(".up-button");
const btnDown = document.querySelector(".down-button");

const sidebar = document.querySelector(".sidebar");
const mainSlide =  document.querySelector(".main-slide");
const slidesCount = mainSlide.querySelectorAll("div").length;

const container = document.querySelector(".container");

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;
const dirUp = 1;
const dirDown = 0;
let activeSlideIdx = 0;

btnUp.addEventListener("click", () => {
  changeSlide(dirUp);
});

btnDown.addEventListener("click", () => {
  changeSlide(dirDown);
});

document.addEventListener('keydown',
    event => {
        let key = event.key;
        if (key === 'ArrowUp'){
            changeSlide(dirUp);
        } else if (key === 'ArrowDown'){
            changeSlide(dirDown);
        }
    }    
)

function changeSlide(direction) {
  
  if (direction === dirUp) {
    console.log('up');
    activeSlideIdx++;
    console.log(activeSlideIdx,slidesCount);
    if (activeSlideIdx == slidesCount) {
      activeSlideIdx = 0;
    }
  } else if (direction === dirDown) {
        //console.log('down');
        activeSlideIdx--;
        if (activeSlideIdx <  0) {
    
        activeSlideIdx = slidesCount - 1;
        //console.log(activeSlideIdx);
        
    }
}
   //  console.log(direction);
    //console.log('activeSlideIdx:',activeSlideIdx);
    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIdx * height}px)`;

    sidebar.style.transform = `translateY(${activeSlideIdx * height}px)`;
  
}
