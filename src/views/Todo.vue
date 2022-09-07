<template>
  <div class="home">
 
    <field-Add-Task />

   <list-tasks v-if="$store.state.tasks.length" />
 <no-tasks v-else />
  </div>
</template>

<script>
export default {
  name: "Todo",
  components: {
    'field-Add-Task': require('@/components/Todo/FieldAddTask.vue').default,
    'list-tasks': require('@/components/Todo/ListTasks.vue').default,
    'no-tasks': require('@/components/Todo/NoTasks.vue').default
  },
  data() {
    return {
      newTask:'',
    
    };
  },
  methods: {
    addNewTask(){
      this.$store.commit('addNewTask', this.newTask);
      this.newTask = ''
    },
  },
};
</script>

