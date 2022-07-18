<script setup lang="ts">
interface iNewTime {
  startTime: Date;
  endTime: Date
}

let defaultStartTime: Date = $ref(new Date())
let defaultEndTime: Date = $ref(new Date())

onBeforeMount(() => {
  const localStartTime = localStorage.getItem('startTime')
  const localEndTime = localStorage.getItem('endTime')

  if(localStartTime && localEndTime) {
    defaultStartTime = new Date(localStartTime)
    defaultEndTime = new Date(localEndTime)
  } else {
    // no time in storage
    defaultStartTime = new Date(new Date().toLocaleDateString())
    defaultEndTime = new Date(new Date(new Date().toLocaleDateString()).getTime() + 24*60*60*1000)
}
})

const updateTime = (newTime: iNewTime) => {
  defaultStartTime = new Date(newTime.startTime)
  defaultEndTime = new Date(newTime.endTime)
}
</script>

<template>
  <div flex flex-col h-10>
    <h2 mb-1 text-7>
      TimePointer
    </h2>
    <h3 mb-5>Show current time position by choosing two time points.</h3>
    <TimeInput @new-time="updateTime" />
    <TimePointer
      :start-time="defaultStartTime"
      :end-time="defaultEndTime"
      self-center
    />
  </div>
</template>
