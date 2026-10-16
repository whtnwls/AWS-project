export type Category = "meme" | "food";

/** 연결할 영상/채널 정보 */
export interface VideoLink {
  /** 버튼/제목에 쓰는 라벨 */
  title: string;
  /** 바로가기 링크 (유튜브 영상 또는 채널 주소) */
  url: string;
  /**
   * 유튜브 영상 ID. 있으면 상세 페이지에서 바로 재생(임베드)됩니다.
   * 채널 링크처럼 임베드가 불가능한 경우에는 비워 두세요(링크 버튼만 표시).
   */
  youtubeId?: string;
  /** 임베드/링크 재생 시작 시점(초). 지정하면 그 지점부터 재생됩니다. */
  startSeconds?: number;
}

/** 출처 링크 */
export interface SourceLink {
  /** 링크 라벨 */
  label: string;
  /** 출처 URL */
  url: string;
}

/**
 * '함께 알아두면 좋아요' 연결 항목.
 * - targetId 가 있으면 등록된 트렌드이므로 상세 페이지로 이동(링크).
 * - targetId 가 없으면 아직 등록되지 않은 표현이므로 일반 텍스트로만 표시.
 */
export interface RelatedItem {
  /** 표시 이름 */
  name: string;
  /** 짧은 설명 */
  note: string;
  /** 연결될 트렌드 id (등록된 콘텐츠일 때만). 없으면 텍스트로만 표시 */
  targetId?: string;
}

export interface TrendBase {
  /** URL에 사용되는 고유 식별자 */
  id: string;
  /** 대표 이름 */
  name: string;
  /** 다르게 불리는 별칭들 (검색에 함께 사용) */
  aliases: string[];
  /** 필터/배지 색상에 쓰는 분류 (밈 / 음식) */
  category: Category;
  /** 배지에 표시할 라벨 텍스트. 없으면 category 기본 라벨 사용 */
  categoryLabel?: string;
  /** 별칭 줄에 쓰는 표현. 기본은 '다르게 불려요' */
  aliasLabel?: string;
  /** 카드/목록에 쓰는 쉬운 설명 한 줄 */
  shortDescription: string;
  /** 카드/목록에 쓰는 '주목하는 이유' 한 줄 */
  whyNow: string;
  /** 상세 페이지의 짧고 쉬운 소개 */
  intro: string;
  /** 대표 이미지 (import 한 에셋 경로). 없으면 이모지 플레이스홀더 표시 */
  image?: string;
  /** 이미지 대체 텍스트 */
  imageAlt?: string;
  /**
   * 상세 페이지 대표 이미지를 영역에 맞추는 방식.
   * 'cover'(기본): 꽉 차게 채우고 넘치면 자름. 'contain': 전체가 보이게(로고 등).
   */
  imageFit?: "cover" | "contain";
  /**
   * 홈 카드 썸네일에서 이미지를 맞추는 방식. 지정 없으면 'cover'(꽉 차게).
   * 로고·레시피 캡처처럼 잘리면 안 되는 것만 'contain'.
   */
  cardFit?: "cover" | "contain";
  /** 카드/상세 상단의 이모지 (보조 시각 요소) */
  emoji: string;
  /** 연결할 영상/채널 목록 (없으면 생략) */
  videos?: VideoLink[];
  /** '함께 알아두면 좋아요' 연결 항목 (없으면 생략) */
  related?: RelatedItem[];
  /** 출처 링크 목록 */
  sources?: SourceLink[];
  /** 출처 표기(단순 텍스트). 지어낸 값은 넣지 않는다. 비우면 표시 안 함 */
  source: string;
  /** 확인일. 지어낸 날짜는 넣지 않는다. 비우면 표시 안 함 */
  checkedAt: string;
  /** (내부용) 데모 데이터 여부 */
  isDemo: boolean;
}

export interface MemeTrend extends TrendBase {
  category: "meme";
  /** 뜻과 뉘앙스 */
  meaning: string;
  /** 간단한 사용 예시 (실제 인용이 아닌 예문) */
  usageExample: string;
}

export interface FoodTrend extends TrendBase {
  category: "food";
  /** 어떤 음식인지 / 뜻과 특징 (산문) */
  whatItIs: string;
  /** 맛·식감·구성 등 대표적인 특징 (없으면 생략) */
  features?: string[];
  /** 음식류의 사용 예시 (없으면 생략, 예문) */
  usageExample?: string;
}

export type Trend = MemeTrend | FoodTrend;

export type CategoryFilter = "all" | Category;
