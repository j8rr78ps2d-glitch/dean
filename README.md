# COMPANY BOARD

여러 공연을 3명이 함께 관리하는 가볍고 직관적인 공연 제작 운영 웹앱 1차 완성본입니다.

## 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속.

## 사용자 이름 수정

`app/data/sample.ts`의 `PEOPLE` 배열을 수정하세요.

```ts
export const PEOPLE = ['병석', '의섭', '선형']
```

## 데이터

1차는 별도 서버 없이 `localStorage`에 저장합니다. 샘플 데이터는 `app/data/sample.ts`에 있습니다. 우측 상단 `샘플 복원`으로 초기 상태로 되돌릴 수 있습니다.

## Google Calendar

`.env.example`을 참고해 아래 환경변수를 추가하도록 준비되어 있습니다.

- `GOOGLE_CALENDAR_ID`
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`

연동 레이어는 `app/lib/calendar.ts`, 상태 확인 API는 `app/api/calendar/route.ts`에 분리되어 있습니다. 인증값이 없어도 앱 본체는 정상 작동합니다.

실제 양방향 동기화를 붙일 때는 이 레이어에서 Google Calendar API 호출만 구현하면 됩니다.

## Vercel

GitHub 저장소에 올린 뒤 Vercel에서 Import Project 하면 됩니다. Calendar 연동을 사용할 경우 Vercel Environment Variables에 위 3개 값을 등록하세요.
