<template>
  <div>
    <Rotulo nome="Nome">
      <input type="text" v-model="Completo.nome">
    </Rotulo>
    <Rotulo nome="Sobrenome" >
      <input type="text" v-model="Completo.sobrenome">
    </Rotulo>
  </div>

</template>

<script>
import Rotulo from './Rotulo.vue'

export default {
  name: "InputName",
  components: { Rotulo },
  props:{
    Completo: {
       type: Object,
        required: true
    }
  },
}
</script>

<style scoped>

</style>