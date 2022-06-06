<template>
  <ul id="cards">
    <li>
        
      <div class="a-box">
        <div class="img-container">
            <div class="img-inner">
                <div class="inner">

                    <img src="@/assets/img/ProgramaCrud.png" />

                </div>
            </div>
        </div>
        <div class="text-container">
            <h3>Programa Crud</h3>
            <div>
                Esse é um programa que foi feito com Java Swing e SQLite foi feito para minha mãe como objetivo simplicidade para que um leigo pudesse utiliza-lo.
            </div>
        </div>
      </div>
    </li>
    <li>

      <div class="a-box">
      <div class="img-container">
          <div class="img-inner">
              <div class="inner">

                  <img src="@/assets/img/CampoMinado.png">

              </div>
          </div>
      </div>
      <div class="text-container">
          <h3>Campo Minado</h3>
          <div>
              Esse é um jogo que eu foi feito utilizando java Swing apenas para aprendizado e teste da biblioteca Swing.💣<br><br>
          </div>
      </div>
    </div>
    </li>
    <li>
      <div class="a-box">
      <div class="img-container">
          <div class="img-inner">
              <div class="inner">

                  <img src="@/assets/img/website.png">

              </div>
          </div>
      </div>
      <div class="text-container">
          <h3>Meu Website</h3>
          <div>
              Fiz esse website principalmente com o intuito de apresentar os meus trabalhos e do que sou capaz de fazer para os outros. 🙂
          </div>
      </div>
    </div>
  </li>
  <li>
      <div class="a-box">
      <div class="img-container">
          <div class="img-inner">
              <div class="inner">

                  <img src="@/assets/img/collision.png">

              </div>
          </div>
      </div>
      <div class="text-container">
          <h3>Programa de Teste Colisões</h3>
          <div>
              Esse programa eu fiz para testar colisões AABB, o que era pra ser um jogo de plataforma não terminado.
          </div>
      </div>
    </div>
  </li>
  </ul>

</template>

<script>
export default {
    name : "cards"
  }
</script>

<style>
#cards{
  display: flex;
  margin:0 auto;
  /* min-width: 696px; */
  margin:100px;
  list-style: none;
  flex-wrap: wrap;
  padding-top: 20px;
}
#cards li {
  display:inline;
  list-style-type: none;
}
.a-box {
  display: inline-block;
  width: 240px;
  text-align: center;
}

.img-container {
    height: 230px;
    width: 200px;
    overflow: hidden;
    border-radius: 0px 0px 20px 20px;
    display: inline-block;
}

.img-container img {
    transform: skew(0deg, -13deg);
    height: 250px;
    margin: -20px 0px 0px 0px;
}

.inner{
    display: inline-block;
    border-radius: 20px;
    overflow: hidden;
    padding: 0px;
    transform: skew(0deg, 13deg);
    font-size: 0px;
    margin: 30px 0px 0px 0px;
    background: #c8c2c2;
    height: 250px;
    width: 200px;
}

.text-container {
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
  padding: 120px 20px 20px 20px;
  border-radius: 20px;
  background: #fff;
  margin: -120px 0px 0px 0px;
  line-height: 19px;
  font-size: 14px;
}

.text-container h3 {
  margin: 20px 0px 10px 0px;
  color: #04bcff;
  font-size: 18px;
}
</style>
