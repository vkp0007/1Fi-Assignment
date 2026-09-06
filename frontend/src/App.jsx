import { Navigate, Route, Routes } from "react-router";

import { Shop } from "./pages/Shop";
import { Marketplace } from "./pages/Marketplace";
import { ProductDetails } from "./pages/ProductDetails";
import { Continue } from "./pages/Continue";
import { NearbyStores } from "./pages/NearbyStores";

function Placeholder({ title }) {
  return (
    <div className="placeholder-page">
      <h1>{title}</h1>
      <p>
        This section is intentionally left as a placeholder for the assignment.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/shop" replace />} />

      <Route path="/shop" element={<Shop />} />

<Route
  path="/shop/nearby"
  element={<NearbyStores />}
/>

      <Route
        path="/shop/marketplace"
        element={<Marketplace />}
      />

      <Route
        path="/shop/marketplace/:id"
        element={<ProductDetails />}
      />

      <Route
        path="/shop/marketplace/:id/continue"
        element={<Continue />}
      />

      <Route
        path="/emi-dues"
        element={<Placeholder title="EMI Dues" />}
      />

      <Route
        path="/limit"
        element={<Placeholder title="Limit" />}
      />

      <Route
        path="/profile"
        element={<Placeholder title="Profile" />}
      />

      <Route path="*" element={<Navigate to="/shop" replace />} />
    </Routes>
  );
}