import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function TambahSopir() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3">Tambah Sopir</h1>
            <form action="#" method="POST" encType="multipart/form-data">
              <div className="row">
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label htmlFor="nama" className="form-label">
                      Nama
                    </label>
                    <input type="text" className="form-control" id="nama" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label htmlFor="umur" className="form-label">
                      Umur
                    </label>
                    <input type="text" className="form-control" id="umur" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label htmlFor="pengalaman" className="form-label">
                      Pengalaman Berkendara
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="pengalaman"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label htmlFor="keahlian" className="form-label">
                      Keahlian Berkendara
                    </label>
                    <input type="text" className="form-control" id="keahlian" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label htmlFor="fotoSIM" className="form-label">
                      Foto SIM
                    </label>
                    <input type="file" className="form-control" id="fotoSIM" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label htmlFor="fotoKTP" className="form-label">
                      Foto KTP
                    </label>
                    <input type="file" className="form-control" id="fotoKTP" />
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-2">
                  <button type="submit" className="btn btn-primary w-100">
                    Tambah
                  </button>
                </div>
                <div className="col-lg-2">
                  <button type="reset" className="btn btn-secondary w-100">
                    Batal
                  </button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
