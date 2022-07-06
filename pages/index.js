/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Script from 'next/script'

export default function Home() {
  return (
    <div className={styles.container}>
        <style jsx>{`
                .container{
                    margin-top:-4%;
                }
                img{
                    width:100%;
                }
            `}
        </style>
        <div className="container py-3">            
            <Navbar></Navbar>
            <main>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="first-slide" src="./images/berita2.jpg" alt="First slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="second-slide" src="./images/berita4.jpg" alt="Second slide"></img>
                </div>
                <div className="carousel-item">
                    <img className="third-slide" src="./images/berita6.png" alt="Third slide"></img>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
            </main>
            <Script src="./javascript/carousel.js"></Script>
        </div>    
    </div> 
  )
}
