export function VariantSelector({
  variants,
  selected,
  onChange,
}) {
  return (
    <div className="selector">

      <div className="section-label">
        Choose variant
      </div>

      <div className="variant-row">
        {variants.map((variant) => (
          <button
            key={variant.id}
            className={
              selected === variant.id
                ? "variant-btn selected"
                : "variant-btn"
            }
            onClick={() => onChange(variant.id)}
          >
            {variant.label}
          </button>
        ))}
      </div>

    </div>
  );
}