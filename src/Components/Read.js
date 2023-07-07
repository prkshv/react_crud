import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read(props) {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get("https://64a63fb7096b3f0fcc7f7a0f.mockapi.io/crud-operation/crud1")
      .then((res) => {
        setData(res.data);
      });
  }

  const handledelete = (id) => {
    axios
      .delete(
        `https://64a63fb7096b3f0fcc7f7a0f.mockapi.io/crud-operation/crud1/${id}`
      )
      .then(() => {
        getData();
      });
  };

  const setLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between mt-4 ms-3 me-5">
        <h2>Get Data</h2>
        <Link to="/">
          <button className="btn btn-secondary">Create Data</button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          setLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handledelete(eachData.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
}

export default Read;
