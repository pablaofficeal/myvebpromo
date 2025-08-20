from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/reg")
def reg():
    return render_template("reg.html")

@app.route("/log")
def log():
    return render_template("log.html") 

