<template>
    <div class="usuario-detalhe">
        <h3> Usuário Detalhe</h3>
        <p><strong>Código: </strong> {{ id }}  </p>
<!--      :to="`/usuario/${id}/editar`" -->
        <router-link :to="{ name: 'editarUsuario', params: { id }, query: {completo: true, lingua: 'pt'}, hash: '#rodape' }" tag="button" primario>Editar</router-link>
        <hr>
    </div>
</template>

<script>
export default {
  name: "UsuarioDetalhe",
  props: ['id'],
  beforeRouteEnter(to, from, next) {
     console.log('dentro do componente -> usuário detalhe')
     next()
  }
  // data() {
  //   return {
  //      id: this.$route.params.id
  //   }
  // },
  // watch: {
  //    $route(to, from) {
  //       this.id = to.params.id
  //    }
  // },
}
</script>

<style scoped>

</style>