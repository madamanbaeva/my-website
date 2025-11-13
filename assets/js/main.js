// main.js — простой скрипт
document.addEventListener('DOMContentLoaded', function () {
  const greeting = document.getElementById('greeting');
  const btn = document.getElementById('btn');

  // Покажем сообщение
  greeting.textContent = 'Привет! Сайт успешно загружен.';

  // Кнопка добавляет время клика
  btn.addEventListener('click', function () {
    const now = new Date();
    alert('Кнопка нажата: ' + now.toLocaleString());
  });
});
