import React from "react";
import { Link } from "react-router-dom";

const Form = ({ form, handleChange }) => {
  return (
    <div>
      <h1>Bilgilerinizi Giriniz</h1>
      <form>
        <input
          value={form.fullname}
          onChange={handleChange}
          type="text"
          name="fullname"
          placeholder="
        Adınızı ve Soyadınızı Giriniz"
        />

        <select value={form.city} onChange={handleChange} name="city">
          <option value="">Lütfen bir şehir seçiniz</option>
          <option value="istanbul">İstanbul</option>
          <option value="ankara">Ankara</option>
          <option value="izmir">İzmir</option>
        </select>
        <input
          value={form.birthdate}
          onChange={handleChange}
          type="date"
          name="birthdate"
        />
        <input
          value={form.color}
          onChange={handleChange}
          type="color"
          name="color"
        />
        <textarea
          value={form.address}
          onChange={handleChange}
          rows="10"
          name="address"
          placeholder="Adresinizi giriniz"
        ></textarea>
        <Link to="/infos">
          <button className="submitBtn" type="submit">
            Gönder
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Form;
