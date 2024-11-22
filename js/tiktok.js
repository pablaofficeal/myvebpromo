// Лайки
document.querySelectorAll('.likes').forEach((likeButton) => {
    likeButton.addEventListener('click', () => {
        const videoId = likeButton.getAttribute('data-id');
        const likeCount = likeButton.querySelector('.like-count');
        let currentLikes = parseInt(likeCount.textContent);
        likeCount.textContent = currentLikes + 1;
    });
});

// Комментарии
document.querySelectorAll('.comment-input').forEach((commentInput) => {
    commentInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const videoId = commentInput.getAttribute('data-id');
            const commentList = document.getElementById(`comments-${videoId}`);
            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.textContent = commentInput.value;
            commentList.appendChild(newComment);
            commentInput.value = '';
        }
    });
});

// Репосты
document.querySelectorAll('.share').forEach((shareButton) => {
    shareButton.addEventListener('click', () => {
        const videoId = shareButton.getAttribute('data-id');
        alert(`Видео ${videoId} репостнуто!`);
    });
});
