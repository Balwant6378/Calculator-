let boxes = document.querySelectorAll(".box");
let divide = document.querySelector(".divide");
let mul = document.querySelector(".mul");
let add = document.querySelector(".add");
let sub = document.querySelector(".sub");
let modules= document.querySelector(".modules");
let dot = document.querySelector(".dot");
let input = document.querySelector("#input");
let result = document.querySelector(".result");
let allClear =document.querySelector(".all-clear");
let clear = document.querySelector(".clear");
let subAdd = document.querySelector(".subAdd");

let string = "";
boxes.forEach((box)=>{
  box.addEventListener("click",(e)=> {
    string = string + box.innerText;
    console.log(string)
    input.value = string;
  })
})
result.addEventListener("click",()=>{
  string = eval(string);
  input.value = string;
})
allClear.addEventListener("click",()=>{
  string = "";
  input.value = string;
})
clear.addEventListener("click",()=>{
  string = string.substring(0,string.length - 1);
  input.value = string;
})
subAdd.addEventListener("click",()=>{
  if(input.value === ""){
     subAdd.disabled = true;
  }else{
    string = `(-${string})`;
    input.value = string;
  }
  subAdd.disabled = false;
})

divide.addEventListener("click",()=>{
  string= string + divide.innerText;
  input.value = string;
})
mul.addEventListener("click",()=>{
  string= string + mul.innerText;
  input.value = string;
})
add.addEventListener("click",()=>{
  string= string + add.innerText;
  input.value = string;
})
sub.addEventListener("click",()=>{
  string= string + sub.innerText;
  input.value = string;
})
modules.addEventListener("click",()=>{
  string= string + modules.innerText;
  input.value = string;
})
dot.addEventListener("click",()=>{
  string= string + dot.innerText;
  input.value = string;
})
