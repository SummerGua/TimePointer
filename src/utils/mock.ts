interface iLecture {
  lectureStart: Date;
  subject: string;
  teacher: string;
  room: string;
  durationMs: number
}

const TODAY = '2022-07-20'

export const schedule: iLecture[] = [
  {
    lectureStart: new Date(`${TODAY}T09:40`),
    subject: `智慧教室应用研究`,
    teacher: `陆志海`,
    room: `电教楼204`,
    durationMs: 140*60*1000
  },
  {
    lectureStart: new Date(`${TODAY}T18:30`),
    subject: `教育科研方法`,
    teacher: `沈书生`,
    room: `电教楼213`,
    durationMs: 140*60*1000
  }
]