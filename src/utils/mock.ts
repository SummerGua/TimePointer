import { iLecture } from "./types"

const SCHOOL_START: string = '2022-07-21'
const DAY_START: Date = new Date(`${SCHOOL_START}T08:00`)
const DAY_END: Date = new Date(`${SCHOOL_START}T20:50`)
const ONE_DAY: number = 24 * 60 * 60 * 1000

function getTodayStartEnd(originTime: Date, day: number): Date {
  return new Date(originTime.getTime() + ONE_DAY * day)
}

export const schedule: iLecture[][] = [
  // Mon
  [
    {
      lectureStart: new Date(`${SCHOOL_START}T09:40`),
      subject: 'X应用研究',
      teacher: 'A',
      room: '电教楼204',
      durationMs: 140 * 60 * 1000,
      dayStart: getTodayStartEnd(DAY_START, 0),
      dayEnd: getTodayStartEnd(DAY_END, 0)
    },
    {
      lectureStart: new Date(`${SCHOOL_START}T18:30`),
      subject: 'B科研方法',
      teacher: 'B',
      room: '电教楼213',
      durationMs: 140 * 60 * 1000,
      dayStart: getTodayStartEnd(DAY_START, 0),
      dayEnd: getTodayStartEnd(DAY_END, 0)
    }
  ],
  // Tue
  [
    {
      lectureStart: new Date(new Date(`${SCHOOL_START}T08:00`).getTime() + ONE_DAY),
      subject: `Y应用研究`,
      teacher: `A`,
      room: `电教楼204`,
      durationMs: 140 * 60 * 1000,
      dayStart: getTodayStartEnd(DAY_START, 1),
      dayEnd: getTodayStartEnd(DAY_END, 1),
    }
  ],
  // Wed
  [
    {
      lectureStart: new Date(new Date(`${SCHOOL_START}T08:00`).getTime() + ONE_DAY * 2),
      subject: `Z应用研究`,
      teacher: `A`,
      room: `电教楼204`,
      durationMs: 140 * 60 * 1000,
      dayStart: getTodayStartEnd(DAY_START, 2),
      dayEnd: getTodayStartEnd(DAY_END, 2),
    }
  ],
  // Thurs
  [
    {
      lectureStart: new Date(new Date(`${SCHOOL_START}T08:00`).getTime() + ONE_DAY * 3),
      subject: 'Z应用研究',
      teacher: 'A',
      room: '电教楼204',
      durationMs: 140 * 60 * 1000,
      dayStart: getTodayStartEnd(DAY_START, 3),
      dayEnd: getTodayStartEnd(DAY_END, 3),
    }
  ],
  // Fri
  [
    {
      lectureStart: new Date(new Date(`${SCHOOL_START}T08:00`).getTime() + ONE_DAY * 4),
      subject: 'Z应用研究',
      teacher: 'A',
      room: '电教楼888',
      durationMs: 140 * 60 * 1000,
      dayStart: getTodayStartEnd(DAY_START, 4),
      dayEnd: getTodayStartEnd(DAY_END, 4),
    }
  ],
]