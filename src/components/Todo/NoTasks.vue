<template>
     <div class="no-tasks">
         <v-icon
      size="100"
      color="primary"
    >
      mdi-check
    </v-icon>
      <div class="text-h5 primary--text">No Tasks</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="sass" scoped>
.no-tasks
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    opacity: 0.5


</style>