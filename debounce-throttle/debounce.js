
const debounceCount = document.querySelector('.debounce-count');
const throttleCount = document.querySelector('.throttle-count');
const input = document.querySelector('.input');
const inputValue = document.querySelector('.input-value');



function debounce(callback, time) {
    let debounceTimer;
    return (...args) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            callback(...args);
        }, time);
    };
}

const updateDebounce = debounce((input) => {
    debounceCount.textContent = input;
}, 500);

const updateThrottle = throttle((input) => {
    throttleCount.textContent = input;
}, 1000);
function throttle(callback, time) {
    let throttlePause = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - throttlePause < time) {
            return;
        }
        throttlePause = now;
        return callback(...args);
    };
}


input.addEventListener('input', (e) => {
    inputValue.textContent = input.value;
    updateDebounce(e.target.value);
    updateThrottle(e.target.value);
});