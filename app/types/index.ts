export type Person = '병석' | '의섭' | '선형'
export type ShowStatus = '진행 중' | '준비 중' | '투어 중' | '종료'

export interface TourInfo {
  route?: string
  date: string

  departureCity?: string
  arrivalCity?: string
  departure: string
  arrival: string

  hotel: string
  checkIn: string

  venue: string
  callTime: string
  performanceTime: string

  localContact: string
  localPhone: string

  equipmentNote?: string
  equipmentDeparture: string
}

export interface Show {
  ddayDate?: string
  id: string
  name: string
  status: ShowStatus
  type: 'general' | 'tour'
  venue?: string
  tourInfo?: TourInfo
}

export interface ScheduleItem {
  id: string
  showId: string
  title: string
  date: string
  startTime: string
  endTime?: string
  location?: string
  author: Person
  memo?: string
}

export interface TaskItem {
  id: string
  showId: string
  title: string
  assignee: Person
  dueDate: string
  memo?: string
  done: boolean
}

export interface ResourceItem {
  id: string
  showId: string
  label: string
  url: string
}

export interface ChangeItem {
  id: string
  showId: string
  title: string
  before: string
  after: string
  author: Person
  changedAt: string
}

export interface AppData {
  shows: Show[]
  schedules: ScheduleItem[]
  tasks: TaskItem[]
  resources: ResourceItem[]
  changes: ChangeItem[]
}
