<template>
  <div>
    <ul class="list-group">
      <TaskListItem v-for="task of tasks" :key="task.id" :task="task" />
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState, mapMutations } from 'vuex';
import TaskListItem from "./TaskListItem.vue";

/*
-> escopo: methods
mapActions
mapMutations

-> escopo: computed
mapGetters,
mapState
*/

export default {
  components: {
    TaskListItem,
  },

  computed: mapGetters('tasks', { tasks: 'getTasks' }),
  methods: mapActions('tasks', { findTasks: 'getTasks' }),
  created() {
    this.findTasks();
    // this.$store.commit('', '')
  }
};
</script>