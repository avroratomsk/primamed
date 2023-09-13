// Подключение функционала "Чертогов Фрилансера"
import { isMobile, bodyLockToggle, bodyLock, bodyUnlock } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

new VenoBox({
  selector: ".gallery__item"
});


let openSubmenuBtn = document.querySelector('.menu__btn');
let submenu = document.querySelector('.submenu');

if (openSubmenuBtn) {
  openSubmenuBtn.addEventListener('click', function (e) {
    bodyLock()
    openSubmenuBtn.classList.add('_active');
    if (submenu) {
      submenu.classList.add('_show-submenu')
    }
  })
}

let submenuCloseBtn = document.querySelector('.submenu__btn');
if (submenuCloseBtn) {
  submenuCloseBtn.addEventListener('click', function (e) {
    closeSubmenu()
  })
}

function closeSubmenu() {
  bodyUnlock()
  submenu.classList.remove('_show-submenu');
  openSubmenuBtn.classList.remove('_active')
}


// Всплывающие окно отзывов
let trigerPopupReviews = document.querySelectorAll('[data-popup=".popup-reviews"]');
trigerPopupReviews.forEach(btn => {
  btn.addEventListener('click', function (e) {
    let parent = this.closest('.reviews-slide');
    let data = this.dataset.popup;
    let popup = document.querySelector(data);
    let content = parent.querySelector('.reviews-slide__content').innerHTML;
    let popupBody = popup.querySelector('.popup__text');

    if (popup) {
      bodyLock();
      popupBody.innerHTML += content;
      popup.classList.add('popup_show');
      document.documentElement.classList.add('popup-show');
    }
  })
})

let popupReviewsCloseBtn = document.querySelector('.popup__close');
popupReviewsCloseBtn.addEventListener('click', function (e) {
  bodyUnlock()
  let popupReviews = document.querySelector('.popup-reviews');
  let child = popupReviews.querySelector('.popup__text');
  popupReviews.classList.remove('popup_show');
  child.innerHTML = '';
  document.documentElement.classList.remove('popup-show');
})


// Всплывающие окна

let popupButtons = document.querySelectorAll('[data-popup]');
if (popupButtons) {
  popupButtons.forEach(button => {
    button.addEventListener('click', popupOpen);
  })
}

function popupOpen(e) {
  let popupClass = e.target.dataset.popup;
  let popup = document.querySelector(popupClass);

  if (popup) {
    bodyLock()
    document.documentElement.classList.add('popup-show')
    popup.classList.add('popup_show')
  }
}

let popupCloseButton = document.querySelectorAll('.popup__close');
if (popupCloseButton) {
  popupCloseButton.forEach(button => {
    button.addEventListener('click', function (e) {
      bodyUnlock();
      let parent = this.closest('.popup');
      document.documentElement.classList.remove('popup-show');
      parent.classList.remove('popup_show');
    })
  })
}

let popups = document.querySelectorAll('.popup');
if (popups) {
  popups.forEach(popup => {
    popup.addEventListener('click', function (e) {
      if (!e.target.classList.contains('popup__content') && !e.target.closest('.popup__content')) {
        bodyUnlock();
        let parent = e.target.closest('.popup');
        document.documentElement.classList.remove('popup-show');
        parent.classList.remove('popup_show');
      }
    })
  })
}

// Поиск услуг на сайте
window.addEventListener('DOMContentLoaded', function () {
  let inputSeacrh = document.querySelector('#search_header');
  inputSeacrh.addEventListener('input', function (e) {
    let value = this.value.trim().toLowerCase();
    let list = document.querySelectorAll('.header-search__card');


    if (value) {
      list.forEach(item => {
        let textLowerCase = item.innerText.toLowerCase();
        if (textLowerCase.search(value) == -1) {
          item.classList.add('hidden-search-card')
        } else {
          item.classList.remove('hidden-search-card')
        }
      })
    } else {
      list.forEach(item => {
        item.classList.add('hidden-search-card')
      })
    }
  })
})






