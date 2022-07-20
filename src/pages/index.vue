<script setup lang="ts">
import { checkStorage, getLocalStorage } from '~/utils/checkStorage';

interface iNewTime {
  time: Date
}

interface iWarningMessage {
  message: string
}

let defaultStartTime: Date | string = $ref(new Date())
let defaultEndTime: Date | string = $ref(new Date())
let toGiveMessage: string = $ref('')

onBeforeMount(() => {
  if(checkStorage('startTime', 'endTime')) {
    const {startTime, endTime} = getLocalStorage('startTime', 'endTime')
    defaultStartTime = startTime
    defaultEndTime = endTime
  } else {
    // no storage
    defaultStartTime = new Date(new Date().toLocaleDateString())
    defaultEndTime = new Date(new Date(new Date().toLocaleDateString()).getTime() + 23*60*60*1000 + 59*60*1000)
}
})

const updateStartTime = (newTime: iNewTime) => {
  defaultStartTime = newTime.time
}

const updateEndTime = (newTime: iNewTime) => {
  defaultEndTime = newTime.time
}

const giveWarningMessage = (warningMessage: iWarningMessage) => {
  toGiveMessage = warningMessage.message
}
</script>

<template>
  <div flex flex-col h-10>
    <h2 mb-1 text-7>
      TimePointer
    </h2>
    <h3 mb-5>Show current time position by selecting two time points.</h3>
    <Warning :message="toGiveMessage" self-center m-5 />
    <TimeInput @new-end-time="updateEndTime" @new-start-time="updateStartTime" />
    <TimePointer
      @time-warn="giveWarningMessage"
      :start-time="new Date(defaultStartTime)"
      :end-time="new Date(new Date(defaultEndTime))"
      self-center
    />
  </div>
</template>
