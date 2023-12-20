import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function KelolaSopir() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3">Kelola Sopir</h1>
            <div className="row">
              <div className="col-lg-8 text-end mb-3">
                <Link
                  to="/kelola-sopir/tambah-sopir"
                  className="btn btn-primary"
                >
                  Tambah Sopir
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="table-responsive">
                  <table className="table table-bordered table-hover bg-white">
                    <thead className="table-dark">
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Nama</th>
                        <th scope="col">Umur</th>
                        <th scope="col">SIM</th>
                        <th scope="col">KTP</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Muhammad Firly</td>
                        <td>41</td>
                        <td>
                          <button
                            className="btn btn-secondary btn-sm"
                            type="button"
                          >
                            Lihat
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-secondary btn-sm"
                            type="button"
                          >
                            Lihat
                          </button>
                        </td>
                        <td>
                          <Link
                            className="btn btn-success"
                            to="/kelola-sopir/detail-sopir"
                          >
                            Detail
                          </Link>
                          <Link
                            className="btn btn-warning mx-2"
                            to="/kelola-sopir/edit-sopir"
                          >
                            Edit
                          </Link>
                          <Link className="btn btn-danger">Hapus</Link>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Firdaus</td>
                        <td>20</td>
                        <td>
                          <button
                            className="btn btn-secondary btn-sm"
                            type="button"
                          >
                            Lihat
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-secondary btn-sm"
                            type="button"
                          >
                            Lihat
                          </button>
                        </td>
                        <td>
                          <Link
                            className="btn btn-success"
                            to="/kelola-sopir/detail-sopir"
                          >
                            Detail
                          </Link>
                          <Link
                            className="btn btn-warning mx-2"
                            to="/kelola-sopir/edit-sopir"
                          >
                            Edit
                          </Link>
                          <Link className="btn btn-danger">Hapus</Link>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Muhammad Ginanjar</td>
                        <td>21</td>
                        <td>
                          <button
                            className="btn btn-secondary btn-sm"
                            type="button"
                          >
                            Lihat
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-secondary btn-sm"
                            type="button"
                          >
                            Lihat
                          </button>
                        </td>
                        <td>
                          <Link
                            className="btn btn-success"
                            to="/kelola-sopir/detail-sopir"
                          >
                            Detail
                          </Link>
                          <Link
                            className="btn btn-warning mx-2"
                            to="/kelola-sopir/edit-sopir"
                          >
                            Edit
                          </Link>
                          <Link className="btn btn-danger">Hapus</Link>
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
