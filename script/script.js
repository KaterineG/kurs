const swiper = new Swiper('.swiper-container', {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
});
/*Выпадающий список*/
document.addEventListener('DOMContentLoaded', function () {

  document.addEventListener('click', function (event) {

    if (event.target.className != 'dropdown' && event.target.className != 'menu__link' && event.target.className != 'select') {

      popup.forEach(function (elem) {
        elem.classList.remove('active');

      })
    }
    /*снимем обводку у кнопок слайдера*/
    if (event.target.className != 'gallery-svg-fill') {

      popup.forEach(function (elem) {
        elem.classList.remove('.btn_focus');

      })
    }
  });


  document.querySelectorAll('.select').forEach(function (selectBtn) {
    selectBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.item;
      const currOption = document.querySelector(`[data-dropdown="${path}"]`); //текущий выбор
      const mark = document.querySelector(`[data-mark="${path}"]`); //текущий выбор нижнего меню
      if (currOption.classList.contains('active')) {
        currOption.classList.remove('active');
      } //если установлен актив, то просто снимаем
      else {
        document.querySelectorAll('.option').forEach(function (dropdown) {
          dropdown.classList.remove('active'); //снимаем актив у всех   
        });
        currOption.classList.add('active'); //добавляем актив к текущему выбору


      };
      /*переворачиваем стрелочки*/
      if (mark.classList.contains('menu__icon--rotate')) {
        mark.classList.remove('menu__icon--rotate');
      } //если установлен menu__icon--rotate, то просто снимаем
      else {
        document.querySelectorAll('.menu__icon').forEach(function (marks) {
          marks.classList.remove('menu__icon--rotate'); //снимаем актив у всех
        })

        mark.classList.add('menu__icon--rotate'); //добавляем актив к текущему выбору


      }
    })


  })
  const popup = document.querySelectorAll('.dropdown');
  //загружаем контент про италию
  loadNames('it');

})
/*option*/


/**/
// Pass single element
const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',

});

/*swiper */
const swiperGalery = new Swiper('.gallery__swiper-container', {
  // If we need pagination
  pagination: {
    el: '.gallery__swiper-pagination',
    type: 'fraction',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  slideClass: 'gallery__swiper-slide',
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px

    1920: {
      slidesPerView: 3,
      spaceBetween: 50
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 34
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 34
    },    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    }


  }
});

/*состояние флага после клика */
document.querySelectorAll('.catalog__button').forEach(function (btnFlag) {
  btnFlag.addEventListener('click', function (elem) {
    if (btnFlag.classList.contains('push')) {
      btnFlag.classList.remove('push');
    } else {
      document.querySelectorAll('.catalog__button').forEach(function (mark) {
        mark.classList.remove('push'); //снимаем актив у всех
      });
      btnFlag.classList.add('push');
    }
    loadNames(btnFlag.dataset.country);


  });
  /*при клике на заголовок затираем карточку */
});



document.querySelectorAll('.accordion__block').forEach(function (head) {
  console.log(head);
  head.addEventListener('click', function () {

    emptyCard();
    //выделим все заголовки и снимем класс открытый
    document.querySelectorAll('.accordion__block').forEach(function (ab) {
      ab.classList.remove('accordion__block-open');
    });

    head.classList.add('accordion__block-open');

  })
  //установка поворота стрелочки
  head.addEventListener('click', function (elem) {
    const num = elem.currentTarget.dataset.block;
    const button = document.querySelector(`[data-button="${num}"]`); //кнопка

    if (button.classList.contains('active')) {
      button.classList.remove('active');
    } //если установлен поворот, то просто снимаем
    else {
      document.querySelectorAll('.accordion__button').forEach(function (activBtn) {
        activBtn.classList.add('rotator'); //снимаем актив у всех
      })
      button.classList.remove('rotator'); //добавляем актив к текущему выбору
      //////добавляем открытый класс



    }
    /*фокусируем на первой кнопке и ставим картинку*/
    let buttons = document.querySelectorAll('.accordion__btn');
    for (let buttonItem of buttons) {
      buttonItem.classList.remove('accordion__btnViolet');
    };
    let buttonFirst = document.querySelector(`[data-artist="${num - 1}"]`);
    if (buttonFirst)
      buttonFirst.click();
  })
})




/*accordion */

$(function () {
  $("#accordion").accordion({ heightStyle: "content" });
});
/*поворот стрелочки аккордеона клик на хедере */






document.querySelectorAll('.gallery-svg-fill').forEach(function (button) {
  button.addEventListener('click', function (e) {
    /**/
    e.currentTarget.classList.add('btn_focus');

  })
});
/*events-swiper */
const swiperEvents = new Swiper('.events__swiper', {
  // Optional parameters
  // If we need pagination
  // Navigation arrows
  navigation: {
    nextEl: '.events__swiper-button-next',
    prevEl: '.events__swiper-button-prev',
  },
  slideClass: 'events__swiper-slide',

  pagination: {
    el: '.events__swiper-pagination',
    type: 'bullets',
  },
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px

    320: {
      slidesPerView: 1,
      spaceBetween: 40,

    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 34
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
});

/*красим точку в выборе */


document.querySelectorAll('.option__item').forEach(function (option) {
  option.addEventListener('click', function (el) {
    document.querySelectorAll('.option__item').forEach(function (e) {
      e.classList.remove('option__checked');
    });
    el.currentTarget.classList.add('option__checked');

  });
});

const projectswiper = new Swiper('.project__swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 50,
  // If we need pagination
  pagination: {
    el: 'project__swiper-pagination',
  },
  slideClass: 'project__swiper-slide',
  // Navigation arrows
  navigation: {
    nextEl: '.project__swiper-button-next',
    prevEl: '.project__swiper-button-prev',
  },

});


document.querySelectorAll('.project__swiper-slide').forEach(function (el) {

  el.addEventListener('click', function (curslide) {

    document.querySelectorAll('.project__swiper-slide').forEach(function (slide) {
      slide.classList.remove('slidefocus');
    });

    curslide.currentTarget.classList.add('slidefocus');

  })
});
document.querySelector('.callback__form').addEventListener('submit', function (event) {
  event.preventDefault();
  let namevalue = document.querySelector('.contacts__name');
  let tel = document.querySelector('.contacts__tel');
  let letters = /[а-яФ-Яa-zA-Z]/;

  if (namevalue.value === "" || !namevalue.value.match(letters)) {
    namevalue.classList.add('form__invalid');

  }
  else {
    namevalue.classList.remove('form__invalid');
  }
  if (tel.value === "") { tel.classList.add('form__invalid') }
  else {
    tel.classList.remove('form__invalid')
  }

})

document.querySelector('.header__burger').addEventListener('click', function () {
  document.querySelector('.header__mobil').style.display = 'block';
})

document.querySelector('.header__close').addEventListener('click', function () {
  document.querySelector('.header__mobil').style.display = 'none';
})
