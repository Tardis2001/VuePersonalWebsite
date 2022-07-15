<template>
<div>
<div class="ma-6" id="about">
    <v-banner
        inset
        lines="3">
         
        <p class="text-h4 font-weight-bold">Sobre Mim</p>
            <div class="ma-9"> 
            <p class="text-justify">
                    Bom meu nome você ja viu no começo desse website eu fiz ele com o intuito de mostrar as pessoas sobre mim e o que eu faço e gosto eu tenho 21 anos, estudo atualmente no curso de ciencia da computação,gosto de jogar basquete e estou sempre aberto a novos aprendizados de diferentes áreas sou bem proativo nesse quesito, tambem gosto de fazer livestreams programando.

            <br> <br>
            Levo sempre em consideração o respeito dos outros sobre mim no meu cotidiano
        </p>
        </div>
      </v-banner>

</div>
      

    <div class="ma-6 ">
            <p class="text-h4 font-weight-bold">Techs que tenho como minhas capacidades e foco...</p>
        <div class="ma-9 red text-center">

            <p class="sub-caption"><v-icon color="red" icon="mdi-language-java" ></v-icon>Java |  JavaFx | FrameWork Springboot <br> 
        <v-icon icon="mdi-language-html5" color="blue"></v-icon>HTML/CSS  |  <v-icon icon="mdi-language-javascript" color="orange"></v-icon>JS<br>
            <v-icon icon="mdi-vuejs" color="green"></v-icon> Vue | <v-icon color="blue" icon="mdi-vuetify"></v-icon> Vuetify <br>
           <v-icon icon="mdi-bulma" color="blue lighten-4"></v-icon> Bulma </p>
        </div>
    </div>

    <v-divider inset light></v-divider>
    
    <p class="text-h4 font-weight-bold ma-6" id="skills">Formação Academica</p>
    <div class="pa-6 d-flex justify-center">

        <div class="ma-9">
            
            <v-card elevation="15" outlined shaped min-width="400px" max-width="500px">

                <v-img src="@/assets/img/ufpr.png" max-height="100px"></v-img>
                <v-card-title>UFPR(Universidade Federal Do Paraná)</v-card-title>
                <v-card-text>Ciencia Da Computação</v-card-text>
                <v-card-subtitle>2020 - Atualmente</v-card-subtitle>
            </v-card>
        </div>
    </div>
    <div class="pa-6 d-flex justify-center">
        <div class="ma-9">
            
            <v-card elevation="15" outlined shaped min-width="400px" max-width="500px">
                
                <v-img src="@/assets/img/ifpr.png" max-height="100px"></v-img>
                <v-card-title>IFPR(Instituição Federal Do Paraná)</v-card-title>
                <v-card-text>Tecnico De Informatica</v-card-text>
                <v-card-subtitle>2015 - Incompleto</v-card-subtitle>
            </v-card>
        </div>
   </div>
   <v-divider inset light></v-divider>
    
    <p class="text-h4 font-weight-bold ma-6">Cursos</p>
    <div class="ma-6">
        


        <div class="ma-9 pa-6 d-flex justify-center">
                        
            <v-card elevation="15" outlined shaped min-width="400px" max-width="500px">
                <v-img src="@/assets/img/spell.png" alt="Spell curso de inglês" max-height="100px"></v-img>
                <v-card-title>Spell</v-card-title>
                <v-card-text>Curso de Inglês</v-card-text>
            </v-card>
        </div>
         
        <div class="ma-9 pa-8 d-flex justify-center">
            <v-card elevation="15" outlined shaped min-width="400px" max-width="500px">
                <v-img src="@/assets/img/java.png" alt="imagem java" max-height="100px"></v-img>
                <v-card-title>Programação Java Leonardo Leitão</v-card-title>
                <v-card-text>Curso de Java | JavaFx | SpringBoot</v-card-text>
            </v-card>
        </div>
    </div>
</div>
</template>

<script>
export default {
    components:{
    }

}
</script>

<style>
</style>    
