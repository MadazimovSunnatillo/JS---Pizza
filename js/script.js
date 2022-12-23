let bread = document.querySelector(".bread");
let tomato = document.querySelector(".tomato");
let salami = document.querySelector(".salami");
let mushroom = document.querySelector(".quziqorin");
let sausage = document.querySelector(".kolb");
let oil = document.querySelector(".oil");
let pizzaImg = document.querySelector(".pizza-img");
let orderBtn = document.querySelector(".orderBtn");
let addBtn = document.querySelector(".pizza-btn__add");
let salamiBtn = document.querySelector(".salami-btn");
let tomatoBtn = document.querySelector(".tomato-btn");
let mushroomBtn = document.querySelector(".mushroom-btn");
let sausageBtn = document.querySelector(".sausage-btn");
let zaytunnBtn = document.querySelector(".zaytun-btn");

let total = document.querySelector(".total");
let dollar = 4;
let userOrder = total + order;


salamiBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (salami.classList.toggle("active")) {
    dollar += 3;
    total.innerHTML = `${dollar}$ dollars`;
  } else {
    dollar -= 3;
    total.innerHTML = ` ${dollar}$ dollars`;
  }
});

tomatoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (tomato.classList.toggle("active")) {
    dollar += 2;
    total.innerHTML = `${dollar}$ dollars`;
  } else {
    dollar -= 2;
    total.innerHTML = ` ${dollar}$ dollars`;
  }
});
mushroomBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (mushroom.classList.toggle("active")) {
    dollar += 2;
    total.innerHTML = `${dollar}$ dollars`;
  } else {
    dollar -= 2;
    total.innerHTML = ` ${dollar}$ dollars`;
  }
});
sausageBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (sausage.classList.toggle("active")) {
    dollar += 4;
    total.innerHTML = `${dollar}$ dollars`;
  } else {
    dollar -= 4;
    total.innerHTML = ` ${dollar}$ dollars`;
  }
});
zaytunnBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (oil.classList.toggle("active")) {
    dollar += 4;
    total.innerHTML = `${dollar}$ dollars`;
  } else {
    dollar -= 4;
    total.innerHTML = ` ${dollar}$ dollars`;
  }
});

orderBtn.addEventListener("click", () => {
  alert(`YOUR ORDER HAS BEEN ACCEPTED. ${dollar}$ FROM YOU. A GOOD APPETITE !`)
});
