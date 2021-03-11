<template>
  <div>
    <button
      @click="
        $router.push({
          path: '/',
          query: { app: 'https://dashboard.jadeerp.com.br' },
        })
      "
    >
      With Query Params
    </button>
    <button @click="$router.push('/igxferreira')">With Params</button>

    <TaskForm />
    <TaskList />
  </div>
</template>
<script>
import TaskForm from "@/components/tasks/TaskForm.vue";
import TaskList from "@/components/tasks/TaskList.vue";

import EventBus from "@/data/event-bus";

export default {
  name: "Task",
  components: {
    TaskForm,
    TaskList,
  },
  // navegar promaticamente: this.$router.push, replace, go(-1)
  //obter informações da rota: this.$route.params, this.$route.query
};
</script>

<style>
.task.active span {
  text-decoration: line-through;
}
</style>