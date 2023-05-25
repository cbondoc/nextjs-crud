"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Hello from Next.js!</h1>
      <p>{message}</p>
    </div>
  );
}
