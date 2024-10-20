<template>
    <div class="person">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="add">点我sum+1</button>
    </div>
</template>

<script lang="ts" setup name="PersonLearn">
import { ref } from 'vue'
//数据
const sum = ref(0)
//方法
function add() {
    sum.value += 1;
}
//创建
console.log('创建')
//挂载
console
</script>