import React from "react";

const User = ({ user }) => {
  return (
    <div className="bg-white rounded-lg py-6 px-8 col-span-6 sm:col-span-3 text-sm">
      <h1 className="font-bold">{user.name}</h1>
      <div>
        Email: <a href={user.email}>{user.email}</a>
      </div>
      <div>Phone: {user.phone}</div>
      <div>Business: {user.company.name}</div>
    </div>
  );
};

export default User;
