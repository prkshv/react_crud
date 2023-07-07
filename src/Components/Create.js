import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Value Checked");
    const header = { "Access-Control-Allow-Origin": "*" };
    axios.post(
      "https://64a63fb7096b3f0fcc7f7a0f.mockapi.io/crud-operation/crud1",
      { name: name, email: email },
      header
    );
    history("/read");
  };

  return (
    <>
      <form className="container" style={{ width: "60%" }}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Create;
