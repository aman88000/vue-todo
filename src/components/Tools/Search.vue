<template>
  <v-text-field
  :value="$store.state.searchText"
  @input="$store.commit('setSearchText', $event)"
  @focus="searchClosed = false"
  @blur="searchClosed = true"
  :disabled="$store.state.sorting"
    class="expending-search mt-1"
    :class="{'closed': searchClosed && !$store.state.searchText}"
    prepend-inner-icon="mdi-magnify"
    placeholder="Search"
     filled
    dense
    clearable   
  ></v-text-field>
</template>

<script>
export default {
    data(){
        return {
            searchClosed: true
        }
    }
};
</script>

<style lang="sass">
.expending-search
    transition: max-width 0.3s
    .v-input__slot
        cursor:  pointer !important
        &:before
            border-color: transparent !important
        &:after
            border: none !important
    &.closed
        max-width: 13%
        .v-input__slot
            background: transparent !important
</style>