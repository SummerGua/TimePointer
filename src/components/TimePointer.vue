<script setup lang="ts">
const emit = defineEmits(['timeWarn'])

const { startTime, endTime } = defineProps<{
  startTime: Date; endTime: Date
}>()


let progress = $ref(0)
let borderOpacity = $ref(0.2)
let currentTime = $ref(new Date().toLocaleTimeString()) // for title

const getPercent = (startMs: number, endMs: number, currentMs: number) => {
  if(startMs >= endMs) {
    borderOpacity = 0
    emit('timeWarn', { message: 'Error: start time > end time' })
    return
  }
  if(currentMs < startMs) {
    borderOpacity = 0
    emit('timeWarn', { message: 'Not time yet' })
    return
  }
  if(currentMs > endMs) {
    borderOpacity = 0
    emit('timeWarn', { message: 'Time\'s up' })
    return
  }

  emit('timeWarn', { message: '' })

  currentTime = new Date().toLocaleTimeString()
  const totalTime: number = endMs - startMs
  const toCurrentTime: number = currentMs - startMs
  progress = (toCurrentTime / totalTime) * 100

  if (borderOpacity === 0.2) {
    borderOpacity = 0.8
  } else {
    borderOpacity = 0.2
  }
}
// TO-DO: GRID LAYOUT
getPercent(startTime.getTime(), endTime.getTime(), new Date().getTime())
setInterval(() => {
  getPercent(startTime.getTime(), endTime.getTime(), new Date().getTime())
}, 1000)
</script>

<template>
  <div w-35 relative text-center flex flex-col justify-center>
    <div w-25 h-120 bg-gray-100 flex flex-col relative self-center>
      <lecture :day-start="startTime" :day-end="endTime" :lecture-start="new Date(`2022-07-19T08:00`)" :subject="`Linear Algebra`" :teacher="`Mr.Mike`" :room="`Build.1`" :duration-ms="40*60*1000" />
      <lecture :day-start="startTime" :day-end="endTime" :lecture-start="new Date(`2022-07-19T09:00`)" :subject="`Linear Algebra`" :teacher="`Mr.Mike`" :room="`Build.1`" :duration-ms="40*60*1000" />
      <lecture :day-start="startTime" :day-end="endTime" :lecture-start="new Date(`2022-07-19T10:00`)" :subject="`Linear Algebra`" :teacher="`Mr.Mike`" :room="`Build.1`" :duration-ms="40*60*1000" />
      <lecture :day-start="startTime" :day-end="endTime" :lecture-start="new Date(`2022-07-19T11:00`)" :subject="`Linear Algebra`" :teacher="`Mr.Mike`" :room="`Build.1`" :duration-ms="40*60*1000" />
      <lecture :day-start="startTime" :day-end="endTime" :lecture-start="new Date(`2022-07-19T12:00`)" :subject="`Linear Algebra`" :teacher="`Mr.Mike`" :room="`Build.1`" :duration-ms="40*60*1000" />
      <lecture :day-start="startTime" :day-end="endTime" :lecture-start="new Date(`2022-07-19T13:00`)" :subject="`Linear Algebra`" :teacher="`Mr.Mike`" :room="`Build.1`" :duration-ms="40*60*1000" />
      <lecture :day-start="startTime" :day-end="endTime" :lecture-start="new Date(`2022-07-19T14:00`)" :subject="`Linear Algebra`" :teacher="`Mr.Mike`" :room="`Build.1`" :duration-ms="40*60*1000" />
      <lecture :day-start="startTime" :day-end="endTime" :lecture-start="new Date(`2022-07-19T15:00`)" :subject="`Linear Algebra`" :teacher="`Mr.Mike`" :room="`Build.1`" :duration-ms="40*60*1000" />
    </div>
    <div
      :title="currentTime"
      absolute
      border-t-3
      h-3 w-35
      :style="{ top: `${progress}%`, borderColor: `rgba(0,0,0,${borderOpacity})` }"
    >
    &nbsp;
    </div>
  </div>
</template>
