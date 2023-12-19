import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">
            <h1 className="h3 mb-3">
              <strong>Dashboard</strong>
            </h1>

            <div className="row">
              <div className="col-lg-3">
                <div className="card border-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col mt-0">
                        <h5 className="card-title">Jumlah Mobil</h5>
                      </div>

                      <div className="col-auto">
                        <div className="stat text-primary">
                          <i className="fa-solid fa-car-side fa-2xl"></i>
                        </div>
                      </div>
                    </div>
                    <h1 className="mt-1 mb-3">9</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card border-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col mt-0">
                        <h5 className="card-title">Jumlah Sopir</h5>
                      </div>

                      <div className="col-auto">
                        <div className="stat text-primary">
                          <i className="fa-regular fa-id-card fa-2xl"></i>
                        </div>
                      </div>
                    </div>
                    <h1 className="mt-1 mb-3">10</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card border-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col mt-0">
                        <h5 className="card-title">Total Pengguna</h5>
                      </div>

                      <div className="col-auto">
                        <div className="stat text-primary">
                          <i className="fa-solid fa-users fa-2xl"></i>
                        </div>
                      </div>
                    </div>
                    <h1 className="mt-1 mb-3">52</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="card border-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col mt-0">
                        <h5 className="card-title">Total Pesanan</h5>
                      </div>

                      <div className="col-auto">
                        <div className="stat text-primary">
                          <i className="fa-solid fa-dollar-sign fa-2xl"></i>
                        </div>
                      </div>
                    </div>
                    <h1 className="mt-1 mb-3">12</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
