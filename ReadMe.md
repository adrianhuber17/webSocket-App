# Simple ReactJS + Flask App using WebSockets (socket.io)

This simple App connects a Server (Flask) and a Client (React)
and opens a two way interactive communication using WebSocket technology with the socket.io library.
With WebSockets you can send messages to a server and receive event driven responses without having
to poll a server.

This repo was created to help users create WebSocket communication protocols, and regular HTTP communication with a Python Flask Server and a Javascript React Client.

## Tech Stack

**Client:** ReactJS,socket.io,socket.io-client

**Server:** Python3,eventlet,Flask-Cors,Flask-SocketIO

## Installation

Make sure you have installed Node.js, npm, Python3, and pip.
After installation please follow the instructions below to download the repo.

- Create folder in your local drive.
- Copy link: https://github.com/adrianhuber17/webSocket-App.git
- Open terminal and navigate to folder created.
- Type the following commands in the terminal under the folder created:

```bash
  git clone https://github.com/adrianhuber17/webSocket-App.git
```

- Navigate into the new sub-folder created called 'WebSocket-App'.
- Type the following commands to create an environment:

```bash
  python3 -m venv env
  source env/bin/activate
  pip install -r requirements.txt
```

- Navigate into 'front-end' folder and type the following command:

```bash
  npm i react-scripts
```

## Run Locally

Open 2 terminal windows, one to be used by the server with Python and the other
will be used by the Client with React.
Make sure Server is initialized before Client to avoid any issues.

Terminal 'window 1' start Server:

```bash
  cd 'local-folder-name'
  cd webSocket-App
  source env/bin/activate
  python3 server.py
```

Terminal 'window 2' start Client:

```bash
  cd 'local-folder-name'
  cd webSocket-App
  cd front-end
  npm start
```

## Demo

The browser on the left is Google Chrome and the Browser on the right is Firefox.
The demo below displays in 'red' a simple fetch to the server that was executed on the rendering of the page using an http call.
It also displats a chat communication between 2 users in the server using WebSocket communication.

![](/demo.gif)
