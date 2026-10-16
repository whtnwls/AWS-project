import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { trends } from "../data/trends";
import type { CategoryFilter } from "../types";
import { TrendCard } from "../components/TrendCard";

const FILTERS: { value: CategoryFilter; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "meme", label: "밈·유행어" },
  { value: "food", label: "음식·디저트" },
];

/** 이름과 별칭으로 검색 (프런트엔드 처리) */
function matchesQuery(name: string, aliases: string[], q: string): boolean {
  const needle = q.trim().toLowerCase().replace(/\s+/g, "");
  if (!needle) return true;
  const haystacks = [name, ...aliases].map((s) =>
    s.toLowerCase().replace(/\s+/g, "")
  );
  return haystacks.some((h) => h.includes(needle));
}

export function HomePage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const results = useMemo(() => {
    return trends.filter((t) => {
      const byCategory = filter === "all" || t.category === filter;
      const byQuery = matchesQuery(t.name, t.aliases, query);
      return byCategory && byQuery;
    });
  }, [query, filter]);

  const isSearching = query.trim().length > 0;

  return (
    <main className="container">
      <section className="hero">
        <h1 className="hero__title">요즘 다들 무슨 얘기해?</h1>
        <p className="hero__subtitle">
          밈부터 먹거리까지, 지금 주목받는 것들을 쉽게 알아보세요.
        </p>

        <div className="search">
          <svg
            className="search__icon"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            aria-hidden="true"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="16.5"
              y1="16.5"
              x2="21"
              y2="21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <input
            className="search__input"
            type="search"
            placeholder="궁금한 이름을 검색해 보세요 (예: 두쫀쿠, 거제 야호)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="트렌드 검색"
          />
          {isSearching && (
            <button
              className="search__clear"
              onClick={() => setQuery("")}
              aria-label="검색어 지우기"
            >
              ✕
            </button>
          )}
        </div>
      </section>

      {!isSearching && (
        <Link to="/quiz" className="quiz-banner">
          <div className="quiz-banner__text">
            <span className="quiz-banner__badge">트렌드 퀴즈</span>
            <strong className="quiz-banner__title">아직도 이걸 모른다고?</strong>
            <span className="quiz-banner__desc">
              7문제로 확인하는 늙크크 판독기
            </span>
          </div>
          <span className="quiz-banner__cta">나 정도면 현역이지 →</span>
        </Link>
      )}

      <div className="toolbar">
        <h2 className="section-title">
          {isSearching ? "검색 결과" : "이번 주 주목할 트렌드"}
          <span className="count">{results.length}</span>
        </h2>
        {!isSearching && (
          <div className="filters" role="group" aria-label="카테고리 필터">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                className={`chip ${filter === f.value ? "chip--active" : ""}`}
                aria-pressed={filter === f.value}
                onClick={() => setFilter(f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {results.length > 0 ? (
        <div className="grid">
          {results.map((t) => (
            <TrendCard key={t.id} trend={t} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <p className="empty__title">'{query.trim()}'에 대한 결과가 없어요</p>
          <p className="empty__body">
            아직 등록되지 않았거나 다른 이름으로 불릴 수 있어요. 전체 목록에서
            둘러보세요.
          </p>
          <button
            className="btn"
            onClick={() => {
              setQuery("");
              setFilter("all");
            }}
          >
            전체 목록 보기
          </button>
        </div>
      )}

      {!isSearching && (
        <div className="notice">
          <span className="notice__k">팀 선정</span>
          <p className="notice__body">
            자동 인기 순위가 아니라 팀이 직접 고르고 정리한 목록입니다.
          </p>
        </div>
      )}
    </main>
  );
}
