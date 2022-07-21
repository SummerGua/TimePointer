<script setup lang="ts">
import type { iLecture } from '~/utils/types'

const { lectureInfo } = defineProps<{
  lectureInfo: iLecture | undefined
}>()

const bottom = $computed(() => {
  return lectureInfo ? 0 : -15
})
</script>

<template>
  <div text-black w-90vw pb-3 pt-3 bg-white absolute border-rounded-4 :style="`transition: all .8s; bottom: ${bottom}rem; background: linear-gradient(to bottom, #d0d6e9, #ffffff);`" flex flex-col justify-center>
    <span font-bold>{{ lectureInfo?.subject }}</span>
    <span v-show="lectureInfo?.teacher !== ''" text-3>{{ lectureInfo?.teacher }}</span>
    <span v-show="lectureInfo?.room !== ''" font-bold text-3>{{ lectureInfo?.room }}</span>
    <span>
      {{ lectureInfo?.lectureStart.toLocaleDateString('zh-CN', { hour: '2-digit', minute: '2-digit' }) }}
      >>
      {{ lectureInfo?.lectureEnd.toLocaleDateString('zh-CN', { hour: '2-digit', minute: '2-digit' }) }}
    </span>
  </div>
</template>
