import type { Trend } from "../types";

// 트렌드 이미지 (src/assets/trends/)
import geojeYaho from "../assets/trends/geoje-yaho.jpg";
import woniChannel from "../assets/trends/woni-channel.jpg";
import dubaiChoco from "../assets/trends/dubai-choco.jpg";
import hanjungsunPoster from "../assets/trends/hanjungsun-poster.jpeg";
import hanjungsunMenu from "../assets/trends/hanjungsun-menu.jpg";
import yejeolShot from "../assets/trends/yejeol-shot.jpg";
import haidilao from "../assets/trends/haidilao.jpg";
import haidilaoLogo from "../assets/trends/haidilao-logo.jpg";
import haidilaoSauce from "../assets/trends/haidilao-sauce.jpg";
import gunheeSauce from "../assets/trends/gunhee-sauce.jpg";
import gunheeSauce2 from "../assets/trends/gunhee-sauce-2.jpg";
import yeongjiSauce from "../assets/trends/yeongji-sauce.jpg";
import pizzaSeolgi from "../assets/trends/pizza-seolgi.jpg";

/**
 * 트렌드 콘텐츠 데이터입니다.
 *
 * - source(출처), checkedAt(확인일)에는 지어낸 값을 넣지 않습니다.
 *   확인한 자료가 있으면 채워 넣으세요(비어 있으면 화면에 표시되지 않습니다).
 * - usageExample(사용 예시)은 실제 인용이 아닌 '예문'입니다.
 * - videos 의 youtubeId 는 실제 확인한 영상 ID만 넣으세요(비우면 링크 버튼만 표시).
 */

// 확인한 출처/날짜가 있으면 아래 상수 대신 각 항목에 직접 채워 넣으세요.
const SOURCE = "";
const CHECKED_AT = "";

export const trends: Trend[] = [
  {
    id: "woni-geoje-yaho",
    name: "거제야호",
    aliases: [
      "원이",
      "거제 야호",
      "거제야호",
      "コジェヤッホー",
      "안녕하세요원이입니다",
      "woni",
    ],
    category: "meme",
    image: geojeYaho,
    imageAlt: "핑크색 모자를 쓰고 손을 흔드는 '거제 야호' 영상 장면",
    emoji: "📣",
    shortDescription:
      "유튜버 '원이'가 영상에서 외치는 '거제 야호' 인사가 따라 하기 좋은 유행으로 번진 밈.",
    whyNow:
      "특유의 말투와 손짓, 자막 연출이 짧은 영상에서 반복 재생되며 따라 하는 사람이 늘어남.",
    intro:
      "유튜버 '원이'의 영상에서 나온 '거제 야호' 인사와 리액션이 밈이 된 거예요. 밝은 톤의 외침과 손짓이 특징이라, 영상에서 보고 따라 하는 사람이 많습니다. 일본어 자막 'コジェヤッホー'로도 자주 노출됩니다.",
    meaning:
      "'거제 야호'는 특정 지명을 외치는 밝은 인사이자 리액션으로 쓰여요. 누군가를 반갑게 맞거나 분위기를 띄울 때 장난스럽게 따라 하는 긍정적인 뉘앙스입니다.",
    usageExample:
      "(예문) 친구를 만나 반갑게 \"거제 야호~\" 하고 손을 흔드는 상황. 실제 영상 속 대사와는 다를 수 있는 예문입니다.",
    videos: [
      {
        title: "'거제 야호' 장면이 담긴 원본 영상",
        url: "https://youtu.be/SF29doLuBfc?t=1017",
        youtubeId: "SF29doLuBfc",
        startSeconds: 1017, // 16분 57초 지점부터 재생
      },
      {
        title: "유튜브 채널 '안녕하세요원이입니다잘부탁드립니다' 바로가기",
        url: "https://www.youtube.com/@helloiamwoninicetomeetyou",
        // 채널 링크는 임베드가 되지 않아 링크 버튼으로만 표시됩니다.
      },
    ],
    source: SOURCE,
    checkedAt: CHECKED_AT,
    isDemo: false,
  },
  {
    id: "du-jjon-ku",
    name: "두쫀쿠",
    aliases: [
      "두바이 초콜릿",
      "두바이초콜릿",
      "두바이 쫀득 쿠키",
      "피스타치오 초콜릿",
    ],
    category: "food",
    image: dubaiChoco,
    imageAlt: "코코아 가루를 묻힌 두바이 초콜릿, 속에 피스타치오 필링이 보인다",
    emoji: "🍫",
    shortDescription:
      "두바이 초콜릿 계열의 디저트로, 겉은 초콜릿·코코아, 속은 고소한 피스타치오 필링이 들어간다.",
    whyNow:
      "속을 가를 때 드러나는 초록빛 피스타치오 필링과 쫀득·바삭한 식감이 영상으로 퍼지며 화제가 됨.",
    intro:
      "'두쫀쿠'는 두바이 초콜릿을 바탕으로 한 디저트를 부르는 이름이에요. 겉은 초콜릿이나 코코아 가루, 속은 고소한 피스타치오 필링으로 채워져 있고, 자르면 안쪽의 초록빛이 드러나는 모습이 특징입니다. 이름의 정확한 유래는 확인되지 않았으니 발표 시 확인해 교체하세요.",
    whatItIs:
      "두바이에서 유행한 피스타치오 초콜릿을 변형한 디저트. 초콜릿·코코아로 감싼 한 입 크기 형태로도 만들어집니다.",
    features: [
      "겉면은 초콜릿 또는 코코아 가루 코팅",
      "속은 고소하고 꾸덕한 피스타치오 필링",
      "자르면 드러나는 초록빛 단면",
      "쫀득함과 바삭함이 함께 느껴지는 식감",
    ],
    source: SOURCE,
    checkedAt: CHECKED_AT,
    isDemo: false,
  },
  {
    id: "hanjungsun",
    name: "한정선 (韓貞仙)",
    aliases: [
      "韓貞仙",
      "HANJUNGSUN",
      "한정선 모찌",
      "과일 찹쌀떡",
      "과일 모찌",
    ],
    category: "food",
    image: hanjungsunPoster,
    imageAlt: "크림 질감 배경 위의 韓貞仙 HANJUNGSUN 로고 포스터",
    emoji: "🍓",
    shortDescription:
      "과일을 통째로 넣은 찹쌀떡(모찌) 브랜드로, 단면의 과일 비주얼이 돋보이는 디저트.",
    whyNow:
      "두바이·딸기·샤인머스캣 등 다양한 과일 모찌의 단면 사진이 공유되며 골라 먹는 재미로 주목받음.",
    intro:
      "'한정선(韓貞仙 · HANJUNGSUN)'은 과일을 넣은 찹쌀떡(모찌)을 선보이는 디저트예요. 두바이, 초코딸기, 샤인머스캣, 골드키위, 곶감 등 종류가 다양하고, 반으로 가른 단면의 과일 비주얼이 특징입니다.",
    whatItIs:
      "말랑한 찹쌀떡 안에 과일이나 필링을 통째로 넣어 만든 과일 모찌 디저트. 종류별로 겉색과 단면이 달라 고르는 재미가 있습니다.",
    features: [
      "말랑한 찹쌀떡(모찌) 피",
      "딸기·샤인머스캣·골드키위 등 통과일 필링",
      "반으로 가른 단면의 또렷한 과일 비주얼",
      "두바이·초코딸기 등 다양한 맛 구성",
    ],
    videos: [],
    source: SOURCE,
    checkedAt: CHECKED_AT,
    isDemo: false,
  },
  {
    id: "yejeol-shot",
    name: "예절샷",
    aliases: ["포카 예절샷", "포토카드 인증샷", "예절샷"],
    category: "meme",
    categoryLabel: "팬덤·문화",
    image: yejeolShot,
    imageAlt:
      "하이디라오 훠궈 테이블에서 포토카드를 손에 들고 음식과 함께 찍는 장면",
    imageFit: "contain",
    emoji: "📸",
    shortDescription:
      "음식을 먹기 전에 좋아하는 아이돌의 포토카드(포카)를 음식과 함께 찍는 팬덤 인증 문화.",
    whyNow:
      "평범한 식사를 '최애'와 함께한 특별한 기록으로 남길 수 있어 팬들 사이에서 즐겨 공유됨.",
    intro:
      "음식을 먹기 전에 좋아하는 아이돌의 포토카드, 일명 '포카'를 음식 옆에 놓거나 손에 들고 함께 찍는 사진이에요. 맛있는 순간을 최애와 함께하는 느낌으로 기록하는 팬덤 문화입니다.",
    meaning:
      "“먹기 전에 최애부터 챙겨야지!”라는 장난스러운 마음이 담겨 있어요. 실제로 지켜야 하는 식사 예절은 아니고, 팬들끼리 즐기는 인증 방식이에요. “예절샷부터 찍자”는 포카를 꺼내 음식과 함께 사진을 남기자는 뜻입니다.",
    usageExample:
      "“잠깐! 아직 먹지 마. 포카 꺼내서 예절샷부터 찍자!”",
    related: [
      {
        name: "하이디라오",
        note: "팬들이 포카나 인형을 음식과 함께 찍는 장소로도 알려져 있어요.",
        targetId: "haidilao",
      },
      {
        name: "건희소스",
        note: "원어스 건희가 소개한 훠궈 소스 조합이에요.",
        targetId: "gunhee-sauce",
      },
      {
        name: "영지소스",
        note: "이영지가 공개한 훠궈 소스 조합이에요.",
        targetId: "yeongji-sauce",
      },
    ],
    sources: [
      {
        label: "예절샷 관련 기사",
        url: "https://www.yeongnam.com/web/view.php?key=20230824010003303",
      },
    ],
    source: SOURCE,
    checkedAt: CHECKED_AT,
    isDemo: false,
  },
  {
    id: "haidilao",
    name: "하이디라오",
    aliases: ["훠궈", "소스바", "셀럽 소스", "haidilao"],
    category: "food",
    categoryLabel: "음식·먹는 문화",
    aliasLabel: "관련 표현",
    image: haidilaoLogo,
    imageAlt: "하이디라오(海底捞火锅) 로고",
    imageFit: "contain",
    cardFit: "contain",
    emoji: "🍲",
    shortDescription:
      "여러 육수에 고기·채소를 익혀 먹는 훠궈 전문점으로, 포카 예절샷·셀럽 소스 문화와 연결된다.",
    whyNow:
      "소스를 직접 조합하고 포카·인형과 사진을 남기는 등 식사에 즐길 거리가 더해져 이야기됨.",
    intro:
      "여러 가지 육수에 고기와 채소 등을 익혀 먹는 훠궈 전문점이에요. 아이돌 팬들 사이에서는 포카와 함께 예절샷을 찍거나, 연예인이 소개한 소스 조합을 따라 만드는 식사 문화와도 연결돼 있어요.",
    whatItIs:
      "하이디라오는 음식 이름이 아니라 식당 브랜드 이름이에요. 소스바의 재료를 섞어 찍어 먹을 소스를 만들 수 있어, 건희소스나 영지소스처럼 이름이 붙은 조합도 함께 이야기됩니다.",
    usageExample:
      "“오늘 하이디라오 갈래? 포카도 챙겨 와. 예절샷 찍자!”",
    related: [
      {
        name: "예절샷",
        note: "음식을 앞에 두고 포토카드를 꺼내는 이유가 궁금하다면 알아보세요.",
        targetId: "yejeol-shot",
      },
      {
        name: "건희소스",
        note: "원어스 건희가 소개한 소스 조합이에요.",
        targetId: "gunhee-sauce",
      },
      {
        name: "영지소스",
        note: "이영지가 공개한 소스 조합이에요.",
        targetId: "yeongji-sauce",
      },
    ],
    sources: [
      {
        label: "하이디라오와 팬덤 문화 관련 보도",
        url: "https://v.daum.net/v/20241205090114714",
      },
    ],
    source: SOURCE,
    checkedAt: CHECKED_AT,
    isDemo: false,
  },
  {
    id: "gunhee-sauce",
    name: "건희소스",
    aliases: ["하이디라오 소스 조합", "셀럽 소스 레시피", "건희소스"],
    category: "food",
    categoryLabel: "음식·먹는 문화",
    aliasLabel: "관련 표현",
    image: gunheeSauce,
    imageAlt: "원어스 건희가 소개한 하이디라오 소스 레시피 안내",
    imageFit: "contain",
    cardFit: "contain",
    emoji: "🥜",
    shortDescription:
      "원어스 건희가 소개한 훠궈 소스 조합으로, 땅콩소스·칠리소스 등을 섞어 만든다.",
    whyNow:
      "좋아하는 아이돌이 소개한 취향을 소스바에서 직접 따라 만들어볼 수 있어 관심을 모음.",
    intro:
      "아이돌 그룹 원어스의 멤버 건희가 소개한 훠궈 소스 조합이에요. 땅콩소스와 칠리소스 등을 섞어 만들며, 하이디라오에서 따라 만드는 레시피로 알려져 있어요.",
    whatItIs:
      "완제품 소스의 이름이 아니라, 소스바의 여러 재료를 조합하는 레시피를 뜻해요. 좋아하는 아이돌이 소개한 취향을 직접 경험해볼 수 있다는 점에서 팬덤 문화와도 연결됩니다.",
    usageExample:
      "“소스 어떻게 만들지?” / “건희소스로 만들어 보자. 조합 찾아왔어!”",
    related: [
      {
        name: "하이디라오",
        note: "건희소스와 함께 언급되는 훠궈 전문점이에요.",
        targetId: "haidilao",
      },
      {
        name: "영지소스",
        note: "함께 알아두면 좋은 또 다른 셀럽 소스 조합이에요.",
        targetId: "yeongji-sauce",
      },
      {
        name: "예절샷",
        note: "식사와 함께 즐기는 팬덤 인증 문화를 알아보세요.",
        targetId: "yejeol-shot",
      },
    ],
    sources: [
      {
        label: "건희소스 관련 보도",
        url: "https://v.daum.net/v/20241205090114714",
      },
    ],
    source: SOURCE,
    checkedAt: CHECKED_AT,
    isDemo: false,
  },
  {
    id: "yeongji-sauce",
    name: "영지소스",
    aliases: ["이영지 소스", "하이디라오 소스 조합", "영지소스"],
    category: "food",
    categoryLabel: "음식·먹는 문화",
    aliasLabel: "관련 표현",
    image: yeongjiSauce,
    imageAlt: "이영지가 공개한 영지소스 레시피가 담긴 영상 장면",
    imageFit: "contain",
    cardFit: "contain",
    emoji: "🌶️",
    shortDescription:
      "이영지가 공개한 훠궈 소스 조합으로, 땅콩소스·스위트칠리에 태국고추·파·마늘 등을 더한다.",
    whyNow:
      "영상에서 본 조합을 식사 자리에서 직접 따라 만들어 비교해볼 수 있어 관심을 모음.",
    intro:
      "이영지가 공개한 훠궈 소스 조합이에요. 땅콩소스와 스위트칠리를 바탕으로 태국고추, 다진 파, 마늘 등 여러 재료를 더해 만듭니다.",
    whatItIs:
      "소스바에서 재료를 직접 섞어 만드는 레시피예요. 고소한 재료와 매운 재료를 함께 사용하는 조합으로, 채널십오야 콘텐츠에서 공개된 버전이 소개되며 관심을 모았어요.",
    usageExample:
      "“나는 오늘 영지소스로 만들어 볼래!” / “다 만들면 한 입씩 비교해보자.”",
    related: [
      {
        name: "하이디라오",
        note: "영지소스와 함께 언급되는 훠궈 전문점이에요.",
        targetId: "haidilao",
      },
      {
        name: "건희소스",
        note: "원어스 건희가 소개한 또 다른 소스 조합이에요.",
        targetId: "gunhee-sauce",
      },
      {
        name: "예절샷",
        note: "포토카드와 음식을 함께 찍는 문화를 알아보세요.",
        targetId: "yejeol-shot",
      },
    ],
    sources: [
      {
        label: "영지소스 소개",
        url: "https://dafanew.com/Food_drink/?bmode=view&idx=161757121",
      },
    ],
    source: SOURCE,
    checkedAt: CHECKED_AT,
    isDemo: false,
  },
  {
    id: "pizza-seolgi",
    name: "피자설기",
    aliases: ["이색 설기", "떡 디저트", "피자설기"],
    category: "food",
    aliasLabel: "관련 표현",
    image: pizzaSeolgi,
    imageAlt: "설기 위에 토마토소스·치즈·페퍼로니 등 피자 토핑을 올린 피자설기",
    imageFit: "contain",
    emoji: "🍕",
    shortDescription:
      "설기 위에 토마토소스·치즈·햄 등 피자 토핑을 올린, 떡 기반의 이색 디저트.",
    whyNow:
      "익숙한 떡과 피자를 결합한 의외성과 눈에 띄는 모양으로 SNS에서 주목받음.",
    intro:
      "설기 위에 토마토소스와 치즈, 햄이나 페퍼로니 같은 피자 토핑을 올린 음식이에요. 떡을 바탕으로 피자의 맛과 모양을 더한 이색 메뉴입니다.",
    whatItIs:
      "설기의 쫀득한 식감에 피자 토핑의 짭짤한 맛을 더한 조합이에요. 겉모습은 작은 피자 같지만, 빵 대신 떡을 사용한다는 점이 특징입니다.",
    usageExample:
      "“이거 빵이 아니라 떡이야?” / “응! 설기에 피자 토핑을 올린 피자설기래.”",
    related: [
      {
        name: "떡지순례",
        note: "특색 있는 떡을 찾아 여러 떡집을 방문하는 것을 가리키는 표현이에요.",
      },
      {
        name: "이색 떡 디저트",
        note: "익숙한 떡에 새로운 재료와 조합을 더한 음식들을 함께 살펴볼 수 있어요.",
      },
    ],
    sources: [
      {
        label: "피자설기 관련 보도",
        url: "https://www.yna.co.kr/view/AKR20261008046800030",
      },
    ],
    source: SOURCE,
    checkedAt: CHECKED_AT,
    isDemo: false,
  },
];

/** 상세 페이지에서 추가로 보여줄 보조 이미지 (갤러리) */
export const extraImages: Record<
  string,
  { src: string; alt: string; fit?: "cover" | "contain" }[]
> = {
  "woni-geoje-yaho": [
    {
      src: woniChannel,
      alt: "유튜버 '원이' 유튜브 채널 화면",
      fit: "contain",
    },
  ],
  hanjungsun: [
    {
      src: hanjungsunMenu,
      alt: "한정선 과일 모찌 메뉴판 (두바이, 딸기, 샤인머스캣 등)",
      fit: "contain",
    },
  ],
  haidilao: [
    {
      src: haidilao,
      alt: "하이디라오 훠궈 전골 냄비와 다양한 재료가 놓인 테이블",
    },
    {
      src: haidilaoSauce,
      alt: "하이디라오 소스바에서 만든 소스",
    },
  ],
  "gunhee-sauce": [
    {
      src: gunheeSauce2,
      alt: "건희소스 조합을 보여주는 추가 이미지",
      fit: "contain",
    },
  ],
};
