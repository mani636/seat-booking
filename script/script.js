'use strict';

// Elements

const moviesEl = document.getElementById('movie');
const seatsEl = document.querySelectorAll('.row .seat:not(.occupied)');
const seatsCountEl = document.getElementById('count');
console.log(seatsCountEl);
const totalPriceEl = document.getElementById('total');

// global variables

let seatCount = 0;
let moviePrice = moviesEl.value;

// functions
function init() {
  seatsCountEl.innerText = seatCount;
  totalPriceEl.innerText = seatCount * moviePrice;
}

// event listeners
moviesEl.addEventListener('change', () => {
  moviePrice = moviesEl.value;
  init();
});

for (let i = 0; i < seatsEl.length; i++) {
  seatsEl[i].addEventListener('click', () => {
    if (seatsEl[i].classList.contains('selected')) {
      seatsEl[i].classList.remove('selected');
    } else {
      seatsEl[i].classList.add('selected');
    }
    let selectedSeats = document.querySelectorAll('.row .seat.selected');
    seatCount = selectedSeats.length;
    init();
  });
}

// initial settings

init();
