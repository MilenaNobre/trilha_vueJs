<template>
	<div id="app">
		<h1>Diretivas (Desafio)</h1>
		<hr>
		<!-- Exercício -->
		<!-- Escreva uma diretiva que funcione com o v-on (escute eventos) -->
    <button v-quando:click="actionClick">Executar</button>
    <p id="text" v-quando:mouseenter="actionMouse" v-quando:mouseleave="actionleave">Executar</p>
	</div>
</template>

<script>
export default {
    methods:{
      actionClick() {
          alert('Ação de click executada')
      },
      actionMouse() {
        let el = document.getElementById('text')
        el.style.backgroundColor = 'yellow'
      },
      actionleave() {
        let el = document.getElementById('text')
        el.style.backgroundColor = 'green'
      }
    },
	  directives:{
      'quando' : {
          bind(el, binding) {
            const tipo = binding.arg
            const fn = binding.value

            el.addEventListener(tipo, fn)
          }
      }
    },

}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

button {
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}
</style>
