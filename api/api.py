import sqlite3
from flask import Flask, render_template
from flask_cors import CORS
from flaskext.mysql import MySQL


app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app)

@app.route('/')
def home_page():
	return app.send_static_file('index.html')

@app.route('/Accueil')
def Accueil_page():
    return app.send_static_file('index.html')

@app.route('/Nous')
def nous_page():
	return app.send_static_file('index.html')
	
@app.route('/NosServices')
def NosServices_page():
	return app.send_static_file('index.html')

@app.route('/FaireEnvoi')
def FaireEnvoi_page():
	return app.send_static_file('index.html')
	
@app.route('/ConseilsPratiques')
def ConseilsPratiques_page():
	return app.send_static_file('index.html')
	
@app.route('/SignSide')
def SignSide_page():
	return app.send_static_file('index.html')

@app.route('/search')
def Search_page():
	return app.send_static_file('index.html')

@app.route('/search/?search+"=?"')
def search__page():
	return app.send_static_file('index.html')


if __name__ == "__main__":
	app.debug=false
	app.run(host='0.0.0.0')