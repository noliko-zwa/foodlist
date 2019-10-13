document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("IronGenerator JS imported successfully!");

  },
  false
);

const items = document.querySelectorAll(".accordion a");
const filterItem = document.querySelectorAll(".filter-accordion p");

function toggleAccordion() {
  this.classList.toggle("active");
  this.nextElementSibling.classList.toggle("active");
}

items.forEach(item => item.addEventListener("click", toggleAccordion));
filterItem.forEach(item => item.addEventListener("click", toggleAccordion));

const tabmenu = () => {
  'use strict';
  const navIcon = document.querySelector('#nav-icon');

  navIcon.addEventListener('click', () => {
    navIcon.classList.toggle('open')
  });
}
tabmenu();




// 