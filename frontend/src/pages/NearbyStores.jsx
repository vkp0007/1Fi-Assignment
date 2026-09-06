import { Search, ChevronDown, Store } from "lucide-react";

import { BottomNavigation } from "../components/shop/BottomNavigation";
import { ShopHero } from "../components/shop/ShopHero";
import { ShopTabs } from "../components/shop/ShopTabs";

import "../styles/nearby-stores.css";

const stores = [
  {
    id: 1,
    name: "Atelier Forbidden",
    address: "Sector 40, Gurugram, Haryana, 122001",
    distance: "24 KM",
  },
  {
    id: 2,
    name: "Pacholi Suzuki Railway Road",
    address:
      "64/9, New Railway Rd, near DSD college, Subhash Nagar, Sector 8, Gurugram, Haryana, 122001",
    distance: "25 KM",
  },
  {
    id: 3,
    name: "Pacholi Suzuki Rajiv Chowk",
    address:
      "6/38, Rajiv Chowk, Sector 33, Rajiv Chowk, Gurugram, Haryana, 122001",
    distance: "27 KM",
  },
  {
    id: 4,
    name: "Ashoka Suzuki",
    address: "Gurugram, Haryana, 122001",
    distance: "27 KM",
  },
];

export function NearbyStores() {
  return (
    <div className="app-shell">

      <ShopHero />

      <main className="nearby-content">

        <ShopTabs />

        <div className="nearby-search-box">
          <Search size={24} />

          <span>Search stores...</span>
        </div>

        <div className="nearby-title-row">
          <h2>Nearby Stores</h2>

          <button className="city-selector">
            <span>New Delhi</span>
            <ChevronDown size={18} />
          </button>
        </div>

        <div className="store-list">
          {stores.map((store) => (
            <div className="store-card" key={store.id}>

              <div className="store-icon">
                <Store size={40} />
              </div>

              <div className="store-details">

                <div className="store-title-row">
                  <h3>{store.name}</h3>

                  <span className="distance">
                    {store.distance}
                  </span>
                </div>

                <p>{store.address}</p>

              </div>

            </div>
          ))}
        </div>

      </main>

      <BottomNavigation />

    </div>
  );
}