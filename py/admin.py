from flask import Flask, session
from flask_admin import Admin
from flask_sqlalchemy import SQLAlchemy
from flask_admin.contrib.sqla import ModelView

from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/save-data', methods=['POST'])
def save_data():
    user_data = request.json.get('data')
    # Теперь ты можешь использовать user_data для любых целей
    print(f'Полученные данные: {user_data}')
    # Пример: сохраняем данные в сессии
    session['user_data'] = user_data
    return jsonify({"message": "Data saved successfully!"})

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///your_database.db'
app.secret_key = 'your_secret_key'  # секретный ключ для сессий
app.config['SESSION_TYPE'] = 'filesystem'  # хранение сессий

db = SQLAlchemy(app)

# Модель для базы данных
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50))

# Создаем админ-панель
admin = Admin(app, name='My Admin Panel', template_mode='bootstrap3')

# Добавляем представление для модели User
admin.add_view(ModelView(User, db.session))

if __name__ == '__main__':
    app.run(debug=True)
