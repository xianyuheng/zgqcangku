<script setup>
import { onMounted, ref } from 'vue';
import { LS } from '../ulst/1'

const nub = ref(0)
const hangleclick = () => {
  nub.value++
}
onMounted(() => {
  LS
})
</script>
<template>
  <div>
    这个是分支页面
    <button @click="hangleclick">{{nub}}</button>
  </div>
</template>