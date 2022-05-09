<template>
    <section id="about" class= "hero is-medium section parallax bg1" >
        
        <div class="hero-body">
            <p class="is-size-1 parallaxtitle">
                Olá eu sou Matheus ;)
            </p>
            <p class="p-4 parallaxsubtitle">
                Sou desenvolvedor e estudante             
            </p>
        </div>
    </section>
</template>

<script>
export default {
name : "About",
}
</script>

<style>
.bg1{
    background-image: url("@/assets/img/backgroundhero.jpg");
}
.parallax{

  
  min-height: 200px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.parallaxtitle{
    color:rgba(245, 245, 245, 0.87);

}
.parallaxsubtitle{
     color:rgba(245, 245, 245, 0.87);

}

</style>
