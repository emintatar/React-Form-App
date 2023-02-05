import React from "react";
import { Link } from "react-router-dom";

const Infos = ({ form }) => {
  return (
    <div className="infos" >
      <h1>Bilgileriniz</h1>
      <p>İsim-Soyisim: {form.fullname}</p>
      <p>Şehir: {form.city}</p>
      <p>Doğum Tarihi: {form.birthdate}</p>
      <p>Renk: {form.color}</p>
      <p>Adres: {form.address}</p>
      <Link to="/">
        <button className="backBtn" >Geri Dön</button>
      </Link>
    </div>
  );
};

export default Infos;
