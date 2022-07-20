<script setup lang="ts">
import { checkStorage, getLocalStorage } from '~/utils/checkStorage';

const emit = defineEmits(['newStartTime', 'newEndTime'])

let startTime: string | Date = $ref()
let endTime: string | Date = $ref()

const changeTime = (x: number) => {
  if (x === 0) {
    localStorage.setItem('startTime', startTime.toString())
    emit('newStartTime', { time: startTime })
  } else {
    localStorage.setItem('endTime', endTime.toString())
    emit('newEndTime', { time: endTime })
  }
}

onBeforeMount(() => {
  if(checkStorage('startTime', 'endTime')) {
    ({startTime, endTime} = getLocalStorage('startTime', 'endTime'))
  } else {
    // no storage
    startTime = new Date(new Date().toLocaleDateString())
    endTime = new Date(new Date(new Date().toLocaleDateString()).getTime() + 23*60*60*1000 + 59*60*1000)
}
})
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
