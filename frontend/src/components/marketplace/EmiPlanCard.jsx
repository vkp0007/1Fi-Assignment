import { Check } from "lucide-react";

const money = (value) =>
  `₹${value.toLocaleString("en-IN")}`;

export function EmiPlanCard({
  plan,
  selected,
  onClick,
}) {
  return (
    <button
      type="button"
      className={
        selected
          ? "emi-plan selected"
          : "emi-plan"
      }
      onClick={onClick}
    >
      <div className="emi-radio">
        {selected && <Check size={15} />}
      </div>

      <div className="emi-plan-main">
        <strong>
          {plan.months} months
        </strong>

        <span>
          {money(plan.monthlyAmount)} / month
        </span>
      </div>

      <div className="emi-plan-side">
        {plan.badge && (
          <span>{plan.badge}</span>
        )}

        <small>
          {plan.interestRate === 0
            ? "0% interest"
            : `${plan.interestRate}% interest`}
        </small>
      </div>
    </button>
  );
}