<script setup lang="ts">
const emit = defineEmits(['newTime'])
const startTime: string = $ref()
const endTime: string = $ref()
const changeTime = (x: number) => {
  x === 0 ?
  localStorage.setItem('startTime', new Date(startTime).toLocaleString())
  : localStorage.setItem('endTime', new Date(endTime).toLocaleString())
  emit('newTime', {startTime, endTime})
}
</script>

<template>
  <div flex flex-row justify-between self-center mb-5 w-130>
    <div>
      Start:
      <input @change="changeTime(0)" v-model="startTime" type="datetime-local" border-rounded w-49 border-solid border-1>
    </div>
    <div>
      End:
      <input @change="changeTime(1)" v-model="endTime" type="datetime-local" border-rounded w-49 border-solid border-1>
    </div>
  </div>
</template>
