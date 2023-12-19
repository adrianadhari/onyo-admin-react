import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import foto from "../../public/innova-reborn.png";
import { Link } from "react-router-dom";

export default function DetailMobil() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3">Detail Mobil</h1>
            <div className="row">
              <div className="col-lg-8">
                <div className="card p-4 shadow-sm rounded-4">
                  <h1 className="fw-bold">Toyota Innova Reborn</h1>
                  <div className="row justify-content-between align-items-center">
                    <div className="col-lg-5">
                      <img src={foto} width="100%" alt="Innova Reborn" />
                    </div>
                    <div className="col-lg-6">
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <tr>
                            <th>Nama</th>
                            <th> : </th>
                            <th>Toyota Innova Reborn</th>
                          </tr>
                          <tr>
                            <th>Merek</th>
                            <th> : </th>
                            <th>Toyota</th>
                          </tr>
                          <tr>
                            <th>BBM</th>
                            <th> : </th>
                            <th>Diesel</th>
                          </tr>
                          <tr>
                            <th>Transmisi</th>
                            <th> : </th>
                            <th>Matic</th>
                          </tr>
                          <tr>
                            <th>Nomor Polisi</th>
                            <th> : </th>
                            <th>SW 1232 DN</th>
                          </tr>
                          <tr>
                            <th>Tahun Beli</th>
                            <th> : </th>
                            <th>2023</th>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2">
                <Link to="/kelola-mobil" className="btn btn-primary w-100">
                  Kembali
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
