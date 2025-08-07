import { useEffect, useState } from "react";

export default function ErrorScreen() {
  const [websiteName, setWebsiteName] = useState("");

  useEffect(() => {
    const name = document?.title || "The Website";
    setWebsiteName(name);
  }, []);
  return (
    <div
      style={{
        height: "100vh",
        background: "#111",
        color: "#fff",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <div>
        <h1>🚨 {websiteName} is unavailable</h1>
        <p>We're having trouble connecting to the server.</p>
        <p>Please try again shortly.</p>
      </div>
    </div>
  );
}
