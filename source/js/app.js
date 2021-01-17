let login = document.getElementById("login");
let modal = document.querySelector(".modal");
let body = document.querySelector(".page__body");
let close = document.getElementById("close");

login.addEventListener("click", function(e){
  e.preventDefault();
  modal.classList.remove("modal--hide");
  body.classList.add("page__overlay");
});

close.addEventListener("click", function(){
  modal.classList.add("modal--hide");
  body.classList.remove("page__overlay");
});
