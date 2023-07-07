import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Update(props) {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleupdate = (e) => {
    e.preventDefault();

    axios
      .put(
        `https://64a63fb7096b3f0fcc7f7a0f.mockapi.io/crud-operation/crud1/${id}`,
        { name: name, email: email }
      )
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <form className="container" style={{ width: "60%" }}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleupdate}
        >
          Update
        </button>
        <Link to="/read">
          <button className="btn btn-info m-3">Back</button>
        </Link>
      </form>
    </>
  );
}

export default Update;
