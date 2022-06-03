# Simple ReactJS + Flask App using WebSockets (socket.io)

This simple App connects a Flask server to a React client
and opens a two way interactive communication using WebSocket technology with the socket.io library.
With WebSockets you can send messages to a server and receive event driven responses without having
to poll a server.

This repo was created to help users create WebSocket communication protocols along with regular HTTP communication using a Python Flask server and a Javascript React client.

## Tech Stack

**Client:** ReactJS,socket.io,socket.io-client

**Server:** Python3,eventlet,Flask-Cors,Flask-SocketIO

## Installation

Make sure you have installed Node.js, npm, Python3, and pip.
After installation please follow the instructions below to download the repo.

- Within the terminal window, create a folder in your local drive.
- Navigate to the folder created.
- Run the following command:

```bash
  git clone https://github.com/adrianhuber17/webSocket-App.git
```

- Navigate into the new sub-folder created called **WebSocket-App**.
- Run the following commands to create an environment and install the dependencies:

```bash
  python3 -m venv env
  source env/bin/activate
  pip install -r requirements.txt
```

- Navigate into the /**front-end** folder and run the following command:

```bash
  npm i react-scripts
```

## Run Locally

Open two terminal windows, one to be used by the Flask server and the other
to be used by the React client.
Make sure the server is initialized before the client to avoid any issues.

Terminal **window 1** - start the server:

```bash
  cd webSocket-App
  source env/bin/activate
  python3 server.py
```

Terminal **window 2** - start the client:

```bash
  cd webSocket-App/front-end
  npm start
```

## Demo

The browser on the left is Google Chrome and the Browser on the right is Firefox.
The demo below displays in **red** a simple fetch to the server that executes on the rendering of the page using an http call.
It also displays a chat communication between two users in the server using WebSocket communication. Notice that when a message is sent by one
user, the other user receives the message without having to re-render the component or the page.

![](/applicationDemo.gif)

You will notice in the code that I manually set Flask to run on PORT 5001 instead of the usual PORT 5000.
This is because AirPlay in Apple is also running on PORT 5000 and it was making it difficult for Flask and React to connect
using WebSockets.
Another workaround is to turn off Airplay on the Mac by going to System Preferences > Sharing > uncheck AirPlay Receiver.
