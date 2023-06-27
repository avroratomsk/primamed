// Подключение функционала "Чертогов Фрилансера"
import { isMobile, bodyLockToggle } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const searchBtn = document.querySelector('.header__search');
if (searchBtn) {
  let searcBlock = document.querySelector('.search');
  searchBtn.addEventListener('click', function (e) {
    searcBlock.classList.add('_active');
    bodyLockToggle();
  })
}

const searchInput = document.querySelector('.search__input');
if (searchInput) {
  searchInput.addEventListener('input', function (e) {
    if (e.target.value != '') {
      document.querySelector('.search__delete').style.display = 'block';
    } else {
      document.querySelector('.search__delete').style.display = 'none';
    }
  });
}

const clearBtn = document.querySelector('.search__delete');
if (clearBtn) {
  clearBtn.addEventListener('click', function (e) {
    document.querySelector('.search__input').value = '';
  })
}
