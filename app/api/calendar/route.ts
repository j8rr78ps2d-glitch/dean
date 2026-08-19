import { NextResponse } from 'next/server'
import { getCalendarIntegrationStatus, listCalendarEvents } from '@/app/lib/calendar'

export async function GET() {
  const status = getCalendarIntegrationStatus()
  const result = await listCalendarEvents()
  return NextResponse.json({ ...status, events: result.events })
}
