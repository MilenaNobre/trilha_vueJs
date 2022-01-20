new Vue({
    el: '#app',
    data: {
        start: false,
        win: false,
        arrLog: [ ],
        result: false,
        restart: false,
        widthPlay: 100,
        widthMonster: 100,
        classPlay: ['life'],
        classMonster: ['life']
    },
    watch: {
        widthPlay(){
            if(this.widthPlay <= 20){
                this.classPlay = ['life', 'danger']
            } else {
                this.classPlay = ['life']
            }
            this.theEnd()
        },
        widthMonster(){
            if(this.widthMonster <= 20){
                this.classMonster = ['life', 'danger']
            } else {
                this.classMonster = ['life']
            }
            this.theEnd()
        }
    },
    methods:{
        clear() {
            this.start = false;
            this.win = false;
            this.arrLog = [ ];
            this.result = false;
            this.restart = false;
            this.widthPlay = 100;
            this.widthMonster = 100;
            this.classPlay = ['life'];
            this.classMonster = ['life'];
        },
        theEnd() {
            if(this.widthPlay === 0 || this.widthMonster === 0) {
                this.result = true
                this.win = this.widthMonster === 0
                this.restart = true
                this.start = false
                this.stopPropagation();
            }
        },
        attack(especial) {
            const param = especial ? 20 : 11;
            const attack = especial ? ' super ataque de ' : '';
            let valorPlay = Math.floor(Math.random() * 13);
            let valorMonster = Math.floor(Math.random() * param);

            this.widthPlay =  (this.widthPlay - valorPlay < 0) ? 0 : this.widthPlay - valorPlay
            this.widthMonster =  (this.widthMonster - valorMonster < 0) ? 0 : this.widthMonster - valorMonster

            this.arrLog.push(
                {log: 'Jogador atingiu o monstro com ' + attack + valorMonster + '%', class: 'player'},
                {log: 'Monstro atingiu o jogador com ' + valorPlay + '%', class: 'monster'}
            );
        },
        heal() {
            if(this.widthPlay < 100){
                let valor = Math.floor(Math.random() * 11);
                this.widthPlay = (this.widthPlay + valor > 100) ? 100 : this.widthPlay + valor
            }
        }
    },
})