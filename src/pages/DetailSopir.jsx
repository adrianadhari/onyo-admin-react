import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import foto from "../../public/sopir.png";

export default function DetailSopir() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3">Detail Sopir</h1>
            <div className="row">
              <div className="col-lg-7">
                <div className="card p-4 shadow-sm rounded-4">
                  <div className="row justify-content-around align-items-center">
                    <div className="col-lg-5">
                      <img src={foto} width="100%" alt="Sopir" />
                    </div>
                    <div className="col-lg-6">
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <tr>
                            <th>Nama</th>
                            <th> : </th>
                            <th>Muhammad Firly</th>
                          </tr>
                          <tr>
                            <th>Umur</th>
                            <th> : </th>
                            <th>41</th>
                          </tr>
                          <tr>
                            <th>Pengalaman Berkendara</th>
                            <th> : </th>
                            <th>5 Tahun</th>
                          </tr>
                          <tr>
                            <th>Keahlian Berkendara</th>
                            <th> : </th>
                            <th>Matic & Manual</th>
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
                <Link to="/kelola-sopir" className="btn btn-primary w-100">
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
