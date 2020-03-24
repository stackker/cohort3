#
# See README.md for instructions
#
import os,shutil
import json
import traceback
from flask import Flask, jsonify, request, render_template
from flask_cors import CORS 


import sqlite3
from createdb import createDBCities



data = {}

app = Flask(__name__)		
app.secret_key = os.urandom(16)
CORS(app, supports_credentials=True)

# dict_factory creates a Dictionary from the cursor .description list
def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

def run_query(query):
	try:
		# Init the DB cities 
		connection = sqlite3.connect("cities.db")
		Cursor = connection.cursor()
		initQ = Cursor.execute("""SELECT name FROM sqlite_master WHERE type='table' AND name='cities'; """)
		if ((len(initQ.fetchall())) == 0 ): # is a list with zero entries?
			# create the cities table in cities DB created with the connect()
			print("Table cities not found. Creating table/DB 'cities'...")
			createDBCities() 

			# Same test exists in createdb.py as initializer

	except :
		#Dont do anything here, The main query is executed in finally 
		# as the first query to the database is what creates the DB and then
		# runs the actual fetch all for the first
		pass

	finally:
		connection = sqlite3.connect("cities.db")
		connection.row_factory = dict_factory
		cursor = connection.cursor()
		cursor.execute(query)
		connection.commit()
		rows = cursor.fetchall()
		connection.close()
		return rows



@app.route("/")
def hello():
	return render_template("clock-bos.html")
	# return "<h1>EvolveU test</h1> <h2>API Server up and running..</h2>"


@app.route("/all", methods = ['POST','GET'])
def all():

	try:
		query = ('SELECT * FROM cities')
		rows = run_query(query)
		# print(rows)
		response = {'Cities': rows, 'Status' : 0 }
	except:
		response = {'Cities': rows,'Status': -1}
	
	# data = response
	print("CITIES:")
	print(response['Cities'])
	return jsonify(response['Cities']), 200
	# print(list(data.values()))
	# return jsonify(list(data.values())),200

firstKeyType = None
@app.route("/add", methods = ['POST'])
def add():
	global data, firstKeyType
	content = request.get_json()

	if 'key' not in content:
		return jsonify({"msg":"There must be a 'key' attribute"}), 400

	key = content['key']

	if firstKeyType:
		if not isinstance(key, firstKeyType):
			return jsonify({"msg":"Keys must be of the same type, that last one was " +
			 str(firstKeyType) + " but this one is " + str(type(key))}), 400
	else:
		firstKeyType = type(key)

	if key in data:
		return jsonify({"msg":"You can not add '" + str(key) + "' again."}), 400
	
	data[key] = content
	print("content", content)


	try:
		query = "INSERT INTO cities (city, population, lat,long) VALUES (content['city'], content['population'], content['lat'], content['long'])"
		run_query(query)
		response = {"msg": str(key) + content['city']+ "Added",'Status': 200}
	except:
		response = {"msg": 'City:'+ content['city'] + "NOT Created ",'Status': 400}

	return jsonify(response),200


@app.route("/delete", methods = ['POST'])
def delete():
	global data
	content = request.get_json()
	if 'key' not in content:
		response = {"msg":"There must be a 'key' attribute", "Status":400}
	key = content['key']

	if key not in data:
		response = {"msg": str(key) + ",  does not exist.",'Status': 400}

	try:
		query = "DELETE FROM cities WHERE key =" + str(key)
		run_query(query)
		response = {"msg": 'City with key: '+ str(key) +': Deleted'}
	except :
		response = {"msg": 'Could not delete City with key: '+ str(key)}
	print(response)
	# del data[key]
	return jsonify(response)


@app.route("/read", methods = ['POST'])
def read():
	global data

	content = request.get_json()

	if 'key' not in content:
		return jsonify({"msg":"There must be a 'key' attribute"}), 400

	key = content['key']

	if key not in data:
		return jsonify({"msg":"You can not read '" + str(key) + "', it does not exist."}), 400

	return jsonify([data[key]]), 200


@app.route("/update", methods = ['POST'])
def update():
	global data

	content = request.get_json()

	if 'key' not in content:
		return jsonify({"msg":"There must be a 'key' attribute"}), 400

	key = content['key']

	if key not in data:
		return jsonify({"msg":"You can not update '" + str(key) + "', it does not exist."}), 400

	data[key] = content
	return jsonify({}), 200


@app.route("/load", methods = ['GET'])
def load():
	global data
	print("data1:", data)
	with open('data.json') as json_file:
		data = json.load(json_file)
		for d in data:
			print('Record: ', d)
	print("data2:", data)
	return "<h1>EvolveU test</h1> <h2>" + str(len(data)) + " records Loaded</h2>"


@app.route("/save", methods = ['GET'])
def save():
	global data
	with open('data.json', 'w') as outfile:
		json.dump(data, outfile)
	return "<h1>EvolveU test</h1> <h2>" + str(len(data)) + " records Saved</h2>"


@app.route("/clear", methods = ['POST','GET'])
def clear():
	global data
	data = {}
	return jsonify(data), 200


@app.route("/test", methods = ['POST','GET'])
def test():
	try :
		content = request.get_json()
		# print('in /test request: ',request)
		# print('in /test path: ',request.path)
		# print('in /test form: ',request.form)
		# print('in /test parms: ',request.args)
		# print('in /test json: ',request.get_json())
		return jsonify({'status': 'ok', 'content':content}), 200
	except Exception as e:
		traceback.print_stack()
		print('**** Not a valid request. ', e)
	return jsonify('{}'), 400

if __name__ == '__main__':
	print("--- Starting", __file__)
	app.run(host = '0.0.0.0',debug=True, use_reloader=True)
