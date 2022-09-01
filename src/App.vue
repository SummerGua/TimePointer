<template>
  <main
    flex font-sans p="x-4 y-5" overflow-hidden flex-col justify-center style="height: 100vh"
    text="center gray-700 dark:gray-200"
  >
    <router-view />
  </main>
</template>

<style>
html {
  overflow: hidden;
}

@media screen and (max-width: 699px) {
  html {
    font-size: 14px;
  }
}

@media screen and (min-width: 700px) {
  html {
    font-size: 20px;
  }
}

@media screen and (min-width: 1000px) {
  html {
    font-size: 15px;
  }
}
</style>
