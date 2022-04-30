<template>
    <div id="app" >
        
        <navBar/>
        <About/>
        <Skills/>
        <Footer/>
    </div>
</template>

<script>
import navBar from '@/components/navBar.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Footer from '@/components/footer.vue'
export default{
  name: 'App',
  components: {
    navBar,About,Skills,Footer
 },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
