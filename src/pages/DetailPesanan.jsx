import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import foto from "../../public/buktipembayaran.png";

export default function DetailPesanan() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3">Detail Pesanan</h1>
            <div className="row d-flex align-items-center">
              <div className="col-lg-6">
                <table className="table table-bordered table-hover bg-white">
                  <tr className="p-3">
                    <th>Kode Sewa</th>
                    <td>: BK00001</td>
                  </tr>
                  <tr>
                    <th>Mobil</th>
                    <td>: Toyota Innova Reborn</td>
                  </tr>
                  <tr>
                    <th>Tanggal Mulai</th>
                    <td>: 29/11/2023</td>
                  </tr>
                  <tr>
                    <th>Tanggal Selesai</th>
                    <td>: 30/11/2023</td>
                  </tr>
                  <tr>
                    <th>Durasi</th>
                    <td>: 2 Hari</td>
                  </tr>
                  <tr>
                    <th>Metode Sewa</th>
                    <td>: Lepas Kunci</td>
                  </tr>
                  <tr>
                    <th>Nama Penyewa</th>
                    <td>: Adrian Adhari</td>
                  </tr>
                  <tr>
                    <th>Biaya Driver</th>
                    <td>: -</td>
                  </tr>
                  <tr>
                    <th>Biaya Mobil</th>
                    <td>: Rp 250.000</td>
                  </tr>
                  <tr>
                    <th>Total Biaya</th>
                    <td>: Rp 500.000</td>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <td>: Sukses</td>
                  </tr>
                </table>
              </div>
              <div className="col-lg-6">
                <img src={foto} />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-2">
                <Link
                  to="/kelola-pesanan"
                  className="btn btn-primary w-100 fw-bold"
                >
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
