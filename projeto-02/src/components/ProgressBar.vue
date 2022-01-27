<template>
  <div class="content">
    <div class="life-bar">
      <div class="check" :style="{width: `${porcentagem}%`}"></div>
    </div>
    <div> {{ `${porcentagem}%` }}</div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props:{
    porcentagem: Number
  }
}
</script>

<style scoped>

.life-bar {
  width: 80%;
  height: 20px;
  border: 3px solid #AAA;
  border-radius: 10px;
}

.life-bar .check {
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: green;
  border-radius: 6px;

}

</style>