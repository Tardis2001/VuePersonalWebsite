<template>
  <v-app>
    
    <navbar/>

    <v-main>
    
        <router-view></router-view>
    
    </v-main>
    

</v-app>
</template>

<script>
import navbar from "@/pages/home/components/navBar.vue"
export default {
  name: 'App',
    
  components: {
  navbar
  },

  data: () => ({
    //
  }),
}
</script>
