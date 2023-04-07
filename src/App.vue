<script setup>
import HeroSection from './components/HeroSection.vue';
import Navbar from './components/Navbar.vue';
import About from './components/About.vue';
import Experiences from './components/Experiences.vue';
import Works from './components/Works.vue';
import Contact from './components/Contact.vue';


</script>

<template id="app">
  <Navbar/>
    <router-view v-slot="{Component}">
    <transition name="slide-fade" mode="out-in">
      <component :is="Component"/>
    </transition>
  </router-view>
  </template>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
  hr{
    background-color: #64ffda;
  }
</style>
