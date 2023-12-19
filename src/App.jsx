import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import KelolaMobil from "./pages/KelolaMobil";
import KelolaSopir from "./pages/KelolaSopir";
import KelolaAkun from "./pages/KelolaAkun";
import KelolaPesanan from "./pages/KelolaPesanan";
import DetailPesanan from "./pages/DetailPesanan";
import TambahMobil from "./pages/TambahMobil";
import DetailMobil from "./pages/DetailMobil";
import EditMobil from "./pages/EditMobil";
import TambahSopir from "./pages/TambahSopir";
import DetailSopir from "./pages/DetailSopir";
import EditSopir from "./pages/EditSopir";
import Masuk from "./pages/Masuk";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Dashboard} />
        <Route path="/kelola-pesanan" Component={KelolaPesanan} />
        <Route
          path="/kelola-pesanan/detail-pesanan"
          Component={DetailPesanan}
        />
        <Route path="/kelola-mobil" Component={KelolaMobil} />
        <Route path="/kelola-mobil/tambah-mobil" Component={TambahMobil} />
        <Route path="/kelola-mobil/detail-mobil" Component={DetailMobil} />
        <Route path="/kelola-mobil/edit-mobil" Component={EditMobil} />
        <Route path="/kelola-sopir" Component={KelolaSopir} />
        <Route path="/kelola-sopir/tambah-sopir" Component={TambahSopir} />
        <Route path="/kelola-sopir/detail-sopir" Component={DetailSopir} />
        <Route path="/kelola-sopir/edit-sopir" Component={EditSopir} />
        <Route path="/kelola-akun" Component={KelolaAkun} />
        <Route path="/masuk" Component={Masuk} />
      </Routes>
    </div>
  );
}

export default App;
