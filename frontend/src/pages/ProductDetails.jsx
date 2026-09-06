import { ArrowLeft, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

import { BottomNavigation } from "../components/shop/BottomNavigation";
import { EmiPlanCard } from "../components/marketplace/EmiPlanCard";
import { VariantSelector } from "../components/marketplace/VariantSelector";
import { getProduct } from "../services/marketplaceApi";

const money = (value) => `₹${value.toLocaleString("en-IN")}`;

export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [variant, setVariant] = useState("");
  const [plan, setPlan] = useState("");

  useEffect(() => {
    if (!id) return;

    getProduct(id).then((result) => {
      setProduct(result);

      if (result) {
        setVariant(result.variants[0]?.id ?? "");
        setPlan(result.emiPlans[0]?.id ?? "");
      }
    });
  }, [id]);

  if (!product) {
    return <div className="loading">Loading marketplace...</div>;
  }

  const selectedPlan = product.emiPlans.find(
    (item) => item.id === plan
  );

  return (
    <div className="app-shell detail-shell">

      <header className="detail-header">
        <button
          onClick={() => navigate(-1)}
          aria-label="Go back"
        >
          <ArrowLeft />
        </button>

        <strong>1Fi Marketplace</strong>

        <button aria-label="Share">
          <Share2 />
        </button>
      </header>

      <main className="detail-content">

        <div className="detail-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="detail-title-row">

          <div>
            <span className="product-category">
              {product.category}
            </span>

            <h1>{product.name}</h1>
          </div>

          <strong>
            {money(product.price)}
          </strong>

        </div>

        <p className="description">
          {product.shortDescription}
        </p>

        <VariantSelector
          variants={product.variants}
          selected={variant}
          onChange={setVariant}
        />

        <section className="emi-section">

          <div className="section-heading">

            <div>
              <div className="section-label">
                Choose EMI plan
              </div>

              <p>
                Select the plan that works for you
              </p>
            </div>

            <span className="emi-up-to">
              0% interest
            </span>

          </div>

          <div className="emi-list">

            {product.emiPlans.map((item) => (
              <EmiPlanCard
                key={item.id}
                plan={item}
                selected={plan === item.id}
                onClick={() => setPlan(item.id)}
              />
            ))}

          </div>

        </section>

        <div className="detail-spacer" />

        <div className="sticky-cta">

          <Link
            to={`/shop/marketplace/${product.id}/continue`}
            className="primary-btn"
          >
            Continue with {selectedPlan?.months}-month plan

            <span>→</span>
          </Link>

        </div>

      </main>

      <BottomNavigation />

    </div>
  );
}