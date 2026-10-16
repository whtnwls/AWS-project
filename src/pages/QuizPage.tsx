import { useState } from "react";
import { Link } from "react-router-dom";
import { questions, QUIZ_TITLE, QUIZ_SUBTITLE } from "../quiz/quizData";
import { QuizResult } from "../quiz/QuizResult";

type Answers = Record<string, string[]>;

export function QuizPage() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showResult, setShowResult] = useState(false);

  const total = questions.length;
  const q = questions[index];
  const selected = answers[q?.id] ?? [];
  const isLast = index === total - 1;
  const canProceed = selected.length > 0;

  function toggle(optionId: string) {
    setAnswers((prev) => {
      const cur = prev[q.id] ?? [];
      if (q.type === "single") {
        return { ...prev, [q.id]: [optionId] };
      }
      // 복수 선택: 토글
      const next = cur.includes(optionId)
        ? cur.filter((id) => id !== optionId)
        : [...cur, optionId];
      return { ...prev, [q.id]: next };
    });
  }

  function goNext() {
    if (!canProceed) return;
    if (isLast) {
      setShowResult(true);
      window.scrollTo({ top: 0 });
      return;
    }
    setIndex((i) => Math.min(i + 1, total - 1));
    window.scrollTo({ top: 0 });
  }

  function goPrev() {
    setIndex((i) => Math.max(i - 1, 0));
    window.scrollTo({ top: 0 });
  }

  function retry() {
    setAnswers({});
    setIndex(0);
    setShowResult(false);
    window.scrollTo({ top: 0 });
  }

  if (showResult) {
    return (
      <main className="container quiz">
        <QuizResult answers={answers} onRetry={retry} />
      </main>
    );
  }

  const progress = ((index + 1) / total) * 100;

  return (
    <main className="container quiz">
      <div className="quiz__top">
        <Link to="/" className="back-link">
          ← 그만두고 홈으로
        </Link>
        <span className="quiz__count">
          {index + 1} / {total}
        </span>
      </div>

      <div className="quiz__bar" aria-hidden>
        <div className="quiz__bar-fill" style={{ width: `${progress}%` }} />
      </div>

      <p className="quiz__kicker">
        {QUIZ_TITLE} · {QUIZ_SUBTITLE}
      </p>

      <h1 className="quiz__question">{q.question}</h1>

      {q.type === "multiple" && (
        <p className="quiz__multi-note">
          어울리는 답을 모두 골라주세요.{" "}
          <span>정답을 모두 선택해야 1점이에요.</span>
        </p>
      )}

      <fieldset className="quiz__options">
        <legend className="sr-only">보기</legend>
        {q.options.map((opt) => {
          const checked = selected.includes(opt.id);
          return (
            <label
              key={opt.id}
              className={`option ${checked ? "option--checked" : ""}`}
            >
              <input
                type={q.type === "single" ? "radio" : "checkbox"}
                name={q.id}
                checked={checked}
                onChange={() => toggle(opt.id)}
                className="option__input"
              />
              <span
                className={`option__box ${
                  q.type === "single" ? "option__box--radio" : ""
                }`}
                aria-hidden
              >
                {checked && (q.type === "single" ? "" : "✓")}
              </span>
              <span className="option__label">{opt.label}</span>
            </label>
          );
        })}
      </fieldset>

      <div className="quiz__nav">
        <button
          className="btn btn--ghost"
          onClick={goPrev}
          disabled={index === 0}
        >
          이전 문제
        </button>
        <button
          className="btn"
          onClick={goNext}
          disabled={!canProceed}
          title={canProceed ? "" : "답을 선택해 주세요"}
        >
          {isLast ? "결과 보기" : "다음 문제"}
        </button>
      </div>
      {!canProceed && (
        <p className="quiz__need" role="status">
          답을 선택하면 넘어갈 수 있어요.
        </p>
      )}
    </main>
  );
}
