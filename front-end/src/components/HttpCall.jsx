import { useEffect, useState } from "react";

export default function HttpCall() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/http-call", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.data);
      });
  });
  return (
    <>
      <h1>HTTP Communication</h1>
      <h2>
        This text was fetched using an HTTP call to server on render:{" "}
        <p>{data}</p>
      </h2>
    </>
  );
}
