// Подключение функционала "Чертогов Фрилансера"
import { isMobile, bodyLockToggle } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const burgerBtn = document.querySelector('.bottom-header__burger');
const hiddenMenu = document.querySelector('.hidden-menu');

if (burgerBtn) {
  burgerBtn.addEventListener('click', function () {
    this.classList.toggle('open');
    document.querySelector('.hidden-menu').classList.toggle('show')
  })
}

// Дописать функцию клика мимо открытого скрытого меню 
hiddenMenu.addEventListener('click', function (e) {
  if (!e.target.closest('.hidden-menu') || e.target == null) {
    burgerBtn.classList.toggle('open');
    document.querySelector('.hidden-menu').classList.remove('show');
  }
})
