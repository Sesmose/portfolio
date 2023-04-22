<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Works from './components/Works.vue';
import About from './components/About.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
</script>

<template id="app">

    <Navbar/>
    <main>
      <About/>
      <Works/>
      <Projects/>
      <Contact/>
      <footer>
        <Footer/>
      </footer>
  </main>
  </template>

