<template>
      <v-snackbar
      v-model="$store.state.snackbar.show"
    >
      {{ $store.state.snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="primary"
          text
          v-bind="attrs"
          @click="$store.state.snackbar.show = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
    export default {
        data: () => ({
      text: `Hello, I'm a snackbar`,
    }),
    }
</script>
<style lang="sass" scoped>
    div.v-snack:not(.v-snack--absolute)
      height: 100%
</style>