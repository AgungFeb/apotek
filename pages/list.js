/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function List({obat}) {
  return (
    <div className={styles.container}>
        <style jsx>{`
                .container{
                    margin-top:-4%;
                }
                table{
                  width:90%;
                  margin-left:5%;
                }
                th{
                  text-align:center;
                }
                .tengah{
                  text-align:center;
                }
                .ket{
                  width:50%;
                }
                th{
                  color: white;
                  background-color: #2596be;
                }
                table{
                  border: 1px solid #2596be;
                }
            `}
        </style>
        <div className="container py-3">
              <Navbar></Navbar>
          <main>
              <section className="py-4 text-center container">
              <div className="row py-lg-4">
                  <div className="col-lg-6 col-md-8 mx-auto">
                  <h1 className="fw-light">LIST HARGA OBAT</h1>
                  <p className="lead text-muted">Harga Obat diupdate secara Real Time</p>
                  </div>
              </div>
              </section>
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Nama Obat</th>
                    <th scope="col">Ukuran</th>
                    <th scope="col">Satuan</th>
                    <th scope="col">Harga</th>
                    <th scope="col">Keterangan</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    obat.map((row) => (
                      <tr key={row.id}>
                        <td className='tengah' scope="row">{row.id}</td>
                        <td>{row.nama}</td>
                        <td className='tengah'>{row.ukuran}</td>
                        <td className='tengah'>{row.satuan}</td>
                        <td className='tengah'>{row.harga}</td>
                        <td className='ket'>{row.ket}</td>
                      </tr>
                    ))
                  }
                  
                </tbody>
              </table>
          </main>
        </div>    
    </div> 
  )
}
export async function getStaticProps(){
  const req = await fetch('http://localhost:3000/api/obat');
  const res = await req.json();

  return{
    props:{
      obat:res
    }
  }
}