// Подключение функционала "Чертогов Фрилансера"
import { isMobile, bodyLockToggle } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const burgerBtn = document.querySelector('.bottom-header__burger');
const hiddenMenu = document.querySelector('.hidden-menu');


const dotesBtn = document.querySelector('.bottom-header__item--dotes');

if (dotesBtn) {
  dotesBtn.addEventListener('click', function (e) {
    document.querySelector('.hidden-header').classList.toggle('show')
  })
}
