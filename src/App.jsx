import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <h1 >{user.name}</h1>
          <h2>{user.lastName}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
}

export default App;
