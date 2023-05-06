// Вспомогательный массив с данными слайдов
const slides = [
  {
    id: '01',
    header: 'Lorem ipsum dolor sit amet!',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.`
  },
  {
    id: '02',
    header: 'Lorem ipsum!',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.`
  },
  {
    id: '03',
    header: 'Lorem ipsum!',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.`
  },
  {
    id: '04',
    header: 'Lorem ipsum dolor sit amet!',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.`
  },
  {
    id: '05',
    header: 'Lorem ipsum!',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.`
  },
  {
    id: '06',
    header: 'Lorem ipsum!',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.`
  }
]

// Определяем элементы, c которыми будем взаимодействовать
const slideNmbElements = document.querySelectorAll('.dynamic-slide-nmb')
const slideHeaderElement = document.querySelector('.dynamic-slide-header')
const slideTextElement = document.querySelector('.dynamic-slide-text')
const scrollBtnElement = document.querySelector('.btn-wrapper__btn')
const sliderIndicatorElement = document.querySelector('.dynamic-slider-indicator')

// Ф-ция определения предыдущего индекса из массива слайдов sliders
function prevIndexDefinition(index) {
  return index === 0 ? slides.length - 1 : index - 1
}

// Ф-ция установки значений и добавления-удаления классов в элементы
function setElements(index) {
  slideNmbElements.forEach((element) => element.innerText = slides[index]['id'])
  slideHeaderElement.innerText = slides[index]['header']
  slideTextElement.innerText = slides[index]['text']

  const newClass = classCreator(index)
  const oldClass = classCreator(prevIndexDefinition(index))
  sliderIndicatorElement.classList.add(`${newClass}`)
  sliderIndicatorElement.classList.remove(`${oldClass}`)
}

// Инициализируем состояние элементов нулевым индексом массива sliders
let slideIndex = 0

setElements(slideIndex)
function classCreator(index) {
  return `slide${slides[index]['id']}`
}

// Вешаем обработчик на событие onClick кнопки скролла слайдов 
scrollBtnElement.onclick = function () {
  if (slideIndex < slides.length - 1) {
    slideIndex++
  }
  else {
    slideIndex = 0
  }
  setElements(slideIndex)
}