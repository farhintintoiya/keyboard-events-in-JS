let inp = document.querySelector("input");
let keyP = document.querySelector(".key");
let codeP = document.querySelector(".code");

inp.addEventListener("keydown", function(event){
    keyP.innerText = "Key : " + event.key;
    codeP.innerText = "Code : " + event.code;
});
