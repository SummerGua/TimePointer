<script setup lang="ts">
import { iLecture } from '~/utils/types';

let { lectureInfo } = defineProps<{
  lectureInfo: iLecture | undefined
}>()

let bottom = $computed(() => {
  return lectureInfo ? 0 : -20
})
</script>
<template>
  <div w-full pb-3 pt-3 bg-gray-100 absolute :style="`transition: all .5s; bottom: ${bottom}rem`" flex flex-col justify-center>
    <span>科目：{{ lectureInfo?.subject }}</span>
    <span>教室：{{ lectureInfo?.room }}</span>
    <span>开始时间：{{ lectureInfo?.lectureStart.toLocaleDateString('zh-CN', { hour: '2-digit', minute: '2-digit' }) }}</span>
  </div>
</template>