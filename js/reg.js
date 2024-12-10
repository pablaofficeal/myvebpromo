// Функция для установки cookie
function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Время жизни cookie
    let expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Функция для получения cookie по имени
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Функция для проверки наличия данных в LocalStorage
function checkLocalStorage() {
    return localStorage.getItem('username') !== null;
}

// Функция для проверки наличия данных в cookies
function checkCookies() {
    return getCookie('username') !== null;
}

// Функция для регистрации пользователя
function registerUser() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    // Проверка, если имя пользователя и пароль заполнены
    if (username === "" || password === "") {
        alert("Please fill in all fields!");
        return;
    }
    
    // Сохраняем имя и пароль в localStorage и cookie
    localStorage.setItem('username', username); // Сохранение в LocalStorage
    setCookie('username', username, 7); // Сохранение в cookies (на 7 дней)
    
    // Переадресация на страницу профиля после регистрации
    window.location.href = "profile.html"; // Перенаправление на страницу профиля
}

// Функция для проверки, если данные уже есть в LocalStorage или Cookies
function checkIfUserLoggedIn() {
    if (checkLocalStorage() || checkCookies()) {
        let username = localStorage.getItem('username') || getCookie('username');
        document.getElementById('welcome-message').textContent = "Welcome, " + username;
    } else {
        window.location.href = "login.html"; // Перенаправление на страницу логина, если данные не найдены
    }
}

// Функция для логина, если данные уже сохранены
function loginUser() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    // Проверка, если имя пользователя и пароль корректны (например, с сервером)
    if (username === "user" && password === "password") { // Здесь может быть логика проверки данных с сервером
        localStorage.setItem('username', username); // Сохраняем имя в localStorage
        setCookie('username', username, 7); // Сохраняем в cookies
        window.location.href = "profile.html"; // Перенаправление на страницу профиля
    } else {
        alert("Invalid username or password");
    }
}

// Функция для выхода из аккаунта
function logoutUser() {
    localStorage.removeItem('username'); // Удаление имени из localStorage
    setCookie('username', '', -1); // Удаление cookie
    window.location.href = "login.html"; // Перенаправление на страницу логина
}

// Запускаем проверку при загрузке страницы профиля
window.onload = function() {
    checkIfUserLoggedIn();
}
