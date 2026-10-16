import { Link, useParams } from "react-router-dom";
import { trends, extraImages } from "../data/trends";
import type { RelatedItem } from "../types";
import { CategoryBadge } from "../components/CategoryBadge";
import { VideoSection } from "../components/VideoSection";

function RelatedList({ items }: { items: RelatedItem[] }) {
  return (
    <section className="related">
      <h2 className="related__title">함께 알아두면 좋아요</h2>
      <ul className="related__list">
        {items.map((r, i) => {
          const body = (
            <>
              <span className="related__name">{r.name}</span>
              <span className="related__note">{r.note}</span>
            </>
          );
          return (
            <li key={i}>
              {r.targetId ? (
                // 등록된 콘텐츠 → 상세 페이지로 이동 (주소는 화면에 노출하지 않음)
                <Link className="related__item related__item--link" to={`/trend/${r.targetId}`}>
                  {body}
                  <span className="related__arrow" aria-hidden>
                    →
                  </span>
                </Link>
              ) : (
                // 미등록 표현 → 일반 텍스트로만 표시
                <div className="related__item">{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function TrendDetailPage() {
  const { id } = useParams();
  const trend = trends.find((t) => t.id === id);

  if (!trend) {
    return (
      <main className="container detail">
        <Link to="/" className="back-link">
          ← 홈으로
        </Link>
        <div className="empty">
          <p className="empty__title">찾는 트렌드가 없어요</p>
          <p className="empty__body">
            주소가 바뀌었거나 아직 등록되지 않은 항목일 수 있어요.
          </p>
          <Link to="/" className="btn">
            전체 목록 보기
          </Link>
        </div>
      </main>
    );
  }

  const gallery = extraImages[trend.id] ?? [];
  const aliasLabel = trend.aliasLabel ?? "다르게 불려요";

  return (
    <main className="container detail">
      <Link to="/" className="back-link">
        ← 목록으로 돌아가기
      </Link>

      <div className="detail__layout">
        {/* 왼쪽: 이미지 */}
        <div className="detail__hero">
          {trend.image ? (
            <img
              className={`detail__hero-img ${
                trend.imageFit === "contain" ? "detail__hero-img--contain" : ""
              }`}
              src={trend.image}
              alt={trend.imageAlt ?? trend.name}
            />
          ) : (
            <div className={`detail__hero-ph cat-${trend.category}`} aria-hidden>
              {trend.emoji}
            </div>
          )}
          {gallery.length > 0 && (
            <div className="gallery">
              {gallery.map((g, i) => (
                <img
                  key={i}
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className={g.fit === "contain" ? "gallery-img--contain" : ""}
                />
              ))}
            </div>
          )}
        </div>

        {/* 오른쪽: 설명 */}
        <div className="detail__info">
          <div className="detail__badges">
            <CategoryBadge
              category={trend.category}
              label={trend.categoryLabel}
            />
          </div>
          <h1 className="detail__title">{trend.name}</h1>
          {trend.aliases.length > 0 && (
            <p className="detail__aliases">
              {aliasLabel} · {trend.aliases.join(", ")}
            </p>
          )}

          <p className="detail__intro">{trend.intro}</p>

          {trend.category === "meme" ? (
            <>
              <div className="field">
                <span className="field__label">뜻과 뉘앙스</span>
                <p>{trend.meaning}</p>
              </div>
              <div className="field">
                <span className="field__label">이렇게 써요</span>
                <div className="example">
                  <span className="example__tag">예문 · 실제 인용 아님</span>
                  <div>{trend.usageExample}</div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="field">
                <span className="field__label">뜻과 특징</span>
                <p>{trend.whatItIs}</p>
              </div>
              {trend.features && trend.features.length > 0 && (
                <div className="field">
                  <span className="field__label">대표적인 특징</span>
                  <ul className="feature-list">
                    {trend.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}
              {trend.usageExample && (
                <div className="field">
                  <span className="field__label">이렇게 말해요</span>
                  <div className="example">
                    <span className="example__tag">예문 · 실제 인용 아님</span>
                    <div>{trend.usageExample}</div>
                  </div>
                </div>
              )}
            </>
          )}

          <div className="field">
            <span className="field__label">왜 주목받나요</span>
            <p>{trend.whyNow}</p>
          </div>

          <VideoSection videos={trend.videos} />

          {trend.related && trend.related.length > 0 && (
            <RelatedList items={trend.related} />
          )}

          {(trend.sources?.length || trend.source || trend.checkedAt) && (
            <div className="sourceline">
              {trend.sources?.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="source-link"
                >
                  <b>출처</b>
                  {s.label}
                  <span aria-hidden> ↗</span>
                </a>
              ))}
              {trend.source && (
                <span>
                  <b>출처</b>
                  {trend.source}
                </span>
              )}
              {trend.checkedAt && (
                <span>
                  <b>확인일</b>
                  {trend.checkedAt}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
