<script setup lang="ts">
const { dayStart, dayEnd, lectureStart, lectureEnd, subject } = defineProps<{
  dayStart: Date;
  dayEnd: Date;
  lectureStart: Date;
  lectureEnd: Date;
  subject: string;
  teacher: string;
  room: string;
}>()

const lectureStartPos = computed(() => {
  return (lectureStart.getTime() - dayStart.getTime()) / (dayEnd.getTime() - dayStart.getTime()) * 100
})

const durationHeight = computed(() => {
  return ((lectureEnd.getTime() - lectureStart.getTime()) / (dayEnd.getTime() - dayStart.getTime())) * 100
})

</script>

<template>
  <div
    :style="{ top: `${lectureStartPos}%`, borderColor: '#78938A', height: `${durationHeight}%`, backgroundColor: subject === '午休' ? '#B7D3DF' : subject === '晚餐' ? '#DFE8CC' : '#ffeaea' }"
    w-full absolute text-3 border-rounded flex flex-col justify-center>
    <span>{{ subject }}</span>
  </div>
</template>