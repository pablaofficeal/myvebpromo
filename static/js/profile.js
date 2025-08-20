// Получаем элементы для обновления статистики
const songsPlayedEl = document.getElementById('songsPlayed');

// Функция для обновления статистики из LocalStorage
function updateProfileStats() {
    const songsPlayed = localStorage.getItem('songsPlayed') || 0;
    songsPlayedEl.textContent = songsPlayed;
}

// Обработчик для обновления статистики при прослушивании песни
function incrementSongsPlayed() {
    let songsPlayed = parseInt(localStorage.getItem('songsPlayed')) || 0;
    songsPlayed++;
    localStorage.setItem('songsPlayed', songsPlayed);
    updateProfileStats();
}

// Инициализация
updateProfileStats();

// Экспорт функции для вызова в music.js
window.incrementSongsPlayed = incrementSongsPlayed;
