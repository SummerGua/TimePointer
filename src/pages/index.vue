<script setup lang="ts">
import { schedule } from '~/utils/mock'
import { iLecture } from '~/utils/types';

let thisInfo: iLecture | undefined = $ref()

const lectureInfo = (info: iLecture): void => {
  thisInfo = info
}

const popdown = () => {
  thisInfo = undefined
}

let bottom = $computed(() => {
  return thisInfo ? 8 : -6
})

let lineBottom = $computed(() => {
  return thisInfo ? -4.5 : -20
})
</script>

<template>
  <div flex flex-col h-6xl>
    <h2 text-7>
      ClassPointer
    </h2>
    <Dark self-center />
    <h3 mb-5>
      Show current time position in class schedule.
    </h3>
    <div flex flex-row justify-center>
      <TimePointer dark:color-black v-for="(item, index) in schedule" :key="index" :schedule="item"
        :is-today="new Date().getDay() === new Date(item[0].lectureStart).getDay()" :start-time="item[0].dayStart"
        :end-time="item[0].dayEnd" self-center @give-lecture-info="lectureInfo" />
    </div>
    <a dark:text-white z-index="10" cursor-pointer absolute :style="`transition: all 0.5s; bottom: ${bottom}rem`" @click="popdown"
      h-10 w-10 self-center i-carbon-close-outline>&nbsp;</a>
    <div w-0 h-50 self-center absolute border-l-1 border-black dark:border-white :style="`transition: all 0.5s; bottom: ${lineBottom}rem`"></div>
      <Popup border-rounded self-center :lecture-info="thisInfo" />
  </div>
</template>
