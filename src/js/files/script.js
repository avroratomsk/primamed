// Подключение функционала "Чертогов Фрилансера"
import { isMobile, bodyLockToggle, bodyLock } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

new VenoBox({
  selector: ".gallery__item"
});


let openSubmenuBtn = document.querySelector('.menu__btn');
if (openSubmenuBtn) {
  openSubmenuBtn.addEventListener('click', function (e) {
    this.classList.add('_active');
    bodyLock()

    let submenu = document.querySelector('.submenu');

    if (submenu) {
      submenu.classList.add('_show-submenu')
    }
  })
}

let submenuCloseBtn = document.querySelector('.submenu__btn');
if (submenuCloseBtn) {
  submenuCloseBtn.addEventListener('click', function (e) {
    document.querySelector('.submenu').classList.remove('_show-submenu');

    document.querySelector('.menu__btn').classList.remove('_active')
  })
}

