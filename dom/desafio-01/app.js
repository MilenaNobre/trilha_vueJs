new Vue({
    el: '#desafio',
    data: {
        nome: 'Milena Nobre',
        idade: 24,
        imagem: 'https://www.infoescola.com/wp-content/uploads/2020/01/planetas-sistema-solar-577527586.jpg'
    },
    methods: {
        multIdade() {
            return this.idade * 3;
        },
        funRand() {
            return Math.random()
        }
    }
});