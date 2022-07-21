<script setup lang="ts">
import type { iLecture } from '~/utils/types'

const {
  startTime,
  endTime,
  isToday,
  schedule,
} = defineProps<{
  startTime: Date
  endTime: Date
  isToday: boolean
  schedule: iLecture[]
}>()

const emit = defineEmits(['giveLectureInfo'])

let progress = $ref(0)
let borderOpacity = $ref(0.2)
let currentTime = $ref(new Date().toLocaleTimeString()) // for title

const between: boolean = $computed(() => {
  return !(progress > 100)
})

const getPercent = (startMs: number, endMs: number, currentMs: number) => {
  currentTime = new Date().toLocaleTimeString()
  const totalTime: number = endMs - startMs
  const toCurrentTime: number = currentMs - startMs
  progress = (toCurrentTime / totalTime) * 100

  if (borderOpacity === 0.2)
    borderOpacity = 0.8
  else
    borderOpacity = 0.2
}

getPercent(startTime.getTime(), endTime.getTime(), new Date().getTime())
setInterval(() => {
  getPercent(startTime.getTime(), endTime.getTime(), new Date().getTime())
}, 1000)

const showLectureInfo = (lectureInfo: iLecture) => {
  emit('giveLectureInfo', lectureInfo)
}
</script>

<template>
  <div w-20 relative text-center flex flex-col justify-center>
    <span v-if="isToday">TODAY</span>
    <div border-rounded-4 w-17 h-140 style="background: linear-gradient(to bottom, #e9e9e9, #f9f9f9,#e9e9e9)" dark:bg-gray-5 flex flex-col relative self-center>
      <lecture
        v-for="item in schedule" :key="item.lectureStart.toString()" :day-start="startTime" :day-end="endTime"
        :lecture-start="item.lectureStart" :subject="item.subject" :teacher="item.teacher" :room="item.room"
        :lecture-end="item.lectureEnd" cursor-pointer @click="showLectureInfo(item)"
      />
    </div>
    <div
      v-if="isToday && between" :title="currentTime" absolute border-t-3 h-3 w-20
      :style="{ top: `${progress}%`, borderColor: `rgba(0,0,0,${borderOpacity})` }"
    >
      &nbsp;
    </div>
  </div>
</template>
