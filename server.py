from flask import Flask, render_template
from flask_socketio import SocketIO,emit,send

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@app.route("/")
def hello_world():
    return render_template("index.html") 

@socketio.on("connect")
def connecte():
    print("connected to the client")
    emit("message", "Server connected")

@socketio.on('message')
def handle_message(data):
    print(str(data))
    emit("message", data,broadcast=True)

# socketio.on("chat")
# def handle_text(msg):
#     print(msg)

if __name__ == '__main__':
    socketio.run(app, debug=True)


#https://www.youtube.com/watch?v=8ARodQ4Wlf4