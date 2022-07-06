/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function News() {
  return (
    <div className={styles.container}>
      <style jsx>{`
          .container{
              margin-top:-4%;
          }
      `}
      </style>
      <div className="container py-3">
          <Navbar></Navbar>
        <main>

          <section className="py-4 text-center container">
            <div className="row py-lg-4">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light">BERITA</h1>
                <p className="lead text-muted">Terkini, Terpercaya dan Bermutu</p>
              </div>
            </div>
          </section>

          <div className="album py-2 bg-light">
            <div className="container">

              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                  <div className="card shadow-sm">
                    <img src="./images/berita1.jpg" className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="" role="img" aria-label="" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    <div className="card-body">
                      <p className="card-text">Peringatan HKN ke-57 mengangkat tema “Sehat Negeriku, Tumbuh Indonesiaku”. Tema ini dipilih untuk menggambarkan...</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <img src="./images/berita2.jpg" className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="" role="img" aria-label="" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    <div className="card-body">
                      <p className="card-text">Banyak negara termasuk Indonesia tengah diterpa lonjakan kasus COVID-19 imbas subvarian Omicron BA.4 dan BA.5...</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <img src="./images/berita3.jpg" className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="" role="img" aria-label="" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    <div className="card-body">
                      <p className="card-text">Banyak yang salah kaprah bahwa TBC sama seperti halnya batuk biasa. Sejatinya batuk ini lebih berbahaya ketimbang batuk biasa...</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card shadow-sm">
                    <img src="./images/berita4.jpg" className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="" role="img" aria-label="" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    <div className="card-body">
                      <p className="card-text">Setiap tahun, 25 September diperingati sebagai Hari Farmasi Sedunia atau Hari Apoteker Sedunia alias World Pharmacist...</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card shadow-sm">
                    <img src="./images/berita5.jpg" className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="" role="img" aria-label="" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    <div className="card-body">
                      <p className="card-text">Persoalan antibiotika tidak hanya terjadi di Indonesia tapi juga secara global yang menjadi satu persoalan yang cukup pelik...</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col">
                  <div className="card shadow-sm">
                    <img src="./images/berita6.png" className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="" role="img" aria-label="" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                    <div className="card-body">
                      <p className="card-text">RSUD Blambangan meluncurkan sebuah Aplikasi E-Nget demi memudahkan pelayanan di RSUD Blambangan...</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          </main>
      </div>   
    </div>
  )
}
