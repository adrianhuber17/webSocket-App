import { useEffect, useState } from "react";

export default function HttpCall() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/http-call", {
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.data);
      });
  });
  return <h2>{data}</h2>;
}
