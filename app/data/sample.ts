import { AppData, Person } from '@/app/types'

export const PEOPLE: Person[] = ['병석', '의섭', '선형']

export const sampleData: AppData = {
  shows: [
    { id:'story', name:'으랏차차 스토리', status:'진행 중', type:'general', venue:'대학로 연습실' },
    { id:'busan', name:'부산 공연', status:'준비 중', type:'tour', venue:'부산 시민회관', tourInfo:{ date:'2026-08-23', route:'서울 → 부산', departure:'08:10', arrival:'10:55', hotel:'시티호텔 부산', checkIn:'15:00', venue:'부산 시민회관', callTime:'13:00', performanceTime:'17:00', localContact:'박OO', localPhone:'010-0000-1234', equipmentDeparture:'07:00' } },
    { id:'daegu', name:'대구 공연', status:'준비 중', type:'tour', venue:'대구 OO아트센터', tourInfo:{ date:'2026-09-12', route:'서울 → 대구', departure:'08:40', arrival:'10:25', hotel:'OO호텔', checkIn:'15:00', venue:'대구 OO아트센터', callTime:'12:30', performanceTime:'17:00', localContact:'김OO', localPhone:'010-1234-5678', equipmentDeparture:'07:00' } },
    { id:'tour', name:'OOO 지방투어', status:'투어 중', type:'tour', venue:'지역별 공연장', tourInfo:{ date:'2026-08-30', route:'서울 → 광주', departure:'09:00', arrival:'11:10', hotel:'광주 스테이', checkIn:'15:00', venue:'광주 문화예술회관', callTime:'14:00', performanceTime:'19:00', localContact:'이OO', localPhone:'010-4321-9876', equipmentDeparture:'07:30' } }
  ],
  schedules: [
    { id:'s1', showId:'story', title:'제작회의', date:'2026-08-18', startTime:'14:00', endTime:'15:00', location:'대학로', author:'병석' },
    { id:'s2', showId:'daegu', title:'장비 차량 출발', date:'2026-08-18', startTime:'17:30', location:'창고', author:'의섭' },
    { id:'s3', showId:'busan', title:'연습', date:'2026-08-18', startTime:'19:00', endTime:'21:00', location:'연습실 B', author:'선형' },
    { id:'s4', showId:'story', title:'연습', date:'2026-08-20', startTime:'13:00', endTime:'17:00', location:'대학로 연습실', author:'병석' },
    { id:'s5', showId:'story', title:'제작회의', date:'2026-08-23', startTime:'11:00', location:'회의실 2', author:'의섭' },
    { id:'s6', showId:'story', title:'런스루', date:'2026-08-28', startTime:'15:00', location:'대학로', author:'선형' },
    { id:'s7', showId:'story', title:'공연', date:'2026-09-05', startTime:'19:30', location:'대학로 극장', author:'병석' },
    { id:'s8', showId:'busan', title:'이동', date:'2026-08-23', startTime:'08:10', location:'서울 → 부산', author:'병석' },
    { id:'s9', showId:'busan', title:'공연', date:'2026-08-23', startTime:'17:00', location:'부산 시민회관', author:'병석' },
    { id:'s10', showId:'daegu', title:'공연', date:'2026-09-12', startTime:'17:00', location:'대구 OO아트센터', author:'의섭' },
    { id:'s11', showId:'tour', title:'광주 공연 이동', date:'2026-08-30', startTime:'09:00', location:'서울 → 광주', author:'선형' }
  ],
  tasks: [
    { id:'t1', showId:'daegu', title:'대구 숙소 최종 확인', assignee:'병석', dueDate:'2026-08-18', done:false },
    { id:'t2', showId:'story', title:'배우 프로필 전달', assignee:'의섭', dueDate:'2026-08-18', done:false },
    { id:'t3', showId:'busan', title:'공연장 담당자 연락', assignee:'선형', dueDate:'2026-08-18', done:true },
    { id:'t4', showId:'story', title:'포스터 최종본 확인', assignee:'병석', dueDate:'2026-08-20', done:false },
    { id:'t5', showId:'busan', title:'공연장 연락', assignee:'의섭', dueDate:'2026-08-21', done:false },
    { id:'t6', showId:'daegu', title:'숙소 예약 확정', assignee:'선형', dueDate:'2026-08-24', done:false },
    { id:'t7', showId:'tour', title:'투어 차량 견적 정리', assignee:'병석', dueDate:'2026-09-03', done:false }
  ],
  resources: [
    { id:'r1', showId:'story', label:'공연 바이블', url:'https://drive.google.com/' },
    { id:'r2', showId:'story', label:'창작진 연락처', url:'https://docs.google.com/spreadsheets/' },
    { id:'r3', showId:'story', label:'대본', url:'https://drive.google.com/' },
    { id:'r4', showId:'story', label:'공연장 자료', url:'https://drive.google.com/' },
    { id:'r5', showId:'busan', label:'공연 바이블', url:'https://drive.google.com/' },
    { id:'r6', showId:'busan', label:'투어 자료', url:'https://drive.google.com/' },
    { id:'r7', showId:'daegu', label:'창작진 연락처', url:'https://docs.google.com/spreadsheets/' },
    { id:'r8', showId:'daegu', label:'공연장 자료', url:'https://drive.google.com/' },
    { id:'r9', showId:'tour', label:'투어 바이블', url:'https://drive.google.com/' }
  ],
  changes: [
    { id:'c1', showId:'daegu', title:'대구 공연 콜타임 변경', before:'13:00', after:'12:30', author:'병석', changedAt:'2026-08-18T09:30:00+09:00' },
    { id:'c2', showId:'story', title:'8/23 제작회의 장소 변경', before:'스튜디오 A', after:'회의실 2', author:'의섭', changedAt:'2026-08-17T16:10:00+09:00' }
  ]
}
