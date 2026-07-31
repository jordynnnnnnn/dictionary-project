import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  
  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function handleResponse(response) {
    console.log(response);
  }

  let apiKey = "ca3401aa9fo6993fde3bf6t53aa16d30";
  let apiUrl =
    `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&apiKey=${apiKey}`;
    
    axios.get(apiUrl).then(handleResponse);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
