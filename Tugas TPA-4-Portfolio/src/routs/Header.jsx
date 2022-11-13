import React from "react";
import { Link } from "react-router-dom";

//Penggunaan Props
function Header(props) {
  return (
    <header>
      <h2>Halo,</h2>
      <h2>Saya, Nicky Julyatrika sari,</h2>
      <h3>{props.data}</h3>
      <p>Saat ini saya sedang menempuh pendidikan S1 Teknik informatika di Universitas Muhammadiyah Surakarta. 
        Sekarang saya sedang  dalam proses mengikuti kegiatan Kampus Merdeka Studi Independen  
        yang diselenggarakan oleh Kemendikbud Ristek Batch 4 di mitra PT.Impact Byte Teknologi Edukasi.</p>
      <Link to="/about">
        <button className="btn"> Read more..</button>
      </Link>
    </header>
  );
}

export default Header