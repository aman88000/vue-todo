<template>
    <div>
         <v-app-bar-title class="ml-4 text-subtitle-1 ml-5">{{date}}</v-app-bar-title>
    </div>
</template>

<script>
import { format} from 'date-fns'
    export default {
        data(){
            return {
                date: null
            }
        },
        methods: {
            getDate(){
                this.date =  format(new Date(), 'MMMM d, HH:mm:ss')
                setTimeout(this.getDate, 1000);
            }
        },
        mounted(){
            this.getDate()
        }
    }
</script>

<style scoped>

</style>