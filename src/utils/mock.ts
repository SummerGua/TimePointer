interface iLecture {
  lectureStart: Date;
  subject: string;
  teacher: string;
  room: string;
  durationMs: number
}

const today = '2022-07-20'

export const schedule: iLecture[] = [
  {
    lectureStart: new Date(`${today}T08:00`),
    subject: `LinearAlgebra`,
    teacher: `Mr.Mike`,
    room: `Room101, Build1`,
    durationMs: 40*60*1000
  },
  {
    lectureStart: new Date(`${today}T09:00`),
    subject: `LinearAlgebra`,
    teacher: `Mr.Mike`,
    room: `Room101, Build1`,
    durationMs: 40*60*1000
  },
  {
    lectureStart: new Date(`${today}T10:00`),
    subject: `LinearAlgebra`,
    teacher: `Mr.Mike`,
    room: `Room101, Build1`,
    durationMs: 40*60*1000
  },
  {
    lectureStart: new Date(`${today}T11:00`),
    subject: `LinearAlgebra`,
    teacher: `Mr.Mike`,
    room: `Room101, Build1`,
    durationMs: 40*60*1000
  },
  {
    lectureStart: new Date(`${today}T12:00`),
    subject: `LinearAlgebra`,
    teacher: `Mr.Mike`,
    room: `Room101, Build1`,
    durationMs: 40*60*1000
  },
  {
    lectureStart: new Date(`${today}T13:00`),
    subject: `LinearAlgebra`,
    teacher: `Mr.Mike`,
    room: `Room101, Build1`,
    durationMs: 40*60*1000
  },
  {
    lectureStart: new Date(`${today}T14:00`),
    subject: `LinearAlgebra`,
    teacher: `Mr.Mike`,
    room: `Room101, Build1`,
    durationMs: 40*60*1000
  },
  {
    lectureStart: new Date(`${today}T15:00`),
    subject: `LinearAlgebra`,
    teacher: `Mr.Mike`,
    room: `Room101, Build1`,
    durationMs: 40*60*1000
  },
]