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
    <div class="hero-body section">
        <div id="Skills" class="container block p-6 blockbg">
            <p class="title">Habilidades</p>
            <div class="container block">
                <p class="is-size-5 has-text-left innerSkill">Techs que estou aprendendo e tenho como foco...</p>
                <div class="container block">
                    <div class="container block">
                        <p class="has-text-center innerSkill">
                            Java 
                        </p>
                        <progress class="progress is-danger" value="70" max="100">15%</progress>
                    </div>
                    <div class="container block">
                        <p class="has-text-center innerSkill">
                            HTML
                        </p>
                        <progress class="progress is-info" value="90" max="100">15%</progress>
                    </div> 
                    <div class="container block">
                        <p class="has-text-center innerSkill">
                            CSS 
                        </p>
                        <progress class="progress is-info" value="50" max="100">15%</progress>
                    </div>
                    <div class="container block">
                        <p class="has-text-center innerSkill">
                            Bulma 
                        </p>
                        <progress class="progress is-danger" value="50" max="100">15%</progress>
                    </div> 
                    <div class="container block">
                        <p class="has-text-center innerSkill">
                            Vue 
                        </p>
                        <progress class="progress is-success" value="40" max="100">15%</progress>
                    </div>
                    <div class="container block">
                        <p class="has-text-center innerSkill">
                            Vontade de Aprender 
                        </p>
                        <progress class="progress is-info" max="100"></progress>
                    </div>
                </div>
            </div>
        </div>
        <div class="container block containerStudy">
            
        <p class="title" id="cursos">Formação acadêmica</p>
            
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

        
        <div class="container block  containerStudy">
            <p class="title">Cursos</p>
            <article class="media container block ">
                <figure class="media-left">
                    <p class="image is-128x128">
                        <img src="@/assets/img/spell.png">
                    </p>
                </figure>
                <div class="content has-text-left">
                    <p class="title is-size-5">Spell</p>
                    <p class="subtitle is-size-5 mt-2">Curso Inglês</p>
                    <p class="subtitle is-size-6">2019</p>
                </div>

           </article>
            <article class="media container block ">
                <figure class="media-left">
                    <p class="image is-128x128">
                        <img src="@/assets/img/udemy.png">
                    </p>
                </figure>
                <div class="content has-text-left">
                    <p class="title is-size-5">Leonardo Leitão(Udemy)</p>
                    <p class="subtitle is-size-5 mt-2">Curso Programação Java</p>
                    <p class="subtitle is-size-6">2021</p>
                </div>

           </article>
        </div>
        <p class="title">Idiomas</p>
        <div class="container block content has-text-left languagecontainer">
            <ul>
                <li class="done">Inglês</li>
                <li class="done">Português</li>
                <li class="point">Linguagens que eu pretendo aprender algum dia!!! </li>
                <li class="doing">Alemão</li>
                <li class="doing">Francês</li>
            </ul>
        </div>
        <p class="title">Projetos</p>
        <div class="container block content has-text-left">
            <ul class="content">       
               <li>   
                    <Card imgpath="require('../assets/img/ProgramaCrud.png')" title="Programa Crud" description="Programa CRUD criado principalmente com o intuito de ajudar a minha mãe na sua organização e tambem para aprendizado proprio, feito com Java Swing e SQLite" />
                </li> 
            </ul>
        </div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/cards.vue";
export default {
    components:{
        Card,
    }

}
</script>

<style>
.blockbg{
    background-color: rgb(53, 53, 53);
    border-radius: 20px;
    width:100%;
    margin : 0;

    color:azure;
    padding: 500px;
}
.innerSkill{
    color:azure;
    padding-bottom: 1.3rem;
}
.done{
    margin: 0;
	padding: 36px 0 35px 50px;
	list-style-type: none;
    color:rgb(17, 17, 17);
    background-image: url("@/assets/img/done.svg");
    background-repeat: no-repeat;
	background-position: left center;
	background-size: 40px;
}
.doing{
    margin: 0;
	padding: 36px 0 36px 50px;
    color:rgb(17, 17, 17);
	list-style-type: none;
    background-image: url("@/assets/img/learning.png");
    background-repeat: no-repeat;
	background-position: left center;
	background-size: 40px;
}
.point{
 margin: 0;
	padding: 36px 0 36px 50px;
    color:rgb(17, 17, 17);
	list-style-type: none;
    background-image: url("@/assets/img/pointhuman.png");
    background-repeat: no-repeat;
	background-position: left center;
	background-size: 40px;
}
.languagecontainer{
    background-image: url("@/assets/img/languages.jpg");
     min-height: 200px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
    border-radius: 20px;
}
</style>
