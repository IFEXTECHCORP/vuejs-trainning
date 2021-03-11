<template>
  <div>
    <div>
      <!-- <input type="text" name="new_task" 
      :value="todo.text"
      @input="todo.text = $event.target.value"
       /> -->
      <input type="text" name="new_task" v-model="todo.text" />
      <button @click="addTask">Add</button>
    </div>

    <ol>
      <li
        v-for="todo in todos"
        :key="todo.id"
        class="task"
        :class="{ active: todo.done }"
      >
        <span>{{ todo.text }}</span>
        <button type="button" @click="doneTask(todo, $event)">
          {{ todo.done ? "Concluido" : "Concluir" }}
        </button>
        <button type="button" @click="selectToEditTask(todo, $event)">
          Editar
        </button>
        <button type="button" @click="removeTask(todo, $event)">Remover</button>
      </li>
    </ol>

    <!--Listando chaves e valores de um objeto 
  <ul>
    <li v-for="(value, key) of todo" :key="key">
      {{ key }} : {{ value }}
    </li>
  </ul> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      todo: {
        text: "",
        done: false,
      },

      todos: [],
    };
  },

  methods: {
    addTask(event) {
      // $event = JS Event
      if (this.todo.id) {
        // Atualizar
        const index = this.todos.findIndex((t) => t.id === this.todo.id);
        if (index !== -1) {
          this.todos.splice(index, 1, { ...this.todo });
        }
      } else {
        // Adicionar
        const id = this.todos.length
          ? this.todos[this.todos.length - 1].id + 1
          : 1;
        this.todos.push({ ...this.todo, done: false, id });
      }

      this.todo = {};
    },
    doneTask(task, event) {
      const index = this.todos.findIndex((t) => t.id === task.id);
      if (index !== -1) {
        this.todos.splice(index, 1, { ...task, done: !task.done });
      }
    },
    removeTask(task) {
      const index = this.todos.findIndex((t) => t.id === task.id);
      if (index !== -1) {
        this.todos.splice(index, 1);
      }
    },

    selectToEditTask(task) {
      this.todo = { ...task };
    },
  },
};
</script>

<style lang="scss">

.task.active span {
  text-decoration: line-through;
}
</style>