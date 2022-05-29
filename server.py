from flask import Flask, render_template,request,jsonify
from flask_socketio import SocketIO,emit,send
from flask_cors import CORS

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
CORS(app,resources={r"/*":{"origins":"*"}})
socketio = SocketIO(app,cors_allowed_origins="*")

@app.route("/")
def hello_world():
    return render_template("index.html") 

@app.route("/http-call")
def http_call():
    data = {'data':'http api call'}
    return jsonify(data)

@socketio.on("connect")
def connected():
    print(request.sid)
    print("client has connected")
    emit("server_connected",{"data":f"id: {request.sid} is connected"})

@socketio.on('data')
def handle_message(data):
    print("data from the front end: ",str(data))
    emit("data",{'data':data,'id':request.sid},broadcast=True,include_self=False)

@socketio.on("disconnect")
def disconnected():

    print("user disconnected")
    emit("disconnected_user","user disconnected",broadcast=True)

if __name__ == '__main__':
    socketio.run(app, debug=True)
