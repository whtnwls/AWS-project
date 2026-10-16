import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { trends } from "../data/trends";
import {
  questions,
  getTier,
  isCorrect,
  type QuizQuestion,
} from "./quizData";

function labelsFor(q: QuizQuestion, ids: string[]): string {
  if (ids.length === 0) return "선택 안 함";
  return ids
    .map((id) => q.options.find((o) => o.id === id)?.label ?? id)
    .join(", ");
}

/** 문제 하나의 펼침 해설 블록 */
function ReviewItem({
  q,
  selected,
  correct,
}: {
  q: QuizQuestion;
  selected: string[];
  correct: boolean;
}) {
  // 틀린 문제는 기본으로 펼치고, 맞힌 문제는 접어 둔다
  const [open, setOpen] = useState(!correct);

  return (
    <div className={`review ${correct ? "review--ok" : "review--no"}`}>
      <button
        className="review__head"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className={`review__mark ${correct ? "ok" : "no"}`} aria-hidden>
          {correct ? "✓" : "✕"}
        </span>
        <span className="review__topic">{q.topic}</span>
        <span className="review__toggle" aria-hidden>
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="review__body">
          <p className="review__q">{q.question}</p>
          <p className="review__row">
            <b>정답</b>
            {labelsFor(q, q.answerIds)}
          </p>
          <p className="review__row">
            <b>내 선택</b>
            <span className={correct ? "" : "review__wrong"}>
              {labelsFor(q, selected)}
            </span>
          </p>
          <p className="review__exp">{q.explanation}</p>
        </div>
      )}
    </div>
  );
}

export function QuizResult({
  answers,
  onRetry,
}: {
  answers: Record<string, string[]>;
  onRetry: () => void;
}) {
  const graded = useMemo(
    () =>
      questions.map((q) => {
        const sel = answers[q.id] ?? [];
        return { q, sel, correct: isCorrect(q, sel) };
      }),
    [answers]
  );

  const score = graded.filter((g) => g.correct).length;
  const tier = getTier(score);

  // 추천 카드: 틀린 문제의 연결 콘텐츠(등록된 것만), 중복 제거
  const recommendedIds = useMemo(() => {
    const ids = new Set<string>();
    graded.forEach((g) => {
      if (!g.correct) g.q.relatedTrendIds.forEach((id) => ids.add(id));
    });
    // 모두 맞혔다면 다른 등록 콘텐츠를 추천 (하이디라오 등)
    if (ids.size === 0) {
      ["haidilao", "hanjungsun", "du-jjon-ku"].forEach((id) => ids.add(id));
    }
    // 실제 등록된 트렌드만 남긴다 (작동하지 않는 링크 방지)
    return [...ids].filter((id) => trends.some((t) => t.id === id));
  }, [graded]);

  const recommended = recommendedIds
    .map((id) => trends.find((t) => t.id === id)!)
    .filter(Boolean);

  const [shareMsg, setShareMsg] = useState<string | null>(null);

  const shareText = `나는 ‘${tier.title}’ 나옴ㅋㅋ 너는 몇 개 맞히냐?`;

  async function handleShare() {
    const url = window.location.origin + "/quiz";
    const data = { title: "늙크크 판독기", text: shareText, url };
    // 지원 환경에서는 기본 공유, 아니면 링크 복사
    if (navigator.share) {
      try {
        await navigator.share(data);
      } catch (e) {
        // 사용자가 공유를 취소한 경우는 오류로 표시하지 않음
        if ((e as Error)?.name !== "AbortError") {
          setShareMsg("공유를 완료하지 못했어요. 링크를 복사해 보세요.");
        }
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(`${shareText} ${url}`);
      setShareMsg("링크를 복사했어요. 친구에게 붙여넣어 보내보세요!");
    } catch {
      setShareMsg("링크 복사가 안 됐어요. 주소창의 /quiz 링크를 복사해 주세요.");
    }
  }

  return (
    <div className="quiz-result">
      <p className="quiz-result__kicker">재미로 보는 트렌드 퀴즈</p>
      <div className="quiz-result__score">
        <span className="quiz-result__num">{score}</span>
        <span className="quiz-result__denom">/ 7 정답</span>
      </div>
      <h1 className="quiz-result__title">{tier.title}</h1>
      <p className="quiz-result__msg">{tier.message}</p>

      <div className="quiz-result__actions">
        <button className="btn" onClick={handleShare}>
          친구도 현역인지 확인하기
        </button>
        <button className="btn btn--ghost" onClick={onRetry}>
          다시 해보기
        </button>
        <Link className="btn btn--ghost" to="/">
          트렌드 구경하기
        </Link>
      </div>
      {shareMsg && (
        <p className="quiz-result__sharemsg" role="status">
          {shareMsg}
        </p>
      )}

      <section className="quiz-review">
        <h2 className="quiz-review__title">놓친 트렌드 알아보기</h2>
        <p className="quiz-review__hint">
          틀린 문제는 펼쳐져 있어요. 맞힌 문제도 눌러서 해설을 볼 수 있어요.
        </p>
        <div className="quiz-review__list">
          {graded.map((g) => (
            <ReviewItem
              key={g.q.id}
              q={g.q}
              selected={g.sel}
              correct={g.correct}
            />
          ))}
        </div>

        {recommended.length > 0 && (
          <div className="quiz-review__reco">
            <h3 className="quiz-review__reco-title">
              {score === 7 ? "이런 트렌드도 있어요" : "관련 트렌드 알아보기"}
            </h3>
            <div className="quiz-reco-grid">
              {recommended.map((t) => (
                <Link
                  key={t.id}
                  to={`/trend/${t.id}`}
                  className="quiz-reco-card"
                >
                  <span className="quiz-reco-card__name">{t.name}</span>
                  <span className="quiz-reco-card__desc">
                    {t.shortDescription}
                  </span>
                  <span className="quiz-reco-card__arrow" aria-hidden>
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
