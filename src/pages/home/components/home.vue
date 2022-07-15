<template>
    <div>
        <About/>
        <Skills/>
        <Footer/>
    </div>
</template>

<script>
import About from "@/pages/home/components/About.vue"
import Skills from "@/pages/home/components/Skills.vue"
import Footer from "@/pages/home/components/footer.vue"
export default {
    components:{
        About,Skills,Footer
    }
}
</script>

<style>

</style>
