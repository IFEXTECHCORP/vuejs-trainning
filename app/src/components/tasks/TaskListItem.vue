<template>
  <li class="task list-group-item" :class="{ active: task.done }">
    <span>{{ task.text }}</span>
    <button
      class="btn btn-sm btn-success"
      type="button"
      @click="doneTask(task, $event)"
    >
      {{ task.done ? "Concluido" : "Concluir" }}
    </button>
    <button
      class="btn btn-sm btn-info"
      type="button"
      @click="selectToEditTask(task, $event)"
    >
      Editar
    </button>
    <button
      class="btn btn-sm btn-danger"
      type="button"
      @click="removeTask(task, $event)"
    >
      Remover
    </button>
  </li>
</template>


<script>
import EventBus from "@/data/event-bus";
export default {
  props: {
    task: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    doneTask(task) {
      EventBus.$emit("doneTask", { ...task, done: !task.done });
    },

    selectToEditTask(task) {
      EventBus.$emit("editTask", task);
    },

    removeTask(task) {
      EventBus.$emit("removeTask", task);
    },
  },
};
</script>

<style>
</style>