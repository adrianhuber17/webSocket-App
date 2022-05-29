import "./App.css";
import HttpCall from "./components/HttpCall";
import { io } from "socket.io-client";
import { useEffect } from "react";

function App() {
  // const [room, setRoom] = useState("");

  useEffect(() => {
    io("localhost:5000/", {
      withCredentials: true,
      transports: ["websocket"],
      cors: {
        origin: "http://localhost:3000/",
        credentials: true,
      },
    });
  }, []);
  return (
    <div className="App">
      <h1>React App</h1>
      <HttpCall />
    </div>
  );
}

export default App;

// #https://www.youtube.com/watch?v=tPKyDM0qEB8
