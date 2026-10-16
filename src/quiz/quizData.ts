/**
 * '늙크크 판독기' 퀴즈 데이터 (정적 / 프런트엔드 채점)
 *
 * - 재미로 보는 트렌드 퀴즈입니다. 실제 나이 측정이 아닙니다.
 * - relatedTrendIds 에는 '등록된 트렌드 id'만 넣습니다.
 *   미등록 콘텐츠(야르, 줴줴이야, 야호-미나미)는 비워 두어
 *   결과 화면에서 작동하지 않는 링크를 만들지 않습니다.
 */

export type QuizType = "single" | "multiple";

export interface QuizOption {
  id: string;
  label: string;
}

export interface QuizQuestion {
  id: string;
  /** 꼬리표(어떤 트렌드에 대한 문제인지, 보조 표시용) */
  topic: string;
  type: QuizType;
  question: string;
  options: QuizOption[];
  /** 정답 보기 id 배열 (복수 선택이면 여러 개) */
  answerIds: string[];
  explanation: string;
  /** 결과 화면에서 추천할 '등록된' 트렌드 id (없으면 빈 배열) */
  relatedTrendIds: string[];
}

export const QUIZ_TITLE = "늙크크 판독기";
export const QUIZ_SUBTITLE = "7문제로 확인하는 늙크크 판독기";

export const questions: QuizQuestion[] = [
  {
    id: "q1-yejeol",
    topic: "예절샷",
    type: "single",
    question:
      "음식이 나왔는데 친구가 수저 대신 아이돌 포카를 꺼냈다. 지금 하려는 건?",
    options: [
      { id: "a", label: "교환식" },
      { id: "b", label: "예절샷" },
      { id: "c", label: "입덕식" },
    ],
    answerIds: ["b"],
    explanation:
      "예절샷은 좋아하는 아이돌의 포토카드를 음식과 함께 찍는 사진이에요. 맛있는 순간을 최애와 함께하는 느낌으로 기록하는 거죠.",
    relatedTrendIds: ["yejeol-shot"],
  },
  {
    id: "q2-gunhee",
    topic: "건희소스",
    type: "single",
    question:
      "하이디라오에서 친구가 “난 건희소스로 먹을래”라고 한다. 이 친구의 다음 행동은?",
    options: [
      { id: "a", label: "직원에게 건희소스 한 병을 주문한다." },
      { id: "b", label: "탕에 들어갈 재료를 고른다." },
      { id: "c", label: "소스바에서 재료를 섞는다." },
    ],
    answerIds: ["c"],
    explanation:
      "건희소스는 원어스 건희가 소개한 훠궈 소스 조합이에요. 소스바의 재료를 섞어 만드는 레시피를 뜻합니다.",
    relatedTrendIds: ["gunhee-sauce"],
  },
  {
    id: "q3-yareu",
    topic: "야르",
    type: "multiple",
    question:
      "금요일 오후, 갑자기 약속이 취소됐다. 집에 누워 쉴 생각에 입꼬리가 올라간다. 이때 나올 한마디는?",
    options: [
      { id: "a", label: "아, 줴줴이야~" },
      { id: "b", label: "야르~" },
      { id: "c", label: "이건 좀 아닌데?" },
    ],
    answerIds: ["a", "b"],
    explanation:
      "‘야르~’는 신나는 마음을 바로 표현한 반응이에요. ‘아, 줴줴이야~’도 일부러 아쉬운 척 능청스럽게 말하는 반응으로 쓸 수 있어요. 이 문항에서는 그런 반어적인 사용도 정답으로 인정해요. ‘줴줴이야’ 자체가 신난다는 뜻은 아니라는 점! 밈은 뜻뿐 아니라 말투와 맥락도 중요하니까요.",
    relatedTrendIds: [],
  },
  {
    id: "q4-pizza",
    topic: "피자설기",
    type: "single",
    question: "피자인 줄 알고 한입 먹었는데 쫀득하다. 피자설기에서 빵 대신 쓰는 것은?",
    options: [
      { id: "a", label: "감자" },
      { id: "b", label: "설기" },
      { id: "c", label: "누룽지" },
    ],
    answerIds: ["b"],
    explanation:
      "피자설기는 설기 위에 소스와 치즈 등 피자 토핑을 더한 음식이에요. 떡의 식감과 피자의 맛을 함께 즐기는 조합이죠.",
    relatedTrendIds: ["pizza-seolgi"],
  },
  {
    id: "q5-yeongji",
    topic: "영지소스",
    type: "single",
    question: "하이디라오에서 따라 만드는 ‘영지소스’. 이름과 연결되는 인물은?",
    options: [
      { id: "a", label: "이영지" },
      { id: "b", label: "허영지" },
      { id: "c", label: "이지영" },
    ],
    answerIds: ["a"],
    explanation:
      "이영지가 공개한 훠궈 소스 조합이에요. 유명인이 소개한 레시피를 직접 따라 만드는 셀럽 소스 문화의 한 사례입니다.",
    relatedTrendIds: ["yeongji-sauce"],
  },
  {
    id: "q6-jwejwe",
    topic: "줴줴이야",
    type: "single",
    question:
      "우리 팀이 크게 밀리는 게임 화면을 보며 친구가 “아, 줴줴이야~”라고 한다. 가장 가까운 속마음은?",
    options: [
      { id: "a", label: "지금부터 연습 시작." },
      { id: "b", label: "이제 역전 확정이다." },
      { id: "c", label: "아, 이번 판은 끝났네." },
    ],
    answerIds: ["c"],
    explanation:
      "‘줴줴이야’는 게임 표현 GG를 독특한 억양으로 말하는 밈이에요. 이 상황에서는 “졌다”, “이번 판은 끝났다”는 장난 섞인 체념에 가까워요. 야르 문제에서의 반어적인 사용과 구분해 이해하면 됩니다.",
    relatedTrendIds: [],
  },
  {
    id: "q7-yaho",
    topic: "야호 — 리센느 미나미",
    type: "single",
    question: "‘거제 야호~’라는 말과 특유의 말투. 이 밈과 연결되는 리센느 멤버는?",
    options: [
      { id: "a", label: "원이" },
      { id: "b", label: "미나미" },
      { id: "c", label: "리브" },
    ],
    answerIds: ["b"],
    explanation:
      "리센느 미나미의 갸루 캐릭터와 ‘거제 야호~’라는 리액션이 밈으로 알려졌어요. 단어만큼이나 억양과 동작이 포인트입니다.",
    relatedTrendIds: [],
  },
];

export interface ResultTier {
  min: number;
  max: number;
  title: string;
  message: string;
}

/** 정답 수 구간별 결과 */
export const resultTiers: ResultTier[] = [
  {
    min: 0,
    max: 2,
    title: "감성 업데이트 필요",
    message: "알고리즘이 잠깐 다른 길로 샜네요.",
  },
  {
    min: 3,
    max: 4,
    title: "선택적 현역",
    message: "아는 건 확실한데, 모르는 건 처음 듣죠?",
  },
  {
    min: 5,
    max: 6,
    title: "아직 현역",
    message: "대화에 자연스럽게 낄 수 있겠는데요?",
  },
  {
    min: 7,
    max: 7,
    title: "트렌드 상주민",
    message: "혹시 유행을 직접 퍼뜨리고 계신가요?",
  },
];

export function getTier(score: number): ResultTier {
  return (
    resultTiers.find((t) => score >= t.min && score <= t.max) ?? resultTiers[0]
  );
}

/**
 * 단일/복수 선택 채점.
 * - 단일: 정답 보기와 정확히 일치하면 1점
 * - 복수: 정답을 모두 고르고 오답을 하나도 고르지 않아야 1점 (부분 점수 없음)
 * - 선택 순서는 영향 없음
 */
export function isCorrect(q: QuizQuestion, selected: string[]): boolean {
  if (selected.length !== q.answerIds.length) return false;
  const a = [...q.answerIds].sort();
  const s = [...selected].sort();
  return a.every((id, i) => id === s[i]);
}
