import React from "react";

function LifecycleHeader({ environment }) {
  return (
    <>
      {environment === "staging" && (
        <div
          style={{
            backgroundColor: "darkorange",
            color: "white",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <strong>STAGING ENVIRONMENT</strong> — Not for production use
        </div>
      )}
      {environment === "development" && (
        <div
          style={{
            backgroundColor: "darkred",
            color: "white",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <strong>DEVELOPMENT ENVIRONMENT</strong> — Not for production use
        </div>
      )}
    </>
  );
}
export default LifecycleHeader;
