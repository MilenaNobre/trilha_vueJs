<template>
  <div class="task-grid">
    <template v-if="tarefas.length">
      <card-tarefa v-for="(tarefa, i) in tarefas" :key="i" :tarefa="tarefa"
                   @tarefaDeleted="$emit('tarefasDeleted', i)"
                   @tarefaChanged="$emit('tarefasChanged', i)"></card-tarefa>
    </template>
    <p v-else class="no-task">Sua vida está em dia :)</p>
  </div>
</template>

<script>
import CardTarefa from "@/components/CardTarefa";
export default {
  name: "CardGrid",
  components: {CardTarefa},
  props:{
    tarefas: { type: Array, required: true }
  }
}
</script>

<style scoped>
.task-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.task-grid .task {
  margin: 10px;
}

.no-task {
  color: #AAA;
  font-size: 1.7rem;
}
</style>