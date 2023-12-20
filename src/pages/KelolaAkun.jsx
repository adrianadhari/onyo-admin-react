import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function KelolaAkun() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3">Kelola Akun</h1>
            <div className="row">
              <div className="col-lg-7">
                <div className="table-responsive">
                  <table className="table table-bordered table-hover bg-white">
                    <thead className="table-dark">
                      <tr>
                        <th scope="col">No</th>
                        <th scope="col">Nama Lengkap</th>
                        <th scope="col">Email</th>
                        <th scope="col">No. HP</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Adrian Adhari</td>
                        <td>user@gmail.com</td>
                        <td>08213787234</td>
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
