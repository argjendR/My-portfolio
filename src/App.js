import React, { useEffect, useState } from "react";
import Users from "./components/Users";

function App() {

  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto min-h-screen p-6">
      <h1 className="text-3xl mb-8">Users from API...</h1>
      <Users users={users} />
    </div>
  );
}

export default App;
