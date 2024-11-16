"use client";
import React from "react";
import AppBar from "./components/appbar";
import Map from "./components/map";

export default function HomePage() {
  return (
    <div className="home-wrapper" style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
        <AppBar />
        <Map />
    </div>

  )
}
