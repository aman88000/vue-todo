<template>
      <v-text-field class="pa-3"
    v-model="newTask"
    @click:append="addNewTask"
    @keyup.enter="addNewTask"
      outlined
      label="Add Todo"
      append-icon="mdi-plus"
      clearable
      hide-details
    ></v-text-field>
</template>

<script>
    export default {
        name: 'fieldAddTask',
        data() {
    return {
      newTask:'',
    
    };
  },
  methods: {
    addNewTask(){
      this.$store.dispatch('addNewTask', this.newTask);
      this.newTask = ''
    },
  },
        
    }
</script>
