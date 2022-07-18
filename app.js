
const redBtn = document.getElementById('redBtn');
const blueBtn = document.getElementById('blueBtn');
const square =  document.querySelectorAll('.square');

redBtn.addEventListener('click', () => {
    square.forEach(item => {
        item.classList.toggle('hide');
    });
});
blueBtn.addEventListener('click', () => {
    square.forEach(item => {
        item.classList.toggle('hide');
    });
});