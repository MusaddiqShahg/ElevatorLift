let position = 0;
const lift = document.querySelector('.lift');
const step = 100;
const containerHeight = 500;
const liftHeight = 100;

function moveLift(direction) {
    if (direction === 'up') {
        if (position < containerHeight - liftHeight) {
            position += step;
        }
    } else if (direction === 'down') {
        if (position > 0) {
            position -= step;   
        }
    }
    lift.style.bottom = `${position}px`;
}