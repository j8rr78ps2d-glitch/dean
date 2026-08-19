export type CalendarIntegrationStatus = {
  configured: boolean
  calendarId?: string
}

export function getCalendarIntegrationStatus(): CalendarIntegrationStatus {
  const calendarId = process.env.GOOGLE_CALENDAR_ID
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY
  return { configured: Boolean(calendarId && email && privateKey), calendarId: calendarId || undefined }
}

export async function listCalendarEvents() {
  if (!getCalendarIntegrationStatus().configured) {
    return { configured: false, events: [] }
  }
  // 1차 완성본: 인증 설정이 추가되면 이 레이어에 Google Calendar API 호출을 연결한다.
  // 앱 UI/로컬 데이터는 이 함수와 독립적으로 정상 동작한다.
  return { configured: true, events: [] }
}
