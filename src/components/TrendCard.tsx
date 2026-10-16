import { Link } from "react-router-dom";
import type { Trend } from "../types";
import { CategoryBadge } from "./CategoryBadge";

export function TrendCard({ trend }: { trend: Trend }) {
  return (
    <Link
      to={`/trend/${trend.id}`}
      className="card"
      aria-label={`${trend.name} 자세히 보기`}
    >
      <div className={`card__media ${trend.image ? "" : "card__media--ph"}`}>
        {trend.image ? (
          <img
            className={`card__img ${
              trend.cardFit === "contain" ? "card__img--contain" : ""
            }`}
            src={trend.image}
            alt={trend.imageAlt ?? trend.name}
            loading="lazy"
          />
        ) : (
          <span className={`media-ph cat-${trend.category}`} aria-hidden>
            {trend.emoji}
          </span>
        )}
        <span className="card__cat">
          <CategoryBadge category={trend.category} label={trend.categoryLabel} />
        </span>
      </div>
      <div className="card__body">
        <h3 className="card__name">{trend.name}</h3>
        <p className="card__desc">{trend.shortDescription}</p>
        <p className="card__why">
          <b>왜 화제?</b> {trend.whyNow}
        </p>
      </div>
    </Link>
  );
}
