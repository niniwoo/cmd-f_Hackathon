import React from "react";
import NavBar from "./NavBar";

const Chat = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-header">Chat</div>
            <div className="card-body">
              <div className="message received">
                <div className="message-info">Sender</div>
                <div className="message-text">Hello there!</div>
              </div>
              <div>
                <div>Hi there!</div>
                <div>You</div>
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
      </div>
      <NavBar />
    </div>
  );
};

export default Chat;
