import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";

export default function App() {
  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID=""
        userName="sunoos"
        userSecret=""
      ></ChatEngine>
    </div>
  );
}
