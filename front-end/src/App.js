import "./App.css";
import HttpCall from "./components/HttpCall";
import WebSocketCall from "./components/WebSocketCall";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

function App() {
  const [socketInstance, setSocketInstance] = useState("");
  const [loading, setLoading] = useState(true);
  const [buttonStatus, setButtonStatus] = useState(false);

  const handleClick = () => {
    if (buttonStatus === false) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  };

  // Use effect to be called on render of page only
  useEffect(() => {
    if (buttonStatus === true) {
      //Create socket.io connection on rendering of page
      const socket = io("localhost:5001/", {
        transports: ["websocket"],
        cors: {
          origin: "http://localhost:3000/",
        },
      });

      //set the socket connection instance to the useState
      setSocketInstance(socket);

      //send message to server that user has connected
      socket.on("connect", (data) => {
        console.log(data);
      });

      setLoading(false);

      return function cleanup() {
        socket.disconnect();
      };
    }
  }, [buttonStatus]);

  //send message to server and all other clients that a user has disconnected
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
      {!buttonStatus ? (
        <button onClick={handleClick}>turn chat on</button>
      ) : (
        <>
          <button onClick={handleClick}>turn chat off</button>
          <div className="line">
            {!loading && <WebSocketCall socket={socketInstance} />}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
