<template>
  <v-btn
   @click="$store.commit('toggleSort')"
    color="primary"
    class="button-done-sort"
    >Sorting Done</v-btn
  >
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
.button-done-sort
    position: fixed
    left: 50%
    bottom: 20px
    transform: translate(-50%)
</style>