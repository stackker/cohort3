from flask import Flask

app = Flask(__name__)

@app.route ('/')
def hello():
    print('Hello from hello.py ')
    return('Hello from hello.py ')
      
if __name__ == '__main__': 
    app.run(port = 5000)

 
 