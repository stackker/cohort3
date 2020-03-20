from flask import Flask, jsonify, request
from flask_cors  import CORS

flaskServ = Flask(__name__)


stores =[
    {'name' :'My Store1',
    'items':[
        {'iname':"Item 1", 'price':25.00},
        {'iname':"Item 2", 'price':26.00},
        {'iname':"Item 3", 'price':27.00}

    ]},
    {'name' :'MyStore2',
    'items':[
        {'iname':"2Item 1", 'price':125.00},
        {'iname':"2Item 2", 'price':126.00},
        {'iname':"2Item 3", 'price':227.00}

    ]}
]



@flaskServ.route('/')
def home():
    return "Hello from flaskServ"

@flaskServ.route('/thanks')
def page():
    return "Thank You Jesus"

# REST API Requests

# @flaskServ.route('/store/<string:name>', methods =['POST'])
# def createstore(name):
@flaskServ.route('/store', methods =['POST'])
def createstore():
    request_data = request.get_json()   
    new_store = {'name':request_data['name'], 'items':[]}
    stores.append(new_store)
    return jsonify(stores)
    


@flaskServ.route('/store/<string:name>')
def getstore(name):
    for store in stores:
        
        if store['name'] == name:
            return jsonify(store)

    return jsonify({'message': 'Store not found'})


@flaskServ.route('/store')
def getstores():
    return jsonify({'stores':stores})
    

@flaskServ.route('/store/<string:name>/items/<string:item>', methods = ['POST'])
def createitems(name):
    pass


# print(getstore('MyStore2'))

flaskServ.run(port = 5000)

