<template>
      <div>
        <v-list-item
          @click="$store.dispatch('doneTask', task.id)"
          :class="{ 'blue lighten-5': task.done }"
        >
          <template v-slot:default>
            <v-list-item-action>
              <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
                >{{ task.title }}</v-list-item-title
              >
            </v-list-item-content>
            <v-list-item-action @click.stop="dialogs.delete= true">
              <v-btn icon>
                <v-icon color="primary">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
             
          </template>
         
         </v-list-item>
        <v-divider></v-divider>
        <dialog-delete v-if="dialogs.delete" :task="task" @close="dialogs.delete= false" />
      </div>
</template>

<script>
    export default {
        data(){
            return {
                dialogs: {
                    delete: false
                }
            }
        },
        props: ['task'],
        components: {
            'dialog-delete': require('@/components/Todo/Dialogs/DialogDelete.vue').default
        }
    }
</script>