const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => {
  const trimInput = input.value.trim();
  output.textContent = trimInput === '' ? 'Anonymous' : trimInput;
});
