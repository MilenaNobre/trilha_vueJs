new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertButton() {
            alert('O botao foi clicado!')
        },
        salvar(event) {
            this.valor = event.target.value
        }
    }
})