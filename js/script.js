let reviewInput = document.getElementById("reviewInput");
let reviewShow = document.getElementsByClassName("reviewShow")[0];
const stars = document.querySelectorAll(".stars i");
let submit = document.getElementById("submit");
let reset = document.getElementById("reset");



stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    // Remove 'selected' class from all stars
    stars.forEach((s) => s.classList.remove("selected"));

    // Add 'selected' class to clicked star and all previous stars
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add("selected");
    }
  });
});




function submitBtn() {
  const selectedStars = document.querySelectorAll(".stars i.selected");

  if (reviewInput.value == "") {
    alert("Please write a review.");
    return;
  } 
  else if (selectedStars.length == 0) {
    alert("Please select star ratings.");
    return;
  } 
  else {
    reviewShow.style.display = "block";
    
    let starsHTML = "";
    selectedStars.forEach((star) => {
      starsHTML += `<i class="fa-solid fa-star gold"></i>`;
    });

    reviewShow.innerHTML = `${starsHTML} <br> <br> ${reviewInput.value}`;

    reviewShow.style.opacity = "1";
    
    reviewInput.value = "";
    stars.forEach((s) => s.classList.remove("selected"));
  }
}



let resetBtn = () => {
  reviewShow.style.transition = "opacity 0.4s ease";
  reviewShow.style.opacity = "0";

  setTimeout(() => {
    reviewShow.style.display = "none";
    reviewInput.value = "";
    stars.forEach((s) => s.classList.remove("selected"));
  }, 400);
};












// submit.addEventListener("click", () => {
//     if (reviewInput.value == "") {
//         alert("Please write a review.")
//     }
//     else {
//         reviewShow.style.display = "block"
//         reviewShow.innerHTML = `${reviewInput.value}`
//         reviewShow.style.opacity = "1"
//     }
// })
// reset.addEventListener("click", () => {
//      reviewShow.style.transition = "opacity 0.4s ease";
//     reviewShow.style.opacity = "0";

//     setTimeout(() => {
//         reviewShow.style.display = "none";
//         reviewInput.value = ""
//     }, 400);

// })

// const heading = document.getElementsByTagName("h1") [0];

// console.log(heading.innerHTML);

// let blue = document.getElementById("blue")

// blue.addEventListener("click", () => {
//     console.log("Ami Clicked");
//     document.body.style.background = "blue"
//      heading.style.color = "white"
//      heading.style.fontSize = "40px"

// })

// let red = document.getElementsByClassName("red") [0];

// red.addEventListener("click", () => {
//     console.log("Background Color Will Be Red");
//     document.body.style.background = "red"
//     heading.style.color = ""
//     heading.style.fontSize = ""
// })

// let green = document.getElementsByClassName("green") [0];

// green.addEventListener("click", () => {
//     console.log("Background Color Will Be Green");
//     document.body.style.background = "green"
//     heading.style.color = ""
//     heading.style.fontSize = ""
// })

// function tomato(){
//     document.body.style.background = "tomato"
//     heading.style.color = ""
//     heading.style.fontSize = ""
// }

// const heading2 = document.querySelector("h1")
// heading2.innerHTML = "Hello"
// console.log(heading2.innerHTML);

// That's how by using getElementsByTagName I can show the output in the browser and console both when the h1 tag is empty
// const heading = document.getElementsByTagName("h2")[0];
// heading.innerHTML = "Hello MERN-2407"

// console.log(heading.innerHTML);
// That's how by using getElementsByTagName I can show the output in the browser and console both

// let heading = document.createElement("h1")

// heading.innerHTML = "<b><u>Hello</u></b>"
// document.body.appendChild(heading)
// console.log(heading.innerHTML);

// document.body.style.backgroundColor = "tomato"

// const input = document.createElement("input")

// input.placeholder = "Please Enter Your Name"
// input.type = "text"

// document.body.appendChild(input)

// const heading = document.createElement("h1")

// heading.innerText = "Hello MERN-2407"
// heading.style.color = "blue"
// heading.style.margin = "50px 0px"

// document.body.appendChild(heading)

// const bg  = document.createElement("img")

// bg.src = "images/bg.jpg"
// bg.alt = "bg.jpg"
// bg.style.height = "300px"
// bg.style.width = "400px"

// document.body.appendChild(bg)
