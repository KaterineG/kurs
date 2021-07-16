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
document.addEventListener('DOMContentLoaded', function() {

        document.addEventListener('click', function(event) {

            if (event.target.className != 'dropdown' && event.target.className != 'menu__link' && event.target.className != 'select') {

                popup.forEach(function(elem) {
                    elem.classList.remove('active');

                })
            }


        });


        document.querySelectorAll('.select').forEach(function(selectBtn) {
            selectBtn.addEventListener('click', function(event) {
                const path = event.currentTarget.dataset.item;
                const currOption = document.querySelector(`[data-dropdown="${path}"]`); //текущий выбор
				const mark = document.querySelector(`[data-mark="${path}"]`); //текущий выбор нижнего меню
                if (currOption.classList.contains('active')) {
                    currOption.classList.remove('active');
                } //если установлен актив, то просто снимаем
                else {
                    document.querySelectorAll('.option').forEach(function(dropdown) {
                        dropdown.classList.remove('active'); //снимаем актив у всех   
						});
                        currOption.classList.add('active'); //добавляем актив к текущему выбору

                 
                }
				;
				/*переворачиваем стрелочки*/
				 if (mark.classList.contains('menu__icon--rotate')) {
                    mark.classList.remove('menu__icon--rotate');
                } //если установлен menu__icon--rotate, то просто снимаем
                else {
                    document.querySelectorAll('.menu__icon').forEach(function(marks) {
                        marks.classList.remove('menu__icon--rotate'); //снимаем актив у всех
						})
						
				mark.classList.add('menu__icon--rotate'); //добавляем актив к текущему выбору

                    
                }
            })


        })
        const popup = document.querySelectorAll('.dropdown');

        /*Фото для слайдера галереи
        const slides = document.querySelectorAll('.gallery__swiper-slide');
        for (let i = 1; i<=slides.length; i++)
        {console.log(slides[i-1]);
          slides[i-1].style.backgroundImage="url('../img/gallery/"+i+".jpg')"};*/
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
const swiperGslery = new Swiper('.gallery__swiper-container', {
    // Optional parameters



    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
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
    slidesPerColumn: 2,
    slidesPerView: 3,
    spaceBetween: 50,
});

/*состояние флага после клика */
document.querySelectorAll('.catalog__button').forEach(function(btnFlag) {
        btnFlag.addEventListener('click', function(elem) {
            if (btnFlag.classList.contains('push')) {
                btnFlag.classList.remove('push');
            } else {
                document.querySelectorAll('.catalog__button').forEach(function(mark) {
                    mark.classList.remove('push'); //снимаем актив у всех
                });
                btnFlag.classList.add('push');
            }
        })




    })
    /*accordion */

$(function() {
    $("#accordion").accordion();
});
/*поворот стрелочки аккордеона */
/*состояние флага после клика */
document.querySelectorAll('.accordion__header').forEach(function(btnAcc) {
    btnAcc.addEventListener('click', function(elem) {
        const num = elem.currentTarget.dataset.num;
        const button = document.querySelector(`[data-button="${num}"]`); //кнопка

        if (button.classList.contains('active')) {
            button.classList.remove('active');
        } //если установлен поворот, то просто снимаем
        else {
            document.querySelectorAll('.accordion__button').forEach(function(activBtn) {
                activBtn.classList.remove('rotator'); //снимаем актив у всех
            })
            button.classList.add('rotator'); //добавляем актив к текущему выбору


        }
    })




})