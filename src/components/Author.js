import React from "react";

function Author({ author, onSave }) {
  return (
    <div className="author">
      <h1>{author.name}</h1>
      <h2>{author.email} </h2>
      <h2>{author.phone} </h2>
      <a href={author.webpage} target="_blank" rel="noreferrer">
        {author.webpage}
      </a>
      <img src="src\logo.svg" alt="portret" />
      <button onClick={onSave}>Save</button>
    </div>
  );
}

export default Author;
