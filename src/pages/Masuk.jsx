import { Link } from "react-router-dom";

export default function Masuk() {
  return (
    <main className="d-flex w-100">
      <div className="container d-flex flex-column">
        <div className="row vh-100">
          <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <h1 className="h2">Selamat Datang!</h1>
                <p className="lead">Silahkan masuk untuk melanjutkan</p>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="m-sm-3">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                          className="form-control form-control-lg"
                          type="username"
                          name="username"
                          placeholder="Masukkan username"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          className="form-control form-control-lg"
                          type="password"
                          name="password"
                          placeholder="Masukkan password"
                        />
                      </div>
                      <div className="d-grid gap-2 mt-3">
                        <Link to="/" className="btn btn-lg btn-primary">
                          Masuk
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
