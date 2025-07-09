const startHeading = document.querySelector("h1");
console.log(startHeading.innerText);


const nameInput = document.querySelector(".name");
console.log("nameInput -->", nameInput);

const ageInput = document.querySelector(".age");
console.log("ageInput -->", ageInput);

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Name:", nameInput.value);
  console.log("Age:", ageInput.value);
});



startHeading.addEventListener("mouseover", () => {
    console.log("Heading Is Clicked");

    // submitBtn = document.querySelector("button").addEventListener("click", () => {
    // });
});


// const para = document.getElementByIdClassname("paragraph");

// console.log(para);
// if(para){
//     Array.from(para).map((item)=>{
//         console.log(item);
//         return item;
//     });
// }