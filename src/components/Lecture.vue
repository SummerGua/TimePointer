<script setup lang="ts">
const { dayStart, dayEnd, lectureStart, durationMs, subject, teacher, room } = defineProps<{
  dayStart: Date;
  dayEnd: Date;
  lectureStart: Date;
  durationMs: number;
  subject: string;
  teacher: string;
  room: string;
}>()

const lectureStartPos = computed(() => {
  return (lectureStart.getTime() - dayStart.getTime()) / (dayEnd.getTime() - dayStart.getTime()) * 100
})

const durationHeight = computed(() => {
  return (durationMs / (dayEnd.getTime() - dayStart.getTime())) * 100
})

</script>

<template>
  <div :style="{ top: `${lectureStartPos}%`, height: `${durationHeight}%` }" w-full absolute text-3 border-rounded border-dotted border-1>
    <span>{{ subject }}</span>
    <div display-none>
      {{ lectureStart }}
      {{ durationMs }}
      {{ teacher }}
      {{ room }}
    </div>
  </div>
</template>