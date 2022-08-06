let section = document.querySelector(".about");
let spans = document.querySelectorAll(".progress span");

let services = document.querySelector(".section-counter")
let number = document.querySelectorAll(".section-counter .number");
let started = false;

let navbar = document.querySelector(".navbar");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 70) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }else{
    spans.forEach((span) => {
      span.style.width = 0;
    });
  }

  if(window.scrollY >= services.offsetTop - 300){
    console.log("test")
    if(!started){
      number.forEach((num) => startCount(num));
    }
    started = true
  }

  if(window.scrollY >= 350){
    navbar.style.backgroundColor = "#000000ba";
    document.querySelector(".container-fluid").style.padding = "0 50px"
  }else{
    navbar.style.backgroundColor = "#transparent";
    document.querySelector(".container-fluid").style.padding = "0 0px"
  }
};



function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(()=> {
      el.textContent++
      if (el.textContent == goal){
        clearInterval(count)
      }
    } , 1000 / goal)

}
