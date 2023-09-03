// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const slides = Array.from(slider.querySelectorAll('img'));
const prevButton = document.querySelector('.work_examples_arrow_left');
const nextButton = document.querySelector('.work_examples_arrow_right');
const slideCount = slides.length;
let slideIndex = 0;

const city = document.querySelector('.city');
const getCity = Array.from(city.querySelectorAll('p'));
const area = document.querySelector('.area');
const getArea = Array.from(area.querySelectorAll('p'));
const time = document.querySelector('.time');
const getTime = Array.from(time.querySelectorAll('p'));
const cost = document.querySelector('.cost');
const getCost = Array.from(cost.querySelectorAll('p'));

const dots = document.querySelector('.work_examples_dots');
const getDot = Array.from(dots.querySelectorAll('button'));

const items = document.querySelector('.work_examples_list');
const getItem = Array.from(items.querySelectorAll('button'));

const firstDot = document.querySelector('.first');
const secondDot = document.querySelector('.second');
const thirdDot = document.querySelector('.third');

const firstItem = document.querySelector('.admiral');
const secondItem = document.querySelector('.thieves');
const thirdItem = document.querySelector('.patriotic');

// Устанавливаем обработчики событий для кнопок, точек и ссылок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

firstDot.addEventListener('click', showFirstSlide);
secondDot.addEventListener('click', showSecondSlide);
thirdDot.addEventListener('click', showThirdSlide);

firstItem.addEventListener('click', showFirstSlide);
secondItem.addEventListener('click', showSecondSlide);
thirdItem.addEventListener('click', showThirdSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

//Функция для показа первого слайда
function showFirstSlide () {
  slideIndex = 0;
  firstDot.classList.add('active');
  secondDot.classList.remove('active');
  thirdDot.classList.remove('active');
  firstItem.classList.add('active_yellow');
  secondItem.classList.remove('active_yellow');
  thirdItem.classList.remove('active_yellow');
  updateSlider();
}

//Функция для показа второго слайда
function showSecondSlide () {
  slideIndex = 1;
  firstDot.classList.remove('active');
  secondDot.classList.add('active');
  thirdDot.classList.remove('active');
  firstItem.classList.remove('active_yellow');
  secondItem.classList.add('active_yellow');
  thirdItem.classList.remove('active_yellow');
  updateSlider();
}

//Функция для показа третьего слайда
function showThirdSlide () {
  slideIndex = 2;
  firstDot.classList.remove('active');
  secondDot.classList.remove('active');
  thirdDot.classList.add('active');
  firstItem.classList.remove('active_yellow');
  secondItem.classList.remove('active_yellow');
  thirdItem.classList.add('active_yellow');
  updateSlider();
} 

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  }),
  getCity.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  }),
  getArea.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  }),
  getTime.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  }),
  getCost.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  }),
  getDot.forEach((dot, index) => {
    if (index === slideIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  }),
  getItem.forEach((work_examples_link, index) => {
    if (index === slideIndex) {
      work_examples_link.classList.add('active_yellow');
    } else {
      work_examples_link.classList.remove('active_yellow');
    }
  });
}

// Инициализация слайдера
updateSlider();