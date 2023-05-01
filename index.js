const body = document.querySelector("body");
const div = document.createElement("div");
const mainContainer = document.querySelector(".main_container");

const innerDiv = ` 
<div class="red inner">1/1-red</div>
 <div class="blue inner">1/1-blue</div>
 <div class="green inner">1/1-green</div>
 <div class="green inner">1/2-green</div>
 <div class="red inner">1/2-red</div>
 <div class="blue inner">1/3-blue</div>
 <div class="blue inner">1/2-blue</div>
 <div class="red inner">1/3-red</div>
 <div class="green inner">1/3-green</div>`;

mainContainer.innerHTML += `
<button class="all btn">All</button>
<button class="blue btn">Blue</button>
<button class="green btn">Green</button>
<button class="red btn">Red</button> 

<div class="dropDown">
    <select  id="colors">
        <option value="all">All</option>
        <option value="blue" >blue</option>
        <option value="green">green</option>
        <option value="red">red</option>
    </select>`;

const dropDown = document.querySelector("#colors");
const div2 = document.createElement("div");

div.className = "feature_image";
div2.className = "thumbnails";
body.appendChild(div);
body.appendChild(div2);
div2.innerHTML = innerDiv;

const btns = document.querySelectorAll(".btn");
const innerDivs = document.querySelectorAll(".inner");
const biggerDiv = document.querySelector(".feature_image");
console.log(biggerDiv);
// console.log(innerDivs[4].classList[0]);

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (e) {
    const color = e.currentTarget.innerHTML;
    const lower = color.toLowerCase();
    // console.log(lower)

    for (let i = 0; i < innerDivs.length; i++) {
      if (lower === "all") {
        innerDivs[i].style.display = "block";
        biggerDiv.style.backgroundColor = "white";
        biggerDiv.innerHTML = "";
      } else if (innerDivs[i].classList[0] === lower) {
        innerDivs[i].style.display = "block";
        biggerDiv.style.backgroundColor = lower;
        biggerDiv.innerHTML = innerDivs[i].innerHTML;
        biggerDiv.classList.add(innerDivs[i].classList[0]);
      } else {
        innerDivs[i].style.display = "none";
      }
    }
  });
}

//Dropdown
dropDown.addEventListener("click", function (e) {
  const color = e.currentTarget.value;
  console.log(color);

  for (let i = 0; i < innerDivs.length; i++) {
    if (color === "all") {
      innerDivs[i].style.display = "block";
      biggerDiv.style.backgroundColor = "white";
      biggerDiv.innerHTML = "";
    } else if (innerDivs[i].classList[0] === color) {
      innerDivs[i].style.display = "block";
      biggerDiv.style.backgroundColor = color;
      biggerDiv.innerHTML = innerDivs[i].innerHTML;
      biggerDiv.classList.add(innerDivs[i].classList[0]);
    } else {
      innerDivs[i].style.display = "none";
    }
  }
});
