<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>
    <b-card>
      <b-form-group label="Nome:">
        <b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe o Nome"></b-form-input>
      </b-form-group>
      <b-form-group label="E-mail:">
        <b-form-input type="text" size="lg" v-model="usuario.email" placeholder="Informe o e-mail"></b-form-input>
      </b-form-group>
      <hr>
      <b-button variant="primary" class="mx-1" @click="salvar" size="lg">Enviar</b-button>
      <b-button variant="success" class="float-right mx-1" @click="obter" size="lg">Obter usuários</b-button>
    </b-card>
    <hr>
    <b-list-group>
      <b-list-group-item v-for="(usuario) in usuarios" :key="usuario.id">
        <strong>Nome: </strong>{{ usuario.nome }} <br>
        <strong>Email: </strong>{{ usuario.email }} <br>
        <strong>ID: </strong>{{ usuario.id }}
        <b-button variant="danger" class="float-right mx-1" @click="remover(usuario.id)" size="lg">X</b-button>
        <b-button variant="primary" class="float-right mx-1" @click="carregar(usuario.id)" size="lg" >Editar</b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: [],
      id: null,
      usuario: {
        nome: '',
        email: '',
      }
    }
  },
  methods: {
    salvar() {
      const metodo = this.id ? 'patch' : 'post';
      const url = this.id ? `/${this.id}.json` : `.json`;

      this.$http[metodo](`usuarios${url}`, this.usuario)
          .then(() => {
             alert('Salvo com sucesso!');
            this.clearForm()
          })
    },
    clearForm(){
      this.usuario.nome = '';
      this.usuario.email = '';
      this.id =  null;
      this.obter()
    },
    obter(){
      this.$http.get('usuarios.json')
          .then(res => {
              this.usuarios = res.data
          });
    },
    carregar(id) {
      this.id =  id;
      this.usuario = this.usuarios.find(el =>  el.id === id);
    },
    remover(id) {
        this.$http.delete(`/usuarios/${id}.json`)
            .then(() => {
              alert('Removido com sucesso!');
              this.clearForm();
            });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
