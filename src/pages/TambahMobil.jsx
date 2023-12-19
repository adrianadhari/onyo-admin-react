import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function TambahMobil() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3">Tambah Mobil</h1>
            <form action="#" method="POST" encType="multipart/form-data">
              <div className="row">
                <div className="col-lg-5">
                  <div className="mb-3">
                    <label htmlFor="nama_mobil" className="form-label">
                      Nama Mobil
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nama_mobil"
                    />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="mb-3">
                    <label htmlFor="tipe_mobil" className="form-label">
                      Tipe Mobil
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="tipe_mobil"
                    />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="mb-3">
                    <label htmlFor="harga_mobil" className="form-label">
                      Harga Sewa Mobil
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="harga_mobil"
                    />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="mb-3">
                    <label htmlFor="jumlah_kursi" className="form-label">
                      Jumlah Kursi
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="jumlah_kursi"
                    />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="mb-3">
                    <label htmlFor="bahan_bakar" className="form-label">
                      Bahan Bakar
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="bahan_bakar"
                    />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="mb-3">
                    <label htmlFor="jenisTransmisi" className="form-label">
                      Jenis Transmisi
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="jenisTransmisi"
                    />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="mb-5">
                    <label htmlFor="fotoMobil" className="form-label">
                      Foto Mobil
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      id="fotoMobil"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3">
                  <button type="submit" className="btn btn-primary w-100">
                    Tambah
                  </button>
                </div>
                <div className="col-lg-3">
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
