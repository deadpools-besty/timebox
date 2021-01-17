from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'timebox-logo.png', mimetype='image/vnd.microsoft.icon')
    
if __name__ == '__main__':
    app.run(debug=True)

#from app import routes