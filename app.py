from flask import Flask, render_template

app = Flask(__name__)
app.secret_key = 'your_secret_key'
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///mydatabase.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

app.config["DEBUG"] = False

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/reg")
def reg():
    return render_template("reg.html")

@app.route("/log")
def log():
    return render_template("log.html") 

