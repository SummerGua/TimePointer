<script setup lang="ts">
import { iLecture } from "~/utils/types"
const {
  startTime,
  endTime,
  isToday,
  schedule
} = defineProps<{
  startTime: Date
  endTime: Date
  isToday: boolean
  schedule: iLecture[]
}>()

let progress = $ref(0)
let borderOpacity = $ref(0.2)
let currentTime = $ref(new Date().toLocaleTimeString()) // for title

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

const emit = defineEmits(['giveLectureInfo'])

const showLectureInfo = (lectureInfo: iLecture) => {
  emit('giveLectureInfo', lectureInfo)
}
</script>

<template>
  <div w-20 relative text-center flex flex-col justify-center>
    <div w-17 h-120 bg-gray-100 flex flex-col relative self-center>
      <lecture v-for="item in schedule" :key="item.lectureStart.toString()" :day-start="startTime" :day-end="endTime"
        :lecture-start="item.lectureStart" :subject="item.subject" :teacher="item.teacher" :room="item.room"
        :duration-ms="item.durationMs" cursor-pointer @click="showLectureInfo(item)" />
    </div>
    <div v-if="isToday" :title="currentTime" absolute border-t-3 h-3 w-20
      :style="{ top: `${progress}%`, borderColor: `rgba(0,0,0,${borderOpacity})` }">
      &nbsp;
    </div>
  </div>
</template>
