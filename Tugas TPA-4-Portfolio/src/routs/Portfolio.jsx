import React from "react";
import Card from 'react-bootstrap/Card';
import logo1 from "../assets/uiux.jpg";
import logo2 from "../assets/webdev.jpg";

function Portfolio() {
  return (
    <section>
      <div>
        <h2>Project & Sertifikasi</h2>
      </div>

      <div>
        <h3>Project Individu </h3>
        <Card Card-port>
          <Card.Body className="card-body-porto">
            <Card.Title>Personal Website</Card.Title>
            <Card.Text className="card-porto">
              <p>Personal website ini dibuat menggunakan HTMLdan CSS (menggunakan beberapa teknik CSS seperti Flexbox atau Grid). 
                Halaman website terdiri dari 4 halaman yaitu Homepage, About Page, Portfolio,Blog</p>
              <a href="https://tugas-tpa1-personal-website-nickyjs.netlify.app">Lihat disini</a>
            </Card.Text>
          </Card.Body>
        </Card>
     
        <Card Card-port>
          <Card.Body className="card-body-porto">
            <Card.Title>BMI Calculator</Card.Title>
            <Card.Text className="card-porto">
              <p>Website BMI kalkulator ini digunakan untuk menghitung Body Mass Index (BMI) berdasarkan standar yang telah ditetapkan. 
                Website ini dibuat menggunakan HTML, CSS, dan javascript</p>
              <a href="https://tugas-tpa2-bmi-calculate-nickyjs-fe17.netlify.app">Lihat disini</a>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card Card-port>
          <Card.Body className="card-body-porto">
            <Card.Title>Movie App Dengan TMDB API </Card.Title>
            <Card.Text className="card-porto">
              <p>Website menampilkan list Movie menggunakan data external API TMDB API. 
                Website ini menampilkan list movie (judul, tanggal rilis, dan rating) dengan kategori terpopuler </p>
              <a href="https://tugas-tpa3-movie-api-nickyjs.netlify.app/">Lihat Disini</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      
      <div>
        <h3>Project Team</h3>
        <Card Card-port>
          <Card.Body className="card-body-porto">
            <Card.Title>Website Mental Meds</Card.Title>
            <Card.Text className="card-porto">
              <p>Sebuah website mengenai kesehatan mental yang mempertemukan mereka (yang memiliki gangguan kesehatan mental) 
                dengan psikolog/psikiater untuk berkonsultasi.</p>
              <a href="https://mswellbeing.netlify.app/">Lihat disini</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>


      <div>
        <h3>Sertifikasi</h3>
        <Card Card-port className="card-logo1">
          <Card.Img variant="top" src={logo1 } alt="logo1" className="logo1"/>
          <Card.Body>
            <Card.Text>
              <h1>UI/UX Design Mastery</h1>
            </Card.Text>
          </Card.Body>
        </Card>
        
        <Card Card-port className="card-logo1">
          <Card.Img variant="bottom" src={logo2 } alt="logo2" className="logo2"/>
          <Card.Body>
            <Card.Text>
              <h1>Web Development Pemula</h1>
            </Card.Text>
          </Card.Body>
        </Card>
      </div> 

    </section>
  );
}

export default Portfolio