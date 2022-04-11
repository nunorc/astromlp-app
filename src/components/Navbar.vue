<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg fixed-top shadow-sm">
    <div class="container">
      <router-link to="/" class="navbar-brand">astroMLP</router-link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse mr-auto" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
        <router-link to="/galaxies" class="nav-link">Galaxies</router-link>
        <router-link to="/details" class="nav-link">Details</router-link>
      </div>
    </div>

    </div>
  </nav>
</template>
