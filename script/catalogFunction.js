(function () {
    let countres = [[[{ 'name': 'Бенедетто ди Биндо', 'pic': '', 'remark': '', 'description': '' },
    { 'name': 'Бергоньоне, Амброджо', 'pic': '', 'remark': '', 'description': '' },
    { 'name': 'Биссоло, Франческо', 'pic': '', 'remark': '', 'description': '' },
    { 'name': 'Больтраффио, Джованни', 'pic': '', 'remark': '', 'description': '' },
    { 'name': 'Бонсиньори, Франческо', 'pic': '', 'remark': '', 'description': '' },
    { 'name': 'Боттичини, Рафаэлло', 'pic': '', 'remark': '', 'description': '' },
    { 'name': 'Брамантино', 'pic': '', 'remark': '', 'description': '' },
    { 'name': 'Бреа, Людовико', 'pic': '', 'remark': '', 'description': '' },
    { 'name': 'Бьяджо д’Антонио Туччи', 'pic': '', 'remark': '', 'description': '' },
    { 'name': 'Веккьетта', 'pic': '', 'remark': '', 'description': '' },
    { 'name': 'Андреа Верроккьо', 'pic': '', 'remark': '', 'description': '' },
    { 'name': 'Доменико Гирландайо', 'pic': 'img/cat1.jpg', 'remark': '2 июня 1448 — 11 января 1494.', 'description': 'Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени).' },
    { 'name': 'Беноццо Гоццоли', 'pic': '', 'remark': '', 'description': '' },
    { 'name': 'Граначчи, Франческо', 'pic': '', 'remark': '', 'description': '' },
    { 'name': 'Грегорио ди Чекко', 'pic': '', 'remark': '', 'description': '' },
    { 'name': 'Джованни да Удине', 'pic': '', 'remark': '', 'description': '' },
    { 'name': 'Джованни ди Паоло', 'pic': '', 'remark': '', 'description': '' },
    { 'name': 'Джорджоне', 'pic': '', 'remark': '', 'description': '' },
    { 'name': 'Парентино, Бернардо', 'pic': '', 'remark': '', 'description': '' },
    { 'name': 'Пезеллино', 'pic': '', 'remark': '', 'description': '' },
    { 'name': 'Пьетро Перуджино', 'pic': '', 'remark': '', 'description': '' },
    { 'name': 'Перуцци, Бальдассаре', 'pic': '', 'remark': '', 'description': '' },
    { 'name': 'Пизанелло', 'pic': '', 'remark': '', 'description': '' },
    { 'name': 'Пинтуриккьо', 'pic': '', 'remark': '', 'description': '' },
    ]]];




    function loadNames(country) {

        let num;
        let img = document.getElementById('cardPicture');
        let header = document.getElementById('cardName');
        let remark = document.getElementById('cardRemark');
        let desc = document.getElementById('cardDescription');
        let link = document.getElementById('cardLink');
        if (country === 'it') {
            num = 0;
        }
        else if (country === 'fr') { num = 1 }
        else if (country === 'ru') { num = 2 }
        else if (country === 'ge') { num = 3 }
        else if (country === 'is') { num = 4 }
        else num = -1;
        /*<li class="accordeon__item"> <button class="accordeon__btn">Бенедетто де
                                            Биндо</button></li> */



        if (countres[num] !== undefined) {
            emptyCard();
            for (let i = 0; i < 6; i++) {
                let parent = document.querySelector(`[data-content="${i}"]`);
                if (countres[num][i] !== undefined) {
                    let blocks = document.querySelectorAll('.accordeon__blockContainer');

                    for (block of blocks) {

                        block.remove();

                    }

                    for (let j = 0; j <= countres[num][i].length - 1; j++) {
                        //проверка на наличие контента

                        let button = document.createElement('button');
                        let li = document.createElement('li');

                        button.classList.add('accordeon__btn');
                        li.classList.add('accordeon__item');

                        button.textContent = countres[num][i][j].name;
                        button.setAttribute('data-artist',i);
                        parent.appendChild(li);
                        li.appendChild(button);

                        /*Вешаем событие по художникам */
                        button.addEventListener('click', function (element) {
                           
                            if (countres[num][i][j].pic === '') {
                                img.setAttribute('src', 'img/artists/nopic.jpg');
                            }
                            else {
                                img.setAttribute('src', countres[num][i][j].pic);
                            }


                            if (countres[num][i][j].description === '') {
                                header.textContent = "Что мы о нем знаем?";
                                desc.textContent = 'Пока ничего... Зато мы точно знаем, что в галерее есть на что посмотреть!';
                                remark.style.display='none';
                                link.style.display='block';
                            }
                            else {
                                
                                desc.textContent = countres[num][i][j].description;
                                header.textContent = countres[num][i][j].name;
                                remark.textContent = countres[num][i][j].remark;
                                remark.style.display='block';
                                link.style.display='none';
                            }

                            if (countres[num][i][j].remark === '') {
                               
                            }
                            else {
                                remark.textContent = countres[num][i][j].remark;
                                
                            }

                            /*красим кнопки-художников*/
                            let buttons = document.querySelectorAll('.accordeon__btn');
                            for (let buttonItem of buttons) {
                                buttonItem.classList.remove('accordeon__btn--focus');
                            };
                            element.currentTarget.classList.add('accordeon__btn--focus');

                        });

                        if (j === 11) {

                            button.classList.add('accordeon__btn--focus');
                            button.click();
                            
                        }

                    }
                } else {
                    emptyAccordion(parent)
                }


            };
            //let link = document.getElementById('cardLink').style.display = 'block';
            
        }
        else {/*затираем все */
            let uls = document.querySelectorAll('.accordeon__item');

            for (ul of uls) {

                ul.remove();

            }
            let blocks = document.querySelectorAll('.accordeon__blockContainer');

            for (block of blocks) {

                block.remove();

            }
            /*пишем что ничего нет */
            for (let i = 0; i < 7; i++) {
                let parent = document.querySelector(`[data-content="${i}"]`);
                emptyAccordion(parent);
                emptyCard();
            }

        }





    };


    /*функция заполнения пустых аккордионов */
    function emptyAccordion(parent) {
       

        for (let l = 0; l < parent.childElementCount; l++) {
            parent.removeChild();
        }
        let container = document.createElement('div');
        let right = document.createElement('div');
        let rectangle = document.createElement('div')
        let left = document.createElement('div');
        let title = document.createElement('h3');
        let parag = document.createElement('p');
        let link = document.createElement('a');


        container.classList.add('accordeon__blockContainer');
        right.classList.add('accordeon__blockRight');
        rectangle.classList.add('accordeon__blockRect');
        left.classList.add('accordeon__blockLeft');
        title.classList.add('accordeon__blockTitle');
        parag.classList.add('accordeon__blockParag');
        link.classList.add('accordeon__blockLink');

        title.textContent = 'Здесь пока пусто';
        parag.textContent = 'А в галерее вы всегда можете найти что-то интересное для себя';
        link.textContent = 'В галерею';
        link.setAttribute('href','#gallery');
        link.setAttribute('id','cardLink');
        link.style.display='block';
        container.appendChild(left);
        container.appendChild(right);

        left.appendChild(rectangle);
        right.appendChild(title);
        right.appendChild(parag);
        right.appendChild(link);
        parent.appendChild(container);

/*событие на линк */
link.addEventListener('click',function(el){
    if (link.classList.contains('accordeon__blockLink--focus')) {
        link.classList.remove('accordeon__blockLink--focus');
    } else {
        document.querySelectorAll('.accordeon__blockLink').forEach(function (mark) {
            mark.classList.remove('accordeon__blockLink--focus'); //снимаем актив у всех
        });
        link.classList.add('accordeon__blockLink--focus');
    }
    
});

    }
    /*затирка пустой карточки */
    function emptyCard() {
        let img = document.getElementById('cardPicture');
        let rem = document.getElementById('cardRemark');
        let header = document.getElementById('cardName');
        let desc = document.getElementById('cardDescription');
        let link = document.getElementById('cardLink');
        /*очищаем карточку слева */
        img.setAttribute('src', 'img/artists/nopic.jpg');
        header.textContent = "Что мы о нем знаем?";
        desc.textContent = 'Пока ничего... Зато мы точно знаем, что в галерее есть на что посмотреть!';
        rem.style.display='none';
        link.style.display='block';
    }
/*событие по художникам */
function onAccordionListClick(element, num, i,j){
    if (countres[num][i][j].pic === '') {
        img.setAttribute('src', 'img/artists/nopic.jpg');
    }
    else {
        img.setAttribute('src', countres[num][i][j].pic);
    }


    if (countres[num][i][j].description === '') {
        header.textContent = "Что мы о нем знаем?";
        desc.textContent = 'Пока ничего... Зато мы точно знаем, что в галерее есть на что посмотреть!';
        remark.style.display='none';
        link.style.display='block';
    }
    else {
        
        desc.textContent = countres[num][i][j].description;
        header.textContent = countres[num][i][j].name;
        remark.textContent = countres[num][i][j].remark;
        remark.style.display='block';
        link.style.display='none';
    }

    if (countres[num][i][j].remark === '') {
       
    }
    else {
        remark.textContent = countres[num][i][j].remark;
        
    }

    /*красим кнопки-художников*/
    let buttons = document.querySelectorAll('.accordeon__btn');
    for (let buttonItem of buttons) {
        buttonItem.classList.remove('accordeon__btn--focus');
    };
    element.currentTarget.classList.add('accordeon__btn--focus');
}


    window.loadNames = loadNames;
window.emptyCard = emptyCard;
})();