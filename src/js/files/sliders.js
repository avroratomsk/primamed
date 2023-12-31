/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Autoplay, EffectFade, Navigation, Pagination, Thumbs } from 'swiper/modules';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, \
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector('.utp__slider')) { // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper('.utp__slider', { // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: false,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      loop: false,
      //preloadImages: false,
      //lazy: true,


      // Эффекты
      // effect: 'fade',
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },

      // Пагинация
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },

      // Скроллбар
      /*
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      */

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: '.utp__btns--prev',
        nextEl: '.utp__btns--next',
      },

      // Брейкпоинты
      // breakpoints: {
      // 	320: {
      // 		slidesPerView: 1,
      // 		spaceBetween: 20,
      // 		autoHeight: true,
      // 	},
      // 	485: {
      // 		slidesPerView: 2,
      // 		spaceBetween: 20,
      // 	},
      // 	992: {
      // 		slidesPerView: 3,
      // 		spaceBetween: 20,
      // 	},
      // 	1268: {
      // 		slidesPerView: 3,
      // 		spaceBetween: 30,
      // 	},
      // },
      // События
      on: {

      }
    });
  }

  if (document.querySelector('.partner__slider')) { // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper('.partner__slider', { // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 4,
      spaceBetween: 30,
      autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      loop: false,
      //preloadImages: false,
      //lazy: true,


      // Эффекты
      // effect: 'fade',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      // Пагинация
      // pagination: {
      //   el: '.swiper-pagination',
      //   clickable: true,
      // },

      // Скроллбар
      /*
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      */

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: '.partner-prev',
        nextEl: '.partner-next',
      },

      // Брейкпоинты
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          autoHeight: true,
        },
        485: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1268: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
      // События
      on: {

      }
    });
  }

  if (document.querySelector('.reviews__slider')) { // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper('.reviews__slider', { // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 2.5,
      spaceBetween: 30,
      autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      loop: false,
      //preloadImages: false,
      //lazy: true,


      // Эффекты
      // effect: 'fade',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      // Пагинация
      pagination: {
        el: '.reviews-pagi',
        clickable: true,
      },

      // Скроллбар
      /*
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      */

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: '.reviews-prev',
        nextEl: '.reviews-next',
      },

      // Брейкпоинты
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          autoHeight: true,
        },
        485: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1268: {
          slidesPerView: 3.5,
          spaceBetween: 30,
        },
      },
      // События
      on: {

      }
    });
  }

  if (document.querySelector('.specialist__slider')) { // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper('.specialist__slider', { // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 4,
      spaceBetween: 20,
      autoHeight: true,
      speed: 800,
      loop: false,

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      pagination: {
        el: '.reviews-pagi',
        clickable: true,
      },

      navigation: {
        prevEl: '.specialist-prev',
        nextEl: '.specialist-next',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          autoHeight: true,
        },
        485: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1268: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },

    });
  }

}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});