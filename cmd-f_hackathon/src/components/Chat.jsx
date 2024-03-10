import React from "react";

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
              <div className="message sent">
                <div className="message-text">Hi there!</div>
                <div className="message-info">You</div>
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
    </div>
  );
};

export default Chat;
