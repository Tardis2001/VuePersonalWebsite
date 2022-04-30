<template>
  <section class="hero">
    <div class="hero-head">
        <div class="container block p-6 has-text-left">
            <p class="title is-size-4 has-text-justify">Sobre mim</p>

            <p class="subtitle is-size-5 has-text-justify m-5">Bom meu nome você ja viu no começo desse website eu fiz ele com o intuito de mostrar as pessoas sobre mim e o que eu faço e gosto
                            eu tenho 21 anos, estudo atualmente no curso de ciencia da computação,gosto de jogar basquete e estou sempre aberto a novos aprendizados de diferentes áreas,tambem gosto de fazer livestreams. <br>
                
                        <br>
                        <br>
                        Levo sempre em consideração o respeito dos outros sobre mim no meu cotidiano
            </p>
        </div>
    </div>
    <div class="hero-body">
        <div id="Skills" class="container block has-background-grey-lighter p-6 is-radius">
            <p class="title">Habilidades</p>
            <div class="container block">
                <p class="subtitle is-size-5 has-text-left">Techs que estou aprendendo e tenho como foco...</p>
                <div class="container block">
                    <div class="container block">
                        <p class="subtitle has-text-center">
                            Java 
                        </p>
                        <progress class="progress is-danger" value="70" max="100">15%</progress>
                    </div>
                    <div class="container block">
                        <p class="subtitle has-text-center">
                            HTML
                        </p>
                        <progress class="progress is-info" value="90" max="100">15%</progress>
                    </div> 
                    <div class="container block">
                        <p class="subtitle has-text-center">
                            CSS 
                        </p>
                        <progress class="progress is-info" value="50" max="100">15%</progress>
                    </div>
                    <div class="container block">
                        <p class="subtitle has-text-center">
                            Bulma 
                        </p>
                        <progress class="progress is-danger" value="50" max="100">15%</progress>
                    </div> 
                    <div class="container block">
                        <p class="subtitle has-text-center">
                            Vue 
                        </p>
                        <progress class="progress is-success" value="40" max="100">15%</progress>
                    </div>
                    <div class="container block">
                        <p class="subtitle has-text-center">
                            Vontade de Aprender 
                        </p>
                        <progress class="progress is-info" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
        <p class="title">Formação acadêmica</p>
        <div class="container block">
            
            
           <article class="media container block ">
                <figure class="media-left">
                    <p class="image is-128x128">
                        <img src="@/assets/img/ufpr.png">
                    </p>
                </figure>
                <div class="content has-text-left">
                    <p class="title is-size-5">Universidade Federal do Paraná(UFPR)</p>
                    <p class="subtitle is-size-5 mt-2">Ciencia Da Computação</p>
                    <p class="subtitle is-size-6">2020 - Atualmente</p>
                </div>

           </article>
        <article class="media container block ">
                <figure class="media-left">
                    <p class="image is-128x128">
                        <img src="@/assets/img/ifpr.png">
                    </p>
                </figure>
                <div class="content has-text-left">
                    <p class="title is-size-5">Instituto Federal do Paraná(IFPR)</p>
                    <p class="subtitle is-size-5 mt-2">Tecnico De Informatica</p>
                    <p class="subtitle is-size-6">2015 - Desistente</p>
                </div>

           </article>
        
        </div>

        <p class="title">Cursos</p>
        <div class="container block">
            <article class="media container block ">
                <figure class="media-left">
                    <p class="image is-128x128">
                        <img src="@/assets/img/spell.png">
                    </p>
                </figure>
                <div class="content has-text-left">
                    <p class="title is-size-5">Spell</p>
                    <p class="subtitle is-size-5 mt-2">Curso Inglês</p>
                    <p class="subtitle is-size-6">2020</p>
                </div>

           </article>
        
        </div>
        <p class="title">Idiomas</p>
        <div class="container block content has-text-left">
            <ul>
                <li>Inglês</li>
                <li>Português</li>
            </ul>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
</style>
