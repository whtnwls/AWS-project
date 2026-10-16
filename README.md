<div align="center">

# 요즘.zip

### 요즘 다들 무슨 얘기해?

요즘 주목받는 **밈·유행어와 음식·디저트**를 한곳에서 둘러보고,
**무엇인지**와 **왜 화제인지**를 쉽게 이해할 수 있는 트렌드 웹입니다.

<br />

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![AWS Amplify](https://img.shields.io/badge/AWS%20Amplify%20Hosting-FF9900?logo=awsamplify&logoColor=white)

<br />

**AWS 부트캠프 해커톤 프로토타입** · 로그인·DB 없이 프런트엔드만으로 동작합니다.

</div>

---

## 목차

- [어떤 문제를 푸나요](#어떤-문제를-푸나요)
- [주요 기능](#주요-기능)
- [화면 구성](#화면-구성)
- [기술 스택](#기술-스택)
- [빠르게 실행하기](#빠르게-실행하기)
- [시연 순서](#시연-순서)
- [콘텐츠 데이터 다루기](#콘텐츠-데이터-다루기)
- [AWS Amplify Hosting 배포](#aws-amplify-hosting-배포)
- [프로젝트 구조](#프로젝트-구조)
- [범위에서 제외한 것](#범위에서-제외한-것)

---

## 어떤 문제를 푸나요

주변 유행(밈·유행어, 음식·디저트)을 몰라 대화 맥락을 놓치는 사람들이 있습니다.
친구·자녀·방송에서 나온 표현을 매번 물어보기는 머쓱하고, 직접 검색하면 여러 글을
읽어야 의미와 화제가 된 이유를 겨우 파악할 수 있습니다. 무엇이 유행하는지 모르면
애초에 무엇을 검색해야 할지도 모릅니다.

> **핵심 문제** — 요즘 이야기되는 것을 쉽게 **발견**하고, 그 **의미와 화제가 된 이유**를 빠르게 이해하기 어렵다.

**대상 사용자**

- 친구들이 이야기하는 밈과 음식을 알고 싶은 학생
- 사춘기 자녀의 관심사와 표현을 이해하고 싶은 부모
- 방송·콘텐츠에서 언급되는 유행을 파악하려는 크리에이터

특정 세대를 비하하지 않고, 누구나 이해하기 쉬운 설명을 제공하는 데 집중했습니다.

---

## 주요 기능

| 기능 | 설명 |
| --- | --- |
| 트렌드 피드 | 검색하지 않아도 홈에서 주목할 트렌드를 카드로 발견 |
| 카테고리 필터 | 전체 / 밈·유행어 / 음식·디저트로 나눠 탐색 |
| 검색 | 이름·별칭으로 즉시 검색, 결과 없을 때 안내 + 전체 목록 복귀 |
| 상세 페이지 | 쉬운 소개, 뜻·뉘앙스(밈) / 특징(음식), 왜 화제인지, 출처 |
| 유튜브 연결 | 관련 영상은 페이지 안에서 바로 재생(임베드) + 바로가기 링크 |
| 함께 알아두면 좋아요 | 연관 트렌드로 이동(등록된 콘텐츠만 링크) |
| 늙크크 판독기 퀴즈 | 7문제로 트렌드 감각을 확인하고 결과를 친구에게 공유 |

---

## 화면 구성

- **홈** — 메인 문구와 검색창, 카테고리 필터, 트렌드 카드 피드, 퀴즈 배너, 팀 선정 안내.
  검색창보다 카드가 먼저 눈에 들어오게 배치해, 무엇을 검색할지 모르는 사용자도 바로 둘러볼 수 있습니다.
- **트렌드 상세** (`/trend/:id`) — 대표 이미지와 설명을 좌우로 배치. 밈은 뜻·뉘앙스·예문,
  음식은 특징을 담고, 관련 영상(유튜브 임베드)과 '함께 알아두면 좋아요' 연결을 제공합니다.
- **늙크크 판독기** (`/quiz`) — 7문항(단일/복수 선택), 진행 표시, 이전/다음 이동,
  결과 화면에서 구간별 결과·해설·관련 트렌드 추천·공유를 제공합니다.

> 모든 검색·필터·채점은 **프런트엔드에서** 처리합니다. 서버·로그인·DB가 없습니다.

---

## 기술 스택

- **React 18 + TypeScript + Vite**
- **react-router-dom** — 홈 / 상세 / 퀴즈 라우팅
- **정적 데이터** — `src/data/trends.ts`(트렌드), `src/quiz/quizData.ts`(퀴즈)
- 이미지 에셋은 `src/assets/trends/`에서 import하여 Vite가 번들·최적화

---

## 빠르게 실행하기

사전 요구: **Node.js 18 이상** (개발·검증은 Node 24에서 진행했습니다)

```bash
npm install     # 의존성 설치
npm run dev     # 개발 서버 (기본 http://localhost:5173)
```

터미널에 표시되는 주소를 브라우저로 엽니다.

| 명령 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버 (핫 리로드) |
| `npm run build` | 타입 검사(tsc) + 프로덕션 번들(`dist/`) |
| `npm run preview` | 빌드 결과물 미리보기 |
| `npm run lint` | 타입 검사만 (`tsc --noEmit`) |

---

## 시연 순서

1. **홈 진입** — 검색창과 함께 트렌드 카드가 먼저 눈에 들어옵니다.
2. **몰랐던 음식 발견** — `두쫀쿠`, `한정선` 카드를 눌러 무엇이며 왜 화제인지 확인합니다.
3. **상세 둘러보기** — `거제야호` 상세에서 유튜브 영상이 지정 시점부터 재생됩니다.
4. **연관 탐색** — `하이디라오` 상세의 '함께 알아두면 좋아요'로 건희소스·영지소스로 이동합니다.
5. **검색** — 들어본 표현(예: `예절샷`, `피자설기`)을 검색해 바로 찾습니다.
6. **퀴즈** — 홈 배너의 "나 정도면 현역이지"로 들어가 7문제를 풀고 결과를 공유합니다.

---

## 콘텐츠 데이터 다루기

트렌드는 **코드 수정 없이 데이터만 교체**해 운영할 수 있도록 분리되어 있습니다.
`src/data/trends.ts`의 배열 항목을 추가·수정하면 화면에 바로 반영됩니다.

- **공통**: `id`, `name`, `aliases`(검색 별칭), `category`(`"meme"` | `"food"`),
  `shortDescription`, `whyNow`, `intro`, `image`, `imageAlt`
- **밈(`meme`)**: `meaning`(뜻·뉘앙스), `usageExample`(예문)
- **음식(`food`)**: `whatItIs`, `features`(선택)
- **선택 항목**: `videos`(유튜브), `related`(연관 트렌드), `sources`(출처 링크),
  `imageFit` / `cardFit`(이미지 맞춤 방식), `categoryLabel`(배지 라벨)

출처(`source`/`sources`)와 확인일은 **지어낸 값을 넣지 않습니다.** 값이 비어 있으면
화면에 표시되지 않으며, 실제 확인한 자료가 있을 때 채워 넣으면 됩니다.
밈의 사용 예시는 실제 인용이 아닌 **예문**으로, 상세 페이지에서 구분 표시됩니다.

> 퀴즈 문제는 `src/quiz/quizData.ts`에서 관리합니다. 연관 콘텐츠(`relatedTrendIds`)에는
> **등록된 트렌드 id만** 넣어, 결과 화면에서 작동하지 않는 링크가 생기지 않도록 했습니다.

---

## AWS Amplify Hosting 배포

빌드 설정은 저장소의 [`amplify.yml`](./amplify.yml)에 들어 있습니다. (산출물 디렉터리: `dist`)

> 아래는 배포 **방법 안내**입니다. 현재 실제 AWS 리소스에 연결되어 있지는 않습니다.

**Git 연동 방식**

1. AWS 콘솔에서 **AWS Amplify → New app → Host web app**을 선택합니다.
2. Git 공급자에서 이 저장소/브랜치를 연결합니다.
3. 빌드 설정은 `amplify.yml`을 자동 인식합니다.
4. **Save and deploy**를 누르면 빌드 후 배포됩니다.

**SPA 라우팅 리라이트 (필수)**

이 앱은 클라이언트 라우팅을 사용하므로, `/trend/...`나 `/quiz`를 새로고침하거나 직접 열면
Amplify가 404를 반환할 수 있습니다. **App settings → Rewrites and redirects**에 아래 규칙을 추가하세요.

| Source address | Target address | Type |
| --- | --- | --- |
| `/<*>` | `/index.html` | `200 (Rewrite)` |

(Amplify 문서의 "Redirects for single page web apps (SPA)" 규칙과 동일합니다.)

---

## 프로젝트 구조

```
.
├─ amplify.yml                  # Amplify 빌드 설정 (artifacts: dist)
├─ index.html
├─ public/
│  └─ favicon.svg
├─ scripts/                     # 이미지 전처리용 Python 스크립트 (일회성)
├─ src/
│  ├─ main.tsx                  # 엔트리 + 라우터
│  ├─ App.tsx                   # 라우트 (홈 / 상세 / 퀴즈)
│  ├─ types.ts                  # Trend 데이터 타입
│  ├─ data/
│  │  └─ trends.ts              # ★ 트렌드 콘텐츠 (여기만 교체하면 됨)
│  ├─ assets/trends/            # 트렌드 이미지
│  ├─ components/               # TopBar, Footer, TrendCard, CategoryBadge, VideoSection
│  ├─ pages/
│  │  ├─ HomePage.tsx           # 검색 + 필터 + 카드 피드 + 퀴즈 배너
│  │  ├─ TrendDetailPage.tsx    # 상세 (밈/음식 분기, 영상, 연관 트렌드)
│  │  └─ QuizPage.tsx           # 늙크크 판독기 진행
│  ├─ quiz/
│  │  ├─ quizData.ts            # 퀴즈 문제·채점·결과 구간
│  │  └─ QuizResult.tsx         # 결과 화면 (해설·추천·공유)
│  └─ styles/
│     └─ global.css
├─ tsconfig.json
├─ vite.config.ts
└─ package.json
```

---

## 범위에서 제외한 것

로그인, DB, 실시간 크롤링, 자동 인기 순위, 매장·지도·주문, AI 대화·평가는 넣지 않았습니다.
가볍게 둘러보고 필요한 정보를 얻는 서비스에 집중했습니다. 퀴즈는 재미로 보는 트렌드
퀴즈이며, 실제 나이 측정이나 근거 없는 통계는 표시하지 않습니다.
