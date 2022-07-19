<script setup lang="ts">
const emit = defineEmits(['newStartTime', 'newEndTime'])

const { startTime, endTime } = defineProps<{
  startTime: string | Date;
  endTime: string | Date
}>()

const changeTime = (x: number) => {
  if (x === 0) {
    localStorage.setItem('startTime', startTime.toString())
    emit('newStartTime', { time: startTime })
  } else {
    localStorage.setItem('endTime', endTime.toString())
    emit('newEndTime', { time: endTime })
  }
}
</script>

<template>
  <div flex flex-row justify-between self-center mb-5 w-130>
    <div>
      Start:
      <input @change="changeTime(0)" v-model="startTime" type="datetime-local" border-rounded w-49 border-solid
        border-1>
    </div>
    <div>
      End:
      <input @change="changeTime(1)" v-model="endTime" type="datetime-local" border-rounded w-49 border-solid border-1>
    </div>
  </div>
</template>
