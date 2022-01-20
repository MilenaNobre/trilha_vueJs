new Vue({
	el: '#desafio',
	data: {
		troca: true,
		perigo: true,
		classe3: '',
		classe4: '',
		cor5: '',
		estilo5: {
			width: '100px',
			height: '100px',
		},
		width: '0'
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.troca = !this.troca
			}, 2000)
		},
		iniciarProgresso() {
			let valor = 0;
			const temporizador = setInterval(() => {
				valor += 5;
				this.width = `${valor}%`;
				if(valor === 100) clearInterval(temporizador);
			}, 500);
		},
		setPerigo(event) {
			this.perigo = event.target.value == 'true' ? true : false;
		}
	},
	computed: {
		classTroca() {
			return {
				destaque: this.troca,
				encolher: !this.troca
			}
		},
	}
})
