new Vue({
    el: '#app',
    data: {
        start: false,
        arrLog: [ ],
        widthPlay: 100,
        widthMonster: 100,
    },
    computed: {
      hasResult() {
          return this.widthPlay === 0 || this.widthMonster === 0
      }
    },
    watch: {
        hasResult() {
            this.start = !this.start
        }
    },
    methods:{
        clear() {
            this.arrLog = [];
            this.start = false;
            this.widthPlay = 100;
            this.widthMonster = 100;
        },
        attack(especial) {
            const param = especial ? 20 : 11;
            const attack = especial ? ' super ataque de ' : '';

            let valorPlay = Math.floor(Math.random() * 13);
            let valorMonster = Math.floor(Math.random() * param);

            this.arrLog.unshift(
                {log: 'Jogador atingiu o monstro com ' + attack + valorMonster + '%', cls: 'player'}
            );

            this.widthMonster =  Math.max(this.widthMonster - valorMonster, 0);
            if(this.widthMonster > 0 ){
                this.widthPlay =  Math.max(this.widthPlay - valorPlay, 0);
                this.arrLog.unshift(
                    {log: 'Monstro atingiu o jogador com ' + valorPlay + '%', cls: 'monster'}
                );
            }


        },
        heal() {
            if(this.widthPlay < 100){
                let valor = Math.floor(Math.random() * 11);
                this.widthPlay =  Math.min(this.widthPlay + valor, 100);
                this.arrLog.unshift(
                    {log: 'Jogador recuperou a vida em ' + valor + '%', cls: 'stronger'}
                );
            }
        }
    },
})