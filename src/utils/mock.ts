import type { iLecture } from './types'

function getTime(date: string, time: string, offset = 0): Date {
  return new Date(new Date(`${date}T${time}`).getTime() + offset)
}

const DAY_START = '08:00'
const DAY_END = '20:50'
const ONE_DAY: number = 24 * 60 * 60 * 1000

const now = new Date()
const thisMon = new Date(now.getTime() - (now.getDay() - 1) * ONE_DAY).toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' }).replaceAll('/', '-')

const SCHOOL_START_DAY: string = thisMon

const TIMESHEET = {
  MON: {
    start: getTime(SCHOOL_START_DAY, DAY_START),
    end: getTime(SCHOOL_START_DAY, DAY_END),
  },
  TUE: {
    start: getTime(SCHOOL_START_DAY, DAY_START, ONE_DAY),
    end: getTime(SCHOOL_START_DAY, DAY_END, ONE_DAY),
  },
  WED: {
    start: getTime(SCHOOL_START_DAY, DAY_START, ONE_DAY * 2),
    end: getTime(SCHOOL_START_DAY, DAY_END, ONE_DAY * 2),
  },
  THURS: {
    start: getTime(SCHOOL_START_DAY, DAY_START, ONE_DAY * 3),
    end: getTime(SCHOOL_START_DAY, DAY_END, ONE_DAY * 3),
  },
  FRI: {
    start: getTime(SCHOOL_START_DAY, DAY_START, ONE_DAY * 4),
    end: getTime(SCHOOL_START_DAY, DAY_END, ONE_DAY * 4),
  },
  SAT: {
    start: getTime(SCHOOL_START_DAY, DAY_START, ONE_DAY * 5),
    end: getTime(SCHOOL_START_DAY, DAY_END, ONE_DAY * 5),
  },
  SUN: {
    start: getTime(SCHOOL_START_DAY, DAY_START, ONE_DAY * 6),
    end: getTime(SCHOOL_START_DAY, DAY_END, ONE_DAY * 6),
  },
}

export const schedule: iLecture[][] = [
  // Mon
  [
    {
      subject: '智慧教室应用研究',
      teacher: '陆志海',
      room: '电教楼204',
      lectureStart: getTime(SCHOOL_START_DAY, '09:40'),
      lectureEnd: getTime(SCHOOL_START_DAY, '12:00'),
      dayStart: TIMESHEET.MON.start,
      dayEnd: TIMESHEET.MON.end,
    },
    {
      subject: '午休',
      teacher: '',
      room: '',
      lectureStart: getTime(SCHOOL_START_DAY, '12:00'),
      lectureEnd: getTime(SCHOOL_START_DAY, '13:30'),
      dayStart: TIMESHEET.MON.start,
      dayEnd: TIMESHEET.MON.end,
    },
    {
      subject: '晚餐',
      teacher: '',
      room: '',
      lectureStart: getTime(SCHOOL_START_DAY, '17:00'),
      lectureEnd: getTime(SCHOOL_START_DAY, '18:30'),
      dayStart: TIMESHEET.MON.start,
      dayEnd: TIMESHEET.MON.end,
    },
    {
      subject: '教育科研方法3班',
      teacher: '沈书生',
      room: '电教楼213',
      lectureStart: getTime(SCHOOL_START_DAY, '18:30'),
      lectureEnd: getTime(SCHOOL_START_DAY, '20:50'),
      dayStart: TIMESHEET.MON.start,
      dayEnd: TIMESHEET.MON.end,
    },
  ],
  // Tue
  [
    {
      subject: '数值分析',
      teacher: '王丽英',
      room: '田北202',
      lectureStart: getTime(SCHOOL_START_DAY, '09:40', ONE_DAY),
      lectureEnd: getTime(SCHOOL_START_DAY, '12:00', ONE_DAY),
      dayStart: TIMESHEET.TUE.start,
      dayEnd: TIMESHEET.TUE.end,
    },
    {
      subject: '午休',
      teacher: '',
      room: '',
      lectureStart: getTime(SCHOOL_START_DAY, '12:00', ONE_DAY),
      lectureEnd: getTime(SCHOOL_START_DAY, '13:30', ONE_DAY),
      dayStart: TIMESHEET.TUE.start,
      dayEnd: TIMESHEET.TUE.end,
    },
    {
      subject: '教育心理学',
      teacher: '谭顶良',
      room: '电教楼308',
      lectureStart: getTime(SCHOOL_START_DAY, '13:30', ONE_DAY),
      lectureEnd: getTime(SCHOOL_START_DAY, '15:50', ONE_DAY),
      dayStart: TIMESHEET.TUE.start,
      dayEnd: TIMESHEET.TUE.end,
    },
    {
      subject: '晚餐',
      teacher: '',
      room: '',
      lectureStart: getTime(SCHOOL_START_DAY, '17:00', ONE_DAY),
      lectureEnd: getTime(SCHOOL_START_DAY, '18:30', ONE_DAY),
      dayStart: TIMESHEET.TUE.start,
      dayEnd: TIMESHEET.TUE.end,
    },
    {
      subject: '视觉文化与信息技术',
      teacher: '赵丽',
      room: '田北402',
      lectureStart: getTime(SCHOOL_START_DAY, '18:30', ONE_DAY),
      lectureEnd: getTime(SCHOOL_START_DAY, '20:50', ONE_DAY),
      dayStart: TIMESHEET.TUE.start,
      dayEnd: TIMESHEET.TUE.end,
    },
  ],
  // Wed
  [
    {
      subject: '现代学习理论',
      teacher: '王珺',
      room: '田北402',
      lectureStart: getTime(SCHOOL_START_DAY, '09:40', ONE_DAY * 2),
      lectureEnd: getTime(SCHOOL_START_DAY, '12:00', ONE_DAY * 2),
      dayStart: TIMESHEET.WED.start,
      dayEnd: TIMESHEET.WED.end,
    },
    {
      subject: '午休',
      teacher: '',
      room: '',
      lectureStart: getTime(SCHOOL_START_DAY, '12:00', ONE_DAY * 2),
      lectureEnd: getTime(SCHOOL_START_DAY, '13:30', ONE_DAY * 2),
      dayStart: TIMESHEET.WED.start,
      dayEnd: TIMESHEET.WED.end,
    },
    {
      subject: '网络应用开发技术',
      teacher: '田俊华',
      room: '田北204',
      lectureStart: getTime(SCHOOL_START_DAY, '13:30', ONE_DAY * 2),
      lectureEnd: getTime(SCHOOL_START_DAY, '15:50', ONE_DAY * 2),
      dayStart: TIMESHEET.WED.start,
      dayEnd: TIMESHEET.WED.end,
    },
    {
      subject: '晚餐',
      teacher: '',
      room: '',
      lectureStart: getTime(SCHOOL_START_DAY, '17:00', ONE_DAY * 2),
      lectureEnd: getTime(SCHOOL_START_DAY, '18:30', ONE_DAY * 2),
      dayStart: TIMESHEET.WED.start,
      dayEnd: TIMESHEET.WED.end,
    },
  ],
  // Thurs
  [
    {
      subject: '三维图形程序设计',
      teacher: '庞明勇',
      room: '田北204',
      lectureStart: getTime(SCHOOL_START_DAY, '13:30', ONE_DAY * 3),
      lectureEnd: getTime(SCHOOL_START_DAY, '15:50', ONE_DAY * 3),
      dayStart: TIMESHEET.THURS.start,
      dayEnd: TIMESHEET.THURS.end,
    },
    {
      subject: '午休',
      teacher: '',
      room: '',
      lectureStart: getTime(SCHOOL_START_DAY, '12:00', ONE_DAY * 3),
      lectureEnd: getTime(SCHOOL_START_DAY, '13:30', ONE_DAY * 3),
      dayStart: TIMESHEET.THURS.start,
      dayEnd: TIMESHEET.THURS.end,
    },
    {
      subject: '晚餐',
      teacher: '',
      room: '',
      lectureStart: getTime(SCHOOL_START_DAY, '17:00', ONE_DAY * 3),
      lectureEnd: getTime(SCHOOL_START_DAY, '18:30', ONE_DAY * 3),
      dayStart: TIMESHEET.THURS.start,
      dayEnd: TIMESHEET.THURS.end,
    },
    {
      subject: '教育技术研究前沿',
      teacher: '曹梅',
      room: '田北402',
      lectureStart: getTime(SCHOOL_START_DAY, '18:30', ONE_DAY * 3),
      lectureEnd: getTime(SCHOOL_START_DAY, '20:50', ONE_DAY * 3),
      dayStart: TIMESHEET.THURS.start,
      dayEnd: TIMESHEET.THURS.end,
    },
  ],
  // Fri
  [
    {
      subject: '概率论与随机过程',
      teacher: '王丽英',
      room: '田北402',
      lectureStart: getTime(SCHOOL_START_DAY, '09:40', ONE_DAY * 4),
      lectureEnd: getTime(SCHOOL_START_DAY, '12:00', ONE_DAY * 4),
      dayStart: TIMESHEET.FRI.start,
      dayEnd: TIMESHEET.FRI.end,
    },
    {
      subject: '午休',
      teacher: '',
      room: '',
      lectureStart: getTime(SCHOOL_START_DAY, '12:00', ONE_DAY * 4),
      lectureEnd: getTime(SCHOOL_START_DAY, '13:30', ONE_DAY * 4),
      dayStart: TIMESHEET.FRI.start,
      dayEnd: TIMESHEET.FRI.end,
    },
    {
      subject: '教育学原理b班 ',
      teacher: '邵泽斌等',
      room: '电教楼207',
      lectureStart: getTime(SCHOOL_START_DAY, '13:30', ONE_DAY * 4),
      lectureEnd: getTime(SCHOOL_START_DAY, '15:50', ONE_DAY * 4),
      dayStart: TIMESHEET.FRI.start,
      dayEnd: TIMESHEET.FRI.end,
    },
    {
      subject: '晚餐',
      teacher: '',
      room: '',
      lectureStart: getTime(SCHOOL_START_DAY, '17:00', ONE_DAY * 4),
      lectureEnd: getTime(SCHOOL_START_DAY, '18:30', ONE_DAY * 4),
      dayStart: TIMESHEET.FRI.start,
      dayEnd: TIMESHEET.FRI.end,
    },
  ],
]
