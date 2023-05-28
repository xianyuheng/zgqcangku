<script setup>
import { ref } from 'vue';

const nub = ref(0)
const hangleclick = () => {
  nub.value++
}
</script>
<template>
  <div>
    这个是分支页面
    <button @click="hangleclick">{{nub}}</button>
  </div>
</template>