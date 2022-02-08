<template>
    <div id="app">
        <div class="panel content">
          <h1> TODO LIST </h1>
          <p>Projeto #02 </p>
        </div>
        <div class="panel">
          <progress-bar :porcentagem="percent" />
        </div>
        <add-button @add="addIssue($event)"/>

        <card-grid :tarefas="tarefas"
                   @tarefasDeleted="deleted"
                   @tarefasChanged="changed">
        </card-grid>
    </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";
import AddButton from "@/components/AddButton";
import CardGrid from "@/components/CardGrid";

export default {
  name: 'App',
  components: {
    CardGrid,
    ProgressBar,
    AddButton
  },
  data(){
    return {
      tarefas: []
    }
  },
  computed:{
    qtdTrue(){
      return this.tarefas.filter(el => el.check).length;
    },
    percent() {
      return (this.qtdTrue*100)/ this.tarefas.length | 0;
    }
  },
  watch:{
    tarefas: {
        deep: true,
        handler() {
          localStorage.setItem('tarefas', JSON.stringify(this.tarefas));
        }
    }
  },
  methods:{
    addIssue(issue){
      const notExist = this.tarefas.filter(el => el.text == issue).length ==0
      if(notExist) {
        this.tarefas.push({
          text: issue,
          check: false
        });
      }
    },
    changed(i) {
      this.tarefas[i].check = !this.tarefas[i].check
    },
    deleted(i) {
      this.tarefas.splice(i, 1)
    }
  },
  created() {
      const json =  localStorage.getItem('tarefas');
      this.tarefas =  JSON.parse(json) || []

  }
}
</script>

