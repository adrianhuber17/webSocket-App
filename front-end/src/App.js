import "./App.css";
import HttpCall from "./components/HttpCall";
import WebSocketCall from "./components/WebSocketCall";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

function App() {
  const [socketInstance, setSocketInstance] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const socket = io("localhost:5000/", {
      withCredentials: true,
      transports: ["websocket"],
      cors: {
        origin: "http://localhost:3000/",
        credentials: true,
      },
    });
    setSocketInstance(socket);
    socket.on("connect", () => {
      socket.on("server_connected", (data) => {
        console.log(data.data);
      });
    });
    setLoading(false);
  }, []);
  return (
    <div className="App">
      <h1>React/Flask App (socket.io)</h1>
      <div className="line"></div>
      <HttpCall />
      <div className="line"></div>
      {!loading && <WebSocketCall socket={socketInstance} />}
    </div>
  );
}

export default App;
