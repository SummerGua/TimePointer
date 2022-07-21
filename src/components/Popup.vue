<script setup lang="ts">
import { iLecture } from '~/utils/types';

let { lectureInfo } = defineProps<{
  lectureInfo: iLecture | undefined
}>()

let bottom = $computed(() => {
  return lectureInfo ? 0 : -15
})
</script>
<template>
  <div dark:bg-gray-500 dark:text-white w-full pb-3 pt-3 bg-gray-100 absolute :style="`transition: all .8s; bottom: ${bottom}rem`" flex flex-col justify-center>
    <span>{{ lectureInfo?.subject }}</span>
    <span v-show="lectureInfo?.teacher !== ''">{{ lectureInfo?.teacher }}</span>
    <span v-show="lectureInfo?.room !== ''">{{ lectureInfo?.room }}</span>
    <span>
      时间：
      {{ lectureInfo?.lectureStart.toLocaleDateString('zh-CN', { hour: '2-digit', minute: '2-digit' }) }}
      to
      {{ lectureInfo?.lectureEnd.toLocaleDateString('zh-CN', { hour: '2-digit', minute: '2-digit' })}}
    </span>
  </div>
</template>