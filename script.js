'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar  = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i  = 0; i < navElemArr.length; i++) {

    navElemArr[i].addEventListener("click", function () {

        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.classList.toggle("active");
    });
    
}

/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

Window.addEventListener("scroll", function () {

    window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active")
});