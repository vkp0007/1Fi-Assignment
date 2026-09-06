import { NavLink } from "react-router";

export function ShopTabs() {
  return (
    <nav className="shop-tabs">
      <NavLink
        to="/shop"
        end
        className="shop-tab"
      >
        Top Brands
      </NavLink>

      <NavLink
        to="/shop/nearby"
        className="shop-tab"
      >
        Nearby Stores
      </NavLink>

      <NavLink
        to="/shop/marketplace"
        className="shop-tab"
      >
        1Fi Marketplace
      </NavLink>
    </nav>
  );
}