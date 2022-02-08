<template>
    <div class="usuario">
        <h2> Usuários </h2>
       <hr>
      <router-view></router-view>
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
import UsuarioList from "@/Components/usuario/UsuarioList";
export default {
  name: "Usuario",
  components: {UsuarioList},
  methods: {
      irParaInicio(){
        // this.$router.push('/usuario')
        // this.$router.push({ path: '/'})
        this.$router.push({ name: 'inicio'})
      }
  }

}
</script>

<style scoped>

</style>