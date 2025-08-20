from flask import Flask, render_template
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/reg")
def reg():
    return render_template("reg.html")

@app.route("/log")
def log():
    return render_template("log.html") 

if __name__ == "__main__":
    app.run(debug=True)