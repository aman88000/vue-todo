<template>
  <v-list class="pt-0" flat>
    <draggable 
    v-model="tasks"
     handle=".handle">
      <task
        v-for="task in tasks"
        :key="task.id"
        :task="task"
      />
    </draggable>
  </v-list>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    task: require("@/components/Todo/Task.vue").default,
    draggable,
  },
  computed: {
    tasks: {
      get() {
        return this.$store.getters.filterSearchTasks;
      },
      set(newArr) {
        this.$store.commit("setList", newArr);
      },
    },
  },
};
</script>