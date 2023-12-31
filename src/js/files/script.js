// Подключение функционала "Чертогов Фрилансера"
import { isMobile, bodyLockToggle, bodyLock, bodyUnlock } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

new VenoBox({
  selector: ".gallery__item"
});

// Открытие подменю на экранах touch
let submenuBtn = document.querySelector('.menu__btn');
submenuBtn.addEventListener('click', function (e) {
  this.classList.toggle('active-arrow');

  let submenu = this.nextElementSibling;
  submenu.classList.toggle('active-submenu');
})

// Прилипающие меню сайта при скролле
window.addEventListener('scroll', function (e) {
  const bottomHeaderBlock = document.querySelector('.bottom-header');
  const heightBottomHeaderBlock = bottomHeaderBlock.clientHeight;
  const main = document.querySelector('main');
  if (window.pageYOffset > 1000) {
    main.style.marginTop = `${heightBottomHeaderBlock}px`;
    bottomHeaderBlock.classList.add('fixed');
  } else {
    main.style.marginTop = `0px`;
    document.querySelector('.bottom-header').classList.remove('fixed');
  }
})


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

let signUpButton = document.querySelectorAll('[data-popup=".popup-sign"]');

if (signUpButton) {
  signUpButton.forEach(button => {
    button.addEventListener('click', function (e) {
      let dataName = this.dataset.name;
      let popupSign = document.querySelector('.popup-sign');
      let inputService = popupSign.querySelector('.form-popup__input--service');
      inputService.value = dataName;
    })
  })
}

// LazyLoad

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.src) {
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
      } else {
        entry.target.style = `background-image: url("${entry.target.dataset.src}")`;
        observer.unobserve(entry.target);
      }

    }
  })
}, {
  rootMargin: '50px 0px 0px'
})

document.querySelectorAll('.lazy').forEach((image) => imageObserver.observe(image))








