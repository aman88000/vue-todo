<template>
  <div class="home">
    <field-Add-Task />

    <list-tasks v-if="$store.state.tasks.length" />
    <no-tasks v-else />

    <button-done-sort
      v-if="$store.state.sorting" 
    />
  </div>
</template>

<script>
export default {
  name: "Todo",
  components: {
    "field-Add-Task": require("@/components/Todo/FieldAddTask.vue").default,
    "list-tasks": require("@/components/Todo/ListTasks.vue").default,
    "no-tasks": require("@/components/Todo/NoTasks.vue").default,
    "button-done-sort": require("@/components/Todo/ButtonDoneSort.vue").default,
  },
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addNewTask() {
      this.$store.commit("addNewTask", this.newTask);
      this.newTask = "";
    },
  },
  mounted(){
    this.$store.dispatch('getTasks')
  }
};
</script>