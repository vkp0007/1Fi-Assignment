import { CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router";

export function Continue() {
  const { id } = useParams();

  return (
    <div className="success-page">

      <div className="success-icon">
        <CheckCircle2 size={54} />
      </div>

      <h1>Plan selected</h1>

      <p>
        Your EMI plan has been selected successfully.
      </p>

      <div className="success-actions">
        <Link
          className="primary-btn"
          to={`/shop/marketplace/${id}`}
        >
          Back to product
        </Link>

        <Link
          className="secondary-btn"
          to="/shop/marketplace"
        >
          Browse Marketplace
        </Link>
      </div>

    </div>
  );
}