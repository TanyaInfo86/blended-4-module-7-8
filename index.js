//task-1
// const input = document.querySelector("#input");
// const btn =  document.querySelector("button");

// btn.addEventListener('click', changeValue);

// function changeValue(){
//     input.value = "by"
// };

//task-2
// const input = document.querySelector("#input");
// const btn =  document.querySelector("button");

// btn.addEventListener('click', showValue);
// function showValue(){
//     alert(input.value)

// };

// task-3

// const firstInput = document.querySelector("#first-input");
// const secondInput = document.querySelector("#second-input");

// const btn =  document.querySelector("button");

// btn.addEventListener('click', toggleValue);
// function toggleValue () {
//     // const firstValue =firstInput.value;
//     // firstInput.value = secondInput.value;
//     // secondInput.value = firstValue;

//     [firstInput.value, secondInput.value] = [secondInput.value, firstInput.value]
//     }

// task -4

//     const pharagraphs =  document.querySelectorAll("p");
//     const btn =  document.querySelector("button");

//     btn.addEventListener('click', changeTextcontent)

// function changeTextcontent () {
//     pharagraphs.forEach((pharagraph, index) => pharagraph.textContent = index + 1);
// }

// task 5

// const testInput = document.querySelector("#test");
// const resultInput = document.querySelector("#result");
// const button = document.querySelector("button");

// button.addEventListener("click", result);
// function result() {
//   if (isNaN(testInput.value)) {
//     alert("Ввели не число");
//   } else {
//     resultInput.value = testInput.value * testInput.value;
//   }
// }

// task 6

const title = document.querySelector("h1");
const list = document.createElement("ul");
let message = prompt();
while (message !== null) {
  const listItem = document.createElement("li");
  listItem.textContent = message;
  list.appendChild(listItem);
  message = prompt();
}

title.after(list);
