// Функция для установки cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Функция для получения cookie по имени
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Функция для проверки, если данные уже есть в localStorage или cookies
function checkLogin() {
    const username = localStorage.getItem("username") || getCookie("username");
    if (username) {
        document.getElementById("message").textContent = `Добро пожаловать, ${username}!`;
        document.getElementById("message").style.color = "green";
        document.getElementById("musicSection").style.display = "block"; // Показываем контент
    }
}

// Проверяем, есть ли уже сохраненные данные
checkLogin();

// Логика для регистрации
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Предотвращаем стандартное поведение формы

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (username === "" || email === "" || password === "") {
        message.textContent = "Все поля должны быть заполнены!";
        message.style.color = "red";
    } else {
        // Сохраняем данные в localStorage и cookies
        localStorage.setItem("username", username);
        setCookie("username", username, 7); // Сохраняем на 7 дней в cookies

        message.textContent = "Регистрация прошла успешно!";
        message.style.color = "green";

        // Перенаправляем или показываем другую страницу
        setTimeout(function() {
            window.location.href = "music.html"; // Переход на страницу с музыкой
        }, 1500); // Задержка, чтобы пользователь увидел сообщение о регистрации
    }
});
