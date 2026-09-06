import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

const money = (value) =>
  typeof value === "number"
    ? `₹${value.toLocaleString("en-IN")}`
    : "—";

export function ProductCard({ product }) {
  const firstPlan = product.emiPlans?.[0];

  return (
    <Link
      to={`/shop/marketplace/${product.id}`}
      className="product-card"
    >
      <div className="product-image-wrap">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-card-body">
        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <strong>
          {money(product.price)}
        </strong>

        {firstPlan && (
          <div className="emi-line">
            EMI from{" "}
            <b>
              {money(firstPlan.monthlyAmount)}/mo
            </b>
          </div>
        )}

        {firstPlan?.badge && (
          <span className="no-cost">
            {firstPlan.badge}
          </span>
        )}
      </div>

      <ChevronRight
        className="product-arrow"
        size={20}
      />
    </Link>
  );
}