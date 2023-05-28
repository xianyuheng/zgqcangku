<script setup>
import { onMounted, ref } from 'vue';
import { LS, gx } from '../ulst/1'

const nub = ref(0)
const hangleclick = () => {
  nub.value++
}
onMounted(() => {
  LS,
    gx
})
</script>
<template>
  <div>
    上传到github
    <button @click="hangleclick">{{nub}}</button>
  </div>
</template>
