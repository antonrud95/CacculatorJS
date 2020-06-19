const inputCurrent = document.getElementById('input-current');

function getSymbol(selectedNumber) {
    inputCurrent.value += selectedNumber;
}

function cleanInput() {
    inputCurrent.value = '';
}

function equal() {
    inputCurrent.value = eval(inputCurrent.value);
}

inputCurrent.onkeypress = function(event) {
    if (+event.keyCode === 61) {
        inputCurrent.value = eval(inputCurrent.value);
    }
}
