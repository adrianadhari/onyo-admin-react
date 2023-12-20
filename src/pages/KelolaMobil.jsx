import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function KelolaMobil() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3">Katalog Mobil</h1>
            <div className="row justify-content-end">
              <div className="col-lg-3 text-end mb-3">
                <Link
                  to="/kelola-mobil/tambah-mobil"
                  className="btn btn-primary"
                >
                  Tambah Mobil
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="table-responsive">
                  <table className="table table-bordered table-hover bg-white">
                    <thead className="table-dark">
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Nama Mobil</th>
                        <th scope="col">Tipe Mobil</th>
                        <th scope="col">Harga Sewa Mobil</th>
                        <th scope="col">Jumlah Kursi</th>
                        <th scope="col">Bahan Bakar</th>
                        <th scope="col">Jenis Transmisi</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Toyota Innova Reborn</td>
                        <td>Crossover</td>
                        <td>450.000</td>
                        <td>7</td>
                        <td>Bensin</td>
                        <td>Manual</td>
                        <td>
                          <Link
                            className="btn btn-success"
                            to="/kelola-mobil/detail-mobil"
                          >
                            Detail
                          </Link>
                          <Link
                            className="btn btn-warning mx-2"
                            to="/kelola-mobil/edit-mobil"
                          >
                            Edit
                          </Link>
                          <button className="btn btn-danger">Hapus</button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Honda Brio</td>
                        <td>MPV</td>
                        <td>250.000</td>
                        <td>6</td>
                        <td>Bensin</td>
                        <td>Matic</td>
                        <td>
                          <Link
                            className="btn btn-success"
                            to="/kelola-mobil/detail-mobil"
                          >
                            Detail
                          </Link>
                          <Link
                            className="btn btn-warning mx-2"
                            to="/kelola-mobil/edit-mobil"
                          >
                            Edit
                          </Link>
                          <button className="btn btn-danger">Hapus</button>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Toyota Fortuner</td>
                        <td>SUV</td>
                        <td>600.000</td>
                        <td>7</td>
                        <td>Bensin</td>
                        <td>Matic</td>
                        <td>
                          <Link
                            className="btn btn-success"
                            to="/kelola-mobil/detail-mobil"
                          >
                            Detail
                          </Link>
                          <Link
                            className="btn btn-warning mx-2"
                            to="/kelola-mobil/edit-mobil"
                          >
                            Edit
                          </Link>
                          <button className="btn btn-danger">Hapus</button>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Toyota Grand Innova</td>
                        <td>MPV</td>
                        <td>250.000</td>
                        <td>8</td>
                        <td>Bensin</td>
                        <td>Manual</td>
                        <td>
                          <Link
                            className="btn btn-success"
                            to="/kelola-mobil/detail-mobil"
                          >
                            Detail
                          </Link>
                          <Link
                            className="btn btn-warning mx-2"
                            to="/kelola-mobil/edit-mobil"
                          >
                            Edit
                          </Link>
                          <button className="btn btn-danger">Hapus</button>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Mitsubishi Expander</td>
                        <td>Crossover</td>
                        <td>250.000</td>
                        <td>8</td>
                        <td>Bensin</td>
                        <td>Matic</td>
                        <td>
                          <Link
                            className="btn btn-success"
                            to="/kelola-mobil/detail-mobil"
                          >
                            Detail
                          </Link>
                          <Link
                            className="btn btn-warning mx-2"
                            to="/kelola-mobil/edit-mobil"
                          >
                            Edit
                          </Link>
                          <button className="btn btn-danger">Hapus</button>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Suzuki Ertiga</td>
                        <td>MPV</td>
                        <td>300.000</td>
                        <td>7</td>
                        <td>Bensin</td>
                        <td>Matic</td>
                        <td>
                          <Link
                            className="btn btn-success"
                            to="/kelola-mobil/detail-mobil"
                          >
                            Detail
                          </Link>
                          <Link
                            className="btn btn-warning mx-2"
                            to="/kelola-mobil/edit-mobil"
                          >
                            Edit
                          </Link>
                          <button className="btn btn-danger">Hapus</button>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Mitsubishi Pajero Sport</td>
                        <td>SUV</td>
                        <td>600.000</td>
                        <td>7</td>
                        <td>Diesel</td>
                        <td>Manual</td>
                        <td>
                          <Link
                            className="btn btn-success"
                            to="/kelola-mobil/detail-mobil"
                          >
                            Detail
                          </Link>
                          <Link
                            className="btn btn-warning mx-2"
                            to="/kelola-mobil/edit-mobil"
                          >
                            Edit
                          </Link>
                          <button className="btn btn-danger">Hapus</button>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Toyota Agya</td>
                        <td>LCGC</td>
                        <td>250.000</td>
                        <td>7</td>
                        <td>Bensin</td>
                        <td>Manual</td>
                        <td>
                          <Link
                            className="btn btn-success"
                            to="/kelola-mobil/detail-mobil"
                          >
                            Detail
                          </Link>
                          <Link
                            className="btn btn-warning mx-2"
                            to="/kelola-mobil/edit-mobil"
                          >
                            Edit
                          </Link>
                          <button className="btn btn-danger">Hapus</button>
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Daihatsu Ayla</td>
                        <td>LCGC</td>
                        <td>250.000</td>
                        <td>7</td>
                        <td>Bensin</td>
                        <td>Manual</td>
                        <td>
                          <Link
                            className="btn btn-success"
                            to="/kelola-mobil/detail-mobil"
                          >
                            Detail
                          </Link>
                          <Link
                            className="btn btn-warning mx-2"
                            to="/kelola-mobil/edit-mobil"
                          >
                            Edit
                          </Link>
                          <button className="btn btn-danger">Hapus</button>
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
