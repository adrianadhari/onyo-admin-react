import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav id="sidebar" className="sidebar js-sidebar">
      <div className="sidebar-content js-simplebar">
        <Link className="sidebar-brand" to="/">
          ONYO | Admin
        </Link>
        <ul className="sidebar-nav">
          <li className="sidebar-header">Navigasi</li>

          <li className="sidebar-item">
            <NavLink
              className={({ isActive, isPending }) =>
                `sidebar-link ${
                  isPending ? "pending" : isActive ? "active" : ""
                }`
              }
              end
              to="/"
            >
              <i className="fa-solid fa-gauge-high"></i>
              <span className="align-middle">Dashboard</span>
            </NavLink>
          </li>

          <li className="sidebar-item">
            <NavLink
              className={({ isActive, isPending }) =>
                `sidebar-link ${
                  isPending ? "pending" : isActive ? "active" : ""
                }`
              }
              end
              to="/kelola-pesanan"
            >
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="align-middle">Kelola Pesanan</span>
            </NavLink>
          </li>

          <li className="sidebar-item">
            <NavLink
              className={({ isActive, isPending }) =>
                `sidebar-link ${
                  isPending ? "pending" : isActive ? "active" : ""
                }`
              }
              end
              to="/kelola-mobil"
            >
              <i className="fa-solid fa-car-side"></i>
              <span className="align-middle">Kelola Mobil</span>
            </NavLink>
          </li>

          <li className="sidebar-item">
            <NavLink
              className={({ isActive, isPending }) =>
                `sidebar-link ${
                  isPending ? "pending" : isActive ? "active" : ""
                }`
              }
              end
              to="/kelola-sopir"
            >
              <i className="fa-regular fa-id-card"></i>
              <span className="align-middle">Kelola Sopir</span>
            </NavLink>
          </li>

          <li className="sidebar-item">
            <NavLink
              className={({ isActive, isPending }) =>
                `sidebar-link ${
                  isPending ? "pending" : isActive ? "active" : ""
                }`
              }
              end
              to="/kelola-akun"
            >
              <i className="fa-solid fa-users"></i>
              <span className="align-middle">Kelola Akun</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
