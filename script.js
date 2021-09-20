const headerBurger = document.querySelector(`.header__burger`),
      headerMenu = document.querySelector(`.header__menu`),
      body = document.querySelector(`.body`),
      link = document.querySelectorAll(`.header__link`);

headerBurger.addEventListener('click', hideShowMenu);

function hideShowMenu () {
  headerBurger.classList.toggle('active');
  headerMenu.classList.toggle('active');
  body.classList.toggle('lock');
}

link.forEach(item => item.addEventListener('click', closeMenu))

function closeMenu (){
    headerBurger.classList.remove('active');
    headerMenu.classList.remove('active');
}

console.log(`
  Самооценка по  заданию:
  
  1. Вёрстка валидна. +10
  2. Верстка симантическая. Используются 10 уникальных симантических тегов. +20
  3. Для оформления используются CSS-стили. +10
  4. Контент размещен в блоке с горизонтальной центровкой. +10
  5. Вёрстка адаптивна. +10
  6. Есть адаптичное бургер меню.  Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям.  +10
  7. На странице СV присутствует изображение -  аватарка CV, пропорции изображения не искажены, у изображения есть атрибут alt. +10
  8. Контакты для связи и перечень навыков оформлены в виде списка ul > li. +10
  9. CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского. +10
  10. CV содержит пример кода с подсветкой highlight.js.  +10
  11. CV содержит изображения-ссылки на выполненные мною проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10
  12. CV выполнено на английском языке. +10
  13. Выполнены требования к Pull Request. Выполнена самооценка. +10
  14. Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV. +10

  Итоговый балл: 150
`)