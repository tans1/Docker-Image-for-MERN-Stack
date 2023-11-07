import React, { useState } from "react";
import style from "./style.css";

function Create() {
  const [task, setTask] = useState("");
  const handleSubmit = async () => {
    console.log("being submitted")
    await fetch("http://localhost:5000/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: task
      })
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="create_container" style={style}>
      <div className="text_container">
        <input type="text" onChange={(e) => setTask(e.target.value)} />
      </div>
      <div className="button_container">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default Create;
