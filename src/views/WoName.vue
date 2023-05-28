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
    这个是分支页面
    我已经拉取下来了 现在是继续开发
    <button @click="hangleclick">{{nub}}</button>
  </div>
</template>
