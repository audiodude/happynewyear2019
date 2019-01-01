const words = ['happy', 'new', 'year'];

const backgrounds = [
  '#CAE5F9',
  '#ADD7F6',
  '#87BFFF',
  '#3F8EFC',
  '#567AA3',
];

const foregrounds = [
  '#E6AF2E',
  '#F1A58D',
  '#FFC857',
  '#EDF060',
  '#E5EA5D',
];

const borders = [
  '#4B244A',
  '#533A7B',
  '#000000',
  '#6969B3',
  '#4C934C',
  '#91CB3E',
  '#FFC857',
  '#EDF060',
]

function styleWord(word) {
  const bg = backgrounds[Math.floor(Math.random()*backgrounds.length)];
  $(word).css('backgroundColor', bg);
  const fg = foregrounds[Math.floor(Math.random()*foregrounds.length)];
  $(word).css('color', fg);
  const border = borders[Math.floor(Math.random()*borders.length)]
  $(word).css('border-color', border);
}

let locked = false;
function swapWord() {
  if (locked) {
    return;
  }
  locked = true;
  const word = words[Math.floor(Math.random()*words.length)];
  const wordEl = $(`.words.${word}`).first();
  const secondEl = wordEl.clone();
  secondEl.css('transform', 'scale(1.25)');
  secondEl.addClass('fresh');
  styleWord(secondEl);
  wordEl.after(secondEl);
  window.setTimeout(() => {
    $(wordEl).remove();
    secondEl.removeClass('fresh');
    secondEl.css('transform', '');
    locked = false;
  }, 200);
}

$(() => {
  $('body').click(swapWord);
});
