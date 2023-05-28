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
    再次上传到github
    不知道团队的更改 商场
    上传上传3
    <button @click="hangleclick">{{nub}}</button>
  </div>
</template>
