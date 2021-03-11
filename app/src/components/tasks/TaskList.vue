<template>
  <div>
    <ul class="list-group">
      <TaskListItem v-for="task of tasksComputed" :key="task.id" :task="task" />
    </ul>
  </div>
</template>

<script>
import EventBus from "@/data/event-bus";
import TaskListItem from "./TaskListItem.vue";

export default {
  components: {
    TaskListItem,
  },
  data() {
    return {
      tasks: EventBus.tasks,
    };
  },
  computed: {
    tasksComputed() {
      return EventBus.tasks;
    },
  },

  created() {
    EventBus.$emit("getTasks", {});
  },
  // props: {
  //   tasks: {
  //     type: Array,
  //     default() {
  //       return []
  //     }
  //   }
  // }
};
</script>