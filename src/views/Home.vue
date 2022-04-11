<template>
  <div class="container-fluid" background-color="pink">
    <br/>
    <h1 class="text-center">astroMLP</h1>
    <p class="lead text-center">Collection deep learning models and pipelines for astrophysics applications</p>
    <div class="container h-100">
      <hr/>
      <div class="card shadow-sm" style="width: 18rem;">
        <img src="/imgs/galaxies.jpg" class="card-img-top" alt="Galaxy">
        <div class="card-body">
          <h5 class="card-title">astroMLP for Galaxies</h5>
          <p class="card-text">Infer redshift, stellar mass and different classifications from a subset of the SDSS survey data.</p>
          <router-link to="/galaxies" class="btn btn-outline-dark">Explore →</router-link>
        </div>
      </div>
    </div>
    <br/>
  </div>
</template>

<style>
 .app-m-title { font-family: var(--bs-font-monospace); }
 .app-bar { color: #ccc; padding: 0 8px; }
</style>