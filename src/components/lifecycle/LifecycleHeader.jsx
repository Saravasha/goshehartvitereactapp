import React from "react";

function LifecycleHeader({ environment }) {
  return (
    <>
      {environment === "staging" && (
        <div
          style={{
            backgroundColor: "darkorange",
            color: "white",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <strong>STAGING ENVIRONMENT</strong>
          <p> — Not for production use </p>
        </div>
      )}
      {environment === "development" && (
        <div
          style={{
            backgroundColor: "darkred",
            color: "white",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <strong>DEVELOPMENT ENVIRONMENT</strong>{" "}
          <p>— Not for production use</p>
        </div>
      )}
    </>
  );
}
export default LifecycleHeader;
