<template>
  <nav class="sticky top-0 z-40">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
      <span class=" name text-2xl font-semibold whitespace-nowrap dark:text-white">Arnaud Padula</span>
      <button @click="open = !open" id="buttonMenu" data-collapse-toggle="navbar-default" type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"></path>
        </svg>
      </button>
      <div :class="{ hidden: open }" class=" w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 md:mt-0 dark:text-white">
          <li>
            <a v-smooth-scroll href="#about" class="block py-2 pl-3 pr-4"><span class="numberSection">01.Qui suis-je
                ?</span></a>
          </li>
          <li>
            <a v-smooth-scroll href="#experiences" class="block py-2 pl-3 pr-4"><span class="numberSection">02.Mon
                parcours</span></a>
          </li>
          <li>
            <a v-smooth-scroll href="#projects" class="block py-2 pl-3 pr-4"><span class="numberSection">03.Mes
                projets</span></a>
          </li>
          <li>
            <a v-smooth-scroll href="#contact" class="block py-2 pl-3 pr-4"><span class="numberSection">04.On se contacte
                ?</span></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style>
.numberSection {
  color: #64ffda;
}


.nav-colored {
  background-color: white; 
  color:#0b192f !important; 
}
.nav-colored .numberSection, .nav-colored .name {
  color: #0b192f;
}
nav.scrolled {
  
  border-bottom: 0px;
}
</style>
<script setup>
import { ref } from 'vue'

const open = ref(true);

document.addEventListener("DOMContentLoaded", function() { 
  var navbar = document.querySelector('nav')
console.log(navbar.classList)
window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('nav-colored')
    navbar.classList.add('shadow-lg')
  } else {
    navbar.classList.remove('nav-colored')
    navbar.classList.add('shadow-lg')

  }
}
})

</script>