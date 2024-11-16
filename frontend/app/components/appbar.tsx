"use client";
import React from "react";

export default function AppBar() {
  return (
    <div
      className="Appbar-wrapper"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        backgroundColor: "black",
      }}
    >
      <div
        className="App-header"
        style={{ display: "flex", textAlign: "left", backgroundColor: "gray" }}
      >
        <h2
          style={{
            color: "white",
            flexGrow: 1,
            margin: "20px",
            fontSize: "28px",
          }}
        >
          NukeMap
        </h2>
        <h2 style={{ color: "white", margin: "20px", fontSize: "24px" }}>
          FAQ
        </h2>
        <h2 style={{ color: "white", margin: "20px", fontSize: "24px" }}>
          Resources
        </h2>
      </div>
    </div>
  );
}
