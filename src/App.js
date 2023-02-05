import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Infos from "./components/Infos";

function App() {
  const [form, setForm] = useState({
    fullname: "",
    city: "",
    birthdate: "",
    color: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Form form={form} handleChange={handleChange} />}
        />
        <Route path="/infos" element={<Infos form={form} />} />
      </Routes>
    </div>
  );
}

export default App;
