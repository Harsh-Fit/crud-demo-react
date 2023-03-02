import "./App.css";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const [booking, setBooking] = useState([]);

  const update = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const newBooking = { ...data, id: new Date().getTime().toString() };

  function saveBooking(e) {
    e.preventDefault();
    setBooking([...booking, newBooking]);
    setData({
      name: "",
      email: "",
    });
  }
  console.log(booking);

  function updateId(id) {
    console.log(id);
    console.log(booking[id - 1].email);
    console.log(booking[id - 1].name);
    setData({
      name: booking[id - 1].name,
      email: booking[id - 1].email,
    });
  }

  function deleteId(id) {
    const remove = booking.filter((user) => {
      return user.id !== id;
    });
    setBooking(remove);
    setData({
      name: "",
      email: "",
    });
  }

  return (
    <div className="App">
      <h1>Harshwardhan</h1>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        onChange={update}
        value={data.name}
      />{" "}
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        onChange={update}
        value={data.email}
      />{" "}
      <button onClick={saveBooking}>Submit User</button> <br />
      <br />
      <table border={1} style={{ margin: "auto" }}>
        <tbody>
          <tr>
            <td>Sr.No</td>
            <td>Name</td>
            <td>Email</td>
            <td>Update</td>
            <td>Delete</td>
          </tr>

          {booking.map((user, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => updateId(i + 1)}>Update</button>
              </td>
              <td>
                <button onClick={() => deleteId(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
