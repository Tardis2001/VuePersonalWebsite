<template>
      <nav class="navbar is-dark">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item">
                      <img src="https://img.icons8.com/dotty/344/pixel-cat.png" > 
                    </a>
                </div>
                <span class="navbar-burguer" data-target="navbarMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <div id="navbarMenu" class="navbar-menu">
                    <div class="navbar-end">
                        <a class="navbar-item" href="#about">
                            Sobre
                        </a>
                        <a class="navbar-item" href="#Skills">
                            Habilidades
                        </a>
                        <a class="navbar-item" href="#Cursos">
                            Cursos
                        </a>
                        <a class="navbar-item" href="#">
                            Projetos
                        </a>
                        <a class="navbar-item" href="#footer">
                            Contatos
                        </a>
                    </div>
                </div>
            </div>
        </nav>
</template>
<script>
export default{
    name : 'navBar',
};
</script>
<style>

</style>

