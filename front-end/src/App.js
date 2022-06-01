import "./App.css";
import HttpCall from "./components/HttpCall";
import WebSocketCall from "./components/WebSocketCall";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

function App() {
  const [socketInstance, setSocketInstance] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const socket = io("localhost:5001/", {
      transports: ["websocket"],
      cors: {
        origin: "http://localhost:3000/",
      },
    });
    setSocketInstance(socket);
    socket.on("connect", (data) => {
      console.log(data);
    });
    setLoading(false);
  }, []);
  if (socketInstance !== "") {
    socketInstance.on("disconnect", (data) => {
      console.log(data);
    });
  }

  return (
    <div className="App">
      <h1>React/Flask App + socket.io</h1>
      <div className="line">
        <HttpCall />
      </div>
      <div className="line">
        {!loading && <WebSocketCall socket={socketInstance} />}
      </div>
    </div>
  );
}

export default App;
