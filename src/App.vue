<template>
  <div class="header">
      <Code class="fixed z-50 left-0 top-0 w-screen h-screen bg-gray-100 flex items-center justify-center flex-col text-black"/>

        <div class="w-11/12 md:w-1/2 mx-auto  bg-white p-8 bg-opacity-20 border border-gray-200 rounded-lg">
        <h2 class="text-3xl">Cześć Madziu !</h2>
        <p class="flex"> Skoro to czytasz to pewnie nadszedł dzień Twoich urodzin :D Oboje wiemy ,że nasza relacja wiele zawdzięcza muzyce, bo to własnie od muzyki zaczęły się nasze pierwsze dłuższe rozmowy. W związku z tym postanowiłem dać Ci tę płytę oraz cyfrową wersję - czyli tę stronę, składającą się z utworów które towarzyszyły nam w różnych etapach naszej relacji. Utwory te były z nami na Bolko, gdzie przy zachodzie słońca szeptaliśmy do siebie "Kocham Cię", były też na Zawadzkim skateparku, gdzie zmęczeni obserwowaliśmy piękne, gwieździste niebo. Utwory są różnorodne, tak jak zmienne są nasze nastroje, nie zabraknie więc tutaj również bardziej energicznych piosenek towarzyszących nam w samochodzie czy na koncercie w Warszawie. Mam nadzieję, że muzyke na zawsze będzie nam towarzyszyła, bo to przecież dopiero początek naszej przygody.</p>
         <img class="h-6 mx-auto" src="./assets/heart.png" alt="">
    </div>
    <MusicPlayer />
    <div>
      <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
      <defs>
      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g class="parallax">
      <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
      <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
      <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
      <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
      </g>
      </svg>
    </div>
  </div>
</template>

<script>
import MusicPlayer from './components/MusicPlayer.vue';
import Code from './components/Code.vue';

export default {
  name: 'App',
  components: {
    MusicPlayer,
    Code
  }
}
</script>

<style >

@import url(//fonts.googleapis.com/css?family=Lato:300:400);
.animate{
  animation: test 1s;
}
@keyframes test {
  0%{
    transform: translateX(-400px);
    opacity: 0;
  }
  100%{
    transform: translate(0);
    opacity: 1;
  }
}
body {
  margin:0;
}

h1 {
  font-family: 'Lato', sans-serif;
  font-weight:300;
  letter-spacing: 2px;
  font-size:48px;
}
p {
  font-family: 'Lato', sans-serif;
  letter-spacing: 1px;
  font-size:14px;
  color: #333333;
}

.header {
  position:relative;
  text-align:center;
  background: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%);
  color:white;
}
.logo {
  width:50px;
  fill:white;
  padding-right:15px;
  display:inline-block;
  vertical-align: middle;
}

.inner-header {
  height:65vh;
  width:100%;
  margin: 0;
  padding: 0;
}

.flex { /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.waves {
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
}

.content {
  position:relative;
  height:20vh;
  text-align:center;
  background-color: white;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height:40px;
    min-height:40px;
  }
  .content {
    height:30vh;
  }
  h1 {
    font-size:24px;
  }
}
</style>
