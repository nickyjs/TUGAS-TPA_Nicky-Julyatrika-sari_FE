import Card from 'react-bootstrap/Card';


function About() {

  return (
    <div>
      {/* start */}
      <section>
        <div>
          <h2>About me...</h2>
          <h3>Tentang Saya </h3>
          <p>
            Saat ini saya sedang menempuh pendidikan S1 Teknik informatika di Universitas Muhammadiyah Surakarta. Sekarang saya sedang  dalam proses mengikuti kegiatan Kampus Merdeka Studi Independen  yang diselenggarakan oleh Kemendikbud Ristek Batch 4 di mitra PT.Impact Byte Teknologi Edukasi, Saya memiliki minat di bidang web developer khususnya front-end Developer.
          </p>
        </div>

        
        <div>
          <h3>Pengalaman Organisasi</h3>
          <Card Card-about className="card">
            <Card.Body>
              <Card.Title className="card-title">Forum Open Source Teknik Informatika</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Anggota Divisi Keorganisasian</Card.Subtitle>
              <Card.Text className="card-text">September 2022 - Sekarang</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div>
          <h3>Pengalaman Kepanitiaan</h3>
          <Card Card-about className="card">
            <Card.Body>
              <Card.Title className="card-title">Forum Open Source Teknik Informatika</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Training Of Trainer - Anggota Sie Dekorasi dan Dokumentasi</Card.Subtitle>
              <Card.Text className="card-text">February 2022</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card Card-about className="card">
            <Card.Body>
              <Card.Title className="card-title">Forum Open Source Teknik Informatika</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Open Recruitment - Penanggung Jawab Sie Hubungan Masyarakat</Card.Subtitle>
              <Card.Text className="card-text">September 2022</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div>
          <h3>Pendidikan</h3>
          <Card Card-about className="card">
            <Card.Body>
              <Card.Title className="card-title">Universitas Muhammadiyah Surakarta </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Mahasiswa Aktif Program Studi Teknik Informatika, 3.78/4.00</Card.Subtitle>
              <Card.Text className="card-text">September 2020 - Juli 2024</Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card Card-about className="card">
            <Card.Body>
              <Card.Title className="card-title">SMA Negeri 1 Wirosari</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Ilmu Pengetahuan Alam</Card.Subtitle>
              <Card.Text className="card-text">Juli 2017 - Mei 2020</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>
      {/* end */}
    </div> 
  );
}

export default About