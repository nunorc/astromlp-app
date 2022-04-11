<template>
  <div class="container-fluid">
    <br/>
    <h1 class="text-center">astroMLP for Galaxies</h1>
    <p class="lead text-center">Collection deep learning models and pipelines for astrophysics applications</p>
    <div class="container">
      <hr/>
      <p class="text-center" style="font-size: 1rem; font-weight: 200;">
        Models source and details are available from <a class="text-decoration-none" href="https://github.com/nunorc/astromlp-models">astromlp-models</a>.
        <br/>
        Dataset is available from <a class="text-decoration-none" href="https://zenodo.org/record/6393488">SDSS Galaxy Subset</a>.
      </p>
    </div>
    <br/>
  </div>
  <div class="container">
    <Pipelines />
    <Models />
  </div>
</template>

<script>
import Pipelines from '@/components/Pipelines.vue'
import Models from '@/components/Models.vue'
import shared from '../shared.js'

export default {
  components: {
    Pipelines, Models
  },
  data () {
    return {
      models: shared.MODELS,
      funs: shared.FUNS,
      descs: shared.DESCS
    }
  }
}
</script>
