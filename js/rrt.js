// Получаем все треки
const trackItems = document.querySelectorAll('.track-item audio');

// Добавляем обработчик для каждого трека
trackItems.forEach((audio, index) => {
  audio.addEventListener('ended', () => {
    // Если есть следующий трек
    if (index + 1 < trackItems.length) {
      trackItems[index + 1].play(); // Запускаем следующий трек
    }
  });
});