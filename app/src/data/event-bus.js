import Vue from 'vue';

export default new Vue({
  data() {
    return {
      tasks: [],
      task: {
        text: '',
        done: false
      }
    }
  },

  methods: {
    async getTasks() {
      try {
        const { data } = await this.$http.get("/tasks");
        this.tasks = data;
      } catch (err) {
        // Tratamento de erro
      }
    }
  },

  async created() {

    this.$on('removeTask', task => {
      this.$http.delete(`/tasks/${task.id}`).then(() => {
        const index = this.tasks.findIndex((t) => t.id === task.id);
        if (index !== -1) {
          this.tasks.splice(index, 1);
        }
      });
    });


    this.$on('editTask', task => {
      this.task = { ...task };
    })


    this.$on('doneTask', task => {
      this.$http.patch(`/tasks/${task.id}`, task).then(() => {
        const index = this.tasks.findIndex((t) => t.id === task.id);
        if (index !== -1) {
          this.tasks.splice(index, 1, { ...task });
        }
      });
    });

    this.$on('saveTask', (task) => {
      const method = task.id ? "put" : "post";
      this.$http[method](`/tasks/${method === "put" ? task.id : ""}`, {
        ...task,
        done: task.done || false,
      })
        .then(() => (this.task = { done: false, text: '' }))
        .then(() => this.getTasks());
    })

    this.$on('getTasks', async () => {
      this.getTasks()
    })
  }
})