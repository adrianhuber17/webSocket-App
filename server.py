from flask import Flask, render_template,request
from flask_socketio import SocketIO,emit,send

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route("/")
def hello_world():
    return render_template("index.html") 

@socketio.on("connect")
def connected():
    print(request.sid)
    print("client has connected")
    emit("server_connected",{"data":f"id: {request.sid} is connected"})

@socketio.on('data')
def handle_message(data):
    print("data from the front end: ",str(data))
    emit("data",{'data':data,'id':request.sid},broadcast=True,include_self=False)


if __name__ == '__main__':
    socketio.run(app, debug=True)


#https://www.youtube.com/watch?v=8ARodQ4Wlf4