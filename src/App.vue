<template>
  <div class="d-flex flex-column h-100">
    <Navbar/>
    <main class="app-main flex-shrink-0">
      <div class="container h-100 mt-5" style="max-width: 1140px;">
        <router-view/>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar, Footer
  }
}
</script>

<style>
.app-main { padding-top: 64px; margin-bottom: 80px; }
</style>
