let count = 0;
const btn = document.getElementById('clickBtn');
const counterText = document.getElementById('counter');

btn.addEventListener('click', () => {
    count++;
    counterText.textContent = `Кількість кліків: ${count}`;
});