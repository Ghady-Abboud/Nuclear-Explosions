"use client";
import React from "react";
import AppBar from "./components/appbar";
import Map from "./components/map";
import SideBar from "./components/sidebar";

export default function HomePage() {
  return (
    <>
      <div
        className="home-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          //border: "3px solid red",
        }}
      >
        <AppBar />
        <div className="main-content-wrapper" style={{display: 'flex', flexDirection: 'row', flexGrow: 1}}>
          <Map />
          <SideBar />
        </div>
      </div>
    </>
  );
}
