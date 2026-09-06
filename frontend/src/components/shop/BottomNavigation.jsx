import {
  Home,
  Store,
  ReceiptIndianRupee,
  ChartNoAxesCombined,
  User,
} from "lucide-react";
import { NavLink, useLocation } from "react-router";

export function BottomNavigation() {
  const location = useLocation();

  const isShopActive =
    location.pathname.startsWith("/shop");

  return (
    <nav className="bottom-nav">
      {/* Home - placeholder */}
      <div className="bottom-nav-item">
        <Home className="bottom-nav-icon" size={21} />
        <span>Home</span>
      </div>

      {/* Shop - functional */}
      <NavLink
        to="/shop"
        className={
          isShopActive
            ? "bottom-nav-item active"
            : "bottom-nav-item"
        }
      >
        <Store className="bottom-nav-icon" size={21} />
        <span>Shop</span>
      </NavLink>

      {/* EMI Dues - placeholder */}
      <div className="bottom-nav-item">
        <ReceiptIndianRupee
          className="bottom-nav-icon"
          size={21}
        />
        <span>EMI Dues</span>
      </div>

      {/* Limit - placeholder */}
      <div className="bottom-nav-item">
        <ChartNoAxesCombined
          className="bottom-nav-icon"
          size={21}
        />
        <span>Limit</span>
      </div>

      {/* Profile - placeholder */}
      <div className="bottom-nav-item">
        <User className="bottom-nav-icon" size={21} />
        <span>Profile</span>
      </div>
    </nav>
  );
}