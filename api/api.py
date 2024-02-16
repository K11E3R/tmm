import sqlite3
from flask import Flask, render_template
from flask_cors import CORS
from flaskext.mysql import MySQL
import cx_Oracle      
import csv
#import StringIO   

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

@app.route('/search/?search=')
def search__page():
	return app.send_static_file('index.html')

"""
commande pour le export 
@app.route('/search/?search=<int:identifier>', methods=['GET'])
def export(load_file_id):
    si = StringIO.StringIO()
    cw = csv.writer(si)
    c = g.db.cursor()
    c.execute('SELECT * FROM blog WHERE column_val = :identifier', identifier=identifier)
    rows = c.fetchall()
    cw.writerow([i[0] for i in c.description])
    cw.writerows(rows)
    response = make_response(si.getvalue())
    response.headers['Content-Disposition'] = 'attachment; filename=report.csv'
    response.headers["Content-type"] = "text/csv"
    return response
"""
if __name__ == "__main__":
	app.debug=False
	app.run(host='0.0.0.0')