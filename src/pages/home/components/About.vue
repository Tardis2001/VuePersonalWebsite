<template>

 <v-parallax
    dark
    src="@/assets/img/backgroundhero.jpg"
    height="400"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <span class="text-white d-flex flex-column justify-center align-center ">
            <h1 class="text-h4 font-weight-bold ma-3">
              Olá eu sou Matheus Santos Evangelista
            </h1>
            <h4 class="text-overline font-weight-medium">
              Eu sou desenvolvedor e um academico de Ciencia da computação
            </h4>
        </span>
      </v-col>
    </v-row>
  </v-parallax>

</template>

<script>
export default {
name : "About",
}
</script>

<style>
</style>
