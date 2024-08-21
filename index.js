
const increaseBtn = document.getElementById('increaseBtn')
const decreaseBtn = document.getElementById('decreaseBtn')
const resetBtn = document.getElementById('resetBtn')

let countLabel = document.getElementById('countLabel')
let count = 0;

increaseBtn.onclick = function() {
    count += 1;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function() {
    count -= 1;
    countLabel.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}