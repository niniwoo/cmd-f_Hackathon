import React from "react";
import NavBar from "./NavBar";

const Chat = () => {
  return (
    <div className="container p-3">
      <div
        className="row justify-content-center col-md-6"
        style={{ backgroundColor: "lightgrey" }}
      >
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">Chat</div>
            <div className="card-body">
              <div className="message received">
                <div className="message-info" style={{ fontWeight: "bold" }}>
                  User
                </div>
                <div className="message-text">
                  Hello there! I'm interested in 2 Avocados
                </div>
              </div>
            </div>
            <div className="card-footer">
              <input
                type="text"
                className="form-control"
                placeholder="Type your message..."
              />
              <button className="btn btn-primary mt-2">Send</button>
            </div>
          </div>
        </div>
        <NavBar />
      </div>
    </div>
  );
};

export default Chat;
