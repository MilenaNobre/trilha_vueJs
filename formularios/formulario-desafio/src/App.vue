<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
        <!-- Exercicio 03 -->
        <!-- Crie um componente personalizado NomeCompleto -->
        <!-- Esse componente deve receber Nome e Sobrenome -->

        <InputName :Completo="usuario.NomeCompleto" @changeName="usuario.NomeCompleto = $event"></InputName>

<!--				 Email -->
        <Rotulo nome="E-mail" >
          <input type="text" v-model.trim="usuario.email">
        </Rotulo>
        <!-- Senha -->
        <Rotulo nome="Senha">
          <input type="password" v-model.trim="usuario.senha">
        </Rotulo>

				<!-- Armazenar Dados? (Sim/Não) -->
        <Rotulo nome="Armazenar Dados">
          <switch-button v-model="usuario.escolha"/>
        </Rotulo>

				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->

        <hr>
        <button @click.prevent="enviar"> ENVIAR </button>
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
        <Rotulo nome="Nome">
          <span>{{ usuario.NomeCompleto.nome }}</span>
        </Rotulo>
        <Rotulo nome="Sobrenome">
          <span>{{ usuario.NomeCompleto.sobrenome }}</span>
        </Rotulo>
        <Rotulo nome="E-mail">
          <span>{{ usuario.email }}</span>
        </Rotulo>
        <Rotulo nome="Senha">
          <span>{{ usuario.senha }}</span>
        </Rotulo>
        <Rotulo nome="Armazenar Dados">
          <span>{{ usuario.escolha ? 'Sim' : 'Não' }}</span>
        </Rotulo>
        <hr>
        <button @click="reenviar" class="buttonReenviar"> Refazer formulário </button>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import SwitchButton from './components/SwitchButton.vue'
import InputName from "@/components/InputName";

export default {
	name: 'app',
	components: {InputName, Rotulo, SwitchButton},
  data() {
    return {
      enviado: false,
      usuario: {
          NomeCompleto: {
            nome: 'mILENA',
            sobrenome: 'Nobre',
          },
         senha: '',
         email: '',
        escolha: false,
      }
    }
  },
  methods:{
    enviar() {
        this.enviado = true
    },
    reenviar() {
        this.enviado = false
        this.usuario =  {
              NomeCompleto: {
                nome: '',
                sobrenome: '',
              },
              senha: '',
              email: '',
              escolha: false
        }
    }
  }
}
</script>

<style>

body {
  background: linear-gradient(to right, #485563, #29323c);
}
h1 {
  color: #fff
}
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 5px 0px;
	padding: 5px 20px;
	font-size: 1rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #288cd0;
}
.buttonReenviar {
	float: right;
	margin: 5px 0px;
	padding: 5px 20px;
	font-size: 1rem;
	border-radius: 5px;
	color: #0c0c0c;
	background-color: #2ee769;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
