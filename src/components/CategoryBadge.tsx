import type { Category } from "../types";

const LABEL: Record<Category, string> = {
  meme: "밈·유행어",
  food: "음식·디저트",
};

export function CategoryBadge({
  category,
  label,
}: {
  category: Category;
  /** 표시 라벨 오버라이드 (예: '팬덤·문화', '음식·먹는 문화') */
  label?: string;
}) {
  return (
    <span className={`badge badge--${category}`}>
      <span className="badge__dot" aria-hidden />
      {label ?? LABEL[category]}
    </span>
  );
}

export const categoryLabel = (category: Category) => LABEL[category];
