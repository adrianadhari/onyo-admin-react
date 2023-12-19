import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function KelolaPesanan() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3">Kelola Pesanan</h1>
            <div className="row">
              <div className="col-lg-9">
                <div className="table-responsive">
                  <table className="table table-bordered table-hover bg-white">
                    <thead className="table-dark">
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Nama Pemesan</th>
                        <th scope="col">Nama Mobil</th>
                        <th scope="col">Jenis Bayar</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Anis Sulala</td>
                        <td>Toyota Innova Reborn</td>
                        <td>Transfer Bank</td>
                        <td>Menunggu konfirmasi</td>
                        <td>
                          <button className="btn btn-success me-2">
                            Setuju
                          </button>
                          <button className="btn btn-danger me-2">Tolak</button>
                          <Link
                            to="/kelola-pesanan/detail-pesanan"
                            className="btn btn-warning"
                          >
                            Detail Pesanan
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
