<template>
  <div>
    <input type="text" name="new_task" v-model="formDataComputed.text" />
    <b-button @click="saveTask" variant="primary">
      <fa icon="plus" />
    </b-button>
  </div>
</template>
<script>
import EventBus from "@/data/event-bus";
export default {
  methods: {
    saveTask() {
      EventBus.$emit("saveTask", { ...this.formDataComputed });
    },
  },

  computed: {
    formDataComputed() {
      return EventBus.task;
    },
  },
};
</script>
