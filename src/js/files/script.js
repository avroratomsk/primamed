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
// let trigerPopupReviews = document.querySelectorAll('[data-popup=".popup-reviews"]');
// trigerPopupReviews.forEach(btn => {
//   btn.addEventListener('click', function (e) {
//     let parent = this.closest('.reviews-slide');
//     let data = this.dataset.popup;
//     let popup = document.querySelector(data);
//     let content = parent.querySelector('.reviews-slide__content').innerHTML;
//     let popupBody = popup.querySelector('.popup__text');

//     if (popup) {
//       bodyLock();
//       popupBody.innerHTML += content;
//       popup.classList.add('popup_show');
//       document.documentElement.classList.add('popup-show');
//     }
//   })
// })

// let popupReviewsCloseBtn = document.querySelector('.popup__close');
// popupReviewsCloseBtn.addEventListener('click', function (e) {
//   bodyUnlock()
//   let popupReviews = document.querySelector('.popup-reviews');
//   let child = popupReviews.querySelector('.popup__text');
//   popupReviews.classList.remove('popup_show');
//   child.innerHTML = '';
//   document.documentElement.classList.remove('popup-show');
// })


// // Всплывающие окна

// let popupButtons = document.querySelectorAll('[data-popup]');
// if (popupButtons) {
//   popupButtons.forEach(button => {
//     button.addEventListener('click', popupOpen);
//   })
// }

// function popupOpen(e) {
//   let popupClass = e.target.dataset.popup;
//   let popup = document.querySelector(popupClass);

//   if (popup) {
//     bodyLock()
//     document.documentElement.classList.add('popup-show')
//     popup.classList.add('popup_show')
//   }
// }

// let popupCloseButton = document.querySelector('.popup__close');
// if (popupCloseButton) {
//   popupCloseButton.addEventListener('click', function (e) {
//     bodyUnlock();
//     document.documentElement.classList.remove('popup-show');
//     document.querySelector('.popup').classList.remove('popup_show')
//   })
// }





