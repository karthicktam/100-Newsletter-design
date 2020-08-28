import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="box">
      <img
        src="https://lh3.google.com/u/0/d/1-WTX2Kw4ZlgLnwT9gYyFOxVXowT9eS-t=w1375-h881-iv1"
        alt=""
      />
      <h2>Subscribe to our Newsletter</h2>
      <p>
        Our weekly newsletter provides you with the latest and most important
        happenings in the development industry.
      </p>
      <div className="form-control">
        <input
          type="text"
          className="input"
          placeholder="Enter e-mail address"
        />
        <button className="btn">Subscribe</button>
      </div>
    </div>
  );
}
