<template>
      <v-text-field class="pa-3"
    v-model="newTask"
    @keyup.enter="addNewTask"
      outlined
      label="Add Todo"
      clearable
      hide-details
    >
      <template v-slot:append>
            <v-icon
            color="primary"
            :disabled="newTaskValidate"
            @click="addNewTask"
            >mdi-plus</v-icon>
            </template>
    </v-text-field>
</template>

<script>
    export default {
        name: 'fieldAddTask',
        data() {
    return {
      newTask:'',
    
    };
  },
  computed: {
    newTaskValidate(){
      return !this.newTask
    }
  },
  methods: {
    addNewTask(){
      if(!this.newTaskValidate){
  this.$store.dispatch('addNewTask', this.newTask);
      this.newTask = '' 
      }
    
    },
  },
        
    }
</script>
