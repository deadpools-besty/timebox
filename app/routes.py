from app import app
from flask import render_template, send_from_directory, Flask
import os

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', title='Main')

    
@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'), 'timebox-logo.png', mimetype='image/vnd.microsoft.icon')
