<script setup lang="ts">

const { startTime, endTime } = defineProps<{ startTime: Date; endTime: Date }>()
let progress = $ref(0)
let borderOpacity = $ref(0.2)
let currentTime = $ref(new Date().toLocaleTimeString())
const getPercent = () => {
  if(startTime >= endTime || new Date() < startTime || new Date() > endTime) {
    borderOpacity = 0
    return
  }

  currentTime = new Date().toLocaleTimeString()
  const totalTime = endTime.getTime() - startTime.getTime()
  const toCurrentTime = new Date().getTime() - startTime.getTime()
  progress = (toCurrentTime / totalTime) * 100

  if (borderOpacity === 0.2) {
    borderOpacity = 0.8
  } else {
    borderOpacity = 0.2
  }
}

getPercent()
setInterval(getPercent, 1000)
</script>

<template>
  <div w-150 relative text-center flex flex-col justify-center>
    <div w-150 h-5 bg-gray-100 flex justify-between>
      <span>{{ startTime.toLocaleTimeString("zh-CN", { hour: '2-digit', minute: '2-digit' }) }}</span>
      <span>{{ endTime.toLocaleTimeString("zh-CN", { hour: '2-digit', minute: '2-digit' }) }}</span>
    </div>
    <div
      :title="currentTime"
      absolute
      border-l-3
      h-10 w-3
      cursor-pointer
      :style="{ left: `${progress}%`, borderColor: `rgba(0,0,0,${borderOpacity})` }"
    >
    &nbsp;
    </div>
  </div>
</template>
