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
  return thisInfo ? 6 : -6
})
</script>

<template>
  <div flex flex-col h-6xl>
    <h2 mb-1 text-7>
      ClassPointer
    </h2>
    <h3 mb-5>
      Show current time position in class schedule.
    </h3>
    <div flex flex-row justify-center>
      <TimePointer v-for="(item, index) in schedule" :key="index" :schedule="item"
        :is-today="new Date().getDate() === new Date(item[0].lectureStart).getDate()" :start-time="item[0].dayStart"
        :end-time="item[0].dayEnd" self-center @give-lecture-info="lectureInfo" />
    </div>
    <a absolute :style="`transition: all 1s; bottom: ${bottom}rem`" @click="popdown"
      h-10 w-10 self-center i-carbon-close>&nbsp;</a>
    <Popup self-center :lecture-info="thisInfo" />
  </div>
</template>
