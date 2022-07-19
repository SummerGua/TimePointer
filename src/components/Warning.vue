<script setup lang="ts">
const { message } = defineProps<{ message: string }>()
</script>

<template>
<div v-if="message !== ''" color-red text-5 h-10 w-100 flex flex-row justify-center>
  <p inline-block i-carbon-alarm h-7 lh-5 />
  <p inline-block lh-7>{{ message }}</p>
</div>
</template>